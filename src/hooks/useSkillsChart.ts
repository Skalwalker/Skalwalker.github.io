import * as d3 from 'd3';
import { useCallback, useEffect, useRef, type RefObject } from 'react';

import { useIsMobile } from './useIsMobile';
import { skills } from '../content';

interface SkillNode extends d3.SimulationNodeDatum {
  name: string;
  group: number;
  size: number;
  desc?: string;
}

const MOBILE_SCALE_FACTOR = 1.3;

export const useSkillsChart = (): RefObject<HTMLDivElement | null> => {
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<SkillNode, undefined> | null>(null);
  const isMobile = useIsMobile();

  const draw = useCallback(
    (width: number, height: number): void => {
      const container = containerRef.current;
      if (!container) return;

      simulationRef.current?.stop();
      d3.select(container).selectAll('svg').remove();

      const scaleFactor = isMobile ? MOBILE_SCALE_FACTOR : 1;
      const strokeWidth = isMobile ? 3 : 4;
      const baseSize = isMobile ? 1 : 3;

      const skillData: SkillNode[] = skills.map((skill) => ({
        name: skill.title,
        group: skill.group,
        size: baseSize + skill.years + skill.projects + skill.selfEval,
        desc: skill.desc,
      }));

      d3.select(container).selectAll('.skill-tooltip').remove();
      const tooltip = d3
        .select(container)
        .append('div')
        .attr('class', 'skill-tooltip')
        .style('position', 'absolute')
        .style('pointer-events', 'none')
        .style('color', 'white')
        .style('padding', '10px 14px')
        .style('border-radius', '8px')
        .style('font-size', '13px')
        .style('font-family', '"objektiv-mk1", sans-serif')
        .style('font-weight', '200')
        .style('line-height', '1.5')
        .style('white-space', 'pre-line')
        .style('max-width', '220px')
        .style('opacity', 0)
        .style('transition', 'opacity 0.15s ease')
        .style('z-index', '10');

      let isDragging = false;

      const svg = d3.select(container).append('svg').attr('width', width).attr('height', height);

      const x = d3
        .scaleOrdinal<number, number>()
        .domain([1, 2, 3, 4])
        .range([0.2 * width, 0.4 * width, 0.6 * width, 0.8 * width]);

      const color = d3
        .scaleOrdinal<number, string>()
        .domain([1, 2, 3, 4])
        .range(['#60D7F9', '#ff30d6', '#FFFFFF', '#FF6E27']);

      const g = svg.append('g').attr('class', 'everything');
      const nodesGroup = g.append('g').attr('class', 'nodes');
      const node = nodesGroup
        .selectAll<SVGGElement, SkillNode>('g')
        .data(skillData)
        .enter()
        .append('g')
        .attr('class', 'node');

      // Skills circles
      node
        .append('circle')
        .attr('r', (d) => (d.size * 3 > 40 ? d.size * 3 : 40) / scaleFactor)
        .attr('cx', 0)
        .attr('cy', 0)
        .style('fill', (d) => color(d.group))
        .style('fill-opacity', 0.7)
        .attr('stroke', (d) => color(d.group))
        .style('stroke-width', strokeWidth);

      // Skills labels
      node
        .append('text')
        .text((d) => d.name)
        .style('text-anchor', 'middle')
        .attr('x', 0)
        .attr('y', (d) => {
          const radius = d.size * 3 > 40 ? d.size * 2.5 : 40;
          return radius / 8.5 / scaleFactor;
        })
        .style('font-size', (d) => {
          const radius = d.size * 3 > 40 ? d.size * 2.5 : 40;
          return radius / 3.5 / scaleFactor;
        })
        .style('fill', 'white')
        .style('font-family', '"filson-pro", sans-serif')
        .style('font-weight', '400');

      const simulation = d3
        .forceSimulation<SkillNode>()
        .force(
          'x',
          d3
            .forceX<SkillNode>()
            .strength(0.05)
            .x((d) => (isMobile ? height / 2 : x(d.group)))
        )
        .force(
          'y',
          d3
            .forceY<SkillNode>()
            .strength(0.04)
            .y((d) => (isMobile ? x(d.group) : height / 2))
        )
        .force(
          'center',
          d3
            .forceCenter<SkillNode>()
            .x(width / 2)
            .y(height / 2)
        )
        .force('charge', d3.forceManyBody<SkillNode>().strength(1))
        .force(
          'collide',
          d3
            .forceCollide<SkillNode>()
            .strength(0.2)
            .radius((d) => (d.size * 3 > 40 ? d.size * 3 + 4 : 44) / scaleFactor)
            .iterations(1)
        );

      simulationRef.current = simulation;

      const showTooltip = (_event: MouseEvent | TouchEvent, d: SkillNode): void => {
        if (isDragging || d.desc === undefined) return;
        const bubbleX = d.x ?? 0;
        const bubbleY = d.y ?? 0;
        const radius = (d.size * 3 > 40 ? d.size * 3 : 40) / scaleFactor;
        const gap = 8;
        const tooltipColor = d3
          .scaleOrdinal<number, string>()
          .domain([1, 2, 3, 4])
          .range(['#5595B4', '#A73698', '#B7B8BC', '#A9522B']);
        const tooltipBg = tooltipColor(d.group);
        const textColor = d.group === 3 ? '#1a1a1a' : 'white';
        tooltip
          .html(d.desc)
          .style('background', tooltipBg)
          .style('color', textColor)
          .style('opacity', 1);

        const tooltipNode = tooltip.node();
        if (tooltipNode === null) return;
        const tooltipRect = tooltipNode.getBoundingClientRect();
        const tw = tooltipRect.width;
        const th = tooltipRect.height;

        let tooltipX = bubbleX - tw / 2;
        let tooltipY = bubbleY + radius + gap;

        if (tooltipY + th > height) {
          tooltipY = bubbleY - radius - gap - th;
        }

        if (tooltipX + tw > width) {
          tooltipX = bubbleX + radius + gap;
          tooltipY = bubbleY - th / 2;
        }

        if (tooltipX < 0) {
          tooltipX = bubbleX + radius + gap;
          tooltipY = bubbleY - th / 2;
        }

        tooltip.style('left', `${String(tooltipX)}px`).style('top', `${String(tooltipY)}px`);
      };

      const hideTooltip = (): void => {
        tooltip.style('opacity', 0);
      };

      node
        .on('mouseenter', (event: MouseEvent, d: SkillNode) => {
          showTooltip(event, d);
        })
        .on('mouseleave', hideTooltip);

      if (isMobile) {
        node.on('touchstart', (event: TouchEvent, d: SkillNode) => {
          showTooltip(event, d);
        });
        node.on('touchend', hideTooltip);
      }

      const dragStarted = (
        event: d3.D3DragEvent<SVGGElement, SkillNode, SkillNode>,
        d: SkillNode
      ): void => {
        isDragging = true;
        hideTooltip();
        if (event.active === 0) simulation.alphaTarget(0.03).restart();
        d.fx = d.x;
        d.fy = d.y;
      };

      const dragged = (
        event: d3.D3DragEvent<SVGGElement, SkillNode, SkillNode>,
        d: SkillNode
      ): void => {
        d.fx = event.x;
        d.fy = event.y;
      };

      const dragEnded = (
        event: d3.D3DragEvent<SVGGElement, SkillNode, SkillNode>,
        d: SkillNode
      ): void => {
        isDragging = false;
        if (event.active === 0) simulation.alphaTarget(0.03);
        d.fx = null;
        d.fy = null;
      };

      const dragBehavior = d3
        .drag<SVGGElement, SkillNode>()
        .on('start', dragStarted)
        .on('drag', dragged)
        .on('end', dragEnded);

      dragBehavior(node);

      simulation.nodes(skillData).on('tick', () => {
        node.attr('transform', (d) => {
          const r = (d.size * 3 > 40 ? d.size * 3 : 40) / scaleFactor + strokeWidth / 2;
          d.x = Math.max(r, Math.min(width - r, d.x ?? 0));
          d.y = Math.max(r, Math.min(height - r, d.y ?? 0));
          return `translate(${String(d.x)}, ${String(d.y)})`;
        });
      });
    },
    [isMobile]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let pendingWidth = 0;
    let pendingHeight = 0;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        pendingWidth = entry.contentRect.width;
        pendingHeight = entry.contentRect.height;
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        draw(pendingWidth, pendingHeight);
      }, 150);
    });

    observer.observe(el);

    return (): void => {
      clearTimeout(timeoutId);
      observer.disconnect();
      simulationRef.current?.stop();
    };
  }, [draw]);

  return containerRef;
};
