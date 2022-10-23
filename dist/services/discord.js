"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _axios = _interopRequireDefault(require("axios"));

var _medusaInterfaces = require("medusa-interfaces");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DiscordNotification = /*#__PURE__*/function (_NotificationService) {
  (0, _inherits2["default"])(DiscordNotification, _NotificationService);

  var _super = _createSuper(DiscordNotification);

  function DiscordNotification(_ref) {
    var _this;

    var orderService = _ref.orderService;
    (0, _classCallCheck2["default"])(this, DiscordNotification);
    _this = _super.call(this);
    _this.orderService_ = orderService;
    return _this;
  }

  (0, _createClass2["default"])(DiscordNotification, [{
    key: "sendNotification",
    value: function () {
      var _sendNotification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(eventName, eventData) {
        var order, URL, content, embeds;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(eventName === "order.placed")) {
                  _context.next = 11;
                  break;
                }

                _context.next = 3;
                return this.orderService_.retrieve(eventData.id, {
                  relations: ["items"]
                });

              case 3:
                order = _context.sent;
                URL = process.env.DISCORD_WEBHOOK_URL;
                content = "New Order Placed!!\u26A1\nNumber of products: ".concat(order.items.length);
                embeds = [];
                order.items.map(function (item) {
                  content += "\n\nProduct : ".concat(item.title, " \nQuantity : ").concat(item.quantity, " \nDescription:").concat(item.description);
                  embeds.push({
                    image: {
                      url: item.thumbnail
                    }
                  });
                });
                _context.next = 10;
                return _axios["default"].post(URL, {
                  content: content,
                  embeds: embeds
                });

              case 10:
                return _context.abrupt("return", {
                  to: URL,
                  data: {
                    content: content,
                    embeds: embeds
                  }
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendNotification(_x, _x2) {
        return _sendNotification.apply(this, arguments);
      }

      return sendNotification;
    }()
  }]);
  return DiscordNotification;
}(_medusaInterfaces.NotificationService);

(0, _defineProperty2["default"])(DiscordNotification, "identifier", "discord-notification");
var _default = DiscordNotification;
exports["default"] = _default;