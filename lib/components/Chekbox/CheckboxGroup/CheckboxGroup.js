"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderCheckboxItem = function renderCheckboxItem(_ref, handleChange, index) {
  var label = _ref.label,
      value = _ref.value;
  return _react["default"].createElement(_FormControlLabel["default"], {
    key: index,
    control: _react["default"].createElement(_Checkbox["default"], {
      onChange: handleChange(value),
      value: value
    }),
    label: label
  });
};

var CheckboxGroup = _react["default"].memo(function (props) {
  var options = props.options,
      error = props.error,
      helperText = props.helperText,
      _props$formLabel = props.formLabel,
      formLabel = _props$formLabel === void 0 ? {} : _props$formLabel,
      restProps = _objectWithoutProperties(props, ["options", "error", "helperText", "formLabel"]);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      checkedOptions = _useState2[0],
      setCheckedOptions = _useState2[1];

  (0, _react.useEffect)(function () {
    props.onChange(checkedOptions);
  }, [checkedOptions]);

  var handleChange = function handleChange(name) {
    return function (e) {
      if (e.target.checked) {
        setCheckedOptions(function (prevCheckedOptions) {
          return [].concat(_toConsumableArray(prevCheckedOptions), [name]);
        });
      } else {
        setCheckedOptions(function (prevCheckedOptions) {
          return prevCheckedOptions.filter(function (el) {
            return el !== name;
          });
        });
      }
    };
  };

  return _react["default"].createElement(_FormControl["default"], {
    error: error,
    component: "fieldset"
  }, formLabel.label && _react["default"].createElement(_FormLabel["default"], {
    component: "legend",
    className: formLabel.className
  }, formLabel.label), _react["default"].createElement(_FormGroup["default"], null, options.map(function (option, index) {
    return renderCheckboxItem(option, handleChange, index);
  })), helperText && _react["default"].createElement(_FormHelperText["default"], null, helperText));
});

var _default = CheckboxGroup;
exports["default"] = _default;