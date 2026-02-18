import React from 'react';

import { ProjectPageContainer } from '../../components/projects/ProjectPageContainer';
import { ProjectSection } from '../../components/projects/ProjectSection';
import { ProjectParagraph } from '../../components/projects/ProjectParagraph';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import '../../assets/css/font.css';
import '../../assets/css/tabs.css';
import '../../assets/css/projects.css';

import { projectContent } from '../../content/Projects';

import systemImg from '../../assets/images/projects/aurora/system.png';
import returnImg from '../../assets/images/projects/aurora/return.png';
import fronteiraImg from '../../assets/images/projects/aurora/fronteira.png';
import insiderImg from '../../assets/images/projects/aurora/insider.png';
import rmmImg from '../../assets/images/projects/aurora/rmm.png';
import resamImg from '../../assets/images/projects/aurora/resam.png';
import vale3PredImg from '../../assets/images/projects/aurora/VALE3_pred.png';
import petr3PredImg from '../../assets/images/projects/aurora/PETR3_pred.png';
import abev3PredImg from '../../assets/images/projects/aurora/ABEV3_pred.png';
import vale3LossImg from '../../assets/images/projects/aurora/VALE3_LOSS.png';
import petr3LossImg from '../../assets/images/projects/aurora/PETR3_LOSS.png';
import abev3LossImg from '../../assets/images/projects/aurora/ABEV3_LOSS.png';

