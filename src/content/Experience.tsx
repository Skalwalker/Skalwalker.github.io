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
    description: 'Software Developer Engineer for Amazon Logistics in Luxembourg.',
  },
  {
    type: 'work',
    title: 'Data Engineer Intern',
    startYear: '2023',
    endYear: '2024',
    company: 'Amazon',
    description: 'Data Engineer Intern for Amazon Logistics in Italy.',
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
    endYear: '2023',
    company: 'Università degli Studi di Milano',
    description: 'Current GPA: 28 out of a 30 scale',
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
      'Developed Machine Learning solutions for the customer Banco do Brasil, the 2nd biggest bank in the country. We used Deep Learning, Clustering, and Natural Language Processing techniques to improve services and efficiency.',
  },
  {
    type: 'work',
    title: 'Researcher',
    startYear: '2020',
    endYear: '2021',
    company: 'Department of Computer Science, University of Brasilia',
    description:
      'Responsible for developing a product to extract structured information from the official government newsletter. The project demanded knowledge in extract information in PDF format and textual pattern recognition. Technologies included Python, Agile Methodology, Tesseract OCR Engine, Docker, and multiple others.',
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
      'Relevant Coursework: Introduction to Artificial Intelligence, Principles of Computational Vision, Fundamentals of Intelligent Systems, Linear Algebra, Probability & Statistics, Databases.',
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
      'Developed the first iOS version for the MediPreço app. MediPreço allows the user to know the best prices for medicine from nearby drugstores in a simple and practical way.',
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
      'Automation of spreadsheets in the project to survey the damages from the Bento Rodrigues dam disaster. The project was responsible for guaranteeing a social pact with the affected families, complementing and integrating several studies.',
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
