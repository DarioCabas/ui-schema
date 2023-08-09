"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSchema = void 0;
var _immutable = require("immutable");
var mergeSchema = function mergeSchema(aSchema) {
  var bSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _immutable.Map)();
  if (bSchema.get('properties')) {
    if (aSchema.get('properties')) {
      aSchema = aSchema.update('properties', function (properties) {
        properties = properties.merge(bSchema.get('properties').map(function (prop, key) {
          return properties.get(key) ? mergeSchema(properties.get(key), prop) : prop;
        }));
        return properties;
      });
    } else {
      aSchema = aSchema.set('properties', bSchema.get('properties'));
    }
  }
  if (bSchema.get('required')) {
    if (aSchema.get('required')) {
      aSchema = aSchema.set('required', aSchema.get('required').concat(bSchema.get('required')));
    } else {
      aSchema = aSchema.set('required', bSchema.get('required'));
    }
  }
  if (bSchema.get('enum')) {
    aSchema = aSchema.update('enum', function () {
      var enum_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)();
      return enum_.concat(bSchema.get('enum')).toSet().toList();
    });
  }
  if (bSchema.get('oneOf')) {
    aSchema = aSchema.set('oneOf', aSchema.get('oneOf') ? aSchema.get('oneOf').concat(bSchema.get('oneOf')) : bSchema.get('oneOf'));
  }
  var bSchemaTmp = bSchema;
  bSchemaTmp = bSchemaTmp.deleteAll(['properties', 'required', 'enum']);
  aSchema = aSchema.mergeDeep(bSchemaTmp);
  return aSchema;
};
exports.mergeSchema = mergeSchema;