"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _applyPluginStack = require("@ui-schema/ui-schema/applyPluginStack");
var _useImmutable = require("@ui-schema/ui-schema/Utils/useImmutable");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ObjectGroupBase = function ObjectGroupBase(_ref) {
  var schema = _ref.schema,
    children = _ref.children,
    onSchema = _ref.onSchema;
  var currentSchema = (0, _useImmutable.useImmutable)(schema);
  _react["default"].useEffect(function () {
    if (onSchema) {
      onSchema(currentSchema);
    }
  }, [onSchema, currentSchema]);
  return children;
};
var ObjectGroup = (0, _applyPluginStack.applyPluginStack)(ObjectGroupBase);
exports.ObjectGroup = ObjectGroup;