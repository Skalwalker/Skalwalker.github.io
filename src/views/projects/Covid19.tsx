import React from 'react';
import ProjectPageContainer from '../../components/projects/ProjectPageContainer';
import ProjectSection from '../../components/projects/ProjectSection';
import ProjectParagraph from '../../components/projects/ProjectParagraph';
import Table from 'react-bootstrap/Table'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import { Accordion } from 'react-bootstrap';

import {project} from '../../content/Projects'

import '../../assets/css/font.css'
import '../../assets/css/tabs.css'


// function FeaturesAccordion() {
//   return (
//     <Accordion defaultActiveKey="0" flush>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>RMS Power</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Zero Crossing Rate (ZCR)</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="2">
//         <Accordion.Header>Spectral Centroid & Spread</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="3">
//         <Accordion.Header>Spectral Entropy</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="4">
//         <Accordion.Header>Spectral Flatness</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="5">
//         <Accordion.Header>Spectral Rolloff</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="6">
//         <Accordion.Header>Mel Frequency Cepstral Coefficients (MFCCs)</Accordion.Header>
//         <Accordion.Body>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   )
// }


function ResultSVMTabs() {
    return (
      <Tabs
        defaultActiveKey="coswara"
        id="uncontrolled-tab-example"
        className="mt-1 mb-3 w-100"
        fill
      >
        <Tab eventKey="coswara" title="Coswara SVM" className="w-100 text-center">
                <Figure className="mx-auto">
                    <Row className="mx-auto">
                    <Col xl={6}>
                        <Figure.Image
                            style={{width: '99%', backgroundColor: 'white'}}
                            alt="Overview of C19-Audit framework"
                            src={require('../../assets/images/projects/covid19/svm_coswara_cm.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Validation Set Confusion Matrix
                        </Figure.Caption>
                    </Col>
                    <Col xl={6}>
                        <Figure.Image
                            style={{width: '100%', backgroundColor: 'white'}}
                            alt="Overview of C19-Audit framework"
                            src={require('../../assets/images/projects/covid19/svm_coswara_roc.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Receiver Operating Characteristic Curve
                        </Figure.Caption>
                    </Col>
                    </Row>
                </Figure>
        </Tab>
        <Tab eventKey="coughvid" title="Coughvid SVM" className="w-100 text-center">
            <Figure className="mx-auto">
                <Row className="mx-auto">
                    <Col xl={6}>
                        <Figure.Image
                            style={{width: '99%', backgroundColor: 'white'}}
                            alt="Overview of C19-Audit framework"
                            src={require('../../assets/images/projects/covid19/svm_coughvid_cm.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Validation Set Confusion Matrix
                        </Figure.Caption>
                    </Col>
                    <Col xl={6}>
                        <Figure.Image
                            style={{width: '100%', backgroundColor: 'white'}}
                            alt="Overview of C19-Audit framework"
                            src={require('../../assets/images/projects/covid19/svm_coughvid_roc.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Receiver Operating Characteristic Curve
                        </Figure.Caption>
                    </Col>
                </Row>
            </Figure>
        </Tab>
      </Tabs>
    );
}

function ResultCNNTabs() {
return (
    <Tabs
    defaultActiveKey="coswara"
    id="uncontrolled-tab-example"
    className="mt-1 mb-3 w-100"
    fill
    >
        <Tab eventKey="coswara" title="Coswara CNN" className="w-100 text-center">
                <Figure className="mx-auto">
                    <Row className="mx-auto" style={{width: '100%'}}>
                        <Col xl={6}>
                            <Figure.Image
                                style={{width: '99%', backgroundColor: 'white'}}
                                alt="Overview of C19-Audit framework"
                                src={require('../../assets/images/projects/covid19/cnn_coswara_cm.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Validation Set Confusion Matrix
                            </Figure.Caption>
                        </Col>
                        <Col xl={6}>
                            <Figure.Image
                                style={{width: '100%', backgroundColor: 'white'}}
                                alt="Overview of C19-Audit framework"
                                src={require('../../assets/images/projects/covid19/cnn_coswara_roc.png').default}
                            />
                            <Figure.Caption className="paragraph">
                                Receiver Operating Characteristic Curve
                            </Figure.Caption>
                        </Col>
                    </Row>
                </Figure>
        </Tab>
        <Tab eventKey="coughvid" title="Coughvid CNN" className="w-100 text-center">
            <Figure className="mx-auto">
                <Row className="mx-auto w-100">
                    <Col xl={6}>
                        <Figure.Image
                            style={{width: '99%', backgroundColor: 'white'}}
                            alt="Overview of C19-Audit framework"
                            src={require('../../assets/images/projects/covid19/cnn_coughvid_cm.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Validation Set Confusion Matrix
                        </Figure.Caption>
                    </Col>
                    <Col xl={6}>
                        <Figure.Image
                            style={{width: '100%', backgroundColor: 'white'}}
                            alt="Overview of C19-Audit framework"
                            src={require('../../assets/images/projects/covid19/cnn_coughvid_roc.png').default}
                        />
                        <Figure.Caption className="paragraph">
                            Receiver Operating Characteristic Curve
                        </Figure.Caption>
                    </Col>
                </Row>
            </Figure>
        </Tab>
    </Tabs>
);
}

function ResultsTable() {
    return (
      <Table striped bordered className="mt-1 mb-3">
        <thead>
            <tr>
                <th rowSpan={2} className="text-center">Datasets</th>
                <th colSpan={5} className="text-center">Training and Validation Metrics</th>
            </tr>
          <tr>
            <th>Accuracy</th>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1-Score</th>
            <th>AUC-ROC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coswara SVM</td>
            <td>0.83/0.71</td>
            <td>0.86/<b>0.77</b></td>
            <td>0.83/<b>0.72</b></td>
            <td>0.84/<b>0.72</b></td>
            <td>0.85/0.70</td>
          </tr>
          <tr>
            <td>Coughvid SVM</td>
            <td>0.78/0.61</td>
            <td>0.78/0.62</td>
            <td>0.78/0.61</td>
            <td>0.78/0.61</td>
            <td>0.78/0.62</td>
          </tr>
          <tr>
            <td>Coswara CNN</td>
            <td>0.83/<b>0.76</b></td>
            <td>0.72/0.52</td>
            <td>0.68/0.50</td>
            <td>0.70/0.51</td>
            <td>0.91/<b>0.73</b></td>
          </tr>
          <tr>
            <td>Coughvid CNN</td>
            <td>0.57/0.47</td>
            <td>0.56/0.45</td>
            <td>0.78/0.69</td>
            <td>0.65/0.54</td>
            <td>0.62/0.52</td>
          </tr>
        </tbody>
      </Table>
    );
}

class Covid19 extends React.Component {
    render() {
        const page_project = project.projects['covid'];
        const abstract = "I've trained CNN and SVM models to produce prescreening COVID-19 detection using only the patient's cough. During the pandemic, the availability of testing methods was one of the main challenges in containing the virus. Therefore, I designed C19-Audit, a framework to evaluate  if cough audio is sufficient to detect COVID and analyze whether the CNN approach can overcome the SVM.";

     return(
        <ProjectPageContainer project={page_project} abstract={abstract}>
            <ProjectSection key="intro-header" id="intro-header" title="Introduction" first={true}>
                <ProjectParagraph>
                    Keeping in mind the necessity for fast and widely accessible COVID-19 pre-screening methods, I propose C19-Audit, a framework for detecting covid in cough data. C19-Audit, binary classifies a cough between COVID-infected or non-infected using two approaches: a Support Vector Machine (SVM) and a Convolutional Neural Network (CNN) model. While the SVMs have been widely used and achieved outstanding results in traditional audio classification tasks, the Convolutions Neural Networks have gained space approaching the problem as an image to be classified. This simple approach would provide a pre-screening method where every person with a microphone could be able to test for the disease.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="dev-header" id="dev-header" title="Approach">
                <ProjectParagraph>
                    C19-Audit takes advantage of two approaches: an SVM and a CNN model. On the one hand, SVMs have been widely used and achieved outstanding results in traditional audio classification tasks using standard audio features. On the other hand, the Convolutions Neural Networks have gained space in audio classification tasks, using time-frequency representations such as the spectrograms and the Mel-spectrograms as an image to be classified.
                </ProjectParagraph>
                <Figure className="mx-auto text-center">
                    <Figure.Image
                        style={{width: '70%'}}
                        alt="Overview of C19-Audit framework"
                        src={require('../../assets/images/projects/covid19/process_diagram.png').default}
                    />
                    <Figure.Caption className="paragraph">
                        Overview of C19-Audit framework
                    </Figure.Caption>
                </Figure>
                <ProjectParagraph>
                    The figure below shows an overview of the C19-Audit framework. C19-Audit receives as input 16-bit audio files, normalize them, and fixes their minimum length to a predetermined value. If the audio is smaller than the minimum length, zero padding is applied to the end. Hence, we have a fixed-length waveform. This waveform can be used to compute the audio spectrogram and the audio's time-domain features.
                </ProjectParagraph>
                <ProjectParagraph>
                    After the spectrogram generation, I generated the log Mel spectrogram, representing the spectrum where the frequencies have been set in the Mel Scale. A Mel scale is a unit of pitch proposed based on how humans distinguish between frequencies, making it very convenient to process sounds. The Mel spectrogram, the magnitude spectrogram, and the waveforms were used to calculate multiple audio features.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="feature-header" id="features-header" title="Features">

            </ProjectSection>
            <ProjectSection key="ds-header" id="datasets-header" title="Datasets">
                <ProjectParagraph>
                    I selected two different datasets to evaluate the proposed methodology. The <b>Coswara dataset</b> contained sound samples collected via worldwide crowdsourcing using a web application. The dataset has audio samples from more than 941 participants recorded at a sampling frequency of 48 kHz. Additionally, the <b>Coughvid dataset</b> provides over 25,000 crowdsourced cough recordings representing various participants' demographics and COVID-19 statuses, with a subset of 2,800 recordings labeled by experienced physicians.
                </ProjectParagraph>
                <ProjectParagraph>
                    A set of preprocessing and cleaning techniques were used for the datasets to be used adequately. On the Coughvid data set, I selected only the subset of 2.800 specially curated files for the classification task. This choice was motivated both by performance and data trustworthy issues. Additionally, the bitrate of the files was reduced from 32 to 16, optimizing the time to train on the available hardware.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="eval-header" id="eval-header" title="Performance Evaluation">
                <ProjectParagraph>
                    Each database was divided into 70/30 training and validation. The experiments evaluated each dataset (Coswara and Coughvid) with each model (SVM and CNN). The dataset features were calculated in short-term using a window size of 1024, a 256 hop, and a "hann" window. For details on the SVM and CNN configuration, please refer to the full paper. The experiments were evaluated with the following metrics:
                </ProjectParagraph>
                <ListGroup className="w-100 mt-1 mb-3">
                    <ListGroup.Item><b>Accuracy:</b> How close the models are to the correct value</ListGroup.Item>
                    <ListGroup.Item><b>Precision:</b> How correct the positive predictions of the models were classified as correct, excluding false negatives</ListGroup.Item>
                    <ListGroup.Item><b>Recall:</b> How correct the positive predictions of the models were rated correct, excluding false positives.</ListGroup.Item>
                    <ListGroup.Item><b>F1-Score:</b></ListGroup.Item>
                    <ListGroup.Item><b>AUC-ROC:</b></ListGroup.Item>
                </ListGroup>
                <ProjectParagraph>
                    F1-Score and the AUC-ROC were specially chosen due to the nature of the problem. Both datasets are unbalanced, with a higher amount of healthy patients. Therefore accuracy alone is not a good metric to be used.
                </ProjectParagraph>
            </ProjectSection>
            <ProjectSection key="exp-header" id="exp-header" title="Experimental Results">
                <ProjectParagraph>
                    The following table summarizes the obtained results for each of the model-database combinations. Overall the SVM approach performed better than the CNN, and the Coswara dataset gave better models than the Coughvid. The Coswara SVM achieved the best precision 0.77, recall 0.72, and F1-score 0.72 while not under-performing in other metrics.
                </ProjectParagraph>
                <Col>
                <Row>
                    <ResultsTable/>
                </Row>
                <Row>
                    <ProjectParagraph>
                        The SVM models had a better overall performance when compared to CNN. Coswara SVM had the best results; below is the confusion matrix and the ROC curve of the classifier. Especially the Coswara results show the best curve, in which we can achieve almost 70% true positives with around 25% false positives.
                    </ProjectParagraph>
                    <ResultSVMTabs/>
                </Row>
                <Row>
                    <ProjectParagraph>
                        While the Coswara CNN model has the best overall accuracy, its values of precision-recall and F1-Score are less significant than the Coswara SVM. From the confusion matrix, we can analyze that its results mainly predict non-COVID relations, which is why we should consider more than just accuracy with unbalanced datasets. Finally, the Coughvid CNN presented a ROC very near the random guessing line, which could indicate that the model had problems fitting the data.
                    </ProjectParagraph>
                    <ResultCNNTabs/>
                </Row>
                </Col>
            </ProjectSection>
            <ProjectSection key="conc-header" id="conc-header" title="Conclusion">
                <ProjectParagraph>
                    From the observable results, we can infer that the SVM with the Coswara dataset was the most capable of classifying the problem. However, its results could be more competitive when compared to recent literature. One of the possible reasons for these results is that cough information alone is insufficient for a precise classification. Experimental results also favored the traditional audio features techniques with an SVM compared to the CNN approach, which can be related to the simplicity of the employed CNN. Using a CNN with transfer learning might present better results.
                </ProjectParagraph>
                <ProjectParagraph>
                    Future works could approach the problem of classifying cough audio in a time-series approach. It might exist features in an infected cough related to how it reverberates in time. Additionally, future work could explore a mixed approach classification, considering both the audio file and other related symptoms features.
                </ProjectParagraph>
            </ProjectSection>

        </ProjectPageContainer>
     )
    }
}

export default Covid19;
