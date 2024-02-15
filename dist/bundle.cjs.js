'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function toPixel(value) {
  return typeof value === "number" ? "".concat(value, "px") : value;
}

var border = {
  border: {
    getValue: function getValue(border) {
      return "border:".concat(border, ";");
    }
  },
  borderRadius: {
    getValue: function getValue(borderRadius) {
      return "border-radius:".concat(toPixel(borderRadius), ";");
    }
  },
  borderTop: {
    getValue: function getValue(borderTop) {
      return "border-top:".concat(borderTop, ";");
    }
  },
  bt: {
    getValue: function getValue(borderTop) {
      return "border-top:".concat(borderTop, ";");
    }
  },
  borderRight: {
    getValue: function getValue(borderRight) {
      return "border-right:".concat(borderRight, ";");
    }
  },
  br: {
    getValue: function getValue(borderRight) {
      return "border-right:".concat(borderRight, ";");
    }
  },
  borderBottom: {
    getValue: function getValue(borderBottom) {
      return "border-bottom:".concat(borderBottom, ";");
    }
  },
  bb: {
    getValue: function getValue(borderBottom) {
      return "border-bottom:".concat(borderBottom, ";");
    }
  },
  borderLeft: {
    getValue: function getValue(borderLeft) {
      return "border-left:".concat(borderLeft, ";");
    }
  },
  bl: {
    getValue: function getValue(borderLeft) {
      return "border-left:".concat(borderLeft, ";");
    }
  }
};

var color = {
  background: {
    getValue: function getValue(background) {
      return "background:".concat(background, ";");
    }
  },
  backgroundColor: {
    getValue: function getValue(backgroundColor) {
      return "background-color:".concat(backgroundColor, ";");
    }
  },
  bg: {
    getValue: function getValue(background) {
      return "background:".concat(background, ";");
    }
  },
  color: {
    getValue: function getValue(color) {
      return "color:".concat(color, ";");
    }
  }
};

var margin = {
  margin: {
    getValue: function getValue(margin) {
      return "margin:".concat(toPixel(margin), ";");
    }
  },
  m: {
    getValue: function getValue(margin) {
      return "margin:".concat(toPixel(margin), ";");
    }
  },
  marginX: {
    getValue: function getValue(marginX) {
      return "margin-left:".concat(toPixel(marginX), ";margin-right:").concat(toPixel(marginX), ";");
    }
  },
  mx: {
    getValue: function getValue(marginX) {
      return "margin-left:".concat(toPixel(marginX), ";margin-right:").concat(toPixel(marginX), ";");
    }
  },
  marginY: {
    getValue: function getValue(marginY) {
      return "margin-top:".concat(toPixel(marginY), ";margin-bottom:").concat(toPixel(marginY), ";");
    }
  },
  my: {
    getValue: function getValue(marginY) {
      return "margin-top:".concat(toPixel(marginY), ";margin-bottom:").concat(toPixel(marginY), ";");
    }
  },
  marginTop: {
    getValue: function getValue(marginTop) {
      return "margin-top:".concat(toPixel(marginTop), ";");
    }
  },
  mt: {
    getValue: function getValue(marginTop) {
      return "margin-top:".concat(toPixel(marginTop), ";");
    }
  },
  marginRight: {
    getValue: function getValue(marginRight) {
      return "margin-right:".concat(toPixel(marginRight), ";");
    }
  },
  mr: {
    getValue: function getValue(marginRight) {
      return "margin-right:".concat(toPixel(marginRight), ";");
    }
  },
  marginBottom: {
    getValue: function getValue(marginBottom) {
      return "margin-bottom:".concat(toPixel(marginBottom), ";");
    }
  },
  mb: {
    getValue: function getValue(marginBottom) {
      return "margin-bottom:".concat(toPixel(marginBottom), ";");
    }
  },
  marginLeft: {
    getValue: function getValue(marginLeft) {
      return "margin-left:".concat(toPixel(marginLeft), ";");
    }
  },
  ml: {
    getValue: function getValue(marginLeft) {
      return "margin-left:".concat(toPixel(marginLeft), ";");
    }
  }
};

