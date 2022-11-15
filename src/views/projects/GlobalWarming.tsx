import React from 'react';

import ProjectPageContainer from '../../components/projects/ProjectPageContainer';
import ProjectSection from '../../components/projects/ProjectSection';
import ProjectParagraph from '../../components/projects/ProjectParagraph';
import {project} from '../../content/Projects';


import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';


import '../../assets/css/font.css'
import '../../assets/css/tabs.css'
import '../../assets/css/projects.css'


class GlobalWarming extends React.Component {

    render() {
        const page_project = project.projects["globalwarming"]
        const footer_info = [
                {
                    heading: "Project Info",
                    desc: "Developed in Master's Degree Course - Simulations - 2022"
                },
                {
                    heading: "Footnotes",
                    desc: "1.\tNet zero is a scientific concept that conveys that there is a finite budget of carbon dioxide that is allowed into the atmosphere, alongside other greenhouse gases and beyond this budget, any further release must be balanced by removal into sinks.\n\n2.\tSuch as tree-nation.com\n\n3.\tYou can find a complete list of this project's simplifications and assumptions in the paper."
                },
                {
                    heading: "References",
                    desc: "[1]\tP. Shukla, J. Skea, R. Slade, A. Al Khourdajie, R. van Diemen, D. McCollum, M. Pathak, S. Some, P. Vyas, R. Fradera et al., “Climate change 2022: Mitigation of climate change. contribution of working group iii to the sixth assessment report of the intergovernmental panel on climate change,” 2021.\n\n[2]\tD. Pandey, M. Agrawal, and J. S. Pandey, “Carbon footprint: current methods of estimation,” Environmental monitoring and assessment, vol. 178, no. 1, pp. 135-160, 2011.\n\n[3]\tK. Jacob, “Forests change the climate,” 2020.\n\n[4]\tFAO, “Global forest resources assessment 2020: Main report. rome,” 2020.\n\n[5]\tD. Rind, “Complexity and climate,” science, vol. 284, no. 5411, pp. 105-107, 1999\n\n[6]\tS. Rahmstorf and E. Zedillo, “Anthropogenic climate change: Revisiting the facts,” in Global Warming: Looking Beyond Kyoto. Brookings Institution Press, 2008, pp. 34-53."
                },


            ]
     return(
        <ProjectPageContainer project={page_project} footer={footer_info}>
            <ProjectSection key="intro-header" id="intro-header" title="Introduction" first={true}>
                <ProjectParagraph>
                    During the past five decades, the Earth's average temperature has been increasing at a high rate [1], and one of the causes are  CO<sub>2</sub> emissions [2]. The Intergovernmental Panel on Climate Change (IPCC) has strongly recommended limiting the increase in global temperature below 2<sup>o</sup> C as compared to the pre-industrial level to avoid severe ecological and economic threats [2]. Therefore, understanding future climatic conditions and situations is the basis for the world countries to develop mitigation strategies.
                </ProjectParagraph>
                <ProjectParagraph>
                    A helpful tool the world has to fight climate change is our forests. Forests can remove large amounts of CO<sub>2</sub> from the atmosphere [3]. Researchers at ETH Zurich have even calculated that large-scale afforestation could help solve the climate problem [3]. However, around 10 million hectares of forest are lost every year [4]. Recently, the concept of Net Zero<sup>1</sup> has become popular, and with such, multiple environmental companies<sup>2</sup> are offering services to help people and companies offset their CO<sub>2</sub> emissions.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="dev-header" id="dev-header" title="Overview">
                <ProjectParagraph>
                    With this scenario in mind, I developed a simulator of global warming concerning CO<sub>2</sub> emissions and forest area net changes. The system implementation considers a multi-method model: an agent-based and a system dynamics method. The world is modeled as a set of agents, each being a country. Each country has its own CO<sub>2</sub> yearly emission values, CO<sub>2</sub> concentration, forest area net change, and forest size, based on their historical trends. The simulator aims at studying the proposed relationship to answer the following <b>research questions:</b>
                </ProjectParagraph>
                    <ResearchQuestions/>
                <ProjectParagraph>
                    Real global warming considers an incredible amount of latent variables and uncertainties [5]. Thus, simulating a complex system requires some basic assumptions and simplifications. With such simplifications, we can focus on feasible system elements. Therefore this simulation model focus on understanding only the relationship between CO<sub>2</sub>, forest area net change, and global temperature while adding the complexity of the country's individualization.<sup>3</sup>
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="feature-header" id="features-header" title="Model Implementation">
                <ProjectParagraph>
                    The interactive simulation below shows the main view of the simulation screen. The view represents the world map, with each country's forest area net change colored from the given scale. The simulation view also allows for a global visualization of CO<sub>2</sub> emissions. On the bottom, three plots are displayed: the world's forest area net change, the current Global Surface Temperature (GST), and the World emissions. On the bottom left are two slides to configure the two key simulation parameters: climate sensitivity and forest capture values. Additionally, on the top left is a country selector, which allows viewing the desired country and understanding its impact on the world system.
                </ProjectParagraph>
                <Container className="w-100 mt-3 mb-3">
                    <iframe title="GlobalWarmingSimulation" className="w-100 global_warming_frame"
                        allow="fullscreen" src="https://cloud.anylogic.com/assets/embed?modelId=b637dd80-0c8a-4411-a006-f9fedadddd96"></iframe>
                </Container>
                <ProjectParagraph>
                    On a deeper view of the key system parameters, climate sensitivity is a term created by the Intergovernmental Panel on Climate Change (IPCC) to describe how much warmer the GST will get if the number of greenhouse gases in the atmosphere doubles [1]. Researchers estimate that this parameter lies between 2 to 5 times [6]. Additionally, forest capture values are also not set in stone. Environmental scientists estimate that the forest contribution to reducing CO<sub>2</sub> emissions is about 2.8 to 4.9 tons per hectare per year [3].
                </ProjectParagraph>
                <DynamicsAccordion/>
            </ProjectSection>
            <ProjectSection key="eval-header" id="eval-header" title="Methodology">
                <ProjectParagraph>
                    Considering that the model is highly stochastic with hundreds of random variables from the countries, the examination was carried out by analyzing 3 "what-if'" scenarios in Monte Carlo experimentation with 100 replications. In the worst-case scenario, the climate sensitivity is the highest, and the forest capture is the lowest. In the best-case scenario, its configuration is opposite from the worst-case. Finally, the most probable scenario, the sensitivity and forest capture values are set to those that literature [6, 3] believe to be most probable.
                </ProjectParagraph>
                <ProjectParagraph>
                    All experiments were developed with the 2015 initial values and considered the same year for the initial moment of the simulation. The experiments also considered 100 years of development.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="exp-header" id="exp-header" title="Experimental Results">
                <ProjectParagraph>
                    Plots were generated and curated to analyze the experiments and answer our research questions. I selected a box plot to answer RQ1 since its shape allows the study of the results minimum, first quartile, median, third quartile, and maximum. On the other hand, to answer RQ2 and RQ3, a density plot was selected, allowing visualization of the range and slope in which the result was shaped. The figure set below illustrates the worst-case, best-case, and likely-case results.
                </ProjectParagraph>
                <ResultsTabs/>
                <ProjectParagraph>
                    Availing the granularity of the country agent-based modeling and answering RQ4, I analyzed the likely scenario to identify the most troublesome countries for the environment. The metric used to identify problematic countries was their Net Zero status. Results showed a strong pattern; within 100 Monte Carlo simulations, the same result is always shown: the United States is the worst country, followed by India, Russia, Japan, and China.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="conc-header" id="conc-header" title="Conclusion">
                <ProjectParagraph>
                    Results indicate that the world will reach the 15.8<sup>o</sup> C temperature recommendation in 2042 in the worst case, 2099 in the best case, and 2064 in the most likely case. Additionally, in 100 years, we expect the global CO<sub>2</sub> concentration in the atmosphere to be around 650 ppm and the global temperature to hit 16.738<sup>o</sup> C in the most likely case. Forest area is expected to decrease by 500.000ha in 100 years, one octave of the current forest area.
                </ProjectParagraph>
                <ProjectParagraph>
                    Future work could explore the tendencies of the countries in adhering to the Paris Agreement, thus trying to reduce the amount of  CO<sub>2</sub> generated and increase the forest size. A good approach suitable to the agent-based paradigm would be to consider using reinforcement learning techniques to devise environmentally friendly policies for each country.
                </ProjectParagraph>
            </ProjectSection>

        </ProjectPageContainer>
     )
    }
}

