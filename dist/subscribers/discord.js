"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var DiscordNotification = /*#__PURE__*/(0, _createClass2["default"])(function DiscordNotification(_ref) {
  var notificationService = _ref.notificationService;
  (0, _classCallCheck2["default"])(this, DiscordNotification);
  // Subscribe to order.placed events
  notificationService.subscribe("order.placed", "discord-notification");
});
var _default = DiscordNotification;
exports["default"] = _default;