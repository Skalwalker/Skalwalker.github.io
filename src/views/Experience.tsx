import React from 'react';
import Background from '../components/Background'
import { Col, Container, Row } from 'react-bootstrap';
import { extra_activ, prof_educ } from '../content/Experience'
import ExtraActivity from '../components/ExtraActivity'
import ProfEdu from '../components/ProfEdu'
import * as d3 from 'd3';
import * as d3_ease from 'd3-ease';

class Experience extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;

  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  draw(svg: any) {
    var g;
    var extra_years = {}
    const height = document.getElementById('background')!.clientHeight;
    const width = document.getElementById('background')!.clientWidth;

    var exp_range = d3.scalePow().range([45, width-45]).domain([2012, 2021]).exponent(93.2411)
    console.log(exp_range)

    svg.append('line')
      .attr('x1', 0)
      .attr('y1', height/2)
      .attr('x2', width)
      .attr('y2', height/2)
      .attr('id', 'axis')
      .style('stroke-width', 10)
      .style('stroke', 'white')
    
    for (var i = 0; i < extra_activ.length; i++) {
      var current_year = extra_activ[i].start_year
      console.log(current_year)
      if (!(current_year in extra_years)) {
        extra_years[current_year] = []
        extra_years[current_year].push(extra_activ[i])
      } else {
        extra_years[current_year].push(extra_activ[i])
      }
    }

    for (var key in extra_years) {
      g = svg.append('g')
      var r = 35;
      g.attr('id', 'year' + key)
    
      g.append('rect')
        .attr('class', 'year-holder')
        .attr('x', exp_range(key)-r)
        .attr('y', height/2-r)
        .attr('width', r*2)
        .attr('height', r*2)
        .attr('rx', r)
        .attr('ry', r)
        .style('fill', 'white')
        .style('transform-origin', 'middle center')
      
      g.append('text')
        .attr("x", exp_range(key))
        .attr("y", height/2)
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .attr("font-size", "18px")
        .text(key)
    }
    // extra_years = Object.values(extra_years)
    // svg.selectAll('g').data(extra_years)
    var clicked = ""
    svg.selectAll('g')
      .on('click', (e) => {
        var g = d3.select("#" + e.currentTarget.id)
        var rect = d3.select("#" + e.currentTarget.id).select("rect")
        var text = d3.select("#" + e.currentTarget.id).select("text")
        g.raise()
        var list_exp = extra_years[e.path[1].id.match(/(\d+)/g)]
          for (var exp in list_exp) {
            g.append('rect')        
              .attr('class', 'aux-rec')
              .attr('x', rect.attr('x'))
              .attr('y', rect.attr('y'))
              .attr('width', 10)
              .attr('height', 10)
              .attr('rx', 0)
              .attr('ry', 0)
              .style('fill', 'white')
              .style('opacity', '0')
            
            g.append('text')
              .attr('class', 'aux-text')
              .attr("x", rect.attr('x'))
              .attr("y", rect.attr('y'))
              .attr("dy", ".35em")
              .style("text-anchor", "start")
              .attr("font-size", "14px")
              .style('opacity', '0')
              .style('fill', '#ff30d6')
              .text(list_exp[exp].title)
          }

          d3.selectAll('.aux-rec').data(list_exp).transition()
            .delay((d, i) => { return (i+1)*400 })
            .duration(1300)
            .style('opacity', '100')
            .attr('class', 'aux-rec-last')
            .attr('transform', (d, i) => {return `translate(${r+10}, ${-(((rect.attr('y')-60)/list_exp.length)*(i+1))})` })
            .attr('width', (d, i) => { 
              if (d.end_year === d.start_year) {
                return 10
              } else if (d.end_year == "Present") {
                return width-rect.attr('x')
              }
              return exp_range(d.end_year)-rect.attr('x')-10
            })

          d3.selectAll('.aux-text').transition()
            .delay((d, i) => {return (i+1)*400 })
            .duration(1300)
            .style('opacity', '100')
            .style('fill', '#ffffff')
            .attr('class', 'aux-text-last')
            .attr('transform', (d, i) => {return `translate(${r+10}, ${-(((rect.attr('y')-50)/list_exp.length)*(i+1))})` })

          // d3.selectAll('.year-holder').transition()
          //   .delay((d, i) => {return (i+1)*400 })
          //   .duration(1300)
          //   .attr('transform', "translate(10, 10)")
          //   .attr('height', 50)
          //   .attr('width', 50)

          text.transition()
            .duration(1000)
            .style("fill", "#ffffff")
            .style("opacity", "100")
            .attr("font-size", "25px")

          text.transition()
            .duration(400)
            .delay(600)
            .attr("transform", `translate(${r}, ${-(((rect.attr('y'))/list_exp.length)*(list_exp.length))-18})`)
            .attr("class", "text-last")

          rect.transition('height')
            .delay(0)
            .duration(1300)
            .attr('class', 'rect-last')
            .attr('rx', 0)
            .attr('ry', 0)
            .attr('height', height)
            .attr('width', 5)
            .attr('transform', `translate(${r},${-(height/2-r)})`)

          if (clicked != e.path[1].id || clicked != ""){
            d3.selectAll('.aux-rec-last').transition()
              .delay((d, i) => {return (i+1)*200 })
              .duration(300)
              .style('opacity', '0')
              .attr('transform', (d, i) => {
                return "translate(0, 0)" 
              })
              .attr('width', '10')
            
            d3.selectAll('.aux-text-last').transition()
              .delay((d, i) => {return (i+1)*200 })
              .duration(400)
              .style('opacity', '0')
              .attr('transform', (d, i) => {return `translate(${r}, ${r})` })

            d3.selectAll('.text-last').transition()
              .duration(400)
              .delay(700)
              .attr("font-size", "18px")
              .style("fill", "#000000")
              .attr("transform", "translate(0, 0)")
              .attr("class", "")

            d3.selectAll('.rect-last').transition()
              .delay(300)
              .duration(400)
              .attr('class', '')
              .attr('rx', r)
              .attr('ry', r)
              .attr('height', r*2)
              .attr('width', r*2)
              .attr('transform', `translate(0, 0)`)
          }
        clicked = e.path[1].id;
      })
  }

  componentDidMount(){
    const height = document.getElementById('background')!.clientHeight;
    const width = document.getElementById('background')!.clientWidth;

    let svg = d3.select(this.myRef.current)
                .append('svg')
                .attr('width', width)
                .attr('height', height);

    this.draw(svg)
}

  render() {
    return (
      <Background>
        <div ref={this.myRef}>
        </div>
      </Background>
    );
  }
}

