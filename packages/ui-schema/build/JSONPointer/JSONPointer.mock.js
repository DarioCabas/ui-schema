"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testCases = void 0;
var _immutable = require("immutable");
var testCases = [{
  pointer: '/foo/bar~0/baz~1/%a',
  keySeqPointer: (0, _immutable.List)(['foo', 'bar~', 'baz/', '%a']),
  data: {
    foo: {
      'bar~': {
        'baz/': {
          '%a': 'value'
        }
      }
    }
  },
  value: 'value'
}, {
  pointer: '',
  keySeqPointer: (0, _immutable.List)([]),
  data: 'value',
  value: 'value'
}, {
  pointer: '/foo',
  keySeqPointer: (0, _immutable.List)(['foo']),
  data: {
    foo: 'value'
  },
  value: 'value'
}, {
  pointer: '/foo/0',
  keySeqPointer: (0, _immutable.List)(['foo', 0]),
  data: {
    foo: ['bar', 'baz']
  },
  value: 'bar'
}, {
  pointer: '/',
  keySeqPointer: (0, _immutable.List)([]),
  data: 'bar',
  value: 'bar'
}, {
  pointer: '/i\\j',
  keySeqPointer: (0, _immutable.List)(['i\\j']),
  data: {
    'i\\j': 'value'
  },
  value: 'value'
}, {
  pointer: '/ ',
  keySeqPointer: (0, _immutable.List)([' ']),
  data: {
    ' ': 'value'
  },
  value: 'value'
}, {
  pointer: '/foo/-/bar',
  keySeqPointer: (0, _immutable.List)(['foo', '-', 'bar']),
  data: {
    'foo': {
      '-': {
        'bar': 'a',
        'baz': 'b'
      }
    }
  },
  value: 'a'
}, {
  pointer: '/foo/1.0',
  keySeqPointer: (0, _immutable.List)(['foo', '1.0']),
  data: {
    'foo': {
      '1.0': 'var'
    }
  },
  value: 'var'
}];
exports.testCases = testCases;