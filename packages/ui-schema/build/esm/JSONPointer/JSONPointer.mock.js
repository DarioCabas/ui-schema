import { List } from 'immutable';
export const testCases = [{
  pointer: '/foo/bar~0/baz~1/%a',
  keySeqPointer: List(['foo', 'bar~', 'baz/', '%a']),
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
  keySeqPointer: List([]),
  data: 'value',
  value: 'value'
}, {
  pointer: '/foo',
  keySeqPointer: List(['foo']),
  data: {
    foo: 'value'
  },
  value: 'value'
}, {
  pointer: '/foo/0',
  keySeqPointer: List(['foo', 0]),
  data: {
    foo: ['bar', 'baz']
  },
  value: 'bar'
}, {
  pointer: '/',
  keySeqPointer: List([]),
  data: 'bar',
  value: 'bar'
}, {
  pointer: '/i\\j',
  keySeqPointer: List(['i\\j']),
  data: {
    'i\\j': 'value'
  },
  value: 'value'
}, {
  pointer: '/ ',
  keySeqPointer: List([' ']),
  data: {
    ' ': 'value'
  },
  value: 'value'
}, {
  pointer: '/foo/-/bar',
  keySeqPointer: List(['foo', '-', 'bar']),
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
  keySeqPointer: List(['foo', '1.0']),
  data: {
    'foo': {
      '1.0': 'var'
    }
  },
  value: 'var'
}];