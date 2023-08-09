import { pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
import React from 'react';
export const mappingList = {
  [pluginOptions.ul.type]: ({
    attributes,
    children
  }) => React.createElement("ul", attributes, children),
  [pluginOptions.ol.type]: ({
    attributes,
    children
  }) => React.createElement("ol", attributes, children),
  [pluginOptions.li.type]: ({
    attributes,
    children
  }) => React.createElement("li", attributes, children)
};