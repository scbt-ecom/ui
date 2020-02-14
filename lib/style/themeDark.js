"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var theme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'dark',
    text: {
      primary: '#fff'
    },
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#FF4B5F'
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      textPrimary: {
        // Some CSS
        background: '#003791',
        '@media (hover: none)': {
          backgroundColor: 'rgb(0, 38, 101) !important'
        },
        '&:hover': {
          backgroundColor: 'rgb(0, 38, 101)'
        }
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;