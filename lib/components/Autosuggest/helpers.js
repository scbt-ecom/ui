"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullSuggestionData = getFullSuggestionData;
exports.getSuggestions = getSuggestions;
exports.getSuggestionValue = getSuggestionValue;
exports.shouldRenderSuggestions = shouldRenderSuggestions;

function getFullSuggestionData(suggestions, value) {
  return suggestions.find(function (suggestion) {
    return suggestion.value === value;
  });
}

function getSuggestions() {
  var suggestions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var inputValue = value.trim().toLowerCase();
  var inputLength = inputValue.length;
  var count = 0;
  return suggestions.filter(function (suggestion) {
    var keep = count < 5 && suggestion.value.slice(0, inputLength).toLowerCase() === inputValue;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

function getSuggestionValue(suggestion) {
  return suggestion.value;
}

function shouldRenderSuggestions() {
  return true;
}