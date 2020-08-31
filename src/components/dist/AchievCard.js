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
var Card_1 = require("react-bootstrap/Card");
var AchievCard = /** @class */ (function (_super) {
    __extends(AchievCard, _super);
    function AchievCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AchievCard.prototype.render = function () {
        return (react_1["default"].createElement(Card_1["default"], { style: { width: '18rem' } },
            react_1["default"].createElement(Card_1["default"].Img, { variant: "left" }),
            react_1["default"].createElement(Card_1["default"].Body, null,
                react_1["default"].createElement(Card_1["default"].Title, null, "Card Title"),
                react_1["default"].createElement(Card_1["default"].Text, null, "02/06/1997"))));
    };
    return AchievCard;
}(react_1["default"].Component));
exports["default"] = AchievCard;
