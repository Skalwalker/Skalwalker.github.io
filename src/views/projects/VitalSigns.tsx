import React from 'react';

import ProjectPageContainer from '../../components/projects/ProjectPageContainer';
import ProjectSection from '../../components/projects/ProjectSection'
import ProjectParagraph from '../../components/projects/ProjectParagraph';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import Carousel from 'react-bootstrap/Carousel';

import '../../assets/css/font.css'
import '../../assets/css/tabs.css'
import '../../assets/css/projects.css'

import { project } from '../../content/Projects'

class VitalSigns extends React.Component {

    render() {
        const page_project = project.projects["vitalsigns"]
        const footer_info = [
            {
                heading: "Project Info",
                desc: "Developed in Master's Degree Course - Biomedical Signal Processing - 2023"
            }
        ]

        return (
            <ProjectPageContainer project={page_project} footer={footer_info}>
                <ProjectSection id="intro-header" title="Introduction" first={true}>
                    <ProjectParagraph>
                        Measuring respiration and heart rate is crucial to diagnosing and monitoring a wide range of disorders. However, most measuring techniques are obtrusive, impractical, and not widely available for continuous monitoring outside the hospital environment. Therefore a better approach would be to measure those values through a widely available device, the smartphone.
                    </ProjectParagraph>
                    <ProjectParagraph>
                        Smartphones have Inertial Measurement Unit (IMU) devices, a composite of accelerometers and gyroscope sensors, thus being able to measure acceleration and angular velocity. It turns out that this information can be used to calculate the desired vital signals. This project used an IMU from a smartphone device to measure heart and respiratory rate, using the composite of the 3-axis from the accelerometer and the 3-axis from the gyroscope sensors.
                    </ProjectParagraph>
                </ProjectSection>
                <ProjectSection id="dataset-header" title="Dataset Creation">
                    <ProjectParagraph>
                        I decided to develop a simple iOS app to collect the desired data with a smartphone. The idea of the app was not just to collect but also to allow for monitoring the signs with the proposed algorithm. However, the monitoring aspect was not implemented. A simple workflow to collect the data is shown below with the app screens. It allows us to record 60-second data and share it with a computer after recording.
                    </ProjectParagraph>
                    <AppImagesCarrousel/>
                    <ProjectParagraph>
                        With the app, I was able to start collecting my data. I collected thirty 60-seconds samples to create a statistically meaningful dataset. The sampling rate of 500 Hz was chosen for the recordings. The data collected have respiratory rates that range from 12 to 30 breaths per minute and heart rates ranging from 55 to 102 beats per minute.
                    </ProjectParagraph>
                    <ProjectParagraph>
                        All the data was collected with the subjects lying still on a bed in a supine position. The data was collected from 5 people: four women of age 27, 51, 54 and 88 years old; and one man with 67 years old. Also, the true respiratory rate and the true minimum and maximum heart rate values of the collected interval were collected for each subject. To obtain those true values, the respiration was controlled by following the beats of a metronome, while the heart rate was measured with an oximeter.
                    </ProjectParagraph>
                </ProjectSection>
                <ProjectSection id="overview-header" title="Overview">
                    <ProjectParagraph>
                        The figure below is a schematic of the proposed process. The system uses all three axes from the gyroscope and accelerometer to discover the respiratory and heart rate. The sensor's axes are all fed into an independent component analysis which generates the number of components desired by the user. Those components are then fed to an ad-hoc respiratory signal identification, responsible for finding the respective respiratory rate signal and assigning all other components as heart rate signals.
                    </ProjectParagraph>
                    <Figure className="mx-auto text-center">
                        <Figure.Image className='w-100'
                            style={{ width: '100%' }}
                            src={require('../../assets/images/projects/vitalsigns/overview.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Overview of the signals' separation pipeline
                        </Figure.Caption>
                    </Figure>
                    <ProjectParagraph>
                        The idea in this pipeline is to take advantage of the blind source separation technique, separating a set of source signals from a set of mixed signals without information about the source or the mixing process. However, a problem with applying ICA is that we have no guarantee that the components we want will be generated nor a proper mechanism to identify the generated components.
                    </ProjectParagraph>
                    <ProjectParagraph>
                        My idea to identify these components was to derive concepts from match filters, where we know the template of the respiratory rate signal and thus can measure their similarities. Visually speaking, the respiratory rate signal resembles a simple sine wave. Thus if we measure the correlation of the components with a sine wave, we can derive a similarity metric and select the most similar component. After the identification of the signal waves, each wave is treated separately:
                    </ProjectParagraph>
                    <SignalTabs/>
                </ProjectSection>
                <ProjectSection id="subject-header" title="Subject Example">
                    <ProjectParagraph>
                        The proposed pipeline can be applied to the patient signals. Here we demonstrate how the pipeline works with a single patient observation. Let's follow an example of the pipeline execution on a subject who had a respiratory rate (RR) of 21 and a heart rate (HR) of 80.
                    </ProjectParagraph>
                    <SubjectExample/>
                </ProjectSection>
                <ProjectSection id="res-header" title="Results">
                    <ProjectParagraph>
                        The experimental setup consisted of executing the methodology on the 30 collected samples and repeating this process 30 times. This was done as such because of the ICA random weight initialization, which allows ICA to create different components on different executions and generate different results, thus making one execution not statistically significant. With experimentation, the execution was performed with four components for the ICA, even though other numbers were tested.
                    </ProjectParagraph>
                    <ProjectParagraph>
                        The metrics used were the Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE). Accuracy was used exclusively for the respiratory rate, rounding the nearest integer. The results of this experimentation setup was the following:
                    </ProjectParagraph>
                    <ResultsTable />
                    <ProjectParagraph>
                        Overall results were favourable and consistent, especially for the respiratory rate, showing that the proposed pipeline could be used for this approach. The heart rate could still be enhanced, but it provides a good initial estimate. It is worth mentioning that the oximeter is not the most precise tool for measuring heart rate, so the true value used to calculate the error might be by itself wrong, which could increase our resulting error.
                    </ProjectParagraph>
                </ProjectSection>
            </ProjectPageContainer>
        )
    }
}

export default VitalSigns;


function SubjectExample() {
    return (
        <Container className='mt-3 mb-3'>
            <Accordion defaultActiveKey="0" style={{color: 'var(--bs-white)'}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header as='h3'>Accelerometer and Gyroscope Signals</Accordion.Header>
                    <Accordion.Body className="text-left">
                        <ProjectParagraph>
                            We first start by retrieving the signals from the CSV file, the 3-axis gyroscope and the 3-axis accelerometer. The picture describes those signals in 60 seconds.
                        </ProjectParagraph>
                        <Figure className="mx-auto  text-center">
                            <Figure.Image
                                className='w-80'
                                style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
                                src={require('../../assets/images/projects/vitalsigns/signals.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Accelerometer and Gyroscope Signals
                            </Figure.Caption>
                        </Figure>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header as='h3'>Resulting Independent Components</Accordion.Header>
                    <Accordion.Body className="text-left">
                        <ProjectParagraph>
                            Second, we perform the ICA and get n components. For this analysis, I choose to use four components, which yield the best result. The image shows the resulting components of the ICA. At first, we don't know which component was which, so the titles were added after the signal identification.
                        </ProjectParagraph>
                        <Figure className="mx-auto text-center">
                            <Figure.Image
                                className='w-80'
                                style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
                                src={require('../../assets/images/projects/vitalsigns/components.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Resulting components of the ICA process
                            </Figure.Caption>
                        </Figure>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header as='h3'>Correlation for Respiratory Rate Identification</Accordion.Header>
                    <Accordion.Body className="text-left">
                        <ProjectParagraph>
                            This plot shows the sine wave used for the correlation and its resulting signals. If we look closely, the second and third signals could be used for the respiratory rate, and if we count the respiratory waves on the third signal, we get the RR value precisely. This is reflected in the correlation waves, which shows the second and third wave with the highest amplitudes, but the third being the one identified as respiratory rate.
                        </ProjectParagraph>
                        <Figure className="mx-auto text-center">
                            <Figure.Image
                                className='w-90'
                                style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
                                src={require('../../assets/images/projects/vitalsigns/correlation.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Independent components correlation with sine wave
                            </Figure.Caption>
                        </Figure>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header as='h3'>Respiratory Rate Signal Wave Processing</Accordion.Header>
                    <Accordion.Body className="text-left">
                        <ProjectParagraph>
                            After signal identification, each signal is treated separately. Starting with the respiratory signal, the plots show its respective wave, the result after the bandpass filtering, and the dominant frequency on the magnitude of the spectrum. In this case, it gets precisely the patient's RR, 21 breaths per minute.
                        </ProjectParagraph>
                        <Figure className="mx-auto text-center">
                            <Figure.Image
                                className='w-90'
                                style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
                                src={require('../../assets/images/projects/vitalsigns/respiratory_rate.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Signal waves for the respiratory rate
                            </Figure.Caption>
                        </Figure>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header as='h3'>Heart Rate Signal Wave Processing</Accordion.Header>
                    <Accordion.Body className="text-left">
                        <ProjectParagraph>
                            Finally, we have almost the same plot for the heart rate but with the euclidean norm applied to the remaining signals and the 8th-order Butterworth bandpass filter before achieving the magnitude spectrum. In this case, the resulting beats per minute are three beats below the actual value. 
                        </ProjectParagraph>
                        <Figure className="mx-auto text-center">
                            <Figure.Image
                                className='w-90'
                                style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
                                src={require('../../assets/images/projects/vitalsigns/heart_rate.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Signal waves for the heart rate
                            </Figure.Caption>
                        </Figure>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

function ResultsTable() {
    return (
        <Container>
            <Table striped bordered className="mt-1 mb-3 subtitle" responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Mean Absolute Error</th>
                        <th>Root Mean Squared Error</th>
                        <th>Accuracy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Respiratory Rate</b></td>
                        <td>0.71</td>
                        <td>2.69</td>
                        <td>0.82</td>
                    </tr>
                    <tr>
                        <td><b>Heart Rate</b></td>
                        <td>6.84</td>
                        <td>14.57</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}


function SignalTabs() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="rr_wave"
                id="uncontrolled-tab-example"
                className="mt-1 mb-3 w-100 subtitle"
                fill
            >
                <Tab eventKey="rr_wave" title="Respiratory Signal" className="w-100 text-left">
                    <Figure className="mx-auto text-center mt-4">
                        <Figure.Image
                            className='w-100'
                            style={{ width: '100%' }}
                            src={require('../../assets/images/projects/vitalsigns/rrsignal.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Respiratory rate identification pipeline
                        </Figure.Caption>
                    </Figure>
                    <ProjectParagraph>
                        First, for the respiratory signal, I apply a bandpass filter, ranging from 0.2 to 0.5Hz (12 to 30 Breaths per Minute), to select the expected respiratory rate interval. After filtering, we perform the traditional process of using the magnitude of the Fourier transform, identify the dominant frequency and multiply it by 60 to obtain the respiratory rate
                    </ProjectParagraph>
                </Tab>
                <Tab eventKey="heart_case" title="Heart Signal" className="w-100 text-left">
                    <Figure className="mx-auto text-center mt-4">
                        <Figure.Image className='w-100'
                            style={{ width: '100%' }}
                            src={require('../../assets/images/projects/vitalsigns/heartsignal.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Heart rate identification pipeline
                        </Figure.Caption>
                    </Figure>
                    <ProjectParagraph>
                        For the heart rate signals, we have more than one signal. Thus we need to generate an aggregated resulting signal, and I did so by applying an L2 Norm to get the magnitude of the combined signals. Following, I applied an 8th-order Butterworth bandpass filter to keep the signal between 0.6 to 3.33Hz (40 to 200 Beats per Minute) and finally followed the last two steps of the respiratory rate identification.
                    </ProjectParagraph>
                </Tab>
            </Tabs>
        </Container>
    );
}


function AppImagesCarrousel() {
    return (
        <Carousel style={{ width: '100%' }} className="text-center mx-auto">
            <Carousel.Item style={{ paddingLeft: '210pt', paddingRight: '210pt', paddingBottom: '60pt' }}>
                <Figure className="mx-auto text-center mt-4">
                    <Figure.Image
                        className='w-100'
                        style={{ width: '100%' }}
                        src={require('../../assets/images/projects/vitalsigns/appimg1.PNG').default}
                    />
                </Figure>
                <Carousel.Caption className="paragraph">
                    <p>Initial view</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ paddingLeft: '210pt', paddingRight: '210pt', paddingBottom: '60pt' }}>
                <Figure className="mx-auto text-center mt-4">
                    <Figure.Image
                        className='w-100'
                        style={{ width: '100%' }}
                        src={require('../../assets/images/projects/vitalsigns/appimg2.PNG').default}
                    />
                </Figure>
                <Carousel.Caption className="paragraph">
                    <p>Recording screen with instructions before starting</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ paddingLeft: '210pt', paddingRight: '210pt', paddingBottom: '60pt' }}>
                <Figure className="mx-auto text-center mt-4">
                    <Figure.Image
                        className='w-100'
                        style={{ width: '100%' }}
                        src={require('../../assets/images/projects/vitalsigns/appimg3.PNG').default}
                    />
                </Figure>
                <Carousel.Caption className="paragraph">
                    <p>Recording screen showing remaining time to finish the record</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ paddingLeft: '210pt', paddingRight: '210pt', paddingBottom: '60pt' }}>
                <Figure className="mx-auto text-center mt-4">
                    <Figure.Image
                        className='w-100'
                        style={{ width: '100%' }}
                        src={require('../../assets/images/projects/vitalsigns/appimg4.PNG').default}
                    />
                </Figure>
                <Carousel.Caption className="paragraph">
                    <p>List of saved records to be shared to a computer</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}