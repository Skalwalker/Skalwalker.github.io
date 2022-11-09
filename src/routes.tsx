import About from './views/About';
import Experience from './views/Experience';
import Achiev from './views/Achiev';
import Projects from './views/Projects';
import Publications from './views/Publications';

import Core from './components/about/Core'
import Likes from './components/about/Likes'
import Skills from './components/about/Skills'
import Splashscreen from './views/Splashscreen';

import Covid19 from './views/projects/Covid19';
import GlobalWarming from './views/projects/GlobalWarming';
import Hare from './views/projects/Hare';
import Pacman from './views/projects/Pacman';


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
    path: "/publications",
    main: () => <Publications/>
  },
  {
    path: "/projects/covid_19",
    main: () => <Covid19/>
  },
  {
    path: "/projects/global_warming",
    main: () => <GlobalWarming/>
  },
  {
    path: "/projects/hare",
    main: () => <Hare/>
  },
  {
    path: "/projects/multiagent_pacman",
    main: () => <Pacman/>
  },
  {
    path: "/projects",
    main: () => <Projects/>
  },
]

export {
    routes,
    aboutRoutes
}
