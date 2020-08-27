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
var Form_1 = require("react-bootstrap/Form");
var Col_1 = require("react-bootstrap/Col");
var Row_1 = require("react-bootstrap/Row");
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contact.prototype.render = function () {
        return (react_1["default"].createElement(Background_1["default"], null,
            react_1["default"].createElement(Row_1["default"], { className: "justify-content-xl-center" },
                react_1["default"].createElement(Col_1["default"], { xl: "auto", id: "page-content-wrapper", style: style.nameDiv },
                    react_1["default"].createElement(Form_1["default"], null,
                        react_1["default"].createElement(Form_1["default"].Group, { controlId: "formContact" },
                            react_1["default"].createElement(Form_1["default"].Label, { style: style.nameStyle }, "Email Address"),
                            react_1["default"].createElement(Form_1["default"].Control, { type: "email", placeholder: "Enter email" }),
                            react_1["default"].createElement(Form_1["default"].Text, { className: "text-muted", style: { color: '#FFFFFF' } }, "We'll never share your email with anyone else.")),
                        react_1["default"].createElement(Form_1["default"].Group, null,
                            react_1["default"].createElement(Form_1["default"].Label, { style: style.nameStyle }, "Subject"),
                            react_1["default"].createElement(Form_1["default"].Control, { type: "text", placeholder: "Normal text" })),
                        react_1["default"].createElement(Form_1["default"].Group, { controlId: "exampleForm.ControlTextarea1" },
                            react_1["default"].createElement(Form_1["default"].Label, { style: style.nameStyle }, "Content"),
                            react_1["default"].createElement(Form_1["default"].Control, { as: "textarea" })))))));
    };
    return Contact;
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
        fontSize: '30px',
        color: '#FFFFFF'
    }
};
exports["default"] = Contact;
