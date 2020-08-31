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
var react_1 = require("react");
require("../assets/css/sidebar.css");
var Background_1 = require("../components/Background");
var AchievCard_1 = require("../components/AchievCard");
var react_bootstrap_1 = require("react-bootstrap");
// Nav, Container, Row,
var Acheiv = /** @class */ (function (_super) {
    __extends(Acheiv, _super);
    function Acheiv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Acheiv.prototype.render = function () {
        return (react_1["default"].createElement(Background_1["default"], null,
            react_1["default"].createElement(react_bootstrap_1.Row, null,
                react_1["default"].createElement(react_bootstrap_1.Col, { md: 3, id: "sidebar" },
                    react_1["default"].createElement(react_bootstrap_1.Row, null,
                        react_1["default"].createElement(react_bootstrap_1.Col, { md: 9 },
                            react_1["default"].createElement("h1", null, "Title")),
                        react_1["default"].createElement(react_bootstrap_1.Col, { md: 3 },
                            react_1["default"].createElement("p", null, "Date"))),
                    react_1["default"].createElement(react_bootstrap_1.Row, { className: "text-center" },
                        react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium nunc at eros tincidunt maximus. Proin lacinia felis lobortis, mollis ex et, efficitur ante. Aenean efficitur nisl et justo blandit eleifend. Aliquam convallis egestas dolor, et semper tortor vestibulum eget. Donec tempus nisl ullamcorper, gravida leo eget, condimentum mi. Nulla eu condimentum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nulla ac lorem porttitor hendrerit non ac nibh. Donec non scelerisque est, sit amet posuere dui. Aliquam rutrum condimentum sapien mattis cursus. Nunc at risus nisi. Quisque eget risus in dui eleifend faucibus. Cras vel volutpat est, ac porta tellus. Sed in maximus ex. Maecenas aliquet faucibus varius.")),
                    react_1["default"].createElement(react_bootstrap_1.Row, null, "Placeholder IMG")),
                react_1["default"].createElement(react_bootstrap_1.Col, { md: 9, id: "page-content-wrapper" },
                    react_1["default"].createElement(react_bootstrap_1.Container, null,
                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 },
                                react_1["default"].createElement(AchievCard_1["default"], null)),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste")),
                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste")),
                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste")),
                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste")),
                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste")),
                        react_1["default"].createElement(react_bootstrap_1.Row, null,
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste"),
                            react_1["default"].createElement(react_bootstrap_1.Col, { xl: 4 }, "Teste")))))));
    };
    return Acheiv;
}(react_1["default"].Component));
exports["default"] = Acheiv;