var padding = {
  padding: {
    getValue: function getValue(padding) {
      return "padding:".concat(toPixel(padding), ";");
    }
  },
  p: {
    getValue: function getValue(padding) {
      return "padding:".concat(toPixel(padding), ";");
    }
  },
  paddingX: {
    getValue: function getValue(paddingX) {
      return "padding-left:".concat(toPixel(paddingX), ";padding-right:").concat(toPixel(paddingX), ";");
    }
  },
  px: {
    getValue: function getValue(paddingX) {
      return "padding-left:".concat(toPixel(paddingX), ";padding-right:").concat(toPixel(paddingX), ";");
    }
  },
  paddingY: {
    getValue: function getValue(paddingY) {
      return "padding-top:".concat(toPixel(paddingY), ";padding-bottom:").concat(toPixel(paddingY), ";");
    }
  },
  py: {
    getValue: function getValue(paddingY) {
      return "padding-top:".concat(toPixel(paddingY), ";padding-bottom:").concat(toPixel(paddingY), ";");
    }
  },
  paddingTop: {
    getValue: function getValue(paddingTop) {
      return "padding-top:".concat(toPixel(paddingTop), ";");
    }
  },
  pt: {
    getValue: function getValue(paddingTop) {
      return "padding-top:".concat(toPixel(paddingTop), ";");
    }
  },
  paddingRight: {
    getValue: function getValue(paddingRight) {
      return "padding-right:".concat(toPixel(paddingRight), ";");
    }
  },
  pr: {
    getValue: function getValue(paddingRight) {
      return "padding-right:".concat(toPixel(paddingRight), ";");
    }
  },
  paddingBottom: {
    getValue: function getValue(paddingBottom) {
      return "padding-bottom:".concat(toPixel(paddingBottom), ";");
    }
  },
  pb: {
    getValue: function getValue(paddingBottom) {
      return "padding-bottom:".concat(toPixel(paddingBottom), ";");
    }
  },
  paddingLeft: {
    getValue: function getValue(paddingLeft) {
      return "padding-left:".concat(toPixel(paddingLeft), ";");
    }
  },
  pl: {
    getValue: function getValue(paddingLeft) {
      return "padding-left:".concat(toPixel(paddingLeft), ";");
    }
  }
};

var size = {
  width: {
    getValue: function getValue(width) {
      return "width:".concat(toPixel(width), ";");
    }
  },
  w: {
    getValue: function getValue(width) {
      return "width:".concat(toPixel(width), ";");
    }
  },
  height: {
    getValue: function getValue(height) {
      return "height:".concat(toPixel(height), ";");
    }
  },
  h: {
    getValue: function getValue(height) {
      return "height:".concat(toPixel(height), ";");
    }
  },
  size: {
    getValue: function getValue(size) {
      return "width: ".concat(Array.isArray(size) ? toPixel(size[0]) : toPixel(size), "; height: ").concat(Array.isArray(size) ? toPixel(size[1]) : toPixel(size), ";");
    }
  },
  fullP: {
    getValue: function getValue() {
      return "width:100%; height:100%;";
    }
  },
  fullV: {
    getValue: function getValue() {
      return "width:100vw; height:100vh;";
    }
  },
  maxWidth: {
    getValue: function getValue(maxWidth) {
      return "max-width:".concat(maxWidth, ";");
    }
  },
  maxHeight: {
    getValue: function getValue(maxHeight) {
      return "max-height:".concat(maxHeight, ";");
    }
  },
  minWidth: {
    getValue: function getValue(minWidth) {
      return "min-width:".concat(minWidth, ";");
    }
  },
  minHeight: {
    getValue: function getValue(minWidth) {
      return "min-height:".concat(minWidth, ";");
    }
  }
};

var picssoDefaultConfig = __assign(__assign(__assign(__assign(__assign(__assign({}, border), color), margin), padding), size), {
  jc: {
    getValue: function getValue() {
      return "display:flex; justify-content:center;";
    }
  },
  ac: {
    getValue: function getValue() {
      return "display:flex; align-items:center;";
    }
  },
  flex: {
    getValue: function getValue() {
      return "display:flex;";
    }
  },
  overflow: {
    getValue: function getValue(overflow) {
      return "overflow:".concat(overflow, ";");
    }
  },
  overflowX: {
    getValue: function getValue(overflowX) {
      return "overflow-x:".concat(overflowX, ";");
    }
  },
  overflowY: {
    getValue: function getValue(overflowY) {
      return "overflow-y:".concat(overflowY, ";");
    }
  },
  none: {
    getValue: function getValue() {
      return "display:none;";
    }
  },
  gap: {
    getValue: function getValue(margin) {
      return "display:flex; gap:".concat(toPixel(margin), ";");
    }
  },
  flexDirection: {
    getValue: function getValue(flexDirection) {
      return "flex-direction:".concat(flexDirection, ";");
    }
  },
  column: {
    getValue: function getValue() {
      return "display:flex; flex-direction:column;";
    }
  },
  col: {
    getValue: function getValue() {
      return "display:flex; flex-direction:column;";
    }
  },
  row: {
    getValue: function getValue() {
      return "display:flex; flex-direction:row;";
    }
  },
  position: {
    getValue: function getValue(position) {
      return "position:".concat(position, ";");
    }
  },
  ellipsis: {
    getValue: function getValue() {
      return "text-overflow:ellipsis; overflow:hidden; white-space:nowrap;";
    }
  },
  pointer: {
    getValue: function getValue() {
      return "cursor: pointer;";
    }
  },
  textAlign: {
    getValue: function getValue(textAlign) {
      return "text-align:".concat(textAlign, ";");
    }
  },
  textCenter: {
    getValue: function getValue() {
      return "text-align:center;";
    }
  },
  textRight: {
    getValue: function getValue() {
      return "text-align:right;";
    }
  },
  textLeft: {
    getValue: function getValue() {
      return "text-align:left;";
    }
  },
  between: {
    getValue: function getValue() {
      return "justify-content:space-between;";
    }
  },
  fontSize: {
    getValue: function getValue(fontSize) {
      return "font-size:".concat(toPixel(fontSize), ";");
    }
  },
  fs: {
    getValue: function getValue(fontSize) {
      return "font-size:".concat(toPixel(fontSize), ";");
    }
  },
  fontWeight: {
    getValue: function getValue(fontWeight) {
      return "font-weight:".concat(fontWeight, ";");
    }
  },
  fw: {
    getValue: function getValue(fontWeight) {
      return "font-weight:".concat(fontWeight, ";");
    }
  }
});

