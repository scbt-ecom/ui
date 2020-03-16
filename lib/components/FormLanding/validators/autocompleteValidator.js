"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autocompleteValidator = void 0;

/**
 *
 * @param {obj} data with "value" prop
 */
var autocompleteValidator = function autocompleteValidator(data) {
  return data && data.value ? null : 'Выберите значение из списка';
};

exports.autocompleteValidator = autocompleteValidator;