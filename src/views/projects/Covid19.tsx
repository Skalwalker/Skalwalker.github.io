import React from 'react';
import { ProjectPageContainer } from '../../components/projects/ProjectPageContainer';
import { ProjectSection } from '../../components/projects/ProjectSection';
import { ProjectParagraph } from '../../components/projects/ProjectParagraph';

import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import { Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { projectContent } from '../../content/Projects';

import '../../assets/css/font.css';
import '../../assets/css/tabs.css';
import '../../assets/css/projects.css';

// Image imports
import imgRmsPower from '../../assets/images/projects/covid19/features/rms_power.png';
import imgZeroCrossing from '../../assets/images/projects/covid19/features/zero_crossing_rate.png';
import imgSpectralBandwidth from '../../assets/images/projects/covid19/features/spectral_bandwith.png';
import imgSpectralFlatness from '../../assets/images/projects/covid19/features/spectral_flatness.png';
import imgSpectralRolloff from '../../assets/images/projects/covid19/features/spectral_rolloff.png';
import imgMfccs from '../../assets/images/projects/covid19/features/mfccs.png';
import imgSvmCoswaraCm from '../../assets/images/projects/covid19/svm_coswara_cm.png';
import imgSvmCoswaraRoc from '../../assets/images/projects/covid19/svm_coswara_roc.png';
import imgSvmCoughvidCm from '../../assets/images/projects/covid19/svm_coughvid_cm.png';
import imgSvmCoughvidRoc from '../../assets/images/projects/covid19/svm_coughvid_roc.png';
import imgCnnCoswaraCm from '../../assets/images/projects/covid19/cnn_coswara_cm.png';
import imgCnnCoswaraRoc from '../../assets/images/projects/covid19/cnn_coswara_roc.png';
import imgCnnCoughvidCm from '../../assets/images/projects/covid19/cnn_coughvid_cm.png';
import imgCnnCoughvidRoc from '../../assets/images/projects/covid19/cnn_coughvid_roc.png';
import imgProcessDiagram from '../../assets/images/projects/covid19/process_diagram.png';

function FeaturesAccordion() {
  return (
    <Container>
      <Accordion defaultActiveKey="0" style={{ color: 'var(--bs-white)' }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header as="h3">RMS Power</Accordion.Header>
          <Accordion.Body className="text-center">
            <ProjectParagraph>
              Compute root-mean-square (RMS) value for each frame [4].
            </ProjectParagraph>
            <Figure className="mx-auto">
              <Figure.Image
                className="w-80"
                style={{ width: '80%', backgroundColor: 'white' }}
                src={imgRmsPower}
              />
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header as="h3">Zero Crossing Rate (ZCR)</Accordion.Header>
          <Accordion.Body className="text-center">
            <ProjectParagraph>
              Rate of sign-changes of the signal during the frame. It is the number of times the
              signal changes value, from positive to negative and vice versa, divided by the length
              of the frame [4].
            </ProjectParagraph>
            <Figure className="mx-auto">
              <Figure.Image
                className="w-80"
                style={{ width: '80%', backgroundColor: 'white' }}
                src={imgZeroCrossing}
              />
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header as="h3">Spectral Centroid & Spread</Accordion.Header>
          <Accordion.Body className="text-center">
            <ProjectParagraph>
              The spectral centroid and the spectral spread are two simple measures of spectral
              position and shape. The spectral centroid is the center of "gravity" of the spectrum,
              while the spread is the second central moment of the spectrum [4].
            </ProjectParagraph>
            <Figure className="mx-auto">
              <Figure.Image
                className="w-90"
                style={{ width: '90%', backgroundColor: 'white' }}
                src={imgSpectralBandwidth}
              />
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header as="h3">Spectral Flatness</Accordion.Header>
          <Accordion.Body className="text-center">
            <ProjectParagraph>
              The Spectral Flatness is a measure to quantify how much noise-like a sound is, as
              opposed to being tone-like. A high spectral flatness (closer to 1.0) indicates the
              spectrum is similar to white noise [4].
            </ProjectParagraph>
            <Figure className="mx-auto">
              <Figure.Image
                className="w-80"
                style={{ width: '80%', backgroundColor: 'white' }}
                src={imgSpectralFlatness}
              />
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header as="h3">Spectral Rolloff</Accordion.Header>
          <Accordion.Body className="text-center">
            <ProjectParagraph>
              The frequency below which a certain percentage (usually around 90%) of the magnitude
              distribution of the spectrum is concentrated [4].
            </ProjectParagraph>
            <Figure className="mx-auto">
              <Figure.Image
                className="w-90"
                style={{ width: '90%', backgroundColor: 'white' }}
                src={imgSpectralRolloff}
              />
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header as="h3">Mel Frequency Cepstral Coefficients (MFCCs)</Accordion.Header>
          <Accordion.Body className="text-center">
            <ProjectParagraph>
              The MFCC use the MEL scale to divide the frequency band into sub-bands and then
              extract the Cepstral Coefficients using Discrete Cosine Transform (DCT) [4].
            </ProjectParagraph>
            <Figure className="mx-auto">
              <Figure.Image
                className="w-90"
                style={{ width: '90%', backgroundColor: 'white' }}
                src={imgMfccs}
              />
            </Figure>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

function ResultSVMTabs() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="coswara"
        id="uncontrolled-tab-example"
        className="mt-1 mb-3 w-100 subtitle"
        fill
      >
        <Tab eventKey="coswara" title="Coswara SVM" className="w-100 text-center">
          <Figure className="mx-auto">
            <Row className="mx-auto">
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size_2"
                  style={{ backgroundColor: 'white' }}
                  alt="Validation Set Confusion Matrix"
                  src={imgSvmCoswaraCm}
                />
                <Figure.Caption className="paragraph">
                  Validation Set Confusion Matrix
                </Figure.Caption>
              </Col>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="Receiver Operating Characteristic Curve"
                  src={imgSvmCoswaraRoc}
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
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size_2"
                  style={{ backgroundColor: 'white' }}
                  alt="Validation Set Confusion Matrix"
                  src={imgSvmCoughvidCm}
                />
                <Figure.Caption className="paragraph">
                  Validation Set Confusion Matrix
                </Figure.Caption>
              </Col>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="Receiver Operating Characteristic Curve"
                  src={imgSvmCoughvidRoc}
                />
                <Figure.Caption className="paragraph">
                  Receiver Operating Characteristic Curve
                </Figure.Caption>
              </Col>
            </Row>
          </Figure>
        </Tab>
      </Tabs>
    </Container>
  );
}

function ResultCNNTabs() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="coswara"
        id="uncontrolled-tab-example"
        className="mt-1 mb-3 w-100 subtitle"
        fill
      >
        <Tab eventKey="coswara" title="Coswara CNN" className="w-100 text-center">
          <Figure className="mx-auto">
            <Row className="mx-auto" style={{ width: '100%' }}>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size_2"
                  style={{ backgroundColor: 'white' }}
                  alt="Validation Set Confusion Matrix"
                  src={imgCnnCoswaraCm}
                />
                <Figure.Caption className="paragraph">
                  Validation Set Confusion Matrix
                </Figure.Caption>
              </Col>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="Receiver Operating Characteristic Curve"
                  src={imgCnnCoswaraRoc}
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
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size_2"
                  style={{ backgroundColor: 'white' }}
                  alt="Validation Set Confusion Matrix"
                  src={imgCnnCoughvidCm}
                />
                <Figure.Caption className="paragraph">
                  Validation Set Confusion Matrix
                </Figure.Caption>
              </Col>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="Receiver Operating Characteristic Curve"
                  src={imgCnnCoughvidRoc}
                />
                <Figure.Caption className="paragraph">
                  Receiver Operating Characteristic Curve
                </Figure.Caption>
              </Col>
            </Row>
          </Figure>
        </Tab>
      </Tabs>
    </Container>
  );
}

