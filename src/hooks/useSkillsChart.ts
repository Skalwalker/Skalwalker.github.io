import * as d3 from 'd3';
import { useCallback, useEffect, useRef, type RefObject } from 'react';

import { useIsMobile } from './useIsMobile';
import { skills } from '../content/Skills';

interface SkillNode extends d3.SimulationNodeDatum {
  name: string;
  group: number;
  size: number;
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

      const skillData: SkillNode[] = Object.values(skills).map((skill) => ({
        name: skill.title,
        group: skill.group,
        size: skill.linkedin + skill.years + skill.projects + skill.self_ass,
      }));

      const svg = d3.select(container).append('svg').attr('width', width).attr('height', height);

      const x = d3
        .scaleOrdinal<number, number>()
        .domain([1, 2, 4, 3])
        .range([0.3 * width, 0.5 * width, 0.7 * width, 0.9 * width]);

      const color = d3
        .scaleOrdinal<number, string>()
        .domain([2, 4, 1, 3])
        .range(['#ff30d6', '#FF6E27', '#60D7F9', '#FFFFFF']);

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

      const dragstarted = (
        event: d3.D3DragEvent<SVGGElement, SkillNode, SkillNode>,
        d: SkillNode
      ): void => {
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

      const dragended = (
        event: d3.D3DragEvent<SVGGElement, SkillNode, SkillNode>,
        d: SkillNode
      ): void => {
        if (event.active === 0) simulation.alphaTarget(0.03);
        d.fx = null;
        d.fy = null;
      };

      const dragBehavior = d3
        .drag<SVGGElement, SkillNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);

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
