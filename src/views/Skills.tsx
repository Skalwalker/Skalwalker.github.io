import React from 'react';
import * as d3 from 'd3';
import Background from '../components/Background'
import flare from '../flare-2.json'
import { languages_field_test } from '../content/Skills'

class Skill extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  draw() {
    const data = languages_field_test;
    const height = document.getElementById('background')!.clientHeight*0.92;
    const width = document.getElementById('background')!.clientWidth;

    const root = d3.hierarchy(data);
    const links = root.links();
    const nodes = root.descendants();
  
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(100).strength(1))
        .force("charge", d3.forceManyBody().strength(-1000))
        .force("x", d3.forceX())
        .force("y", d3.forceY());
  
    const svg = d3.select(this.myRef.current).append("svg")
                  .attr("viewBox", [ -width/2, -height/2, width, height ]);
  
    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");
  
    const node = svg.append("g")
        .attr("fill", "#fff")
        .attr("stroke", "#000")
        .attr("stroke-width", 1.5)
      .selectAll("g")
      .data(nodes)
      .join("g")
        .attr('class', 'circles')
        .attr('id', d => `circle-${d.index}`)
      .append('circle')
        .attr("fill", d => d.children ? null : "#000")
        .attr("stroke", d => d.children ? null : "#fff")
        .attr("r", 35)
        .call(this.drag(simulation))

    d3.selectAll('.circles').each( d => {
      console.log(d3.select(d))
    })

    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
      node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
    });
  
    // invalidation.then(() => simulation.stop());
  }

  drag = simulation => {
  
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.4).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }
  
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
