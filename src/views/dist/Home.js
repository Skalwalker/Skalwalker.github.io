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
var Carousel_1 = require("react-bootstrap/Carousel");
var react_bootstrap_1 = require("react-bootstrap");
var Background_1 = require("../components/Background");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (react_1["default"].createElement(Background_1["default"], null,
            react_1["default"].createElement(Carousel_1["default"], { prevIcon: (react_1["default"].createElement("div", null)), nextIcon: (react_1["default"].createElement("div", null)) },
                react_1["default"].createElement(Carousel_1["default"].Item, null,
                    react_1["default"].createElement("div", { className: "d-block w-100", style: { height: '100vh' } },
                        react_1["default"].createElement("div", { style: style.nameDiv },
                            react_1["default"].createElement("h1", { style: style.nameStyle }, "RENATO NOBRE"))),
                    react_1["default"].createElement(Carousel_1["default"].Caption, { className: 'mb-5' },
                        react_1["default"].createElement("p", null, "Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction Under Construction"),
                        react_1["default"].createElement(react_bootstrap_1.Button, { size: 'lg', variant: "outline-light", className: 'mb-3' }, "Learn More"))))));
    };
    return Home;
}(react_1["default"].Component));
var style = {
    nameDiv: {
        height: '90%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0
    },
    nameStyle: {
        fontSize: '96px',
        color: '#FFFFFF'
    }
};
exports["default"] = Home;
