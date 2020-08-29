"use strict";
exports.__esModule = true;
exports.aboutRoutes = exports.routes = void 0;
var react_1 = require("react");
var Home_1 = require("./views/Home");
var About_1 = require("./views/About");
var Contact_1 = require("./views/Contact");
var Skills_1 = require("./views/Skills");
var Experience_1 = require("./views/Experience");
var Achiev_1 = require("./views/Achiev");
var Craft_1 = require("./views/Craft");
var aboutRoutes = [
    {
        path: "/about/core",
        main: function () { return (react_1["default"].createElement("div", null, "CORE")); }
    },
    {
        path: "/about/work",
        main: function () { return (react_1["default"].createElement("div", null, "WORK")); }
    },
    {
        path: "/about/likes",
        main: function () { return (react_1["default"].createElement("div", null, "LIKES")); }
    },
    {
        path: "/about/description",
        main: function () { return (react_1["default"].createElement("div", null, "DESCRIPTION")); }
    },
];
exports.aboutRoutes = aboutRoutes;
var routes = [
    {
        path: "/",
        exact: true,
        main: function () { return react_1["default"].createElement(Home_1["default"], null); }
    },
    {
        path: "/about",
        main: function () { return react_1["default"].createElement(About_1["default"], null); }
    },
    {
        path: "/skills",
        main: function () { return react_1["default"].createElement(Skills_1["default"], null); }
    },
    {
        path: "/experience",
        main: function () { return react_1["default"].createElement(Experience_1["default"], null); }
    },
    {
        path: "/achivements",
        main: function () { return react_1["default"].createElement(Achiev_1["default"], null); }
    },
    {
        path: "/crafts",
        main: function () { return react_1["default"].createElement(Craft_1["default"], null); }
    },
    {
        path: "/contact",
        main: function () { return react_1["default"].createElement(Contact_1["default"], null); }
    }
];
exports.routes = routes;
