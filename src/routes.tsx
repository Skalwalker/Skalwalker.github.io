import About from './views/About';
import Experience from './views/Experience';
import Achiev from './views/Achiev';
import Projects from './views/Projects';
import Publications from './views/Publications';
import ProjectPage from './views/ProjectPage';

import Core from './components/about/Core'
import Likes from './components/about/Likes'
import Skills from './components/about/Skills'
import Splashscreen from './views/Splashscreen';


// import ProjectPage from './views/ProjectPage'

const aboutRoutes = [
    {
        path: "/about/core",
        main: () => <Core />
    },
    {
        path: "/about/likes",
        main: () => <Likes />
    },
    {
        path: "/about/skills",
        main: () => <Skills/>
    },
]

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Splashscreen/>
  },
  {
    path: "/about",
    main: () => <About/>
  },
  {
    path: "/experience",
    main: () => <Experience/>
  },
  {
    path: "/achivements",
    main: () => <Achiev/>
  },
  {
    path: "/projects/my-project",
    main: () => <ProjectPage/>
  },
  {
    path: "/projects",
    main: () => <Projects/>
  },
  {
    path: "/publications",
    main: () => <Publications/>
  },
];

export {
    routes,
    aboutRoutes
}