export const Hare = (): React.JSX.Element => {
  const footerInfo = [
    {
      heading: 'Project Info',
      desc: 'Undergraduate Dissertation - Published @ Neural Computing and Application - 2022',
    },
    {
      heading: 'Developers',
      desc: 'Renato A Nobre, Khalil C. do Nascimento',
    },
    {
      heading: 'Contributors',
      desc: 'Geraldo P. Rocha Filho, Patricia A. Vargas, Alan Demétrius Baria Valejo, Gustavo Pessin, Leandro A. Villas',
    },
    {
      heading: 'Footnotes',
      desc: '1.\tThe fundamental analysis concerns studying the company that underlies the stock itself and the sentiment around it. In contrast, technical analysis focuses on predicting the future price of a stock by studying its price trends [1].\n\n2.\tAll used data are public available on the B3 stock market website: www.b3.com.br\n\n3.\tA detailed description of the hyper-parametrization process is left for the complete paper.\n\n4.\tStrategy used by investors who decide to buy an asset for the long term.',
    },
    {
      heading: 'References',
      desc: '[1]\tLam, M.: Neural network techniques for financial performance prediction: integrating fundamental and technical analysis. Decision support systems 37(4), 567-581 (2004).\n\n[2]\tGoodfellow, I., Bengio, Y., Courville, A.: Deep learning. MIT press (2016).\n\n[3]\tMarkowitz, H.: Portfolio selection, journal of finance. Markowitz HM—1952 pp. 77-91 (1952)\n\n[4]\tSharpe, W.F.: Mutual fund performance. The Journal of business 39(1), 119–138 (1966)',
    },
  ];

  return (
    <ProjectPageContainer project={projectContent.projects.aurora} footer={footerInfo}>
      <ProjectSection id="intro-header" title="Introduction" variant="first">
        <ProjectParagraph>
          The study of financial markets and potential predictions of exchanges allow investors to
          increase their profits and better understand their investments&apos; behavior. Among
          different types of financial markets, the stock market stands out in popularity. This
          market negotiates fractions of company assets, denominated stocks, or other publicly
          listed companies&apos; financial instruments. Investors trading their stocks in the market
          are guided by some form of prediction or analysis, such as studying the price&apos;s
          behavior or reading the company&apos;s economic report.
        </ProjectParagraph>
        <ProjectParagraph>
          This work supports the hypothesis that it is possible to model a high-accuracy service to
          predict the stock&apos;s movement and trade market assets based on technical and
          fundamental<sup>1</sup> analysis. AURORA is based on a rational agent, a computational
          entity capable of perceiving the market and acting upon its perception autonomously. As
          proof of concept, AURORA was designed to operate a swing trade on a portfolio on the B3
          stock exchange, the Brazilian market. The considered portfolio had shares of 3 Brazilian
          companies: Petrobras (PETR3), Ambev (ABEV3), and Vale S.A. (VALE3).
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="overview-header" title="Overview">
        <ProjectParagraph>
          AURORA takes advantage of time series from historical data of assets and fundamental
          analysis variables in its investment process. Through an LSTM, time series are used to
          predict a given asset&apos;s value. On the other hand, the fundamental variables observe
          the existence of possible risks in the asset. Such information is used as input to a deep
          reinforcement learning model to manage the investor&apos;s resources in his portfolio. As
          a result, AURORA was designed into three modules: (i) the <b>Insider</b>, a predictor
          module that can predict the stocks&apos; movements; (ii) a <b>risk management module</b>{' '}
          to deal with market volatility through the news and (iii) an <b>agent module</b>, a
          rational actuator that aims to allocate the resources available to the agent and act upon
          them. The Figure below shows an overview of AURORA&apos;s service and operation.
        </ProjectParagraph>
        <Figure className="mx-auto text-center">
          <Figure.Image
            className="w-80"
            style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
            src={systemImg}
          />
          <Figure.Caption className="paragraph">
            AURORA&apos;s operational scenario presents the process flow, from data gathering to
            market interaction. The Figure highlights the Agent Module and its submodules
          </Figure.Caption>
        </Figure>
        <AuroraModules />
      </ProjectSection>
      <ProjectSection id="method-header" title="Environment">
        <ProjectParagraph>
          To interact with the reinforcement learning algorithm, it was necessary to develop an
          environment simulating the B3 stock market. This environment is designed for training and
          testing the DDPG model and defines the state space, action space, and reward function. The
          following definitions were used:
        </ProjectParagraph>
        <ListGroup className="w-100 mt-1 mb-3 subtitle" style={{ padding: '12px' }}>
          <ListGroup.Item>
            <b>State-Space:</b> Quantity of deallocated money, how much the portfolio is yielding,
            and for each invested asset: the price, prediction, profitability, risk, and amount in
            the portfolio.
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Action Space:</b> Vector of actions the agent should make for the assets at the time
            step. Actions include: buying, selling, or holding and are represented through
            percentages of quantities and available money.
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Reward:</b> Profit of a Sale, Stock valorization on holding, Buying penalty (because
            money is being spent), Loss penalty (unprofitable sale).
          </ListGroup.Item>
        </ListGroup>
      </ProjectSection>
      <ProjectSection id="method-header" title="Methodology">
        <ProjectParagraph>
          The dataset used to feed the service of AURORA was obtained manually from the B3 official
          website<sup>2</sup>. The website provides daily information from assets since 1986, such
          as company name and code, stock code, market type, pricing, number of trades, and volume
          traded with paper. AURORA&apos;s model uses a semester time window for training,
          validation, and testing. In our approach, the agent&apos;s portfolio comprised the VALE3,
          PETR3, and ABEV3 assets. We made predictions on the assets&apos; closing price as it
          reflects the day&apos;s movements in the market. The label of our data was created using a
          discrete approach for each asset at each time step, indicating whether an asset will gain
          or lose value.
        </ProjectParagraph>
        <ProjectParagraph>
          The validation of our proposed service was then broken down into two individual
          validations. First, we analyzed whether the Insiders could predict the stock direction
          correctly. Second, we uncovered whether the DDPG ResAM would be able to handle a portfolio
          allocation, given that it knows when stock will increase or decrease in value.
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="dev-header" title="Stock Prediction">
        <ProjectParagraph>
          Concerning the ability to predict the movement of a stock, the objective was to determine
          if it was feasible to model an LSTM in a decision system like AURORA. Each stock was
          trained using the hyper parameterization process&apos;s best settings
          <sup>3</sup>. The experiment consisted of K-fold cross-validation, with k = 6, for
          multiple window sizes.
        </ProjectParagraph>
        <ResultsTabs />
      </ProjectSection>
      <ProjectSection id="res-header" title="Portfolio Allocation">
        <ProjectParagraph>
          Next, we needed to evaluate AURORA&apos;s efficiency in resource allocation. The objective
          was to prove that AURORA could manage a portfolio with multiple assets in a stock market.
          Therefore, we compared AURORA with the Savings Profitability and a buy and hold strategy
          <sup>4</sup>. The table below presents the parameters established to carry out the
          experiments. We used the following performance measures to evaluate the efficiency of
          AURORA: profit, profitability, return and yield.
        </ProjectParagraph>
        <RLTable />
        <ProjectParagraph>
          We built our portfolio with the PETR3, VALE3, and ABEV3 assets and with the parameters of
          the table above. The agent&apos;s initial investment money was defined as R$ 50,000.00,
          allowing for multiple investment possibilities. The figure below shows the behavior of the
          average return during the experiments.
        </ProjectParagraph>
        <Figure className="mx-auto text-center">
          <Figure.Image
            className="w-80"
            style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
            src={returnImg}
          />
          <Figure.Caption className="paragraph">
            Performance evaluation of the average return of portfolio
          </Figure.Caption>
        </Figure>
        <ProjectParagraph>
          To compare AURORA&apos;s profit to a buy-and-hold strategy is necessary to create such a
          comparison portfolio. When an investment with more than one asset is created, the
          possibility of portfolio compositions is endless. In this project, the comparison
          portfolio created was based on the Markowitz Mean-Variance theory [3]. It states that the
          construction process of an optimal portfolio considers the quantification of each
          asset&apos;s profit and risk with the objective of creating a frontier of the most
          efficient portfolios [3]. This frontier is presented with the set of portfolios that
          theoretically provides the higher return with the lowest risk. Markowitz&apos;s efficient
          frontier for the selected asset composition is shown in the figure below. The color of
          each portfolio combination is related to an indicator that helps to find a balance point
          between risk and return, called Sharpe ratio [4]. We then calculated the efficient
          frontier with a set of 25,000 random simulations. For the comparison, we considered two
          portfolios with the lowest risk and the highest Sharpe ratio, represented by the green and
          red markers. The lowest risk portfolio estimates a half-yearly return of 1.18%, with a
          risk of 45%. On the other hand, Sharpe&apos;s highest ratio portfolio has a potential
          return of 4.28% with a risk of 80%.
        </ProjectParagraph>
        <Figure className="mx-auto text-center">
          <Figure.Image
            className="w-80"
            style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
            src={fronteiraImg}
          />
          <Figure.Caption className="paragraph">Portfolio-based efficient frontier</Figure.Caption>
        </Figure>
        <ProjectParagraph>
          The table below shows the results obtained from the AURORA portfolio, comparing it with
          the efficient frontier portfolios and the savings. If the investor decided to migrate to
          the lower-risk portfolio, the investor would obtain a total yield of -R$3000.00. The
          investor who decided to take the portfolio with the highest Sharpe ratio would lose
          R$3,984.00 of the money invested. In contrast, AURORA made a profit of R$5,874.00, a
          return of 11.74% more significant than the actual and projected returns of the portfolios
          considered efficient. The yield obtained is also 250.44% greater than the savings yield.
        </ProjectParagraph>
        <ResultsTable />
      </ProjectSection>
      <ProjectSection id="conc-header" title="Conclusion">
        <ProjectParagraph>
          Experimental results show that the proposed service can predict the gain or loss of value
          at the price of a stock with an accuracy higher than 82.86% in the worst case and 89.23%
          in the best case. Furthermore, the proposed service can achieve profitability of 11.74%,
          overcoming fixed-income investments and portfolios built with the Markowitz Mean-Variance
          model. These results corroborate the hypothesis that AURORA is a reliable service to trade
          assets in the stock market with high precision and stability.
        </ProjectParagraph>
        <ProjectParagraph>
          In future works, we propose a rational model for the RMM, better-using information from
          fundamental variables. Furthermore, future research can also implement the following:
          hyper-parameterization of the DDPG using Hyperopt, experimenting with more input features
          for the LSTM model, studying possible reformulations of the B3 environment, and
          discretizing the actions space to implement the Deep Q-Network algorithm.
        </ProjectParagraph>
      </ProjectSection>
    </ProjectPageContainer>
  );
};

