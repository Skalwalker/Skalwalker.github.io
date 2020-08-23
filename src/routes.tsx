import React from 'react';
import Home from './views/Home';
import About from './views/About';

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
    main: () => <h2>opa</h2>
  },
  {
    path: "/experience",
    main: () => <h2>opa</h2>
  },
  {
    path: "/achivements",
    main: () => <h2>opa</h2>
  },
  {
    path: "/crafts",
    main: () => <h2>opa</h2>
  },
  {
    path: "/contact",
    main: () => <h2>opa</h2>
  }
];

export { 
    routes, 
    aboutRoutes
}