export default GlobalWarming;



function ResultsTabs() {
    return (
    <Container>
      <Tabs
        defaultActiveKey="best_case"
        id="uncontrolled-tab-example"
        className="mt-1 mb-3 w-100 subtitle"
        fill
      >
        <Tab eventKey="best_case" title="Best Case" className="w-100 text-center">
                <ProjectParagraph>
                    In the best-case scenario, we observe the highest minimum year of temperature surpasses 2101, while the median and the first quartile are the same, 2099, meaning that this year is the most probable in the best-case scenario. At the end of the 100 years, the expected temperature will hit 15.968<sup>o</sup> C (&plusmn; 0.011),  0.168 above the limit. Also, the worst case CO<sub>2</sub> density is expected at 629.934 ppm (&plusmn; 2.333).
                </ProjectParagraph>
                <Figure className="mx-auto">
                    <Row className="mx-auto">
                        <Col md={6} sm={12}>
                            <Figure.Image
                                className='proper_img_size'
                                style={{backgroundColor: 'white'}}
                                alt="Temperature density over 100 years"
                                src={require('../../assets/images/projects/globalwarming/exps/e3/temp.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Temperature density over 100 years
                            </Figure.Caption>
                        </Col>
                        <Col md={6} sm={12}>
                            <Figure.Image
                                className='proper_img_size'
                                style={{backgroundColor: 'white'}}
                                alt="CO2 density over 100 years"
                                src={require('../../assets/images/projects/globalwarming/exps/e3/co2.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                CO<sub>2</sub> density over 100 years
                            </Figure.Caption>
                        </Col>
                    </Row>
                </Figure>
                <Figure className="mx-auto">
                <Figure.Image
                    className='proper_img_size_3'
                    style={{backgroundColor: 'white'}}
                    alt="Year temperature exceeds recommended"
                    src={require('../../assets/images/projects/globalwarming/exps/e3/year.png').default}
                />
                <Figure.Caption className="paragraph">
                    Year temperature exceeds recommended
                </Figure.Caption>
            </Figure>
        </Tab>
        <Tab eventKey="likely_case" title="Likely Case" className="w-100 text-center">
            <ProjectParagraph>
                In the most likely scenario, the temperature excess year has a minimum in 2062 and a maximum in 2066, while the median and the third quartile are the same, 2064, meaning that this year is the most probable in the best-case scenario. At the end of the 100 years, the expected temperature will hit 16.738<sup>o</sup> C (&plusmn; 0.015),  0.938 above the limit. Also, the worst case CO<sub>2</sub> density is expected at 646.292 ppm (&plusmn; 2.16).
            </ProjectParagraph>
            <Figure className="mx-auto">
                <Row className="mx-auto">
                    <Col md={6} sm={12}>
                        <Figure.Image
                            className='proper_img_size'
                            style={{backgroundColor: 'white'}}
                            alt="Temperature density over 100 years"
                            src={require('../../assets/images/projects/globalwarming/exps/e4/temp.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Temperature density over 100 years
                        </Figure.Caption>
                    </Col>
                    <Col md={6} sm={12}>
                        <Figure.Image
                            className='proper_img_size'
                            style={{backgroundColor: 'white'}}
                            alt="CO2 density over 100 years"
                            src={require('../../assets/images/projects/globalwarming/exps/e4/co2.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            CO<sub>2</sub> density over 100 years
                        </Figure.Caption>
                    </Col>
                </Row>
            </Figure>
            <Figure className="mx-auto">
                <Figure.Image
                    className='proper_img_size_3'
                    style={{backgroundColor: 'white'}}
                    alt="Year temperature exceeds recommended"
                    src={require('../../assets/images/projects/globalwarming/exps/e4/year.png').default}
                />
                <Figure.Caption className="paragraph">
                    Year temperature exceeds recommended
                </Figure.Caption>
            </Figure>
        </Tab>
        <Tab eventKey="worst_case" title="Worst Case" className="w-100 text-center">
            <ProjectParagraph>
            In the worst-case scenario, we observe the lowest minimum year of temperature surpasses 2040, while the median and the third quartile are the same, 2042, meaning that this year is the most probable in the worst-case scenario. At the end of the 100 years, the expected temperature will hit 18.226<sup>o</sup> C (&plusmn; 0.024), 2.426 above the limit. Also, the worst case CO<sub>2</sub> density is expected at 654.875 ppm (&plusmn; 2.167).
            </ProjectParagraph>
            <Figure className="mx-auto">
                <Row className="mx-auto">
                    <Col md={6} sm={12}>
                        <Figure.Image
                            className='proper_img_size'
                            style={{backgroundColor: 'white'}}
                            alt="Temperature density over 100 years"
                            src={require('../../assets/images/projects/globalwarming/exps/e2/temp.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Temperature density over 100 years
                        </Figure.Caption>
                    </Col>
                    <Col md={6} sm={12}>
                        <Figure.Image
                            className='proper_img_size'
                            style={{backgroundColor: 'white'}}
                            alt="CO2 density over 100 years"
                            src={require('../../assets/images/projects/globalwarming/exps/e2/co2.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            CO<sub>2</sub> density over 100 years
                        </Figure.Caption>
                    </Col>
                </Row>
            </Figure>
            <Figure className="mx-auto">
                <Figure.Image
                    className='proper_img_size_3'
                    style={{backgroundColor: 'white'}}
                    alt="Year temperature exceeds recommended"
                    src={require('../../assets/images/projects/globalwarming/exps/e2/year.png').default}
                />
                <Figure.Caption className="paragraph">
                    Year temperature exceeds recommended
                </Figure.Caption>
            </Figure>
        </Tab>
      </Tabs>
      </Container>
    );
}

function DynamicsAccordion() {
    return (
      <Container className='mt-3 mb-3'>
      <Accordion defaultActiveKey="0" style={{color: 'var(--bs-white)'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header as='h3'>Global Dynamics</Accordion.Header>
          <Accordion.Body className= "text-left">
              <ProjectParagraph>
                The figure below describes the system dynamics of the world, relating the world CO<sub>2</sub> concentration and the GST. The initial global CO<sub>2</sub> stock has an output flow of a 0.1% yearly global dissipation. After its output flow dissipation, the initial global CO<sub>2</sub> stock is added with the total amount of CO<sub>2</sub> emitted by every country in that year (deduced by their forest absorption), generating the current global CO<sub>2</sub>. Additionally, a variable is created to track the previous global CO<sub>2</sub> concentration, which is further used to calculate the global temperature.
              </ProjectParagraph>
              <Container className="mx-auto text-center">
              <Figure>
                  <Figure.Image
                  className='w-80'
                      style={{width: '60%', backgroundColor: 'white'}}
                      src={require('../../assets/images/projects/globalwarming/global_dynamics.png').default}
                  />
              </Figure>
              </Container>
              <ProjectParagraph>
                The following year's global temperature is calculated using the current year's temperature with an addition of the log difference in carbon concentration multiplied by the climate sensitivity constant.
              </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header as='h3'>Agent's Forest Size Dynamics</Accordion.Header>
          <Accordion.Body className= "text-left">
              <ProjectParagraph>
                Each country has a forest, whether increasing or decreasing in size. In the way that I modeled the system, the country's forest is responsible for deducting the country's CO<sub>2</sub> emissions. Thus, each country is independently responsible for balancing its emissions with its forest area absorption. The figure below represents the system dynamics of a country forest. Each country starts with its respective stock forest area using a historically based initial size.
              </ProjectParagraph>
              <Figure className="mx-auto text-center">
                      <Figure.Image
                      className='w-80'
                          style={{width: '80%', backgroundColor: 'white'}}
                          src={require('../../assets/images/projects/globalwarming/forest_dynamics.png').default}
                      />
                </Figure>
                <ProjectParagraph>
                    As the simulation develops, a current forest area net change is sampled each year from a normal distribution shaped by the country's historical mean and standard deviation of change. This sampled value can either be positive or negative, representing an input or output flow of the country's forest. Therefore the forest area stock is constantly changing.
                </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header as='h3'>Agent's CO2 Dynamics</Accordion.Header>
          <Accordion.Body className= "text-left">
              <ProjectParagraph>
                Regardless of how ecofriendly a country might be, they are continually generating CO<sub>2</sub>, whether by their population's daily life or industrial activity. The figure below illustrates how each country's  CO<sub>2</sub> concentration is generated.
              </ProjectParagraph>
              <Figure className="mx-auto text-center">
                  <Figure.Image
                  className='w-90'
                      style={{width: '90%', backgroundColor: 'white'}}
                      src={require('../../assets/images/projects/globalwarming/co2_dynamics.png').default}
                  />
              </Figure>
              <ProjectParagraph>
                Each country starts with a CO<sub>2</sub> stock, and this value increases (or decreases) as the simulation develops. Each country's emission values are sampled from a left-bounded normal distribution that uses the country's historical emission mean and standard deviation to define its shape. The CO<sub>2</sub> input flow deduces the oceanic absorption from the country's emission before changing the country-generated concentration. Furthermore, the country CO<sub>2</sub> concentration has two output flows, atmospheric dissipation and the absorption by the country's forests.
              </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    )
}

function ResearchQuestions() {
    return (
        <Container>
            <Card className="subtitle_bold my-3">
                <Card.Body>
                    RQ1 - In what year does the world average temperature surpass the recommended temperature limit?
                </Card.Body>
            </Card>
            <Card className="subtitle_bold my-3">
                <Card.Body>
                    RQ2 - How will the world temperature change over 100 years?
                </Card.Body>
            </Card>
            <Card className="subtitle_bold my-3">
                <Card.Body>
                    RQ3 - How do the global CO<sub>2</sub> emissions change over 100 years?
                </Card.Body>
            </Card>
            <Card className="subtitle_bold my-3">
                <Card.Body>
                    RQ4 - In a most probable scenario, what countries are the worst in their Net Zero efforts (balancing CO<sub>2</sub> emissions with forest offset)?
                </Card.Body>
            </Card>
        </Container>
    )
}




