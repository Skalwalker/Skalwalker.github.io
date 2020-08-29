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
var Background_1 = require("../components/Background");
var react_bootstrap_1 = require("react-bootstrap");
// Nav, Container, Row,
var Craft = /** @class */ (function (_super) {
    __extends(Craft, _super);
    function Craft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Craft.prototype.render = function () {
        return (react_1["default"].createElement(Background_1["default"], null,
            react_1["default"].createElement(react_bootstrap_1.Col, { xs: 12, id: "page-content-wrapper" })));
    };
    return Craft;
}(react_1["default"].Component));
exports["default"] = Craft;
