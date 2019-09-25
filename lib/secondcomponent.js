"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SecondComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SecondComponent, _React$Component);

  function SecondComponent(props) {
    var _this;

    _classCallCheck(this, SecondComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SecondComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handlefirstname", function (e) {
      _this.setState({
        firstname: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlecity", function (e) {
      _this.setState({
        city: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlesubmit", function (e) {
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "city", function () {
      switch (_this.state.firstname) {
        case "Pakistan":
          {
            return _react["default"].createElement(_reactstrap.Input, {
              type: "select",
              onChange: _this.handlecity,
              name: "city",
              id: "exampleSelect1"
            }, _react["default"].createElement("option", null, "panjab"), _react["default"].createElement("option", null, "sindh"), _react["default"].createElement("option", null, "kpk"), _react["default"].createElement("option", null, "balochistan"), _react["default"].createElement("option", null, "Gilgitbaltistan"));
          }

        case '':
          {
            return _react["default"].createElement(_reactstrap.Input, {
              type: "select",
              onChange: _this.handlecity,
              name: "city",
              id: "exampleSelect1"
            }, _react["default"].createElement("option", null, "select the country first"));
          }

        case 'USA':
          {
            return _react["default"].createElement(_reactstrap.Input, {
              type: "select",
              onChange: _this.handlecity,
              name: "city",
              id: "exampleSelect1"
            }, _react["default"].createElement("option", null, "USA1"), _react["default"].createElement("option", null, "USA2"), _react["default"].createElement("option", null, "USA3"), _react["default"].createElement("option", null, "USA4"), _react["default"].createElement("option", null, "USA5"), _react["default"].createElement("option", null, "USA6"));
          }

        case 'China':
          {
            return _react["default"].createElement(_reactstrap.Input, {
              type: "select",
              onChange: _this.handlecity,
              name: "city",
              id: "exampleSelect1"
            }, _react["default"].createElement("option", null, "xering"), _react["default"].createElement("option", null, "hornd"), _react["default"].createElement("option", null, "bejing"), _react["default"].createElement("option", null, "chxaha"), _react["default"].createElement("option", null, "xhaln"));
          }

        default:
          {
            return _react["default"].createElement(_reactstrap.Input, {
              type: "select",
              onChange: _this.handlecity,
              name: "city",
              id: "exampleSelect1"
            }, _react["default"].createElement("option", null, "select the country first"));
          }
      }
    });

    _this.state = {
      firstname: '',
      phone: '',
      city: '',
      place: {}
    };
    return _this;
  }

  _createClass(SecondComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, " ", _react["default"].createElement("h1", null, "Second Component Module"), _react["default"].createElement(_reactstrap.Form, {
        onSubmit: this.handlesubmit
      }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
        "for": "examplfirstname"
      }, "Country"), _react["default"].createElement(_reactstrap.Input, {
        type: "select",
        name: "firstname",
        onChange: this.handlefirstname,
        id: "examplfirstname",
        placeholder: "Please select the the country",
        value: this.state.firstname
      }, _react["default"].createElement("option", null, "Select country"), _react["default"].createElement("option", null, "Pakistan"), _react["default"].createElement("option", null, "China"), _react["default"].createElement("option", null, "USA"), _react["default"].createElement("option", null, "korea"), _react["default"].createElement("option", null, "Japan"), _react["default"].createElement("option", null, "Iran"), _react["default"].createElement("option", null, "UK"), _react["default"].createElement("option", null, "India"))), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
        "for": "exampleSelect"
      }, "Province"), this.city()), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
        "for": "examplelastname"
      }, "City"), _react["default"].createElement(_reactstrap.Input, {
        type: "text",
        name: "lastname",
        onChange: this.handlelastname,
        valid: this.state.lasttext === 'lastright',
        invalid: this.state.lasttext === "lasterror",
        id: "examplelastname",
        placeholder: "enter your last name"
      })), _react["default"].createElement(_reactstrap.Button, {
        type: "submit"
      }, "Submit")));
    }
  }]);

  return SecondComponent;
}(_react["default"].Component);

var _default = SecondComponent;
exports["default"] = _default;