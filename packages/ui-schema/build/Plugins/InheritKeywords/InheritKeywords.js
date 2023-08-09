"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InheritKeywords = void 0;
var InheritKeywords = function InheritKeywords(keywords, should) {
  return {
    should: should,
    handle: function handle(_ref) {
      var parentSchema = _ref.parentSchema,
        schema = _ref.schema;
      var newSchema = schema;
      if (parentSchema) {
        keywords.forEach(function (keyword) {
          var foundKeyword = Array.isArray(keyword) ? parentSchema.getIn(keyword) : parentSchema.get(keyword);
          if (foundKeyword !== undefined) {
            newSchema = Array.isArray(keyword) ? newSchema.setIn(keyword, foundKeyword) : newSchema.set(keyword, foundKeyword);
          }
        });
      }
      return {
        schema: newSchema
      };
    }
  };
};
exports.InheritKeywords = InheritKeywords;