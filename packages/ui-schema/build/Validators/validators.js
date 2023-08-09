"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validators = void 0;
var _RequiredValidator = require("@ui-schema/ui-schema/Validators/RequiredValidator");
var _MinMaxValidator = require("@ui-schema/ui-schema/Validators/MinMaxValidator");
var _TypeValidator = require("@ui-schema/ui-schema/Validators/TypeValidator");
var _MultipleOfValidator = require("@ui-schema/ui-schema/Validators/MultipleOfValidator");
var _ValueValidator = require("@ui-schema/ui-schema/Validators/ValueValidator");
var _PatternValidator = require("@ui-schema/ui-schema/Validators/PatternValidator");
var _ArrayValidator = require("@ui-schema/ui-schema/Validators/ArrayValidator");
var _ObjectValidator = require("@ui-schema/ui-schema/Validators/ObjectValidator");
var _OneOfValidator = require("@ui-schema/ui-schema/Validators/OneOfValidator");
var validators = [_RequiredValidator.requiredValidator, _MinMaxValidator.minMaxValidator, _TypeValidator.typeValidator, _MultipleOfValidator.multipleOfValidator, _ValueValidator.valueValidatorConst, _ValueValidator.valueValidatorEnum, _PatternValidator.patternValidator, _ArrayValidator.arrayValidator, _ObjectValidator.objectValidator, _OneOfValidator.oneOfValidator];
exports.validators = validators;