function seperateStyleString(props, customConfig) {
  var totalKeys = Object.keys(props);
  var targetConfig = __assign(__assign({}, customConfig), picssoDefaultConfig);
  var piccsoConfigKeys = Object.keys(targetConfig);
  var targetPropsKeys = [];
  var otherPropsKeys = [];
  totalKeys.forEach(function (prop, i) {
    if (prop in props && piccsoConfigKeys.includes(prop)) {
      targetPropsKeys.push(totalKeys[i]);
    } else {
      otherPropsKeys.push(prop);
    }
  });
  var styleProps = targetPropsKeys.map(function (key) {
    var _a;
    return (_a = targetConfig === null || targetConfig === void 0 ? void 0 : targetConfig[key]) === null || _a === void 0 ? void 0 : _a.getValue(props[key]);
  });
  var styleString = styleProps.join(" ");
  var stylePropsArray = Array.from(new Set(styleString.split(";")));
  var formattedStyleString = stylePropsArray.join(";"); // e.g. display:flex; justify-content:center; overflow-x:hidden;
  var otherProps = otherPropsKeys.reduce(function (acc, propKey) {
    acc[propKey] = props[propKey];
    return acc;
  }, {});
  return [formattedStyleString, otherProps];
}

var styleCache$1 = new Map();
var camelStyle = function camelStyle(styleString) {
  var cachedStyle = styleCache$1.get(styleString);
  if (cachedStyle) {
    return cachedStyle;
  }
  var tempStyleObject = {};
  styleString.split(";").forEach(function (styleProperty) {
    var _a = styleProperty.split(":").map(function (item) {
        return item.trim();
      }),
      key = _a[0],
      value = _a[1];
    if (key && value) {
      var formattedKey = key.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
      tempStyleObject[formattedKey] = value;
    }
  });
  var camelCaseStyle = tempStyleObject;
  styleCache$1.set(styleString, camelCaseStyle);
  return camelCaseStyle;
};
var picssoStyled = function picssoStyled(Component) {
  return function (styleString) {
    var StyledComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var camelCaseStyle = camelStyle(styleString);
      var componentProps = __assign(__assign({}, props), {
        style: camelCaseStyle
      });
      // HTML 태그 문자열인 경우
      return /*#__PURE__*/React.createElement(Component, __assign(__assign({}, componentProps), {
        ref: ref
      }), props.children);
    });
    StyledComponent.displayName = "Styled(".concat(typeof Component === "string" ? Component : Component.displayName || "Component", ")");
    return StyledComponent;
  };
};

function generateRandomString() {
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < 6; i++) {
    result += characters[Math.floor(Math.random() * 36)];
  }
  return result;
}

