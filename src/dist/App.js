"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var routes_1 = require("./routes");
function App() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_bootstrap_1.Navbar, { style: { height: '8vh', zIndex: 100 }, bg: "light", expand: "md" },
                    react_1["default"].createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
                    react_1["default"].createElement(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav" },
                        react_1["default"].createElement(react_bootstrap_1.Nav, { className: "ml-auto" },
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/" }, "Home"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/about" }, "About"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/skills" }, "Skills"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/experience" }, "Experience"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/achivements" }, "Achivements"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/crafts" }, "Crafts"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: 'nav-link', to: "/contact" }, "Contact Me"))))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_router_dom_1.Switch, null, routes_1.routes.map(function (route, index) { return (react_1["default"].createElement(react_router_dom_1.Route, { key: index, path: route.path, exact: route.exact, children: react_1["default"].createElement(route.main, null) })); }))))));
}
exports["default"] = App;
