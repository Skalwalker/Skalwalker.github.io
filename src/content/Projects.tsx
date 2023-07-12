const project = {
    tags: ["Machine Learning", "Robotics", "App/Web Dev", "Others"],
    projects: {
        "vitalsigns": {
            banner: "/img/vitalsigns.png",
            title: "Vital Signs IMU",
            tags: ["App/Web Dev", "Others"],
            language: "Matlab",
            year: "2023",
            url: "vital_signs",
            highlight: true,
            headline: "Using an iPhone IMU to measure heart and respiratory rate.",
            target: "",
            skills: "Signal Processing, Biomedical Signals, MATLAB, ICA",
            abstract: "This project uses a smartphone device to measure heart and respiratory rate, using the composite of the 3-axis from the accelerometer and the 3-axis from the gyroscope sensors. The methodology involves applying independent component analysis (ICA) and Fourier transform to identify the desired values. Results were promising for the respiratory rate with 82% accuracy, while the heart rate provided a good initial estimate, with a 6.84 MAE.",
            code_link: "https://github.com/Skalwalker/VitalSignsIMU",
            paper_link: "https://docs.google.com/presentation/d/1JFS_xKJzNkGZN91v-QUXHumuIu778Toloh1SlQQi8Po/edit?usp=share_link"
        },
        "covid": {
            banner: "/img/covid19.png",
            title: "COVID-19 Detection",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2022",
            url: "covid_19",
            highlight: true,
            headline: "Detecting COVID-19 in audio tracks from patients' coughs with CNNs.",
            target: "",
            skills: "Audio Processing, Machine Learning, MFCCs, Python, Sklearn, Signal Processing, Tensorflow",
            abstract: "I've trained CNN and SVM models to produce prescreening COVID-19 detection using only the patient's cough. During the pandemic, the availability of testing methods was one of the main challenges in containing the virus. Therefore, I designed C19-Audit, a framework to evaluate if cough audio is sufficient to detect COVID and analyze whether the CNN approach can overcome the SVM.",
            code_link: "https://github.com/Skalwalker/C19-Audit/blob/master/notebooks/main.ipynb",
            paper_link: "https://drive.google.com/file/d/1pq3GrozIeHavHbMS2vEDlmYOwQbJ91an/view?usp=sharing"
        },
        "globalwarming": {
            banner: "/img/globalwarming2.png",
            title: "Global Warming Simulation",
            tags: ["Machine Learning"],
            language: "Anylogic",
            year: "2022",
            url: "/projects/global_warming",
            highlight: true,
            headline: "Simulating global temperature with respect to CO2 emissions and deforestation.",
            target: "",
            skills: "Agent-based Simulations, Anylogic, Monte Carlo, System Dynamics",
            abstract: "At COP21, 195 nations adopted the Paris Agreement, intending to hold the increase in the global temperature to below 2°C above pre-industrial levels. Where will we be if countries disregard the agreement? I decided to simulate global warming as a relationship between CO2 emissions and world deforestation. Considering that the countries continue their historical trends, simulation results expect the world to reach the temperature recommendation in 2064.",
            code_link: "https://cloud.anylogic.com/model/ba6ea900-9637-4817-a172-226847603ebf?mode=SETTINGS&tab=GENERAL",
            paper_link:  "https://drive.google.com/file/d/1ZRBn_5ddMIygHjv697twuZtW5BbO9Cr5/view?usp=sharing"
        },
        "bigdata": {
            banner: "/img/forest.png",
            title: "ALDER",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2023",
            url: "https://github.com/Skalwalker/AntiMoneyLaundering",
            highlight: false, // true
            headline: "Anti money laundering using decision trees methods in a big data scenario.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "bioinformatics": {
            banner: "/img/dna.png",
            title: "PRADC",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2023",
            url: "https://github.com/Skalwalker/Bioinformatics",
            highlight: false,
            headline: "Prostate adenocarcinoma subtype discovery on multi-omics data clustering.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "ecosampling": {
            banner: "/img/ecosampling.png",
            title: "Gaze Shifts Sampling",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2022",
            url: "/projects/ecosampling",
            highlight: false, // true
            headline: "A Python implementation of the ecological sampling of gaze shifts.",
            target: "",
            skills: "Alpha-stable processes, Langevin SDEs, Lévy flight, Probabilistic Programming, Python, Visual Attention, Random Walks, Sphinx",
            abstract: "Modeling visual attention has been a very active research area over the past 25 years [1]. This project derived a Python implementation (PyEcosampling) of the ecological sampling of gaze shift by Boccignone et al. [2]. Their work considers the problem of the variability of visual scan paths produced by human observers. This project's primary focus is to achieve the most reproducibility from the original work, providing a reliable, well-structured python library and comprehensive documentation while maintaining performance.",
            code_link: "https://github.com/phuselab/pyEcoSampling",
            paper_link: "https://drive.google.com/file/d/1zypysCialnEkX04R1ExY0FmDJ9Jg6HyD/view?usp=sharing"
        },
        "portfolio": {
            banner: "/img/portfolio.png",
            title: "Portfolio",
            tags: ["App/Web Dev"],
            language: "Javascript",
            year: "2022",
            url: "https://github.com/Skalwalker/Skalwalker.github.io",
            highlight: false,
            headline: "This amazing website developed with React, Bootsrap, and Typescript.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "aurora": {
            banner: "/img/hare.png",
            title: "Aurora",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2021",
            url: "/projects/aurora",
            highlight: true,
            headline: "Predicting the stock market with LSTMs and Reinforcement Learning.",
            target: "",
            skills: "DDPG, Finance, LSTM, Machine Learning, Python, Reinforcement Learning, Tensorflow, Time Series",
            abstract: "Understanding the stock exchange's intrinsic rules and taking opportunities are not trivial tasks. With that in mind, we developed AURORA: a new hybrid service to trade equities in the stock market, using an autonomous agent-based approach. Using a rational agent capable of perceiving the market and acting upon its perception autonomously, AURORA can manage a portfolio achieving profitability of up to 11.74%.",
            code_link: "https://github.com/EmpyreanAI",
            paper_link: "https://rdcu.be/cysdA"
        },
        "dodfminer": {
            banner: "/img/dodfminer.png",
            title: "DODFMiner",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2020",
            url: "https://www.github.com/UnB-KnEDLe",
            highlight: false,
            headline: "Extraction of data from documents in PDF format to structured CSV.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "trufes": {
            banner: "/img/trufes.png",
            title: "TRUFES Competition",
            tags: ["Robotics"],
            language: "Beaglebone",
            year: "2019",
            url: "https://github.com/UnbDroid/Trufes2019",
            highlight: false,
            headline: "Omniwheel robot with LIDAR sensor for a package delivery simulation.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        // Number Recognition, Plants Recognition, Breast Cancer Recognition, Spam Recognition
        "datascience": {
            banner: "/img/datascience.png",
            title: "Data Science Projects",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2018",
            url: "https://github.com/Skalwalker/NumberRecognition",
            highlight: false,
            headline: "A collection of data science mini-projects from an introductory class.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "sek": {
            banner: "/img/sek.png",
            title: "IEEE SEK Competition",
            tags: ["Robotics"],
            language: "Lego Kit",
            year: "2018",
            url: "https://github.com/UnbDroid/SEKMANDA-2018",
            highlight: false,
            headline: "Autonomous car simulation competition using Lego robotic kits.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "pacman": {
            banner: "/img/arcade.png",
            title: "Multi-Agent Pacman",
            tags: ["Machine Learning"],
            language: "Python",
            year: "2017",
            url: "https://github.com/Skalwalker/MRLCommunication",
            highlight: false,
            headline: "Reinforcement Learning communication on Pac-man's ghosts.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "https://github.com/Skalwalker/MRLCommunication",
            paper_link: "https://drive.google.com/file/d/1Ms01uQN4HshG3UMca5WwqtaDDiPAgcA1/view?usp=sharing"
        },
        "medipreco": {
            banner: "/img/medipreco.png",
            title: "MediPreço",
            tags: ["App/Web Dev"],
            language: "Swift",
            year: "2017",
            url: "https://portal.medipreco.com.br",
            highlight: false,
            headline: "Developed the first iOS version of the collaborative medicine app Medipreço.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        // Panoramic, Photo Geometry, Metal Recognition
        "computervision": {
            banner: "/img/computervision.png",
            title: "Computer Vision Projects",
            tags: ["Others"],
            language: "Matlab",
            year: "2017",
            url: "https://github.com/Skalwalker/Union_images",
            highlight: false,
            headline: "A collection of computer vision mini-projects from an introductory class.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        // College Path, SPA Problem
        "graphtheory": {
            banner: "/img/graphtheory.png",
            title: "Graph Theory Projects",
            tags: ["Others"],
            language: "C/C++",
            year: "2017",
            url: "https://github.com/Skalwalker/ihc-new-matweb",
            highlight: false,
            headline: "A collection of graph theory mini-projects from an introductory class.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "zipcode": {
            banner: "/img/zipcode.png",
            title: "My Zip Code",
            tags: ["App/Web Dev"],
            language: "Swift",
            year: "2015",
            url: "https://github.com/Skalwalker",
            highlight: false,
            headline: "A simple iOS App to discover your zip code based on your location.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "quotesbook": {
            banner: "/img/quotesbook.png",
            title: "Quote's Book",
            tags: ["App/Web Dev"],
            language: "Swift",
            year: "2015",
            url: "https://github.com/Skalwalker",
            highlight: false,
            headline: "An iOS App to keep your personal favorite quotes from movies or friends.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        },
        "questionmark": {
            banner: "/img/questionmark.png",
            title: "Coming Soon",
            tags: ["Machine Learning"],
            language: "?",
            year: "0000",
            url: "https://github.com/Skalwalker",
            highlight: false,
            headline: "Always working on new amazing projects. Hope you enjoy what is coming next.",
            target: "_blank",
            skills: "",
            abstract: "",
            code_link: "",
            paper_link: ""
        }
    }
}

export {project}
