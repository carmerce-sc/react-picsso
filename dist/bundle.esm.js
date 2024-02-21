import React, { forwardRef, memo, useMemo } from 'react';

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
  border: function border(_border) {
    return "border:".concat(_border, ";");
  },
  borderRadius: function borderRadius(_borderRadius) {
    return "border-radius:".concat(toPixel(_borderRadius), ";");
  },
  borderTop: function borderTop(_borderTop) {
    return "border-top:".concat(_borderTop, ";");
  },
  bt: function bt(borderTop) {
    return "border-top:".concat(borderTop, ";");
  },
  borderRight: function borderRight(_borderRight) {
    return "border-right:".concat(_borderRight, ";");
  },
  br: function br(borderRight) {
    return "border-right:".concat(borderRight, ";");
  },
  borderBottom: function borderBottom(_borderBottom) {
    return "border-bottom:".concat(_borderBottom, ";");
  },
  bb: function bb(borderBottom) {
    return "border-bottom:".concat(borderBottom, ";");
  },
  borderLeft: function borderLeft(_borderLeft) {
    return "border-left:".concat(_borderLeft, ";");
  },
  bl: function bl(borderLeft) {
    return "border-left:".concat(borderLeft, ";");
  }
};

var color = {
  background: function background(_background) {
    return "background:".concat(_background, ";");
  },
  backgroundColor: function backgroundColor(_backgroundColor) {
    return "background-color:".concat(_backgroundColor, ";");
  },
  bg: function bg(background) {
    return "background:".concat(background, ";");
  },
  color: function color(_color) {
    return "color:".concat(_color, ";");
  }
};

var margin = {
  margin: function margin(_margin) {
    return "margin:".concat(toPixel(_margin), ";");
  },
  m: function m(margin) {
    return "margin:".concat(toPixel(margin), ";");
  },
  marginX: function marginX(_marginX) {
    return "margin-left:".concat(toPixel(_marginX), ";margin-right:").concat(toPixel(_marginX), ";");
  },
  mx: function mx(marginX) {
    return "margin-left:".concat(toPixel(marginX), ";margin-right:").concat(toPixel(marginX), ";");
  },
  marginY: function marginY(_marginY) {
    return "margin-top:".concat(toPixel(_marginY), ";margin-bottom:").concat(toPixel(_marginY), ";");
  },
  my: function my(marginY) {
    return "margin-top:".concat(toPixel(marginY), ";margin-bottom:").concat(toPixel(marginY), ";");
  },
  marginTop: function marginTop(_marginTop) {
    return "margin-top:".concat(toPixel(_marginTop), ";");
  },
  mt: function mt(marginTop) {
    return "margin-top:".concat(toPixel(marginTop), ";");
  },
  marginRight: function marginRight(_marginRight) {
    return "margin-right:".concat(toPixel(_marginRight), ";");
  },
  mr: function mr(marginRight) {
    return "margin-right:".concat(toPixel(marginRight), ";");
  },
  marginBottom: function marginBottom(_marginBottom) {
    return "margin-bottom:".concat(toPixel(_marginBottom), ";");
  },
  mb: function mb(marginBottom) {
    return "margin-bottom:".concat(toPixel(marginBottom), ";");
  },
  marginLeft: function marginLeft(_marginLeft) {
    return "margin-left:".concat(toPixel(_marginLeft), ";");
  }
};

var padding = {
  padding: function padding(_padding) {
    return "padding:".concat(toPixel(_padding), ";");
  },
  p: function p(padding) {
    return "padding:".concat(toPixel(padding), ";");
  },
  paddingX: function paddingX(_paddingX) {
    return "padding-left:".concat(toPixel(_paddingX), ";padding-right:").concat(toPixel(_paddingX), ";");
  },
  px: function px(paddingX) {
    return "padding-left:".concat(toPixel(paddingX), ";padding-right:").concat(toPixel(paddingX), ";");
  },
  paddingY: function paddingY(_paddingY) {
    return "padding-top:".concat(toPixel(_paddingY), ";padding-bottom:").concat(toPixel(_paddingY), ";");
  },
  py: function py(paddingY) {
    return "padding-top:".concat(toPixel(paddingY), ";padding-bottom:").concat(toPixel(paddingY), ";");
  },
  paddingTop: function paddingTop(_paddingTop) {
    return "padding-top:".concat(toPixel(_paddingTop), ";");
  },
  pt: function pt(paddingTop) {
    return "padding-top:".concat(toPixel(paddingTop), ";");
  },
  paddingRight: function paddingRight(_paddingRight) {
    return "padding-right:".concat(toPixel(_paddingRight), ";");
  },
  pr: function pr(paddingRight) {
    return "padding-right:".concat(toPixel(paddingRight), ";");
  },
  paddingBottom: function paddingBottom(_paddingBottom) {
    return "padding-bottom:".concat(toPixel(_paddingBottom), ";");
  },
  pb: function pb(paddingBottom) {
    return "padding-bottom:".concat(toPixel(paddingBottom), ";");
  },
  paddingLeft: function paddingLeft(_paddingLeft) {
    return "padding-left:".concat(toPixel(_paddingLeft), ";");
  },
  pl: function pl(paddingLeft) {
    return "padding-left:".concat(toPixel(paddingLeft), ";");
  }
};

