import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';

import complexityPlotPng from '../../assets/images/projects/ecosampling/complexity_plot.png';
import currentJpg from '../../assets/images/projects/ecosampling/current.jpg';
import diagramPng from '../../assets/images/projects/ecosampling/diagram.png';
import empiricalDists2Png from '../../assets/images/projects/ecosampling/empirical_dists_2.png';
import foa2Png from '../../assets/images/projects/ecosampling/foa_2.png';
import foveated2Png from '../../assets/images/projects/ecosampling/foveated_2.png';
import ips2Png from '../../assets/images/projects/ecosampling/ips_2.png';
import orderDisorderPlotPng from '../../assets/images/projects/ecosampling/order_disorder_plot.png';
import protos2Png from '../../assets/images/projects/ecosampling/protos_2.png';
import salience2Png from '../../assets/images/projects/ecosampling/salience_2.png';
import simulationGif from '../../assets/images/projects/ecosampling/simulation.gif';
import { ProjectPageContainer } from '../../components/projects/ProjectPageContainer';
import { ProjectParagraph } from '../../components/projects/ProjectParagraph';
import { ProjectSection } from '../../components/projects/ProjectSection';
import { projectContent } from '../../content/Projects';

export const Ecosampling = (): React.JSX.Element => {
  const footerInfo = [
    {
      heading: 'Project Info',
      desc: "Developed in Master's Degree Course - Affective Computing and Natural Interaction - 2022",
    },
    {
      heading: 'Footnotes',
      desc: "1.\tBoccignone's named its approach ecological sampling because of the results reported in the foraging literature, where similar distributions characterize the moment-to-moment relocation of many animal species between and within food patches.",
    },
    {
      heading: 'References',
      desc: '[1]\tA. Borji and L. Itti, “State-of-the-art in visual attention modeling,” IEEE transactions on pattern analysis and machine intelligence, vol. 35, no. 1, pp. 185–207, 2012.\n\n[2]\tG. Boccignone and M. Ferraro, “Ecological sampling of gaze shifts,”IEEE transactions on cybernetics, vol. 44, no. 2, pp. 266-279, 2013.\n\n[3]\tL. Canosa, “Real-world vision: Selective perception and task,” ACM Transactions on Applied Perception (TAP), vol. 6, no. 2, pp. 1-34, 2009.\n\n[4]\tH. J. Seo and P. Milanfar, “Face verification using the lark representation,” IEEE Transactions on Information Forensics and Security, vol. 6, no. 4, pp. 1275–1286, 2011',
    },
  ];

  return (
    <ProjectPageContainer project={projectContent.projects.ecosampling} footer={footerInfo}>
      <ProjectSection id="intro-header" title="Introduction" variant="first">
        <ProjectParagraph>
          In Boccignone&apos;s original work [1], Ecosampling<sup>1</sup>, he considers the problem
          of the variability of visual scan paths produced by human observers. His work tries to
          mimic a fundamental property of the eye guidance mechanism:{' '}
          <i>
            <b>
              where we choose to look next at any given moment in time, it is not entirely
              deterministic, nor is it completely random [3].
            </b>
          </i>{' '}
          The core of his work strategy relies on using a mixture of alpha-stable motions modulated
          by the scene&apos;s complexity. This strategy allows exploiting the characteristics of
          long-tailed distributions of gaze shift lengths for analyzing dynamic scenes. The work
          modules the scan-paths as a Langevin-like stochastic differential equation [1] whose noise
          is sampled from the distributions to the composition of Lévy flights random walks [1].
          Thus it can treat different types of eye movement (smooth pursuit, saccades, fixational
          movements) within the same framework.
        </ProjectParagraph>
        <Figure className="mx-auto text-center">
          <Figure.Image
            className="w-100"
            style={{ backgroundColor: 'white' }}
            alt="Example of the PyEcosampling results in a given video"
            src={simulationGif}
          />
          <Figure.Caption className="paragraph">
            Example of the PyEcosampling results in a given video
          </Figure.Caption>
        </Figure>
        <ProjectParagraph>
          Considering that this project is an implementation of Ecosampling&apos;s previous work, it
          does not derive new scientific advancements to the field. However, the project still has
          the following contributions:
        </ProjectParagraph>
        <Container>
          <Card className="subtitle_bold my-3">
            <Card.Body>A light-weighted python version of the Ecosampling.</Card.Body>
          </Card>
          <Card className="subtitle_bold my-3">
            <Card.Body>
              A Python implementation of Seo et al. &quot;Static and space-time visual saliency
              detection by self-resemblance&quot; [4]
            </Card.Body>
          </Card>
          <Card className="subtitle_bold my-3">
            <Card.Body>A comprehensive web-based documentation of the work.</Card.Body>
          </Card>
        </Container>
      </ProjectSection>
      <ProjectSection id="dev-header" title="Overview">
        <ProjectParagraph>
          PyEcosampling&apos;s software architecture was devised to quickly adapt to other gaze
          sampling algorithms or multiple internal mechanisms. A developer should be able to easily
          adapt the code to change, e.g., the salience map generation or the feature map algorithm.
          Additionally, a configuration file with multiple parameters for experiment execution is
          provided to support the execution of experiments with ecological sampling. Finally, for
          experienced users, comprehensive in-code and website documentation is provided, thus
          allowing a better understanding of the system and a deeper understanding of its
          functionalities.
        </ProjectParagraph>
        <Figure className="mx-auto text-center">
          <Figure.Image
            className="w-75 p-2"
            style={{ backgroundColor: 'white' }}
            alt="Diagram of the PyEcosampling system"
            src={diagramPng}
          />
          <Figure.Caption className="paragraph">Diagram of the PyEcosampling system</Figure.Caption>
        </Figure>
        <ProjectParagraph>
          The figure above demonstrates the library classes&apos; interaction in creating a focus of
          attention for a single frame. The FrameProcessor class is responsible for loading those
          frames and computing a foveated version with a gaussian filter. The foveated image is
          passed for the FeatureMap class, which uses the backend class Seo&apos;s SelfRessemblance
          [4] to calculate the 3D LARK descriptors. Further, the same backend supports the
          SalienceMap class, which inputs the LARK features and outputs a static and space-time
          visual saliency. The ProtoParameters class can compute a patch map and identify
          proto-objects given the salience map. Following the PyEcosampling IPSampler class, the
          salience map or the proto-objects can be used to sample interest points. Those interest
          points are represented as a histogram of their empirical distributions, which is used for
          the Complexity class to calculate the landscape order, disorder, and complexity values.
          With such values, the ActionSampler can sample the appropriate gaze motion for the frame.
          Finally, the information from proto-objects, interest points, complexity, and the action
          sampled are used to compute the appropriate gaze relocation using a Langevin-like
          stochastic differential equation, whose noise source is sampled from a mixture of
          alpha-stable distributions.
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="sbs-header" title="Step-by-step">
        <StepsAccordion />
      </ProjectSection>
      <ProjectSection id="tec-header" title="Technologies">
        <ProjectParagraph>
          The PyEcosampling library relies on Python 3.8 and Tkinter, a GUI backend for matplotlib.
          Regarding the operational system. PyEcosampling was tested on macOS Monterey (version
          12.4) and Ubuntu 20. A sample sequence for demo purposes is provided with the source code.
          Additionally, PyEcosampling supports adding your clips as a sequence of ordered frames.
        </ProjectParagraph>
        <ProjectParagraph>
          PyEcosampling might be used as an application stand-alone or as an API to write your gaze
          sampling script. It should be enough to generate all the processes of gaze sampling with
          interactive visualization and data saving for your application. You can obtain different
          gaze-shifting behaviors by playing with parameters in the configuration script. If you
          want an in-depth understanding of how the project is organized or the functioning of the
          API, one documentation was developed using sphinx. This documentation was developed
          knowing that if the software is to be published as a pip package, the documentation is
          ready to be uploaded to Read the Docs.
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="res-header" title="Performance Evaluation">
        <ProjectParagraph>
          The Ecosampling&apos;s original system was implemented in plain MATLAB code with no
          specific optimizations and executed on a 2.8 GHz Intel Core 2 Duo processor, 4 GB RAM,
          under Mac OS X 10.5.81. The original paper calculates the execution time of the experiment
          in seconds per frame (spf) measurement. Regarding actual performance under such a setting,
        </ProjectParagraph>
        <ProjectParagraph>
          For the PyEcosampling, the tests were conducted in a macOS Monterey 12.4, with 2,9 GHz
          Dual-Core Intel Core i5 and 8 GB RAM. The average elapsed time for the whole processing
          amounts to 2.223 spf, a little higher than the MATLAB version. Overall, in the python
          version, the feature computation process, interest point sampling, and gaze sampling are
          higher than in MATLAB, while only the feature computation was of significant impact, 1.925
          to 1.155. Still, both implementations have the same time complexity.
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="conc-header" title="Conclusion">
        <ProjectParagraph>
          Initial tests on the PyEcological system demonstrated that the python version is
          comparable in run-time execution to the original MATLAB version. The PyEcological system
          achieves a 2.223 spf (seconds per frame) against a 2.175 spf for the original version,
          comparable results considering that Python is not a fast language. Notwithstanding,
          considering that Ecosampling is developed in Python, with complete documentation, use case
          examples, and even porting the Seo&apos;s self-resemblance work [4], hopefully, this
          framework will impact other researchers to investigate the gazing process.
        </ProjectParagraph>
        <ProjectParagraph>
          Future work opportunities rellies on reducing the execution time of Seo&apos;s feature
          processing techniques, possibly implementing a vectorized approach. Additionally, if this
          software is to be disclosed publicly, implementing command line execution and publishing
          the software in the Python Package Index (PyPI) could be of great interest.
        </ProjectParagraph>
      </ProjectSection>
    </ProjectPageContainer>
  );
};

