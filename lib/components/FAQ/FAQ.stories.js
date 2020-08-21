"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookAddonMaterialUi = require("storybook-addon-material-ui");

var _Block = _interopRequireDefault(require("./Block"));

var _Question = _interopRequireDefault(require("./Question"));

var _Answer = _interopRequireDefault(require("./Answer"));

var _theme = _interopRequireDefault(require("../../style/theme"));

// Import the storybook libraries
// Import our component from this folder
(0, _react2.storiesOf)('FAQ', module).addDecorator((0, _storybookAddonMaterialUi.muiTheme)([_theme["default"]])).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Block["default"], null, /*#__PURE__*/_react["default"].createElement(_Question["default"], null, "\u041A\u0430\u043A \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442? \u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442? \u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u043E\u0438\u0442? \u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430 \u0418\u041F?"), /*#__PURE__*/_react["default"].createElement(_Answer["default"], null, "\u0411\u044B\u0441\u0442\u0440\u043E \u0438\xA0\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0432\xA0\u0421\u043E\u0432\u043A\u043E\u043C\u0431\u0430\u043D\u043A\u0435. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443, \u0432\xA0\u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0442\u0440\u0435\u0445 \u043C\u0438\u043D\u0443\u0442 \u0441\xA0\u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0431\u0430\u043D\u043A\u0430, \u0441\u043E\u043E\u0431\u0449\u0438\u0442 \u0432\u0441\u044E \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438\xA0\u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u0441\u0432\u043E\u0438\u043C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C.")), /*#__PURE__*/_react["default"].createElement(_Block["default"], null, /*#__PURE__*/_react["default"].createElement(_Question["default"], null, "Question here"), /*#__PURE__*/_react["default"].createElement(_Answer["default"], null, "Answer here")), /*#__PURE__*/_react["default"].createElement(_Block["default"], null, /*#__PURE__*/_react["default"].createElement(_Question["default"], null, "Question here"), /*#__PURE__*/_react["default"].createElement(_Answer["default"], null, "Answer here")));
});