import React from 'react';
import * as d3 from 'd3';
import Background from '../components/Background'
import { languages_field } from '../content/Skills'

class Skill extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  draw() {
    
    const data = languages_field
    const height = document.getElementById('background')!.clientHeight*0.92;
    const width = document.getElementById('background')!.clientWidth;
    var svg = d3.select(this.myRef.current)
            .append('svg')
            .attr( 'preserveAspectRatio',"xMinYMin meet")
            .attr("viewBox", [0, 0, width, height])
            .append('g')
            // .attr( 'preserveAspectRatio',"xMinYMin meet")
            // .attr("viewBox", [-width / 2, -height / 2, width, height])
            // .attr('width', '100%')
            // .attr('transform', `translate(${width/2}, ${height/2})`)

    d3.xml(require("../assets/images/skills.svg"))
    .then(data => {
      d3.select('g').node().append(data.documentElement)
      d3.selectAll('path').style('stroke', '#ff30d6')
      console.log(d3.selectAll('g'))
      d3.selectAll('g').each((d, i, el) => {
        console.log(el[i].hasAttribute('data-class'))
      })
    })
  
  //   const data = languages_field_test;
    // const height = document.getElementById('background')!.clientHeight*0.92;
    // const width = document.getElementById('background')!.clientWidth;

  //   const dynamic_r = Math.min(height, width)/3

  //   var svg = d3.select(this.myRef.current)
  //               .append('svg')
  //               .attr('width', width)
  //               .attr('height', height)
  //               .append('g')
  //               .attr('transform', `translate(${width/2}, ${height/2})`)

  //   svg.append('circle')
  //       .attr('cx', 0)
  //       .attr('cy', 0)
  //       .attr('r', dynamic_r)
  //       .attr('fill', '#fff')
  //       .attr('fill-opacity', 0.0)
  //       .attr('stroke', '#ddd')

  //   var markers = svg.append('g').attr('class', 'markers')

  //   var data_ext = d3.range(4)
  //   var scale = d3.scaleLinear().domain(d3.extent(data_ext)).range([0, 2 * Math.PI])

  //   var sel = markers.selectAll('circle').data(data_ext)
  //   sel.enter().append('circle')
  //   .merge(sel)
  //     .attr('r', dynamic_r/2)
  //     .attr('class', 'group-circles')
  //     .attr('cy', function(d,i) { return Math.cos(scale(d)) * -dynamic_r })
  //     .attr('cx', function(d,i) { return Math.sin(scale(d)) * dynamic_r })
  //     .attr('stroke', '#ddd')
  //     .style('fill-opacity', 0.0)
  //   sel.exit().remove()

  //   const root = d3.hierarchy(data);
  //   const links = root.links();
  //   const nodes = root.descendants();

  //   var group_circles = d3.selectAll('.group-circles')

  //   console.log(group_circles.datum())

  //   const isolate = (force: any, filter: any) => {
  //     var initialize = force.initialize;
  //     force.initialize = function() { initialize.call(force, nodes.filter(filter)); };

  //     return force;
  //   }

  //   const simulation = d3.forceSimulation(nodes)
  //       .force('link', d3.forceLink(links).id(d => d.id).distance(dynamic_r*0.2).strength(1))
  //       .force('charge', d3.forceManyBody().strength(-dynamic_r*5))
  //       // .force('x', d3.forceX())
  //       // .force('y', d3.forceY())
  //       .force('x-i', isolate(d3.forceX(0), function(d) { return d.data.group === 'machine_learning'; }))
  //       .force('y-i', isolate(d3.forceY(-297.16), function(d) { return d.data.group === 'machine_learning'; }))
  //       // .force('center', d3.forceCenter())
  //       // .force('machine-learning', d3.forceCenter(isolate(d3.forceCenter(), function(d) { return d.group === 'machine_learning'; })))
  
  //   const link = svg.append('g')
  //     .selectAll('line')
  //     .data(links)
  //     .enter().append('line')
  //     .attr('stroke', '#999')
  //     .attr('stroke-opacity', 0.6);
  
  //   const node = svg.append('g')
  //     .attr('class', 'nodes')
  //     .selectAll('g')
  //     .data(nodes)
  //     .enter()
  //     .append('g')
  //     .call(this.drag(simulation))

  //   const circles = node.append('circle')
  //     .attr('fill', '#fff')
  //     .attr('stroke', '#000')
  //     .attr('stroke-width', 1.5)
  //     .attr('r', dynamic_r/10)
  //     .attr('fill', d => d.children ? '#fff' : '#000')
  //     .attr('stroke', d => d.children ? null : '#fff')

  //   const labels = node.append('text')
  //       .text(function(d) {
  //         return d.data.name;
  //       })
  //       .attr('x', 0)
  //       .attr('y', 0)
  //       .style('fill', d => d.children ? '#000' : '#fff')
  //       .attr('dy', '.35em')

  //   simulation.on('tick', () => {
  //     link
  //         .attr('x1', d => d.source.x)
  //         .attr('y1', d => d.source.y)
  //         .attr('x2', d => d.target.x)
  //         .attr('y2', d => d.target.y);
  
  //     node.selectAll('circle')
  //         .attr('cx', d => d.x)
  //         .attr('cy', d => d.y);
      
  //     node.selectAll('text')
  //         .attr('x', d => d.x-15)
  //         .attr('y', d => d.y);
  //   });
  
  //   // invalidation.then(() => simulation.stop());
  }

  // drag = simulation => {
  
  //   function dragstarted(event, d) {
  //     if (!event.active) simulation.alphaTarget(0.4).restart();
  //     d.fx = d.x;
  //     d.fy = d.y;
  //   }
    
  //   function dragged(event, d) {
  //     d.fx = event.x;
  //     d.fy = event.y;
  //   }
    
  //   function dragended(event, d) {
  //     if (!event.active) simulation.alphaTarget(0);
  //     d.fx = null;
  //     d.fy = null;
  //   }
    
  //   return d3.drag()
  //       .on('start', dragstarted)
  //       .on('drag', dragged)
  //       .on('end', dragended);
  // }
  
  componentDidMount(){
    this.draw()
  }

  render() {
    return (
      <Background>
        <div ref={this.myRef}>
        </div>
      </Background>
    )
  }
}

export default Skill;
