import Home from './views/Home';
import About from './views/About';
import Experience from './views/Experience';
import Achiev from './views/Achiev';
import Craft from './views/Craft';
import Papers from './views/Papers';

import Core from './views/aboutViews/Core'
import Likes from './views/aboutViews/Likes'
import Skills from './views/aboutViews/Skills'

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
    main: () => <Home/>
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
  // {
  //   path: "/crafts/my-project",
  //   main: () => <ProjectPage/>
  // },
  {
    path: "/projects",
    main: () => <Craft/>
  },
  {
    path: "/papers",
    main: () => <Papers/>
  },
];

export {
    routes,
    aboutRoutes
}
