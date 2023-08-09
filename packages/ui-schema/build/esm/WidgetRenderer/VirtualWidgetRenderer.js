function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { List } from 'immutable';
import { PluginStack } from '@ui-schema/ui-schema/PluginStack';
import { ObjectRenderer } from '@ui-schema/ui-schema/ObjectRenderer';
import { schemaTypeToDistinct } from '@ui-schema/ui-schema/Utils/schemaTypeToDistinct';
export const VirtualArrayRenderer = ({
  storeKeys,
  value,
  schema,
  virtualWidgets,
  widgets
}) => value ? value.map((val, i) => React.createElement(PluginStack, {
  key: i,
  schema: List.isList(schema.get('items')) ? schema.get('items').get(i) : schema.get('items'),
  parentSchema: schema,
  storeKeys: storeKeys.push(i),
  level: 0,
  virtualWidgets: virtualWidgets,
  widgets: widgets,
  isVirtual: true
})).valueSeq() : null;
export const VirtualWidgetRenderer = props => {
  const {
    schema,
    value,
    virtualWidgets = {
      'default': null,
      'object': ObjectRenderer,
      'array': VirtualArrayRenderer
    }
  } = props;
  const type = schemaTypeToDistinct(schema.get('type'));
  let Widget = virtualWidgets['default'];
  if (type) {
    if (type === 'object') {
      Widget = virtualWidgets['object'];
    } else if (type === 'array') {
      Widget = virtualWidgets['array'];
    }
  }
  return Widget ? React.createElement(Widget, _extends({}, props, {
    value: value
  })) : null;
};