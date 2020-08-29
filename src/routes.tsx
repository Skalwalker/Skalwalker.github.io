import React from 'react';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Achiev from './views/Achiev';
import Craft from './views/Craft';


const aboutRoutes = [
    {
        path: "/about/core",
        main: () => (<div>CORE</div>)
    },
    {
        path: "/about/work",
        main: () => (<div>WORK</div>)
    },
    {
        path: "/about/likes",
        main: () => (<div>LIKES</div>)
    },
    {
        path: "/about/description",
        main: () => (<div>DESCRIPTION</div>)
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
  {
    path: "/crafts",
    main: () => <Craft/>
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