export default Experience;


// class Experience extends React.Component {
//   render() {
//     return (
//     <Background>
//         <Container fluid style={{height: '92vh'}}>
//           <Row style={{height: '15vh'}}>
//             <Col md={3} className="my-auto">
//               <h1 style={{color: 'white'}}>Extra <br />Activities</h1>
//             </Col>
//           </Row>
//           <Row style={{height: '30vh'}}>
//             {extra_activ.map((extra, index) => {
//               if (index+1) {
//                 return (
//                   <ExtraActivity title={extra.title}
//                                 year={extra.start_year}
//                                 span={1}
//                                 offset={0}/>)
//               } else {
//                 return (null)
//               }
//             })}
//           </Row>
//           <Row style={{height: '2vh', backgroundColor: 'white'}}>
//             <Col xs={12}>
//             </Col>
//           </Row>
//           <Row style={{height: '30vh'}}>
//             {prof_educ.map((prof, index) => {
//               if (index+1) {
//               return (
//                 <ProfEdu title={prof.title}
//                          year={prof.start_year}
//                          span={1}
//                          offset={0}/>
//               )} else {
//                 return (null)
//               }
//             })}
//           </Row>
//           <Row style={{height: '15vh'}}>
//             <Col md={3} className="my-auto">
//               <h1 style={{color: 'white'}}>Professional <br /> & Education</h1>
//             </Col>
//           </Row>
//         </Container>
//     </Background>
//     )
//   }
// }

// export default Experience;
