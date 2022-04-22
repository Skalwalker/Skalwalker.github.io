import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Achiev from './views/Achiev';
import Craft from './views/Craft';
import Core from './views/aboutViews/Core'
import Work from './views/aboutViews/Work'
import Likes from './views/aboutViews/Likes'
import Description from './views/aboutViews/Description'
import Papers from './views/Papers'
import ProjectPage from './views/ProjectPage'
// import { craft } from './content/Craft'
// import Background from './components/Background'

// const paperRoutes = () => {
//   let routes = []
//   for (let i = 0; i < craft.papers.length; i++) {
//     routes.push({path: "/papers/" + craft.crafts[i].url, main: () => <Background />})
//   }
// }

const aboutRoutes = [
    {
        path: "/about/core",
        main: () => <Core />
    },
    {
        path: "/about/work",
        main: () => <Work />
    },
    {
        path: "/about/likes",
        main: () => <Likes />
    },
    {
        path: "/about/description",
        main: () => <Description />
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
    path: "/skills",
    main: () => <Skills/>
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
  {
    path: "/contact",
    main: () => <Contact/>
  }
];

export {
    routes,
    aboutRoutes
}
