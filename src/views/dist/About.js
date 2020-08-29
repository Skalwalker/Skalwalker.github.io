"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("../assets/css/sidebar.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Background_1 = require("../components/Background");
var react_bootstrap_1 = require("react-bootstrap");
var routes_1 = require("../routes");
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (react_1["default"].createElement(Background_1["default"], null,
            react_1["default"].createElement(react_bootstrap_1.Container, { fluid: true },
                react_1["default"].createElement(react_bootstrap_1.Row, null,
                    react_1["default"].createElement(react_bootstrap_1.Col, { xs: 3, id: "sidebar-wrapper" },
                        react_1["default"].createElement(react_bootstrap_1.Nav, { className: "d-none d-md-block bg-light sidebar" },
                            react_1["default"].createElement("div", { className: "vertical" },
                                react_1["default"].createElement(react_bootstrap_1.Nav.Item, { className: 'nav-item-custom' },
                                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "/about/core" }, "Core")),
                                react_1["default"].createElement(react_bootstrap_1.Nav.Item, { className: 'nav-item-custom' },
                                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "/about/work" }, "Work")),
                                react_1["default"].createElement(react_bootstrap_1.Nav.Item, { className: 'nav-item-custom' },
                                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "/about/likes" }, "Likes")),
                                react_1["default"].createElement(react_bootstrap_1.Nav.Item, { className: 'nav-item-custom' },
                                    react_1["default"].createElement(react_bootstrap_1.Nav.Link, { href: "/about/description" }, "Description"))))),
                    react_1["default"].createElement(react_bootstrap_1.Col, { xs: 9, id: "page-content-wrapper" },
                        react_1["default"].createElement(react_router_dom_1.Switch, null, routes_1.aboutRoutes.map(function (route, index) { return (react_1["default"].createElement(react_router_dom_1.Route, { key: index, path: route.path, children: react_1["default"].createElement(route.main, null) })); })))))));
    };
    return About;
}(react_1["default"].Component));
exports["default"] = About;
