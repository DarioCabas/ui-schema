"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidatorErrors = exports.ValidatorErrors = void 0;
var _immutable = require("immutable");
var ValidatorErrors = (0, _immutable.Record)({
  errors: (0, _immutable.Map)({}),
  childErrors: (0, _immutable.Map)({}),
  errCount: 0,
  errorsToJS: function errorsToJS() {
    return this.get('errors').toJS();
  },
  getErrors: function getErrors() {
    return this.get('errors');
  },
  getChildErrors: function getChildErrors() {
    return this.get('childErrors');
  },
  addError: function addError(type) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _immutable.Map();
    var typeErrors = this.getIn(['errors', type]);
    if (!_immutable.List.isList(typeErrors)) {
      typeErrors = new _immutable.List();
    }
    typeErrors = typeErrors.push(context);
    return this.setIn(['errors', type], typeErrors).set('errCount', this.errCount + 1);
  },
  addChildError: function addChildError(type) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _immutable.Map();
    var typeErrors = this.getIn(['childErrors', type]);
    if (!_immutable.List.isList(typeErrors)) {
      typeErrors = new _immutable.List();
    }
    typeErrors = typeErrors.push(context);
    return this.setIn(['childErrors', type], typeErrors).set('errCount', this.errCount + 1);
  },
  addChildErrors: function addChildErrors(errors) {
    var currentErr = this;
    errors.getChildErrors().keySeq().forEach(function (type) {
      errors.getChildError(type).forEach(function (error) {
        currentErr = currentErr.addChildError(type, error);
      });
    });
    return currentErr;
  },
  addErrors: function addErrors(errors) {
    var currentErr = this;
    errors.getErrors().keySeq().forEach(function (type) {
      errors.getError(type).forEach(function (error) {
        currentErr = currentErr.addError(type, error);
      });
    });
    return currentErr;
  },
  addErrorsToChild: function addErrorsToChild(errors) {
    var currentErr = this;
    errors.getErrors().keySeq().forEach(function (type) {
      errors.getError(type).forEach(function (error) {
        currentErr = currentErr.addChildError(type, error);
      });
    });
    return currentErr;
  },
  hasError: function hasError() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var typeErrors = this.getIn(type ? ['errors', type] : ['errors']);
    return !!(_immutable.List.isList(typeErrors) && typeErrors.size || _immutable.Map.isMap(typeErrors) && typeErrors.keySeq().size);
  },
  getError: function getError(type) {
    return this.getIn(['errors', type]) || new _immutable.List();
  },
  getChildError: function getChildError(type) {
    return this.getIn(['childErrors', type]) || new _immutable.List();
  }
});
exports.ValidatorErrors = ValidatorErrors;
var createValidatorErrors = function createValidatorErrors() {
  return new ValidatorErrors();
};
exports.createValidatorErrors = createValidatorErrors;