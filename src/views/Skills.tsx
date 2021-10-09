import React from 'react';
import * as d3 from 'd3';
import Background from '../components/Background'
import SkillModal from '../components/SkillModal'
import { skills } from '../content/Skills'


type myState = { show: any, skill: any }
type myProps = {}

class Skill extends React.Component<myProps, myState> {
  private myRef: React.RefObject<HTMLInputElement>;
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      show: false,
      skill: {}
    }
  }

  draw() {
    const height = document.getElementById('background')!.clientHeight*0.92;
    const width = document.getElementById('background')!.clientWidth;
    d3.select(this.myRef.current)
            .append('div')
            .attr('class', 'container-fluid')
            .append('div')
            .attr('class', 'row')
            .attr('id', 'skill-svg')

    d3.xml(require("../assets/images/skills.svg"))
    .then(data => {
      d3.select('#skill-svg').node().append(data.documentElement)
      d3.select('svg')
      .attr("height", '92vh')
      .attr("width", '100%')
      .style("margin", "0 auto")

      d3.selectAll('path').style('stroke', '#ff30d6').attr('stroke-width', '3')
      d3.selectAll('font').style('color', 'white')
      d3.selectAll('g').each((d, i, el) => {
        var skill_name = el[i].getAttribute('data-class')
        if (skill_name in skills) {
          d3.select(el[i]).attr('class', 'skill')
          var x = d3.select(el[i]).select('ellipse').attr('cx')
          var y = d3.select(el[i]).select('ellipse').attr('cy')
          d3.select(el[i]).append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('text-anchor', 'middle')
            .attr('dy', '0.25em')
            .text(skills[skill_name].title)
        }
      })
      d3.selectAll('g.skill').on('mouseover', (e) => {
        d3.select(e.currentTarget).select('ellipse')
          .attr('stroke-width', '5')
          .attr('stroke', '#ff30d6')
      })
      d3.selectAll('g.skill').on('mouseout', (e) => {
        d3.select(e.currentTarget).select('ellipse')
          .attr('stroke-width', '1')
          .attr('stroke', '#000')
      })

      d3.selectAll('g.skill').on('click', (e) => {
        this.setState({
          skill: skills[e.currentTarget.getAttribute('data-class')],
          show: true
        })
      })
    })
  }

  setModalShow(val) {
    this.setState({
      show: false
    })
  }

  componentDidMount(){
    this.draw()
  }

  render() {
    return (
      <Background>
        <SkillModal show={this.state.show}
                    onHide={() => this.setModalShow(false)}
                    skill={this.state.skill}
        />
        <div ref={this.myRef}>
        </div>
      </Background>
    )
  }
}

export default Skill;