const StepsAccordion = (): React.JSX.Element => {
  return (
    <Container className="mt-3 mb-3">
      <Accordion defaultActiveKey="0" style={{ color: 'var(--bs-white)' }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header as="h3">FrameProcessor Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              The FrameProcessor&apos;s primary purpose is to provide functions for opening and
              transforming image frames. The class has functions to create the window size frames
              from images in the local directory, apply foveated filtering to a frame, and reduce
              and resize a given frame. The figure below shows how a frame is loaded in the frame
              processor. In the way the PyEcosampling is designed, the current frame is read and its
              previous and future frames, creating a three-time-step frame. Additionally, these
              images are converted to grayscale for the rest of the experiment.
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure>
                <Figure.Image
                  className="h-100"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  alt="Frame Processor visualization of a frame"
                  src={currentJpg}
                />
                <Figure.Caption className="paragraph">
                  Frame Processor visualization of a frame
                </Figure.Caption>
              </Figure>
            </Container>
            <ProjectParagraph>
              Once the three time-step is created, the next step is to apply a digital image
              processing technique denominated foveated imaging [1]. The foveated imaging applies a
              Gaussian filter in the previous focus of attention, thus focusing the amount of detail
              in the current gaze location and reducing the resolution of surrounding areas [1].
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure>
                <Figure.Image
                  alt="Foveated Imaging of the current frame using a Gaussian filter"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={foveated2Png}
                />
                <Figure.Caption className="paragraph">
                  Foveated Imaging of the current frame using a Gaussian filter
                </Figure.Caption>
              </Figure>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header as="h3">FeatureMap Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              PyEcosampling relies on its FeatureMap class to create the features to generate the
              salience. This class is designed to be a wrapper to call backend feature computing
              methods and should be extended if future methods are to be implemented. In the
              PyEcosampling version, the FeatureMap class calls Seo&apos;s 3D-LARK description
              features to reproduce the static and space-time visual saliency by self-resemblance.
              The 3D-LARK descriptor measures a self-similarity based on the &quot;signal-induced
              distance&quot; between a center pixel and surrounding pixels in a local neighborhood.
            </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header as="h3">SalienceMap Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              After the LARK feature map calculation, the Self-Resemblance backend is ready to
              create the salience map, and it does so through the template class SalienceMap. In
              SalienceMap, just as in FeatureMap, the methodology backend to create the map is
              called and should be extended for future methods. Our approach uses the foveated 3D
              LARK feature map to create the Seo et al. static and space-time self-resemblance
              salience [4]. Overall, their method had a state-of-the-art performance on commonly
              used human eye fixation data. The figure below shows the salience map obtained in
              PyEcosampling:
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure>
                <Figure.Image
                  className="w-80"
                  alt="Salience Map with the 3D self-resemblance spatial temporal saliency method"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={salience2Png}
                />
                <Figure.Caption className="paragraph">
                  Salience Map with the 3D self-resemblance spatial temporal saliency method
                </Figure.Caption>
              </Figure>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header as="h3">ProtoParameters Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              After the salience map is generated, we can look for proto-objects in the map. The
              ProtoParameter class is responsible for creating a proto-object map and extracting
              proto-parameters. In the first step, the class generates the raw patch map by the
              threshold of the normalized salience map to achieve a 95% significance level for
              deciding whether the given saliency values are in the extreme tails. After that, only
              a subset of the best patches ranked through their size is selected. With those
              selected patches, ProtoParameters class can sample the proto proto-objects by
              computing the patch boundaries and fitting ellipses in the region. The figure below
              demonstrates the resulting patch map and its proto-objects surrounded by their
              corresponding ellipses.
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure className="mx-auto text-center">
                <Figure.Image
                  className="w-80"
                  alt="Patch map and its proto-objects surrounded by their corresponding ellipses"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={protos2Png}
                />
                <Figure.Caption className="paragraph">
                  Patch map and its proto-objects surrounded by their corresponding ellipses
                </Figure.Caption>
              </Figure>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header as="h3">IPSampler Class Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              Now that we have proto-objects, the system can sample interest points. The IPSampler
              class is responsible for sampling those points. Overall, the class controls the
              sampling of interest points. If there are no proto-objects, it will sample only from
              the landscape. If there are proto-objects, the user can choose to sample from both or
              just one. Sampling points from the proto-objects correspond to drawing samples from a
              multivariate distribution, eventually generating clusters of interest points, one for
              each patch. On the other hand, sampling points from the landscape involve sampling IPs
              directly from points weighted according to their salience. The figure below shows the
              obtainable results:
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure className="mx-auto text-center">
                <Figure.Image
                  className="w-80"
                  alt="Interest points (red dots) in the current frame. Yellow and green dots represents both all candidates and the maximum focus of attention."
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={ips2Png}
                />
                <Figure.Caption className="paragraph">
                  Interest points (red dots) in the current frame. Yellow and green dots represents
                  both all candidates and the maximum focus of attention.
                </Figure.Caption>
              </Figure>
            </Container>
            <ProjectParagraph>
              Once all the interest points are set, we can represent the IPs as a histogram of the
              Spatio-temporal configuration of the landscape. Ecosampling bases this idea on the
              landscape entropy determined by dispersion or concentration of food items or preys
              [1]. Therefore, generalizing this approach, Ecosampling can capture the time-varying
              configurational complexity of interest points within the landscape.
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure className="mx-auto text-center">
                <Figure.Image
                  className="w-80"
                  alt="Empirical Distribution for sampled IPs"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={empiricalDists2Png}
                />
                <Figure.Caption className="paragraph">
                  Empirical Distribution for sampled IPs
                </Figure.Caption>
              </Figure>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header as="h3">Complexity Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              The next step is to compute its spatial configuration complexity. The main reason for
              computing the spatial complexity is the action sampling process. Low complexity
              scenarios usually lead to longer flights, while at the edge of order or disorder, more
              complex and mixed behaviors take place [1]. In the case of a time-varying visual
              landscape, a crowded scene with many people moving represents a disordered system
              (high entropy, low order) as opposed to a static scene where no events take place (low
              entropy, high order) [1]. The figures below represent the order-disorder values
              through the execution of an experiment and the resulting complexity.
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure className="mx-auto text-center">
                <Figure.Image
                  className="w-80"
                  alt="Order and Disorder values for each frame on the end of the experiment"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={orderDisorderPlotPng}
                />
                <Figure.Caption className="paragraph">
                  Order and Disorder values for each frame on the end of the experiment
                </Figure.Caption>
              </Figure>
              <Figure className="mx-auto text-center">
                <Figure.Image
                  className="w-80"
                  alt="Complexity values on the end of the experiment"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={complexityPlotPng}
                />
                <Figure.Caption className="paragraph">
                  Complexity values on the end of the experiment
                </Figure.Caption>
              </Figure>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header as="h3">ActionSelector Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              Boccignone&apos;s Ecosampling defines three possible events that will eventually be
              identified to provide the gist of the Spatio-temporal habitat: ordered dynamics, edge
              dynamics, and disordered dynamics, each biasing the process toward a specific gaze
              shift behavior. The ActionSelector class is responsible for reading the order,
              disorder, and complexity values, updating the Dirichlet hyperparameters and sampling
              the appropriate gaze action corresponding to the alpha, beta, delta, and gamma values
              of an alpha-stable distribution.
            </ProjectParagraph>
            <ProjectParagraph>
              Summing up, the action sampling step corresponds to computing the complexity of the
              landscape as a function of sampled interest points, updating accordingly the Dirichlet
              hyperparameters, and sampling the gaze-shift action from a multinomial distribution
              [1].
            </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header as="h3">GazeSampler Class</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              With the proto-objects, the IPs and their empirical distribution, and the gaze action
              sampled, the GazeSampler class can now calculate the final Focus of Attention. The
              class computes the actual gaze relocation using a Langevin-like stochastic
              differential equation, whose noise source is sampled from a mixture of alpha-stable
              distributions. The GazeSampler class starts by getting the possible attractors for the
              FoA. It can compute one or multiple gaze attractors. If a landscape of proto-objects
              is given, then their centers are used; otherwise, attractors are determined through
              the IPs sampled from saliency. The attractors are the deterministic aspect of the
              Langevin-like SDE, and the final FoA is determined by stepping the differential
              equation. The figure below shows a resulting Focus of Attention:
            </ProjectParagraph>
            <Container className="mx-auto text-center">
              <Figure className="mx-auto text-center">
                <Figure.Image
                  className="w-80"
                  alt="Final focus of attention for the current frame"
                  style={{ width: '60%', backgroundColor: 'white' }}
                  src={foa2Png}
                />
                <Figure.Caption className="paragraph">
                  Final focus of attention for the current frame
                </Figure.Caption>
              </Figure>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
