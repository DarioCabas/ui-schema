"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withShortcuts = void 0;
var _slate = require("slate");
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
var _editorIsEnabled = require("@ui-schema/material-slate/Slate/editorIsEnabled");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SHORTCUTS = {
  '-': _pluginOptions.pluginOptions.li.type,
  '+': _pluginOptions.pluginOptions.li.type,
  '1': _pluginOptions.pluginOptions.ol.type,
  '>': _pluginOptions.pluginOptions.blockquote.type,
  '#': _pluginOptions.pluginOptions.h1.type,
  '##': _pluginOptions.pluginOptions.h2.type,
  '###': _pluginOptions.pluginOptions.h3.type,
  '####': _pluginOptions.pluginOptions.h4.type,
  '#####': _pluginOptions.pluginOptions.h5.type,
  '######': _pluginOptions.pluginOptions.h6.type
};
var withShortcuts = function withShortcuts(options) {
  return function (editor) {
    if (options.onlyInline) {
      return editor;
    }
    var deleteBackward = editor.deleteBackward,
      insertText = editor.insertText;
    editor.insertText = function (text) {
      var selection = editor.selection;
      if (text === ' ' && selection && _slate.Range.isCollapsed(selection)) {
        var anchor = selection.anchor;
        var block = _slate.Editor.above(editor, {
          match: function match(n) {
            return _slate.Editor.isBlock(editor, n);
          }
        });
        var path = block ? block[1] : [];
        var start = _slate.Editor.start(editor, path);
        var range = {
          anchor: anchor,
          focus: start
        };
        var beforeText = _slate.Editor.string(editor, range);
        var dotPos = beforeText.indexOf('.');
        if (dotPos !== -1 && !isNaN(Number(beforeText.slice(0, dotPos)))) {
          beforeText = '1';
        }
        var type = SHORTCUTS[beforeText];
        if (type && (0, _editorIsEnabled.editorIsEnabled)(options.enableOnly, type) && !(block && block[0].type === _pluginOptions.pluginOptions.li.type)) {
          _slate.Transforms.select(editor, range);
          _slate.Transforms["delete"](editor);
          var newProperties = {
            type: type === _pluginOptions.pluginOptions.ol.type ? _pluginOptions.pluginOptions.li.type : type
          };
          _slate.Transforms.setNodes(editor, newProperties, {
            match: function match(n) {
              return _slate.Editor.isBlock(editor, n);
            }
          });
          if (type === _pluginOptions.pluginOptions.ol.type) {
            var list = {
              type: _pluginOptions.pluginOptions.ol.type,
              children: []
            };
            _slate.Transforms.wrapNodes(editor, list, {
              match: function match(n) {
                return !_slate.Editor.isEditor(n) && _slate.Element.isElement(n) && n.type === _pluginOptions.pluginOptions.li.type;
              }
            });
          } else if (type === _pluginOptions.pluginOptions.li.type) {
            var _list = {
              type: _pluginOptions.pluginOptions.ul.type,
              children: []
            };
            _slate.Transforms.wrapNodes(editor, _list, {
              match: function match(n) {
                return !_slate.Editor.isEditor(n) && _slate.Element.isElement(n) && n.type === _pluginOptions.pluginOptions.li.type;
              }
            });
          }
          return;
        }
      }
      insertText(text);
    };
    editor.deleteBackward = function () {
      var selection = editor.selection;
      if (selection && _slate.Range.isCollapsed(selection)) {
        var match = _slate.Editor.above(editor, {
          match: function match(n) {
            return _slate.Editor.isBlock(editor, n);
          }
        });
        if (match) {
          var _match = _slicedToArray(match, 2),
            block = _match[0],
            path = _match[1];
          var start = _slate.Editor.start(editor, path);
          if (!_slate.Editor.isEditor(block) && _slate.Element.isElement(block) && block.type !== _pluginOptions.pluginOptions.p.type && _slate.Point.equals(selection.anchor, start)) {
            var newProperties = {
              type: _pluginOptions.pluginOptions.p.type
            };
            _slate.Transforms.setNodes(editor, newProperties);
            if (block.type === _pluginOptions.pluginOptions.li.type) {
              _slate.Transforms.unwrapNodes(editor, {
                match: function match(n) {
                  return !_slate.Editor.isEditor(n) && _slate.Element.isElement(n) && (n.type === _pluginOptions.pluginOptions.ul.type || n.type === _pluginOptions.pluginOptions.ol.type);
                },
                split: true
              });
            }
            return;
          }
        }
        deleteBackward.apply(void 0, arguments);
      }
    };
    return editor;
  };
};
exports.withShortcuts = withShortcuts;