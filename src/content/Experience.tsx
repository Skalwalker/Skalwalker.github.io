const experience = [
    {
        type: 'edu',
        title: "M.Sc. in Computer Science",
        start_year: "2021",
        end_year: "2023",
        company: "Università degli Studi di Milano",
        description: "Current GPA: 28 out of a 30 scale",
        button: false
    },
    {
        type: 'work',
        title: "Data Engineer (Freelance)",
        start_year: "2022",
        end_year: "Present",
        company: "Pharmacognosy Laboratory, UnB",
        description: "Structuring a complex database for pharmacognosy data from the cerrado plants. Additionally, developing the full-stack kit to interact with the data.",
        button: false
    },
    {
        type: 'other',
        title: "Online Courses",
        start_year: "2018",
        end_year: "Present",
        company: "DeepLearning.AI, Kaggle, and Others.",
        description: "- Deep Learning Specialization\n- DeepLearning.AI TensorFlow Developer\n- Multiple others",
        button: true,
        btn_info: [
            {
                button_link: "https://drive.google.com/file/d/1Fis_fV7AXp2BgQIkKWBqgSOZm3wysujY/view?usp=share_link",
                button_text: "Certificates"
            },
        ]
    },
    {
        type: 'other',
        title: "Social Work",
        start_year: "2018",
        end_year: "Present",
        company: "Tree-Nation & Others",
        country: "",
        description: "- Tree-Nation (2021 to Present): Portuguese volunteer translator.\n- Community Orchard (2019 to 2020): Helping in maintenance, disclosures, and other multiple tasks.\n- Junior Robotics Olympics (2018): Referee",
        button: false
    },
    {
        type: 'work',
        title: "Data Scientist",
        start_year: "2021",
        end_year: "2022",
        company: "Stefanini Brasil",
        description: "Developed Machine Learning solutions for the customer Banco do Brasil, the 2nd biggest bank in the country. We used Deep Learning, Clustering, and Natural Language Processing techniques to improve services and efficiency.",
        button: false
    },
    {
        type: 'work',
        title: "Researcher",
        start_year: "2020",
        end_year: "2021",
        company: "Department of Computer Science, University of Brasilia",
        description: "Responsible for developing a product to extract structured information from the official government newsletter. The project demanded knowledge in extract information in PDF format and textual pattern recognition. Technologies included Python, Agile Methodology, Tesseract OCR Engine, Docker, and multiple others.",
        button: true,
        btn_info: [
            {
                button_link: "https://nido.unb.br/",
                button_text: "Website"
            },
        ]
    },
    {
        type: 'edu',
        title: "B.Sc. in Computer Science",
        start_year: "2015",
        end_year: "2020",
        company: "University of Brasília (UnB)",
        description: "Relevant Coursework: Introduction to Artificial Intelligence, Principles of Computational Vision, Fundamentals of Intelligent Systems, Linear Algebra, Probability & Statistics, Databases.",
        button: true,
        btn_info: [
            {
                button_link: "https://drive.google.com/file/d/1EucHw_hUijWOBqWmUAEdsQKJ0DTm9Fsi/view?usp=share_link",
                button_text: "Certificate"
            },
        ]
    },
    {
        type: 'other',
        title: "Robotics Team",
        start_year: "2018",
        end_year: "2020",
        company: "DROID UnB",
        description: "In DROID, I was an active member participating in two competitions as a programmer, and in one of those as a project manager. Furthermore, I was Director of Fundraising, responsible for fundraising resources and sponsorship, organized two events at Campus Party and closed a R$20,000 sponsorship deal for the team.",
        button: true,
        btn_info: [
            {
                button_link: "",
                button_text: "Certificates"
            },
            {
                button_link: "https://github.com/UnbDroid/Trufes2019",
                button_text: "Trufes 2019"
            },
            {
                button_link: "https://github.com/UnbDroid/SEKMANDA-2018",
                button_text: "IEEE LARC"
            },
        ]
    },
    {
        type: 'other',
        title: "Tutoring Experience",
        start_year: "2016",
        end_year: "2019",
        company: "Department of Computer Science, UnB",
        country: "Brasília, DF, Brazil",
        description: "2019 - Automata and Computability Tutor\n2019 - Python & Github Instructor\n2018 & 2019 - Introduction to Computer Science\n2016 & 2017 - Algorithm and Computer Programming Tutor",
        button: false
    },
    {
        type: 'work',
        title: "iOS Dev (Freelancer)",
        start_year: "2017",
        end_year: "2018",
        company: "iLevel Tecnologia (Startup Company)",
        description: "Developed the first iOS version for the MediPreço app. MediPreço allows the user to know the best prices for medicine from nearby drugstores in a simple and practical way.",
        button: true,
        btn_info: [
            {
                button_link: "https://portal.medipreco.com.br/#/para-voce",
                button_text: "Website"
            },
        ]
    },
    {
        type: 'work',
        title: "Undergraduate Research Project",
        start_year: "2016",
        end_year: "2017",
        company: "Department of Computer Science, University of Brasilia",
        description: "Developed research in communication between autonomous agents to learn collaborative behaviors.",
        button: true,
        btn_info: [
            {
                button_link: "https://drive.google.com/file/d/1GrsiLPXz9egn5kK6SUATp7_Sf1mZ-3u8/view?usp=share_link",
                button_text: "Certificate"
            },
            {
                button_link: "https://github.com/Skalwalker/MRLCommunication",
                button_text: "Project"
            },
        ]
    },
    {
        type: 'other',
        title: "Winter School of Competitive Programming of SBC",
        start_year: "2017",
        end_year: "2017",
        company: "SAP São Leopoldo",
        description: "",
        button: true,
        btn_info: [
            {
                button_link: "https://drive.google.com/file/d/1nszlT2t1JHlbrMDjctS9FmGxUcVVArGt/view?usp=share_link",
                button_text: "Certificate"
            },
        ]
    },
    {
        type: 'work',
        title: "Intern",
        start_year: "2016",
        end_year: "2017",
        company: "Synergia Consultoria Socioambiental",
        description: "Automation of spreadsheets in the project to survey the damages from the Bento Rodrigues dam disaster. The project was responsible for guaranteeing a social pact with the affected families, complementing and integrating several studies.",
        button: false
    },
    {
        type: 'edu',
        title: "High School Graduation",
        start_year: "2012",
        end_year: "2015",
        company: "Centro Educacional Sigma",
        description: "",
        button: true,
        btn_info: [
            {
                button_link: "https://drive.google.com/file/d/1bcBYCVjkyH-vrdp4q2QL2kaRm7pk9ShC/view?usp=share_link",
                button_text: "Degree"
            },
        ]
    },
    {
        type: 'edu',
        title: "Student Exchange",
        start_year: "2013",
        end_year: "2014",
        company: "Santa Barbara High School",
        description: "Went to the Santa Barbara High School as an exchange student for a year. While I was there I enrolled in a computer science introduction and in a computer science AP class.",
        button: true,
        btn_info: [
            {
                button_link: "https://drive.google.com/file/d/1xqLXt6lO67s1jjzi6-4jbpcPAjUTC6kF/view?usp=share_link",
                button_text: "Certificate"
            },
        ]
    },
]


export {
    experience
}