var size = {
  width: function width(_width) {
    return "width:".concat(toPixel(_width), ";");
  },
  w: function w(width) {
    return "width:".concat(toPixel(width), ";");
  },
  height: function height(_height) {
    return "height:".concat(toPixel(_height), ";");
  },
  h: function h(height) {
    return "height:".concat(toPixel(height), ";");
  },
  size: function size(_size) {
    return "width: ".concat(Array.isArray(_size) ? toPixel(_size[0]) : toPixel(_size), "; height: ").concat(Array.isArray(_size) ? toPixel(_size[1]) : toPixel(_size), ";");
  },
  fullP: function fullP() {
    return "width:100%; height:100%;";
  },
  fullV: function fullV() {
    return "width:100vw; height:100vh;";
  },
  maxWidth: function maxWidth(_maxWidth) {
    return "max-width:".concat(_maxWidth, ";");
  },
  maxHeight: function maxHeight(_maxHeight) {
    return "max-height:".concat(_maxHeight, ";");
  },
  minWidth: function minWidth(_minWidth) {
    return "min-width:".concat(_minWidth, ";");
  },
  minHeight: function minHeight(minWidth) {
    return "min-height:".concat(minWidth, ";");
  }
};

var picssoDefaultConfig = __assign(__assign(__assign(__assign(__assign(__assign({}, border), color), margin), padding), size), {
  jc: function jc() {
    return "display:flex; justify-content:center;";
  },
  ac: function ac() {
    return "display:flex; align-items:center;";
  },
  flex: function flex() {
    return "display:flex;";
  },
  overflow: function overflow(_overflow) {
    return "overflow:".concat(_overflow, ";");
  },
  overflowX: function overflowX(_overflowX) {
    return "overflow-x:".concat(_overflowX, ";");
  },
  overflowY: function overflowY(_overflowY) {
    return "overflow-y:".concat(_overflowY, ";");
  },
  none: function none() {
    return "display:none;";
  },
  gap: function gap(margin) {
    return "display:flex; gap:".concat(toPixel(margin), ";");
  },
  flexDirection: function flexDirection(_flexDirection) {
    return "flex-direction:".concat(_flexDirection, ";");
  },
  column: function column() {
    return "display:flex; flex-direction:column;";
  },
  col: function col() {
    return "display:flex; flex-direction:column;";
  },
  row: function row() {
    return "display:flex; flex-direction:row;";
  },
  position: function position(_position) {
    return "position:".concat(_position, ";");
  },
  ellipsis: function ellipsis() {
    return "text-overflow:ellipsis; overflow:hidden; white-space:nowrap;";
  },
  pointer: function pointer() {
    return "cursor: pointer;";
  },
  textAlign: function textAlign(_textAlign) {
    return "text-align:".concat(_textAlign, ";");
  },
  textCenter: function textCenter() {
    return "text-align:center;";
  },
  textRight: function textRight() {
    return "text-align:right;";
  },
  textLeft: function textLeft() {
    return "text-align:left;";
  },
  between: function between() {
    return "justify-content:space-between;";
  },
  fontSize: function fontSize(_fontSize) {
    return "font-size:".concat(toPixel(_fontSize), ";");
  },
  fs: function fs(fontSize) {
    return "font-size:".concat(toPixel(fontSize), ";");
  },
  fontWeight: function fontWeight(_fontWeight) {
    return "font-weight:".concat(_fontWeight, ";");
  },
  fw: function fw(fontWeight) {
    return "font-weight:".concat(fontWeight, ";");
  },
  boxShadow: function boxShadow(_boxShadow) {
    return "box-shadow:".concat(_boxShadow, ";");
  },
  letterSpacing: function letterSpacing(_letterSpacing) {
    return "letter-spacing:".concat(toPixel(_letterSpacing), ";");
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
    return targetConfig === null || targetConfig === void 0 ? void 0 : targetConfig[key](props[key]);
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
    var StyledComponent = /*#__PURE__*/forwardRef(function (props, ref) {
      var camelCaseStyle = camelStyle(styleString);
      var componentProps = __assign(__assign({}, props), {
        style: camelCaseStyle
      });
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

function getClassName(_a) {
  var css = _a.css,
    initialClassName = _a.initialClassName,
    styleCache = _a.styleCache;
  var className = initialClassName;
  // useEffect(() => {
  if (css) {
    var rs = styleCache.get(css);
    if (!rs) {
      rs = "picsso-".concat(generateRandomString());
      styleCache.set(css, rs);
      var _b = extractKeyframes(css),
        keyframes = _b.keyframes,
        fontFaces = _b.fontFaces,
        cleanedCss = _b.cleanedCss;
      var styleSheet = document.createElement("style");
      styleSheet.setAttribute("data-picsso", rs);
      styleSheet.textContent = ".".concat(rs, " { ").concat(cleanedCss, " } ").concat(keyframes, " ").concat(fontFaces);
      document.head.appendChild(styleSheet);
    }
    className = "".concat(initialClassName, " ").concat(rs).trim();
  }
  // }, [css, initialClassName]);
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

var styleCache = new Map();
var createStyledElement = function createStyledElement(tagName) {
  return /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (_a, ref) {
    var children = _a.children,
      customConfig = _a.customConfig,
      css = _a.css,
      props = __rest(_a, ["children", "customConfig", "css"]);
    var _b = seperateStyleString(props, customConfig),
      styleString = _b[0],
      otherProps = _b[1];
    var className = getClassName({
      css: css,
      initialClassName: otherProps.className || "",
      styleCache: styleCache
    });
    var HTMLTag = useMemo(function () {
      return picssoStyled(tagName)(styleString);
    }, [tagName, styleString]);
    return /*#__PURE__*/React.createElement(HTMLTag, __assign({
      ref: ref
    }, otherProps, {
      className: className || undefined
    }), children);
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

export { css, picsso as default, toPixel };
