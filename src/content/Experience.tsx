export type ExperienceType = 'work' | 'edu' | 'other';

interface ExperienceButton {
  btnLink: string;
  btnText: string;
}

interface ExperienceContent {
  type: ExperienceType;
  title: string;
  startYear: string;
  endYear: string;
  company: string;
  description: string;
  country?: string;
  button?: ExperienceButton[];
}

export const experienceContent: ExperienceContent[] = [
  {
    type: 'work',
    title: 'Software Developer Engineer',
    startYear: '2024',
    endYear: 'Present',
    company: 'Amazon',
    description:
      'Building and owning features end-to-end on a capacity planning platform used across multiple global markets. Work spans React/TypeScript frontends, serverless microservices (Lambda, Step Functions, API Gateway), and data pipelines (Glue) on AWS.',
  },
  {
    type: 'work',
    title: 'Data Engineer Intern',
    startYear: '2023',
    endYear: '2024',
    company: 'Amazon',
    description:
      'Built and deployed ETL data pipelines for a capacity planning automation system using PySpark, AWS Glue, and S3. Designed a data validation framework and provisioned cloud infrastructure (CDK, CloudFormation, EventBridge).',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1qBgnAHSPX6MhjCzIcv7jxoMMPSRncDQO/view?usp=share_link',
        btnText: 'Certificate',
      },
    ],
  },
  {
    type: 'edu',
    title: 'M.Sc. in Computer Science',
    startYear: '2021',
    endYear: '2025',
    company: 'Università degli Studi di Milano',
    description:
      'Graduated 110/110 cum laude (highest distinction). Thesis: Simulating Global Warming by Descriptive and Predictive Models — integrating agent-based modeling and system dynamics to evaluate climate mitigation strategies.',
  },
  {
    type: 'work',
    title: 'Data Engineer (Freelance)',
    startYear: '2022',
    endYear: '2024',
    company: 'Pharmacognosy Laboratory, UnB',
    description:
      'Structuring a complex database for pharmacognosy data from the cerrado plants. Additionally, developing the full-stack kit to interact with the data.',
  },
  {
    type: 'other',
    title: 'Online Courses',
    startYear: '2018',
    endYear: 'Present',
    company: 'DeepLearning.AI, Kaggle, and Others.',
    description:
      '- Deep Learning Specialization\n- DeepLearning.AI TensorFlow Developer\n- Multiple others',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1Fis_fV7AXp2BgQIkKWBqgSOZm3wysujY/view?usp=share_link',
        btnText: 'Certificates',
      },
    ],
  },
  {
    type: 'other',
    title: 'Social Work',
    startYear: '2018',
    endYear: 'Present',
    company: 'Tree-Nation & Others',
    description:
      '- Tree-Nation (2021 to Present): Portuguese volunteer translator.\n- Community Orchard (2019 to 2020): Helping in maintenance, disclosures, and other multiple tasks.\n- Junior Robotics Olympics (2018): Referee',
  },
  {
    type: 'work',
    title: 'Data Scientist',
    startYear: '2021',
    endYear: '2022',
    company: 'Stefanini Brasil',
    description:
      'Developed ML solutions for Banco do Brasil, the second-largest bank in Brazil. Built a customer segmentation pipeline using autoencoders (TensorFlow) powering personalized experiences for 23 million app users, and an NLP classification model (scikit-learn, HuggingFace) for regulatory document analysis.',
  },
  {
    type: 'work',
    title: 'Researcher',
    startYear: '2020',
    endYear: '2021',
    company: 'Department of Computer Science, University of Brasilia',
    description:
      'Developed a document extraction software to parse and categorize government proceedings from the Federal District official gazette, supporting government transparency and public resource auditability. Built an OCR-based layer using Tesseract to digitize unstructured PDF publications.',
    button: [
      {
        btnLink: 'https://nido.unb.br/',
        btnText: 'Website',
      },
    ],
  },
  {
    type: 'edu',
    title: 'B.Sc. in Computer Science',
    startYear: '2015',
    endYear: '2020',
    company: 'University of Brasília (UnB)',
    description:
      'Thesis on autonomous agent-oriented trading systems using supervised and deep reinforcement learning, later published in Neural Computing and Applications.',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1EucHw_hUijWOBqWmUAEdsQKJ0DTm9Fsi/view?usp=share_link',
        btnText: 'Certificate',
      },
    ],
  },
  {
    type: 'other',
    title: 'Robotics Team',
    startYear: '2018',
    endYear: '2020',
    company: 'DROID UnB',
    description:
      'In DROID, I was an active member participating in two competitions as a programmer, and in one of those as a project manager. Furthermore, I was Director of Fundraising, responsible for fundraising resources and sponsorship, organized two events at Campus Party and closed a R$20,000 sponsorship deal for the team.',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1ggIQap-3dZwI6vC9PDhCgNxVYGFXYMrE/view?usp=share_link',
        btnText: 'Certificates',
      },
      {
        btnLink: 'https://github.com/UnbDroid/Trufes2019',
        btnText: 'Trufes 2019',
      },
      {
        btnLink: 'https://github.com/UnbDroid/SEKMANDA-2018',
        btnText: 'IEEE LARC',
      },
    ],
  },
  {
    type: 'other',
    title: 'Tutoring Experience',
    startYear: '2016',
    endYear: '2019',
    company: 'Department of Computer Science, UnB',
    country: 'Brasília, DF, Brazil',
    description:
      '2019 - Automata and Computability Tutor\n2019 - Python & Github Instructor\n2018 & 2019 - Introduction to Computer Science\n2016 & 2017 - Algorithm and Computer Programming Tutor',
  },
  {
    type: 'work',
    title: 'iOS Dev (Freelancer)',
    startYear: '2017',
    endYear: '2018',
    company: 'iLevel Tecnologia (Startup Company)',
    description:
      'Designed and developed the first iOS version of MediPreço (Swift, Xcode), a mobile app enabling users to locate nearby drugstores, compare medicine prices, and find the best deals in their area.',
    button: [
      {
        btnLink: 'https://portal.medipreco.com.br/#/para-voce',
        btnText: 'Website',
      },
    ],
  },
  {
    type: 'work',
    title: 'Undergraduate Research Project',
    startYear: '2016',
    endYear: '2017',
    company: 'Department of Computer Science, University of Brasilia',
    description:
      'Developed research in communication between autonomous agents to learn collaborative behaviors.',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1GrsiLPXz9egn5kK6SUATp7_Sf1mZ-3u8/view?usp=share_link',
        btnText: 'Certificate',
      },
      {
        btnLink: 'https://github.com/Skalwalker/MRLCommunication',
        btnText: 'Project',
      },
    ],
  },
  {
    type: 'other',
    title: 'Winter School of Competitive Programming of SBC',
    startYear: '2017',
    endYear: '2017',
    company: 'SAP São Leopoldo',
    description: '',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1nszlT2t1JHlbrMDjctS9FmGxUcVVArGt/view?usp=share_link',
        btnText: 'Certificate',
      },
    ],
  },
  {
    type: 'work',
    title: 'Intern',
    startYear: '2016',
    endYear: '2017',
    company: 'Synergia Consultoria Socioambiental',
    description:
      'Developed Excel VBA automation to streamline damage data collection and reporting for affected families following the Bento Rodrigues dam disaster, enabling structured compensation requests as part of a broader social reparation effort.',
  },
  {
    type: 'edu',
    title: 'High School Graduation',
    startYear: '2012',
    endYear: '2015',
    company: 'Centro Educacional Sigma',
    description: '',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1bcBYCVjkyH-vrdp4q2QL2kaRm7pk9ShC/view?usp=share_link',
        btnText: 'Degree',
      },
    ],
  },
  {
    type: 'edu',
    title: 'Student Exchange',
    startYear: '2013',
    endYear: '2014',
    company: 'Santa Barbara High School',
    description:
      'Went to the Santa Barbara High School as an exchange student for a year. While I was there I enrolled in a computer science introduction and in a computer science AP class.',
    button: [
      {
        btnLink:
          'https://drive.google.com/file/d/1xqLXt6lO67s1jjzi6-4jbpcPAjUTC6kF/view?usp=share_link',
        btnText: 'Certificate',
      },
    ],
  },
];
