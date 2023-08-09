import React from 'react';
import { ObjectRenderer } from '@ui-schema/ui-schema/ObjectRenderer';
import { VirtualWidgetRenderer } from '@ui-schema/ui-schema/WidgetRenderer/VirtualWidgetRenderer';
import { schemaTypeToDistinct } from '@ui-schema/ui-schema/Utils/schemaTypeToDistinct';
const NoWidget = ({
  scope,
  matching
}) => React.createElement(React.Fragment, null, "missing-", scope, matching ? '-' + matching : '');
export function widgetMatcher({
  isVirtual,
  WidgetOverride,
  widgetName,
  schemaType,
  widgets,
  NoWidget: NoWidgetCustom
}) {
  const NoW = NoWidgetCustom || NoWidget;
  let Widget = null;
  if (isVirtual) {
    Widget = VirtualWidgetRenderer;
  } else if (WidgetOverride) {
    Widget = WidgetOverride;
  } else if (widgetName && widgets.custom) {
    if (widgets.custom[widgetName]) {
      Widget = widgets.custom[widgetName];
    } else {
      Widget = () => React.createElement(NoW, {
        scope: 'custom',
        matching: widgetName
      });
      Widget.displayName = 'NoWidgetCustom';
    }
  } else if (schemaType && widgets.types) {
    const distinctInputType = schemaTypeToDistinct(schemaType);
    if (distinctInputType) {
      if (distinctInputType === 'object') {
        Widget = ObjectRenderer;
      } else if (widgets.types[distinctInputType]) {
        Widget = widgets.types[distinctInputType];
      } else if (distinctInputType === 'null') {
        Widget = null;
      } else {
        Widget = () => React.createElement(NoW, {
          scope: 'type',
          matching: distinctInputType
        });
        Widget.displayName = 'NoWidgetType';
      }
    }
  }
  return Widget;
}