function useStyledClassName(_a) {
  var rawCss = _a.rawCss,
    initialClassName = _a.initialClassName,
    styleCache = _a.styleCache;
  var _b = React.useState(initialClassName),
    className = _b[0],
    setClassName = _b[1];
  React.useEffect(function () {
    if (rawCss) {
      var rs_1 = styleCache.get(rawCss);
      if (!rs_1) {
        rs_1 = "picsso-".concat(generateRandomString());
        styleCache.set(rawCss, rs_1);
        var _a = extractKeyframes(rawCss),
          keyframes = _a.keyframes,
          fontFaces = _a.fontFaces,
          cleanedCss = _a.cleanedCss;
        var styleSheet = document.createElement("style");
        styleSheet.setAttribute("data-picsso", rs_1);
        styleSheet.textContent = ".".concat(rs_1, " { ").concat(cleanedCss, " } ").concat(keyframes, " ").concat(fontFaces);
        document.head.appendChild(styleSheet);
      }
      setClassName(function (prevClassName) {
        return "".concat(prevClassName, " ").concat(rs_1).trim();
      });
    }
  }, [rawCss, initialClassName]);
  return className;
}
var extractKeyframes = function extractKeyframes(cssString) {
  var keyframesRegex = /@keyframes\s+[\s\S]+?\{[\s\S]+?\}\s*\}/g;
  var fontFaceRegex = /@font-face\s*\{[\s\S]+?\}/g;
  var keyframes = cssString.match(keyframesRegex) || [];
  var fontFaces = cssString.match(fontFaceRegex) || [];
  var cleanedCss = cssString.replace(keyframesRegex, "").replace(fontFaceRegex, "");
  return {
    keyframes: keyframes.join(" "),
    fontFaces: fontFaces.join(" "),
    cleanedCss: cleanedCss
  };
};

// 스타일 캐시 전역 변수로 선언
var styleCache = new Map();
var createStyledElement = function createStyledElement(tagName) {
  return /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (_a, ref) {
    var children = _a.children,
      customConfig = _a.customConfig,
      rawCss = _a.rawCss,
      props = __rest(_a, ["children", "customConfig", "rawCss"]);
    var _b = seperateStyleString(props, customConfig),
      styleString = _b[0],
      otherProps = _b[1];
    var className = useStyledClassName({
      rawCss: rawCss,
      initialClassName: otherProps.className || "",
      styleCache: styleCache
    });
    var HTMLTag = picssoStyled(tagName)(styleString);
    return /*#__PURE__*/React.createElement(HTMLTag, __assign({
      ref: ref,
      className: className || undefined
    }, otherProps), children);
  }));
};

var htmlTags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "slot", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "template", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];
// export const tags = [
//   'a',
//   'abbr',
//   'address',
//   'area',
//   'article',
//   'aside',
//   'audio',
//   'b',
//   'base',
//   'bdi',
//   'bdo',
//   'big',
//   'blockquote',
//   'body',
//   'br',
//   'button',
//   'canvas',
//   'caption',
//   'cite',
//   'code',
//   'col',
//   'colgroup',
//   'data',
//   'datalist',
//   'dd',
//   'del',
//   'details',
//   'dfn',
//   'dialog',
//   'div',
//   'dl',
//   'dt',
//   'em',
//   'embed',
//   'fieldset',
//   'figcaption',
//   'figure',
//   'footer',
//   'form',
//   'h1',
//   'h2',
//   'h3',
//   'h4',
//   'h5',
//   'h6',
//   'head',
//   'header',
//   'hgroup',
//   'hr',
//   'html',
//   'i',
//   'iframe',
//   'img',
//   'input',
//   'ins',
//   'kbd',
//   'keygen',
//   'label',
//   'legend',
//   'li',
//   'link',
//   'main',
//   'map',
//   'mark',
//   'marquee',
//   'menu',
//   'menuitem',
//   'meta',
//   'meter',
//   'nav',
//   'noscript',
//   'object',
//   'ol',
//   'optgroup',
//   'option',
//   'output',
//   'p',
//   'param',
//   'picture',
//   'pre',
//   'progress',
//   'q',
//   'rp',
//   'rt',
//   'ruby',
//   's',
//   'samp',
//   'script',
//   'section',
//   'select',
//   'small',
//   'source',
//   'span',
//   'strong',
//   'style',
//   'sub',
//   'summary',
//   'sup',
//   'table',
//   'tbody',
//   'td',
//   'textarea',
//   'tfoot',
//   'th',
//   'thead',
//   'time',
//   'title',
//   'tr',
//   'track',
//   'u',
//   'ul',
//   'var',
//   'video',
//   'wbr',
//   // SVG
//   'circle',
//   'clipPath',
//   'defs',
//   'ellipse',
//   'foreignObject',
//   'g',
//   'image',
//   'line',
//   'linearGradient',
//   'mask',
//   'path',
//   'pattern',
//   'polygon',
//   'polyline',
//   'radialGradient',
//   'rect',
//   'stop',
//   'svg',
//   'text',
//   'tspan'
// ]

var picsso = htmlTags.reduce(function (acc, htmlKey) {
  acc[htmlKey] = createStyledElement(htmlKey);
  return acc;
}, {});

function css(strings) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var result = "";
  strings.forEach(function (string, i) {
    result += string + (values[i] || "");
  });
  return result;
}

exports.css = css;
exports.default = picsso;
exports.toPixel = toPixel;
