"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveRef = exports.SchemaRefPending = void 0;
var _resolvePointer = require("@ui-schema/ui-schema/JSONPointer/resolvePointer");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var SchemaRefPending = function (_Error) {
  _inherits(SchemaRefPending, _Error);
  var _super = _createSuper(SchemaRefPending);
  function SchemaRefPending() {
    _classCallCheck(this, SchemaRefPending);
    return _super.apply(this, arguments);
  }
  return _createClass(SchemaRefPending);
}(_wrapNativeSuper(Error));
exports.SchemaRefPending = SchemaRefPending;
var resolveRef = function resolveRef(ref, context, schemaVersion) {
  var id = context.id,
    defs = context.defs,
    rootSchema = context.root,
    getLoadedSchema = context.getLoadedSchema;
  var schema;
  if (ref.indexOf('#/definitions/') === 0 || ref.indexOf('#/$defs/') === 0) {
    var refId = ref.replace(/^#\/definitions\//, '').replace(/^#\/\$defs\//, '');
    if (!defs) {
      if (process.env.NODE_ENV === 'development') {
        console.error('definitions needed for $ref resolution', ref);
      }
    } else if (defs.get(refId)) {
      schema = (0, _resolvePointer.resolvePointer)('#/' + refId, defs);
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.error('definition not found for $ref', ref, refId);
      }
    }
  } else if (ref.indexOf('#/') === 0 || ref === '#') {
    if (!rootSchema) {
      if (process.env.NODE_ENV === 'development') {
        console.error('rootSchema needed for $ref resolution', ref);
      }
    } else {
      var targeted = (0, _resolvePointer.resolvePointer)(ref, rootSchema);
      if (targeted) {
        schema = targeted;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('JSON Pointer target schema not found for $ref', ref, rootSchema === null || rootSchema === void 0 ? void 0 : rootSchema.toJS());
        }
      }
    }
  } else if (ref.indexOf('#') === 0) {
    if (!defs) {
      if (process.env.NODE_ENV === 'development') {
        console.error('definitions needed for $ref resolution', ref);
      }
    } else {
      var def = defs.find(function (def) {
        return def.get('id') === ref || def.get('$id') === ref || def.get('$anchor') === ref.slice(1);
      });
      if (def) {
        schema = def;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('definition not found for $ref', ref);
        }
      }
    }
  } else {
    if (getLoadedSchema) {
      var loadedSchema = getLoadedSchema(ref, id, schemaVersion);
      if (loadedSchema) {
        return loadedSchema;
      }
    } else if (process.env.NODE_ENV === 'development') {
      console.error('getLoadedSchema does not exist in resolveRef, maybe UIApiProvider missing?');
    }
    throw new SchemaRefPending(ref);
  }
  return schema;
};
exports.resolveRef = resolveRef;