const AuroraModules = (): React.JSX.Element => {
  return (
    <Container className="mt-3 mb-3">
      <Accordion defaultActiveKey="0" style={{ color: 'var(--bs-white)' }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header as="h3">
            Insiders - Predictor Module for Stock&apos;s Movements
          </Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              The insider module is one of the central rational modules. Its task is to support the
              resource allocation model, predicting the movement of a specific stock. Insider units
              gather their data from the database of a stock exchange, where multiple pieces of
              information are available to be used as input, such as closing and opening prices and
              volume. The prediction made by the Insider takes the shape of a binary value, one
              indicating that a stock is increasing in value and zero showing a decrease.
            </ProjectParagraph>
            <Figure className="mx-auto  text-center">
              <Figure.Image
                className="w-80"
                style={{ width: '60%', backgroundColor: 'white', padding: '10px' }}
                src={insiderImg}
              />
              <Figure.Caption className="paragraph">Overview of the Insider module</Figure.Caption>
            </Figure>
            <ProjectParagraph>
              In our service, Insiders were modeled based on an LSTM, a gated RNN network. Gated
              RNNs were chosen because of their principle of creating paths through time with
              derivatives that neither vanish nor explode [2]. With this, the LSTM can decide what
              information it wants to keep or forget, aiming at improving the decision-making
              process&apos;s accuracy.
            </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header as="h3">Risk Management Module</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              The use of time series in the stock market can lead to promising information in
              predictions, but more is needed to generate robust models. To address market
              volatility about external influences, the RMM was modeled into AURORA. The RMM&apos;s
              goal is to make a fundamental analysis using multiple sources of information to
              reflect an asset&apos;s present situation in the market.
            </ProjectParagraph>
            <Figure className="mx-auto text-center">
              <Figure.Image
                className="w-80"
                style={{ width: '80%', backgroundColor: 'white', padding: '10px' }}
                src={rmmImg}
              />
              <Figure.Caption className="paragraph">Risk Management Module</Figure.Caption>
            </Figure>
            <ProjectParagraph>
              RMM is modeled in this research using the volume of queries of an asset on Google
              Trends. The data from Google Trends is provided in weekly values of interest for the
              desired term. When the research interest is below a threshold, the mechanism does not
              pose a risk to the asset. On the other hand, when the interest passes the threshold, a
              risk is indicated.
            </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header as="h3">Agent Module and Resource Allocation Model</Accordion.Header>
          <Accordion.Body className="text-left">
            <ProjectParagraph>
              AURORA&apos;s service has an agent-based structure in which the agent can be seen as a
              trader, which aims to maximize its profit and reduce risks, making decisions in its
              user&apos;s portfolio. The agent has a wallet where unallocated money is stored, a
              portfolio, and a set of user-chosen assets in which the agent invests its available
              money.
            </ProjectParagraph>
            <Figure className="mx-auto text-center">
              <Figure.Image
                className="w-90"
                style={{ width: '90%', backgroundColor: 'white', padding: '10px' }}
                src={resamImg}
              />
              <Figure.Caption className="paragraph">
                Overview - Resource Allocation Model (ResAM)
              </Figure.Caption>
            </Figure>
            <ProjectParagraph>
              Decisions made by the agent are supported by its Resource Allocation Model (ResAM).
              The module receives as input information on the direction of the stocks provided by
              its Insiders and information from the RMM, which decides whether an asset is a
              liability that could place the agent&apos;s profit in jeopardy. After learning, the
              model decides which asset should be sold or bought at each step. AURORA&apos;s ResAM
              was modeled based on a deep reinforcement learning model, denominated Deep
              Deterministic Policy Gradient (DDPG). In such, the entity will need to learn how to
              map the market&apos;s state with responsive actions, aiming to increase its profits
              and reduce risks.
            </ProjectParagraph>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

const ResultsTable = (): React.JSX.Element => {
  return (
    <Container>
      <Table striped bordered className="mt-1 mb-3 subtitle" responsive>
        <thead>
          <tr>
            <th colSpan={2}>Portfolios</th>
            <th>Estimated</th>
            <th>Real</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>Lower risk</td>
            <td>Profit</td>
            <td>R$590.00</td>
            <td>-R$3,000.00</td>
          </tr>
          <tr>
            <td>Profitability</td>
            <td>1.18%</td>
            <td>-6%</td>
          </tr>
          <tr>
            <td rowSpan={2}>Higher risk</td>
            <td>Profit</td>
            <td>R$2,140.00</td>
            <td>-R$3,984.00</td>
          </tr>
          <tr>
            <td>Profitability</td>
            <td>4.28%</td>
            <td>-7.96%</td>
          </tr>
          <tr>
            <td rowSpan={3}>AURORA</td>
            <td>Profit</td>
            <td>-</td>
            <td>R$5,874.00</td>
          </tr>
          <tr>
            <td>Profitability</td>
            <td>-</td>
            <td>11.74%</td>
          </tr>
          <tr>
            <td>Yield - Savings</td>
            <td>-</td>
            <td>250.44%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

const RLTable = (): React.JSX.Element => {
  return (
    <Container>
      <Table striped bordered className="mt-1 mb-3 subtitle" responsive>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Standard value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Epoch</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Steps by epoch</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Policy learning rate</td>
            <td>0.0005</td>
          </tr>
          <tr>
            <td>Q-Value learning rate</td>
            <td>0.0001</td>
          </tr>
          <tr>
            <td>Buffer</td>
            <td>500,000</td>
          </tr>
          <tr>
            <td>Batch Size</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Initial Steps</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Noise</td>
            <td>1.0</td>
          </tr>
          <tr>
            <td>Hidden Layer</td>
            <td>(16, 16)</td>
          </tr>
          <tr>
            <td>Activation function - Hidden Layer</td>
            <td>ReLU</td>
          </tr>
          <tr>
            <td>Activation function - Output Layer</td>
            <td>Tanh</td>
          </tr>
          <tr>
            <td>Test episodes</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

const ResultsTabs = (): React.JSX.Element => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="best_case"
        id="uncontrolled-tab-example"
        className="mt-1 mb-3 w-100 subtitle"
        fill
      >
        <Tab eventKey="best_case" title="Prediction Plots" className="w-100 text-left">
          <ProjectParagraph>
            We analyzed how AURORA&apos;s LSTM model behaved in an actual market situation. The goal
            was to understand the behavior of the predictions over the days. As can be seen in the
            results, the accuracy was satisfactory for all evaluated stocks. In the worst case, we
            obtained an accuracy of 80% for VALE3. In contrast, ABEV3 and PETR3 achieved 88% and 93%
            accuracy, respectively. Despite the promising results, it is noted that the LSTM has a
            limitation in predicting sudden movement direction changes. On the other hand, in the
            stock&apos;s continuous movements, the modeled LSTM showed great accuracy and ensured
            that its previous errors did not affect its performance.
          </ProjectParagraph>
          <Figure className="mx-auto text-center">
            <Row className="mx-auto">
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size_2"
                  style={{ backgroundColor: 'white' }}
                  alt="VALE3"
                  src={vale3PredImg}
                />
                <Figure.Caption className="paragraph">VALE3</Figure.Caption>
              </Col>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="PETR3"
                  src={petr3PredImg}
                />
                <Figure.Caption className="paragraph">PETR3</Figure.Caption>
              </Col>
            </Row>
          </Figure>
          <Figure className="mx-auto text-center">
            <Figure.Image
              className="proper_img_size_3"
              style={{ backgroundColor: 'white' }}
              alt="ABEV3"
              src={abev3PredImg}
            />
            <Figure.Caption className="paragraph">ABEV3</Figure.Caption>
          </Figure>
          <ProjectParagraph>
            The plots show the predictions made by AURORA&apos;s LSTM model for each stock. The cyan
            line represents the average price in specific time steps. The blue line is the closing
            price of the stock on that day. The markers represent the correctness of the
            predictions.
          </ProjectParagraph>
        </Tab>
        <Tab eventKey="likely_case" title="Training Plots" className="w-100 text-left">
          <ProjectParagraph>
            The figures below present the loss value behavior in 5000 epochs of training. In the top
            right, the boxplot shows the dispersion of the cross-validation accuracies for each
            time-step size. We can notice that over time, such models converged and stabilized
            before completing 500 training seasons. These findings indicate the ability to
            generalize models to predict the movement of a given stock without overfitting.
            Additionally, due to the boxplot&apos;s interquartile amplitude, we can infer that it is
            possible to model an LSTM in AURORA with a stable, high-accuracy prediction.
          </ProjectParagraph>
          <Figure className="mx-auto text-center">
            <Row className="mx-auto">
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="VALE3"
                  src={vale3LossImg}
                />
                <Figure.Caption className="paragraph">
                  VALE3 - Performance evaluation of decision-making process for multiple time-steps
                </Figure.Caption>
              </Col>
              <Col md={6} sm={12}>
                <Figure.Image
                  className="proper_img_size"
                  style={{ backgroundColor: 'white' }}
                  alt="PETR3"
                  src={petr3LossImg}
                />
                <Figure.Caption className="paragraph">
                  PETR3 - Performance evaluation of decision-making process for multiple time-steps
                </Figure.Caption>
              </Col>
            </Row>
          </Figure>
          <Figure className="mx-auto text-center">
            <Figure.Image
              className="proper_img_size_3"
              style={{ backgroundColor: 'white' }}
              alt="ABEV3"
              src={abev3LossImg}
            />
            <Figure.Caption className="paragraph">
              ABEV3 - Performance evaluation of decision-making process for multiple time-steps
            </Figure.Caption>
          </Figure>
        </Tab>
      </Tabs>
    </Container>
  );
};