function ResultsTable() {
  return (
    <Container>
      <Table striped bordered className="mt-1 mb-3 subtitle" responsive>
        <thead className="subtitle_bold">
          <tr>
            <th rowSpan={2} className="text-center">
              Datasets
            </th>
            <th colSpan={5} className="text-center">
              Training and Validation Metrics
            </th>
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
            <td className="subtitle_bold">Coswara SVM</td>
            <td>0.83/0.71</td>
            <td>
              0.86/<b>0.77</b>
            </td>
            <td>
              0.83/<b>0.72</b>
            </td>
            <td>
              0.84/<b>0.72</b>
            </td>
            <td>0.85/0.70</td>
          </tr>
          <tr>
            <td className="subtitle_bold">Coughvid SVM</td>
            <td>0.78/0.61</td>
            <td>0.78/0.62</td>
            <td>0.78/0.61</td>
            <td>0.78/0.61</td>
            <td>0.78/0.62</td>
          </tr>
          <tr>
            <td className="subtitle_bold">Coswara CNN</td>
            <td>
              0.83/<b>0.76</b>
            </td>
            <td>0.72/0.52</td>
            <td>0.68/0.50</td>
            <td>0.70/0.51</td>
            <td>
              0.91/<b>0.73</b>
            </td>
          </tr>
          <tr>
            <td className="subtitle_bold">Coughvid CNN</td>
            <td>0.57/0.47</td>
            <td>0.56/0.45</td>
            <td>0.78/0.69</td>
            <td>0.65/0.54</td>
            <td>0.62/0.52</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

class Covid19 extends React.Component {
  render() {
    const page_project = projectContent.projects.covid;
    const footer_info = [
      {
        heading: 'Project Info',
        desc: "Developed in Master's Degree Course - Audio Pattern Recognition - 2022",
      },
      {
        heading: 'References',
        desc: '[1]\tY. E. Erdogan and A. Narin, “Covid-19 detection with traditional and deep features on cough acoustic signals,” Computers in Biology and Medicine, vol. 136, p. 104765, 2021.\n\n[2]\tL. Orlandic, T. Teijeiro, and D. Atienza, “The coughvid crowdsourcing dataset, a corpus for the study of large-scale cough analysis algorithms,” Scientific Data, vol. 8, no. 1, pp. 1-10, 2021\n\n[3]\tA. Imran, I. Posokhova, H. N. Qureshi, U. Masood, M. S. Riaz, K. Ali, C. N. John, M. I. Hussain, and M. Nabeel, “Ai4covid-19: Ai enabled preliminary diagnosis for covid-19 from cough samples via an app,” Informatics in Medicine Unlocked, vol. 20, p. 100378, 2020.\n\n[4]\tT. Giannakopoulos and A. Pikrakis, “Introduction to audio analysis: a MATLAB® approach.” Academic Press, 2014.\n\n[5]\tS. S. Stevens and J. Volkmann, “The relation of pitch to frequency: A revised scale,” The American Journal of Psychology, vol. 53, no. 3, pp. 329-353, 1940.\n\n[6]\tN. Sharma, P. Krishnan, R. Kumar, S. Ramoji, S. R. Chetupalli, P. K. Ghosh, S. Ganapathy et al., “Coswara a database of breathing, cough, and voice sounds for covid-19 diagnosis,” arXiv preprint arXiv:2005.10548, 2020.',
      },
    ];

    return (
      <ProjectPageContainer project={page_project} footer={footer_info}>
        <ProjectSection key="intro-header" id="intro-header" title="Introduction" variant="first">
          <ProjectParagraph>
            Keeping in mind the necessity for fast and widely accessible COVID-19 pre-screening
            methods [1], I propose C19-Audit, a framework for detecting covid in cough data.
            C19-Audit, binary classifies a cough between COVID-infected or non-infected using two
            approaches: a Support Vector Machine (SVM) and a Convolutional Neural Network (CNN)
            model. While the SVMs have been widely used and achieved outstanding results in
            traditional audio classification tasks, the Convolutions Neural Networks have gained
            space approaching the problem as an image to be classified [3]. This simple approach
            would provide a pre-screening method where every person with a microphone could be able
            to test for the disease.
          </ProjectParagraph>
        </ProjectSection>
        <ProjectSection key="dev-header" id="dev-header" title="Approach">
          <ProjectParagraph>
            C19-Audit takes advantage of two approaches: an SVM and a CNN model. On the one hand,
            SVMs have been widely used and achieved outstanding results in traditional audio
            classification tasks using standard audio features [4]. On the other hand, the
            Convolutions Neural Networks have gained space in audio classification tasks, using
            time-frequency representations such as the spectrograms and the Mel-spectrograms as an
            image to be classified [3]. Therefore, C19-Audit was designed to evaluate two different{' '}
            <b>research questions</b>:
          </ProjectParagraph>
          <Container>
            <Card className="subtitle_bold my-3">
              <Card.Body>
                Can we detect COVID-19 only from cough audio of an infected person, using either
                traditional or deep learning methods?
              </Card.Body>
            </Card>
            <Card className="subtitle_bold my-3">
              <Card.Body>
                Is the CNN architecture feed with log-Mel spectrograms capable of overcoming the
                results of a traditional SVM classification with traditional feature extraction?
              </Card.Body>
            </Card>
          </Container>
          <ProjectParagraph>
            The figure below shows an overview of the C19-Audit framework. C19-Audit receives as
            input 16-bit audio files, normalize them, and fixes their minimum length to a
            predetermined value. If the audio is smaller than the minimum length, zero padding is
            applied to the end. Hence, we have a fixed-length waveform. This waveform can be used to
            compute the audio spectrogram and the audio's time-domain features [4].
          </ProjectParagraph>
          <Figure className="mx-auto text-center">
            <Figure.Image
              className="w-70"
              style={{ width: '70%' }}
              alt="Overview of C19-Audit framework"
              src={imgProcessDiagram}
            />
            <Figure.Caption className="paragraph">Overview of C19-Audit framework</Figure.Caption>
          </Figure>
          <ProjectParagraph>
            After the spectrogram generation, I generated the log Mel spectrogram, representing the
            spectrum where the frequencies have been set in the Mel Scale. A Mel scale is a unit of
            pitch proposed based on how humans distinguish between frequencies, making it very
            convenient to process sounds [5]. The Mel spectrogram, the magnitude spectrogram, and
            the waveforms were used to calculate multiple audio features.
          </ProjectParagraph>
        </ProjectSection>
        <ProjectSection key="feature-header" id="features-header" title="Features">
          <ProjectParagraph>
            Using the signal representations, I generated a set of time, frequency, and Mel
            frequency features. I used all generated features' statistics for the SVM to train the
            model, while for the CNN, the log Mel Spectrogram is set as an input feature. Therefore,
            the CNN analyze the spectrogram considering it as an image. Below you can inspect some
            of the features used:
          </ProjectParagraph>
          <FeaturesAccordion />
        </ProjectSection>
        <ProjectSection key="ds-header" id="datasets-header" title="Datasets">
          <ProjectParagraph>
            I selected two different datasets to evaluate the proposed methodology. The{' '}
            <a
              href="https://github.com/iiscleap/Coswara-Data"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--bs-primary)' }}
            >
              Coswara dataset
            </a>{' '}
            contained sound samples collected via worldwide crowdsourcing using a web application.
            The dataset has audio samples from more than 941 participants recorded at a sampling
            frequency of 48 kHz [6]. Additionally, the{' '}
            <a
              href="https://www.kaggle.com/andrewmvd/covid19-cough-audio-classification"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--bs-primary)' }}
            >
              Coughvid dataset
            </a>{' '}
            provides over 25,000 crowdsourced cough recordings representing various participants'
            demographics and COVID-19 statuses, with a subset of 2,800 recordings labeled by
            experienced physicians [2].
          </ProjectParagraph>
          <ProjectParagraph>
            A set of preprocessing and cleaning techniques were used for the datasets to be used
            adequately. On the Coughvid data set, I selected only the subset of 2.800 specially
            curated files for the classification task. This choice was motivated both by performance
            and data trustworthy issues. Additionally, the bitrate of the files was reduced from 32
            to 16, optimizing the time to train on the available hardware.
          </ProjectParagraph>
        </ProjectSection>
        <ProjectSection key="eval-header" id="eval-header" title="Performance Evaluation">
          <ProjectParagraph>
            Each database was divided into 70/30 training and validation. The experiments evaluated
            each dataset (Coswara and Coughvid) with each model (SVM and CNN). The dataset features
            were calculated in short-term using a window size of 1024, a 256 hop, and a "hann"
            window. For details on the SVM and CNN configuration, please refer to the full paper.
            The experiments were evaluated with the following metrics:
          </ProjectParagraph>
          <ListGroup className="w-100 mt-1 mb-3 subtitle" style={{ padding: '12px' }}>
            <ListGroup.Item>
              <b>Accuracy:</b> How close the models are to the correct value
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Precision:</b> How correct the positive predictions of the models were classified
              as correct, excluding false negatives
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Recall:</b> How correct the positive predictions of the models were rated correct,
              excluding false positives.
            </ListGroup.Item>
            <ListGroup.Item>
              <b>F1-Score:</b> The harmonic mean of precision and recall
            </ListGroup.Item>
            <ListGroup.Item>
              <b>AUC-ROC:</b> Aggregate measure of performance across all possible classification
              thresholds
            </ListGroup.Item>
          </ListGroup>
          <ProjectParagraph>
            F1-Score and the AUC-ROC were specially chosen due to the nature of the problem. Both
            datasets are unbalanced, with a higher amount of healthy patients. Therefore accuracy
            alone is not a good metric to be used.
          </ProjectParagraph>
        </ProjectSection>
        <ProjectSection key="exp-header" id="exp-header" title="Experimental Results">
          <ProjectParagraph>
            The following table summarizes the obtained results for each of the model-database
            combinations. Overall the SVM approach performed better than the CNN, and the Coswara
            dataset gave better models than the Coughvid. The Coswara SVM achieved the best
            precision 0.77, recall 0.72, and F1-score 0.72 while not under-performing in other
            metrics.
          </ProjectParagraph>
          <Col>
            <Row>
              <ResultsTable />
            </Row>
            <Row>
              <ProjectParagraph>
                The SVM models had a better overall performance when compared to CNN. Coswara SVM
                had the best results; below is the confusion matrix and the ROC curve of the
                classifier. Especially the Coswara results show the best curve, in which we can
                achieve almost 70% true positives with around 25% false positives.
              </ProjectParagraph>
              <ResultSVMTabs />
            </Row>
            <Row>
              <ProjectParagraph>
                While the Coswara CNN model has the best overall accuracy, its values of
                precision-recall and F1-Score are less significant than the Coswara SVM. From the
                confusion matrix, we can analyze that its results mainly predict non-COVID
                relations, which is why we should consider more than just accuracy with unbalanced
                datasets. Finally, the Coughvid CNN presented a ROC very near the random guessing
                line, which could indicate that the model had problems fitting the data.
              </ProjectParagraph>
              <ResultCNNTabs />
            </Row>
          </Col>
        </ProjectSection>
        <ProjectSection key="conc-header" id="conc-header" title="Conclusion">
          <ProjectParagraph>
            From the observable results, we can infer that the SVM with the Coswara dataset was the
            most capable of classifying the problem. However, its results could be more competitive
            when compared to recent literature. One of the possible reasons for these results is
            that cough information alone is insufficient for a precise classification. Experimental
            results also favored the traditional audio features techniques with an SVM compared to
            the CNN approach, which can be related to the simplicity of the employed CNN. Using a
            CNN with transfer learning might present better results.
          </ProjectParagraph>
          <ProjectParagraph>
            Future works could approach the problem of classifying cough audio in a time-series
            approach. It might exist features in an infected cough related to how it reverberates in
            time. Additionally, future work could explore a mixed approach classification,
            considering both the audio file and other related symptoms features.
          </ProjectParagraph>
        </ProjectSection>
      </ProjectPageContainer>
    );
  }
}

export default Covid19;
