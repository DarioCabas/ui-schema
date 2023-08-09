function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
export class PluginStackErrorBoundary extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      error: null
    });
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.error) {
      const FallbackComponent = this.props.FallbackComponent;
      return React.createElement(FallbackComponent, {
        error: this.state.error,
        type: this.props.type,
        widget: this.props.widget,
        storeKeys: this.props.storeKeys
      });
    }
    return this.props.children;
  }
}