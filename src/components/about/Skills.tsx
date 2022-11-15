import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import * as d3 from 'd3';

import '../../assets/css/sidebar.css';
import '../../assets/css/about.css'
import { skills } from '../../content/Skills';

type MyProps = {};
type MyState = {mobile: boolean};

class Skills extends React.Component<MyProps, MyState>  {

  // private myRef: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.state = {
      mobile: window.innerWidth < 768,
    };
  }



  draw() {

    let mobile = this.state.mobile
    var width = document.getElementById('d3_container')!.clientWidth;
    var height = document.getElementById('d3_container')!.clientHeight * 0.92;

    // What happens when a circle is dragged?
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(.03).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(.03);
      d.fx = null;
      d.fy = null;
    }
    // append the svg object to the body of the page
    // d3.select("#d3_container_div").remove()
    var svg = d3.select("#d3_container_div")
      .insert("svg")
      .attr("width", width)
      .attr("height", height)

    let data = [] as any
    for (var skill_key in skills) {
      let skill = skills[skill_key];
      let circle_size: number = skill.linkedin + skill.years + skill.projects + skill.self_ass
      data.push({ "name": skill.title, "group": skill.group, "size": circle_size })
    }

    // A scale that gives a X target position for each group
    var x = d3.scaleOrdinal()
      .domain([1, 2, 4, 3])
      .range([0.30 * width, 0.50 * width, 0.70 * width, 0.90 * width])

    // A color scale
    var color = d3.scaleOrdinal()
      .domain([2, 4, 1, 3])
      .range(["#ff30d6", "#FF6E27", "#60D7F9", "#FFFFFF"])

    var g = svg.append("g")
      .attr("class", "everything");

    var nodes = g.append("g")
      .attr("class", "nodes");

    var node = nodes.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr('class', 'node');

    // Skills Circles
    node.append("circle")
      .attr("r", function (d) { return (d.size * 3 > 40 ? d.size * 3 : 40) / (mobile ? 1.3  : 1) })
      .attr("cx", 0)
      .attr("cy", 0)
      .style("fill", function (d) { return color(d.group) })
      .style("fill-opacity", 0.7)
      .attr("stroke", function (d) { return color(d.group) })
      .style("stroke-width", (mobile ? 3 : 4))

    // Skills Text
    node.append('text')
      .text(function (d) { return d.name; })
      .style("text-anchor", "middle")
      .attr("x", function (d) { return d.x })
      .attr("y", function (d) {
        let radius: number = d.size * 3 > 40 ? d.size * 2.5 : 40
        return (radius / 8.5)  / (mobile ? 1.3 : 1)
      })
      .style("font-size", function (d) {
        let radius: number = d.size * 3 > 40 ? d.size * 2.5 : 40
        return (radius / 3.5)  / (mobile ? 1.3 : 1)
      })
      .style("fill", 'white')
      .style('font-family', '"filson-pro", sans-serif')
      .style('font-weight', '400')

    // Call specific function when circle is dragged
    var drag_handler = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)

    drag_handler(node);

    // Features of the forces applied to the nodes:
    var simulation = d3.forceSimulation()
      .force("x", d3.forceX().strength(0.05).x(function (d) { return (mobile ? (height / 2) : x(d.group)) }))
      .force("y", d3.forceY().strength(0.04).y(function (d) { return (mobile ? x(d.group):(height / 2)) }))
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
      .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(.2).radius(function (d) { return (d.size * 3 > 40 ? d.size * 3 + 4 : 44) / (mobile ? 1.3 : 1) }).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
      .nodes(data)
      .on("tick", function (d) {
        node.attr('transform', function (d) {
          return 'translate(' + d.x + ', ' + d.y + ')';
        });
      });

  }


  componentDidMount() {
    this.draw();
  }

  render() {
    return (
      <Container>
      <Col className="about_skills_style" id='d3_container'>
        <div id="d3_container_div" style={{height: '92vh', width: '100%'}}></div>
      </Col>
      </Container>
    )
  }
}

export default Skills;
