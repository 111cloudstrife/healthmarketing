(function () {
  function unsupportedBrowser() {
  try {
    return navigator.userAgent.match(/MSIE [67]\./)
  } catch (e) {
    return true;
  }
}
function ie8() {
  return navigator.userAgent.match(/MSIE 8\./)
}
function ie89() {
  return navigator.userAgent.match(/MSIE (8|9)\./)
}
function setText(element, text) {
  if(ie8()) {
    element.innerText = text;
  } else {
    element.textContent = text;
  }
}

function windowHeight() {
  return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
}

function windowWidth() {
  return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
}

function smallScreen() {
  return (windowWidth() < 540) || !!navigator.userAgent.match(/Android|iPod|iPhone/);
}

function tinyScreen() {
  return (windowWidth() < 400) || !!navigator.userAgent.match(/Android|iPod|iPhone/);
}

function generateId() {
  var id = "", i = 12;
  while (i--) {
    id += randChar()
  }
  return "wm6Kd" +id;
}

function includeCSS() {
  var css = document.getElementById('c9-styles');
  if (!css) {
    css = document.createElement('style');
    css.id = 'c9-styles';
    css.type = 'text/css';

    var styles = "#c9-button, #c9-button *, #c9-popup, #c9-popup * {\n  -webkit-box-sizing: border-box; box-sizing: content-box;\n}\n\n#c9-button {\n  right: 10px;\n  position: fixed;\n  cursor: pointer;\n  z-index: 10000;\n  text-decoration: none;\n  user-select: none;\n  transition: top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, background 0.3s, width 0.3s, opacity 0.3s; -moz-transition: top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, background 0.3s, width 0.3s, opacity 0.3s; -webkit-transition: top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, background 0.3s, width 0.3s, opacity 0.3s; -o-transition: top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, background 0.3s, width 0.3s, opacity 0.3s; -ms-transition: top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, background 0.3s, width 0.3s, opacity 0.3s;\n  font-family: helvetica, sans-serif;\n}\n\n#c9-remover {\n  top: 0;\n  right: 0;\n  padding: 2px 2px 2px 2px;\n  position: absolute;\n  line-height: 0.7;\n  font-size: 16px;\n  height: auto;\n  text-shadow: 0 -1px 1px rgba(0,0,0,0.5);\n  opacity: 0.6;\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)\";\n  filter: alpha(opacity=60);\n  z-index: 10001;\n  text-decoration: none;\n}\n\n#c9-popup {\n  position: fixed;\n  left: 50%;\n  width: 540px;\n  padding: 5px;\n  margin-left: -270px;\n  background: #999;\n  background: rgba(255,255,255,0.5);\n  opacity: 0.1;\n  z-index: 150000;\n  transition: all 0.3s; -moz-transition: all 0.3s; -webkit-transition: all 0.3s; -o-transition: all 0.3s; -ms-transition: all 0.3s;\n}\n#c9-popup iframe {\n  border: none;\n  height: 101%;\n  width: 540px;\n  background: white;\n  margin: 0 !important;\n}\n#c9-popup.c9-shown {\n  opacity: 1;\n}\n\n#c9-blocker {\n  opacity: 0;\n  background: black;\n  transition: opacity 0.3s; -moz-transition: opacity 0.3s; -webkit-transition: opacity 0.3s; -o-transition: opacity 0.3s; -ms-transition: opacity 0.3s;\n  background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  cursor: pointer;\n  top: 0;\n  width: 100%;\n  z-index: 149999;\n  display: none;\n}\n\n#c9-close-blocker {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 28px;\n  width: 24px;\n  font-size: 26px;\n  line-height: 28px;\n  color: #999;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#c9-close-blocker:hover {\n  color: #ddd;\n}\n\n#c9-popup #c9-close-blocker {\n  top: 5px;\n  right: -7px;\n}\n\n#c9-blocker.c9-shown {\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  opacity: 0.8;\n  display: block;\n}\n#c9-button.c9-bottom-left {\n  left: 10px;\n  right: auto;\n}\n#c9-button.c9-top-right {\n  bottom: auto;\n}\n#c9-button.c9-top-left {\n  left: 10px;\n  right: auto;\n  bottom: auto;\n}\n\n#c9-button.c9-center-right {\n  top: 50%;\n  bottom: auto;\n  right: 0;\n}\n#c9-button.c9-center-left {\n  top: 50%;\n  bottom: auto;\n  right: auto;\n  left: 0;\n}\n/* Shared text button styles */\n\n#c9-button.c9-center-right.c9-default, #c9-button.c9-center-right.c9-plain {\n  transform: rotate(-90deg); -moz-transform: rotate(-90deg); -webkit-transform: rotate(-90deg); -ms-transform: rotate(-90deg);\n  transform-origin: right bottom; -webkit-transform-origin: right bottom; -ms-transform-origin: right bottom;\n}\n#c9-button.c9-center-left.c9-default, #c9-button.c9-center-left.c9-plain {\n  transform: rotate(90deg); -moz-transform: rotate(90deg); -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg);\n  transform-origin: left bottom; -webkit-transform-origin: left bottom; -ms-transform-origin: left bottom;\n}\n\n/* Remover base styles */\n#c9-remover:hover {\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  opacity: 0.8;\n}\n\n/* default styles */\n#c9-button.c9-default {\n  border-top: 6px solid transparent;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  background: #aaa;\n  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);\n  border-radius: 15px 15px 0 0;\n}\n#c9-button.c9-default.c9-top-left, #c9-button.c9-default.c9-top-right {\n  top: -32px;\n  bottom: auto;\n}\n#c9-button.c9-default.c9-top-left.c9-shown, #c9-button.c9-default.c9-top-right.c9-shown {\n  top: 0;\n}\n#c9-button.c9-default.c9-bottom-left, #c9-button.c9-default.c9-bottom-right {\n  bottom: -32px;\n}\n#c9-button.c9-default.c9-bottom-left.c9-shown, #c9-button.c9-default.c9-bottom-right.c9-shown {\n  bottom: 0;\n}\n#c9-button.c9-default.c9-center-left {\n  left: -32px;\n}\n#c9-button.c9-default.c9-center-left.c9-shown {\n  left: 0;\n}\n#c9-button.c9-default.c9-center-right {\n  right: -32px;\n}\n#c9-button.c9-default.c9-center-right.c9-shown {\n  right: 0;\n}\n\n#c9-button.c9-default #c9-button-content {\n  border-radius: 10px 10px 0 0;\n  background: #F6F6F6;\n  color: #666;\n  display: block;\n  padding: 6px 12px;\n  height: 20px;\n  line-height: 22px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n}\n\n#c9-button.c9-default:hover {\n  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.2);\n}\n#c9-button.c9-top-left.c9-default, #c9-button.c9-top-right.c9-default {\n  border-top-width: 0;\n  border-bottom: 6px solid transparent;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-radius: 0 0 15px 15px;\n}\n#c9-button.c9-top-left.c9-default #c9-button-content, #c9-button.c9-top-right.c9-default #c9-button-content {\n  border-radius: 0 0 10px 10px;\n}\n\n#c9-button.c9-default #c9-remover {\n  width: 0;\n  transition: opacity 0.3s, width 0.3s;\n  opacity: 0;\n  top: 6px;\n  position: absolute;\n  right: 5px;\n  background: #aaa;\n  height: 20px;\n  text-align: center;\n  color: white;\n  border-radius: 7px;\n  line-height: 20px;\n  text-shadow: 0 1px 1px rgba(0,0,0,0.2);\n  overflow: hidden;\n  padding: 0;\n  text-decoration: none;\n}\n#c9-button.c9-default #c9-remover:hover {\n  color: white;\n}\n#c9-button.c9-default.c9-removable #c9-button-content {\n  padding-left: 18px;\n  padding-right: 18px;\n  transition: padding 0.3s; -moz-transition: padding 0.3s; -webkit-transition: padding 0.3s; -o-transition: padding 0.3s; -ms-transition: padding 0.3s;\n}\n\n#c9-button.c9-default.c9-removable:hover #c9-button-content {\n  padding-left: 6px;\n  padding-right: 30px;\n}\n#c9-button.c9-default.c9-removable:hover #c9-remover {\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  filter: alpha(opacity=50);\n  opacity: 0.5;\n  width: 20px;\n}\n#c9-button.c9-default.c9-removable #c9-remover:hover {\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  opacity: 0.8;\n  color: white\n}\n\n/* Plain styles */\n#c9-button.c9-plain {\n  background: #cf4647;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  bottom: -50px;\n}\n\n#c9-button.c9-plain #c9-button-content {\n  height: 50px;\n  line-height: 50px;\n  display: block;\n  padding: 0 10px;\n}\n\n#c9-button.c9-plain.c9-top-left, #c9-button.c9-plain.c9-top-right {\n  top: -50px;\n  bottom: auto;\n}\n\n#c9-button.c9-plain.c9-top-left.c9-shown, #c9-button.c9-plain.c9-top-right.c9-shown {\n  top: 0;\n}\n\n#c9-button.c9-plain.c9-bottom-left.c9-shown, #c9-button.c9-plain.c9-bottom-right.c9-shown{\n  bottom: 0;\n}\n\n#c9-button.c9-plain.c9-center-left {\n  left: -50px;\n}\n#c9-button.c9-plain.c9-center-left.c9-shown {\n  left: 0;\n}\n#c9-button.c9-plain.c9-center-right {\n  right: -50px;\n}\n#c9-button.c9-plain.c9-center-right.c9-shown {\n  right: 0;\n}\n\n#c9-button.c9-plain:hover {\n  -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  filter: alpha(opacity=90);\n  opacity: 0.9;\n}\n\n#c9-button.c9-plain.c9-top-right, #c9-button.c9-plain.c9-bottom-right {\n  right: 0;\n}\n\n#c9-button.c9-plain.c9-top-left, #c9-button.c9-plain.c9-bottom-left {\n  left: 0;\n  right: auto;\n}\n\n#c9-button.c9-plain #c9-remover:hover {\n  color: white;\n}\n/* Image styles */\n#c9-button.c9-image {\n  opacity: 0;\n}\n#c9-button.c9-image img {\n  max-width: 100%;\n}\n#c9-button.c9-image.c9-shown {\n  opacity: 1;\n}\n#c9-button.c9-image #c9-remover {\n  display: none;\n}\n#c9-button.c9-image:hover #c9-remover {\n  display: block;\n}\n\n#c9-button.c9-image.c9-top-right, #c9-button.c9-image.c9-bottom-right {\n  right: 0;\n}\n\n#c9-button.c9-image.c9-top-left, #c9-button.c9-image.c9-bottom-left {\n  left: 0;\n  right: auto;\n}\n\n#c9-button.c9-image.c9-bottom-left, #c9-button.c9-image.c9-bottom-right {\n  bottom: 10px;\n}\n#c9-button.c9-image.c9-top-left, #c9-button.c9-image.c9-top-right {\n  top: 0;\n}\n#c9-button.c9-image #c9-remover:hover {\n  color: white;\n}\n\n/* Floating styles */\n\n#c9-button.c9-floating {\n  opacity: 0;\n}\n\n#c9-button.c9-floating.c9-shown {\n  opacity: 1;\n}\n#c9-button.c9-floating #c9-button-content {\n  padding: 15px 20px;\n  font-size: 16px;\n  border-radius: 30px;\n  font-weight: bold;\n  background: #69C2E4;\n  color: white;\n  display: block;\n  transition: padding 0.3s; -moz-transition: padding 0.3s; -webkit-transition: padding 0.3s; -o-transition: padding 0.3s; -ms-transition: padding 0.3s;\n}\n#c9-button.c9-floating.c9-removable #c9-button-content {\n  padding: 15px 25px;\n}\n#c9-button.c9-floating.c9-removable:hover #c9-button-content {\n  padding-left: 15px;\n  padding-right: 35px;\n}\n#c9-button.c9-floating #c9-remover {\n  height: 10px;\n  width: 10px;\n  top: 14px;\n  right: 12px;\n  font-size: 18px;\n  opacity: 0;\n  text-shadow: none;\n  transition: opacity 0.3s;\n}\n#c9-button.c9-floating:hover {\n  opacity: 0.7;\n}\n\n#c9-button.c9-floating:hover #c9-remover {\n  display: block;\n  opacity: 1;\n}\n\n\n#c9-button.c9-floating.c9-top-right, #c9-button.c9-floating.c9-bottom-right, #c9-button.c9-floating.c9-center-right {\n  right: 20px;\n}\n\n#c9-button.c9-floating.c9-top-left, #c9-button.c9-floating.c9-bottom-left, #c9-button.c9-floating.c9-center-left {\n  left: 20px;\n  right: auto;\n}\n\n#c9-button.c9-floating.c9-bottom-left, #c9-button.c9-floating.c9-bottom-right {\n  bottom: 10px;\n}\n#c9-button.c9-floating.c9-top-left, #c9-button.c9-floating.c9-top-right {\n  top: 10px;\n}\n\n/* Embed button */\nhtml body .w-entry-button {\n  outline: none;\n  overflow: hidden;\n  visibility: visible !important;\n  background-image: -webkit-linear-gradient(#28a0e5, #015e94);\n  background-image: -moz-linear-gradient(#28a0e5, #015e94);\n  background-image: -ms-linear-gradient(#28a0e5, #015e94);\n  background-image: -o-linear-gradient(#28a0e5, #015e94);\n  background-image: linear-gradient(#28a0e5, #015e94);\n  -webkit-font-smoothing: antialiased;\n  border: 0;\n  padding: 1px;\n  text-decoration: none;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-box-shadow: 0 1px 0 rgba(0,0,0,0.2);\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.2);\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2);\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  position: relative;\n  margin: 10px auto;\n  display: table;\n  text-align: center;\n}\nhtml body .w-entry-button::before {\n  content: '';\n  display: block;\n}\nhtml body .w-entry-button::after {\n  content: '';\n  display: block;\n}\n\nhtml body .w-entry-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\nhtml body .w-entry-button .w-entry-button-inner {\n  display: block;\n  position: relative;\n  padding: 0 16px;\n  height: 50px;\n  line-height: 48px;\n  background: #1275ff;\n  background-image: -webkit-linear-gradient(#7dc5ee, #008cdd 70%, #30a2e4);\n  background-image: -moz-linear-gradient(#7dc5ee, #008cdd 70%, #30a2e4);\n  background-image: -ms-linear-gradient(#7dc5ee, #008cdd 70%, #30a2e4);\n  background-image: -o-linear-gradient(#7dc5ee, #008cdd 70%, #30a2e4);\n  background-image: linear-gradient(#7dc5ee, #008cdd 70%, #30a2e4);\n  font-size: 20px;\n  color: #fff;\n  font-weight: bold;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-shadow: 0 -1px 0 rgba(0,0,0,0.25);\n  -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  left: auto;\n  top: auto;\n  width: auto;\n}\n\nhtml body .w-entry-button .w-entry-button-inner * { /* mangled span override */\n  display: inline;\n  left: auto;\n  top: auto;\n  position: static;\n  width: auto;\n  height: auto;\n  background: none;\n\n}\nhtml body a.w-entry-button:hover {\n  background: #005d93;\n}\nhtml body a.w-entry-button:active {\n  background: #005d93;\n}\nhtml body a.w-entry-button:active .w-entry-button-inner {\n  color: #eee;\n  background: #008cdd;\n  background-image: -webkit-linear-gradient(#008cdd, #008cdd 70%, #239adf);\n  background-image: -moz-linear-gradient(#008cdd, #008cdd 70%, #239adf);\n  background-image: -ms-linear-gradient(#008cdd, #008cdd 70%, #239adf);\n  background-image: -o-linear-gradient(#008cdd, #008cdd 70%, #239adf);\n  background-image: linear-gradient(#008cdd, #008cdd 70%, #239adf);\n  -moz-box-shadow: inset 0 1px 0 rgba(0,0,0,0.1);\n  -webkit-box-shadow: inset 0 1px 0 rgba(0,0,0,0.1);\n  box-shadow: inset 0 1px 0 rgba(0,0,0,0.1);\n}\n";
    if (ie8()) {
      styles += "#c9-button.c9-center-right.c9-default.c9-shown, #c9-button.c9-center-right.c9-plain.c9-shown {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n}\n\n#c9-button.c9-center-left.c9-default.c9-shown, #c9-button.c9-center-left.c9-plain.c9-shown {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n}\n";
    }

    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.innerHTML = styles;
    }

    document.body.appendChild(css);
  }
}

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}
function getCookie(name) {
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(name + "=") == 0) return decodeURIComponent(c.substring((name + "=").length, c.length));
  }
  return null;
}

function resetStyles(elem, styles) {
  elem.style.margin = 0;
  elem.style.padding = 0;

  for (var style in styles) {
    elem.style[style] = styles[style];
  }
}

function addClass(elem, className) {
  if (!(elem.className + '').match(new RegExp('( |^)' + className + '( |$)'))) {
    elem.className = className + ' ' + elem.className;
  }

  return elem;
}
function hasClass(elem, className) {
  return elem.className.match(new RegExp("(^| )" + className + "($| )"));
}
function removeClass(elem, className) {
  elem.className = elem.className.replace(new RegExp('(^| )' + className + '( |$)'), ' ');
  return elem;
}

function withEnterId(url) {
  return withParam(url, 'i', getCookie("GleamId"));
}

function withXDGA(url, clientId) {
  if (clientId) {
    return withParam(url, 'xdga', clientId);
  } else {
    return url;
  }
}

function withLocation(url) {
  return withParam(url, 'l', window.location.href);
}

function withParam(url, name, value) {
  var separator = url.match(/\?/) ? "&" : "?";

  if (value !== null) {
    return url + separator + name + '=' + encodeURIComponent(value);
  } else {
    return url;
  }
}

function randChar() {
  var i;

  if (window.crypto && window.crypto.getRandomValues) {
    var n = new Uint32Array(1);
    window.crypto.getRandomValues(n);
    i = (n[0] % 94) + 32;
  } else {
    i = ((Math.random() * 94) | 0) + 32;
  }

  return String.fromCharCode(i)
}

var attributes = ["width", "height", "href", "x", "y", "rx", "ry", "fill", "fill-opacity", "attributeName", "values", "dur", "repeatCount", "style", "begin"];

function svgdom(query, attrs, childs) {
  var match = query.match(/^([^#.]*)#?([^.$]*).?(\S*)/),
      type = match[1] || "div",
      id = match[2],
      classes = match[3].replace(/\./g, " "),
      element = document.createElementNS('http://www.w3.org/2000/svg', type);

  if (attrs) {
    for (var key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        if (key === "id" || key === "innerHTML" || key === "value" || key === "src" || key === "className") {
          element[key] = attrs[key];
        } else {
          if (attributes.indexOf(key) === -1) {
            element.setAttributeNS('http://www.w3.org/2000/svg', key, attrs[key]);
          } else {
            element.setAttribute(key, attrs[key]);
          }
        }
      }
    }
  }

  id && element.setAttribute("id", id);
  classes && element.setAttribute("class", classes);

  childs && childs.forEach(function (child) {
    element.appendChild(child);
  });
  return element;
}

  if(unsupportedBrowser()) {
    return;
  }

  var campaignKey = "wm6Kd",
      animationMilliseconds = ie89() ? 0 : 300,
      imageButton = false,
      noOverlay = false,
      widgetName = "Gleam",
      buttonPosition = "bottom-right",
      widgetTheme = "default",
      overlayBackgroundColor = "orange",
      overlayTextColor = "white",
      allowRemove = false,
      popupUrl = "https://gleam.io/wm6Kd/popup",
      overlayText = "Want A Free Book? Click Here To Find Out More!",
      standAloneUrl = "https://gleam.io/wm6Kd/facebook-ad-templates-ism-give-away",
      tabImageUrl = "https://js.out.sh/images/reward-overlay@2X.png",
      overlayImageHeight = 70,
      overlayImageWidth = 200,
      hashTrigger = "gleam",
      showTrigger = "onLoadOnceDesktop",
      hideButton = true,
      triggerCookieName = widgetName + campaignKey + 'Trigger',
      campaignReady = false,
      loader;


  function widget() {
    return window[widgetName];
  }

  function stopPropagation(e) {
    if(e && e.stopPropagation) {
      e.stopPropagation();
    } else {
      window.event.returnValue = false;
      window.event.cancelBubble = true;
    }
  }

  function addOverlay() {
    includeCSS();

    widget().popupSizeListener = function (e) {

      if(e && e.data && e.data.match) {
        var match = e.data.match(new RegExp('^' + widgetName + 'PopupHeight' + campaignKey + '=(\\d+\\.?\\d*)$'));

        if(match && popup.parentNode) {
          if(!campaignReady) {
            if(typeof SVGRect != "undefined") { hideLoader(); }
            setTimeout(function(){
              campaignReady = true;
              widget()["triggerReady" + campaignKey]();
            }, 10);
          }

          popup.setAttribute(widgetName + 'HeightOverride', match[1]);
          repositionWindow(match[1]);
        }
      }
    };

    if(window.addEventListener) {
      window.addEventListener("message", widget().popupSizeListener, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", widget().popupSizeListener, false);
    }

    function initElem(name, type) {
      var e = document.createElement(type);
      e.id = 'c9-'+name;
      document.body.appendChild(e);
      return e;
    }

    function applyIe8Offset() {

      if(!imageButton && ie8()) {
        var buttonHeight = widgetTheme === 'plain' ? 50 : 32;

        if(buttonPosition === 'center-right') {
          button.style.right = (buttonHeight - button.offsetWidth) + 'px';
        }

        if (buttonPosition.match(/^center/)) {
          button.style.marginTop = (-buttonHeight) + 'px';
        }
      }
    }

    function repositionWindow(height) {
      var override = popup.getAttribute(widgetName + 'HeightOverride');
      var trueHeight = Math.min(windowHeight() - 20, override ? override : height);

      if(windowWidth() < 540) {
        popup.style.maxWidth = windowWidth() + 'px';
        popup.style.marginLeft = "-" + ((windowWidth()/2) + 5) + 'px';
        iframe.style.maxWidth = windowWidth() + 'px';
      }

      popup.style.height = trueHeight + 'px';
      setTimeout(function () {
        iframe.style.height = trueHeight + 'px';
      }, 25);

      if(popup.getAttribute('state') === 'present') {
        popup.style.top = (((windowHeight() - trueHeight) / 2) - 5) + 'px';
      }
    }

    var button = initElem('button', 'a'),
        buttonContent = initElem('button-content', 'span'),
        popup = initElem('popup', 'div'),
        blocker = initElem('blocker', 'div'),
        closeBlocker = initElem('close-blocker', 'a'),
        iframe = document.createElement('iframe'),
        overlayWidth,
        overlayHeight;

    addClass(button, 'c9-' + widgetTheme);
    setTimeout(function () {
      addClass(button, 'c9-shown');
    }, 25);

    button.appendChild(buttonContent);

    addClass(button, 'c9-' + buttonPosition);

    if(widgetTheme == 'image') {
      button.style.background = 'transparent';

      var image = document.createElement('img');
      image.src = tabImageUrl;
      image.setAttribute('alt', overlayText);
      button.style.height = overlayImageHeight + 'px';
      button.style.width = overlayImageWidth + 'px';
      button.appendChild(image);
    } else {
      setText(buttonContent, overlayText);

      if(overlayBackgroundColor === '') {
        button.setAttribute('style', "");
      } else {
        buttonContent.style.background = overlayBackgroundColor;
      }

      if (overlayTextColor != '') {
        buttonContent.style.color = overlayTextColor;
      }
    }

    if(allowRemove) {
      addClass(button, 'c9-removable');
      var remover = initElem('remover', 'span');
      remover.innerHTML = '&times;';
      if(widgetTheme == 'floating') {
        remover.style.color = overlayTextColor || 'white';
      }
      button.appendChild(remover);

      remover.onclick = function (e) {
        document.cookie = widgetName + campaignKey + '=X;path=/';
        removeClass(button, 'c9-shown');
        setTimeout(function () {
          button.parentNode.removeChild(button);
        }, animationMilliseconds*2);

        stopPropagation(e);
        return false;
      };
    }

    popup.style.top = '-' + windowHeight() + 'px';

    iframe.src = withLocation(withEnterId(popupUrl));
    iframe.frameBorder = 0;

    var closeFunction = function () {
      widget().hidePopup(campaignKey);
      return false;
    };

    blocker.onclick = closeFunction;

    closeBlocker.innerHTML = "&times;";
    closeBlocker.href = "javascript:void(0)";
    if(smallScreen()) {
      popup.appendChild(closeBlocker);
      closeBlocker.onclick = closeFunction;
    } else {
      blocker.appendChild(closeBlocker);
    }

    function prepareLoader(){
      var id = 'loader', fill = '#fff',
          size = 20, radius = 3, duration = 1000,
          maxOpacity = 0.6, minOpacity = 0.15;

      loader = svgdom("svg", {id: id, width: size*3.5, height: size, style: "position: fixed; top: 50%; left:50%; transform: translate(-50%, -50%);"}, [
        svgdom("rect", {width: size, height: size, x: "0", y: "0", rx: radius, ry: radius, fill: fill, "fill-opacity": maxOpacity}, [
          svgdom("animate", {attributeName: "opacity", values: "1;"+minOpacity+";1", dur: duration+"ms", repeatCount: "indefinite"})
        ]),
        svgdom("rect", {width: size, height: size, x: size*1.25, y: "0", rx: radius, ry: radius, fill: fill, "fill-opacity": maxOpacity}, [
          svgdom("animate", {attributeName: "opacity", values: "1;"+minOpacity+";1", dur: duration+"ms", begin: (duration/4)+"ms", repeatCount: "indefinite"})
        ]),
        svgdom("rect", {width: size, height: size, x: size*2.5, y: "0", rx: radius, ry: radius, fill: fill, "fill-opacity": maxOpacity}, [
          svgdom("animate", {attributeName: "opacity", values: "1;"+minOpacity+";1", dur: duration+"ms", begin: (duration/2)+"ms", repeatCount: "indefinite"})
        ])
      ]);
      blocker.appendChild(loader);
    }
    function hideLoader(){
      loader.style.display = "none";
    }
    if(typeof SVGRect != "undefined") { prepareLoader(); }

    widget()['openPopupCampaign' + campaignKey] = button.onclick = function () {
      if(smallScreen()) {
        window.open(withLocation(withEnterId(standAloneUrl)), 'gleam', 'menubar=no,toolbar=no,resizable=no,scrollbars=yes,height='+ windowHeight() +',width=540');
        return false;
      } else {
        widget().showPopup(campaignKey);
        return false;
      }
    };

    widget()['preloadPopup' + campaignKey] = button.onmouseover = function(){
      if(!iframe.parentNode) {
        popup.appendChild(iframe);
      }

      button.onmouseover = button.ontouchstart = null;
    };

    widget()['preloadAndShowPopup' + campaignKey] = function(){
      widget()['onReady' + campaignKey](widget()["showPopup" + campaignKey ]);
      widget()['preloadPopup' + campaignKey]();
    }

    var onReadyFunctions = [];
    widget()['onReady' + campaignKey] = function(fun){
      onReadyFunctions.push(fun);
    }

    widget()['triggerReady' + campaignKey] = function(){
      for(var fi in onReadyFunctions) if(onReadyFunctions.hasOwnProperty(fi)) {
        onReadyFunctions[fi]();
      }
    }

    function showPopup(){
      popup.setAttribute('state', 'present');
      repositionWindow(windowHeight() - 20);
    }

    widget()['showPopup' + campaignKey] = function (key) {
      addClass(popup, 'c9-shown');

      if(!iframe.parentNode) {
        popup.appendChild(iframe);
      }

      if(campaignReady) {
        showPopup();
      } else {
        widget()['onReady' + campaignKey](showPopup);
      }

      blocker.style.display = 'block';
      setTimeout(function () {
        addClass(blocker, 'c9-shown');
      }, 0);
    };

    widget()['hidePopup' + campaignKey] = function () {
      removeClass(popup, 'c9-shown');
      popup.style.top = '-' + windowHeight() + 'px';
      popup.setAttribute('state', 'gone');

      removeClass(blocker, 'c9-shown');
      setTimeout(function () {
        blocker.style.display = 'none';
      }, animationMilliseconds);
    };

    widget().openPopupCampaign = function (key) {
      (widget()['openPopupCampaign' + (key || campaignKey)]).call(this)
    };
    widget().showPopup = function (key) {
      (widget()['showPopup' + (key || campaignKey)]).call(this)
    };
    widget().preloadPopup = function (key) {
      (widget()['preloadPopup' + (key || campaignKey)]).call(this)
    };
    widget().preloadAndShowPopup = function (key) {
      (widget()['preloadAndShowPopup' + (key || campaignKey)]).call(this)
    };
    widget().hidePopup = function (key) {
      (widget()['hidePopup' + (key || campaignKey)]).call(this)
    };

    if(buttonPosition.match(/center/)) {
      if(imageButton) {
        button.style.marginTop = (-overlayImageHeight/2) + 'px';
      } else {
        button.style.marginTop = ((-button.offsetWidth/2) - button.offsetHeight) + 'px';
      }
    }

    applyIe8Offset();

    if(window.location.hash === '#' + hashTrigger) {
      if(smallScreen()) {
        window.location.href = withLocation(withEnterId(standAloneUrl));
      } else {
        widget().showPopup();
      }
    }


    if(showTrigger === "exitIntent" && !smallScreen()) {
      if(!getCookie('viewedOuibounceModal')) {
        setCookie('viewedOuibounceModal', 'false');
      }

      if(getCookie !== null) {
        var oui = document.createElement('script');

        if(getCookie('viewedOuibounceModal') !== "true") {
          widget()["preloadPopup" + campaignKey]();
        }

        oui.onload = function () {
          var _ouibounce = ouibounce(false, {
            sensitivity: 20,
            sitewide: true,
            callback: function () {
              widget()["showPopup" + campaignKey]();
            }
          });
        };

        oui.src = "//cdnjs.cloudflare.com/ajax/libs/ouibounce/0.0.8/ouibounce.min.js";
        var appendTo = document.getElementsByTagName('script')[0];
        appendTo.parentNode.insertBefore(oui, appendTo);
      }

    }

    if(showTrigger === "onLoadOnce" || (showTrigger === "onLoadOnceDesktop" && !smallScreen())) {

      var triggerCookie = getCookie(triggerCookieName);
      if(triggerCookie === null) {
        setCookie(triggerCookieName, "new");
      }

      triggerCookie = getCookie(triggerCookieName);
      if(triggerCookie === "new") {
        setCookie(triggerCookieName, "shown");
        widget()["preloadAndShowPopup" + campaignKey]();

      } else if(triggerCookie === "3pc") {
        setCookie(triggerCookieName, "s3pc");
        widget()["preloadAndShowPopup" + campaignKey]();
      }
    }
  }

  function multiLevel(a) {
    for(var i = 0; i < a.length; a++) {
        if(typeof(a[i]) === 'object') {
            return true;
        }
    }
    return false;
}

function campaignKeys() {
    var scripts = document.getElementsByTagName('script');
    var keys = [];
    var unique = {};
    var src, i, match;

    for(i = 0; i < scripts.length; i++) {
        src = scripts[i].getAttribute('src')+"";
        match = src.match(/\/(.....)\/(embed|ol|trk)\.js/);
        if(match && !unique[match[1]]) {
            keys.push(match[1]);
            unique[match[1]] = true;
        }
    }

    return keys;
}

function parseVars(vars) {
    var buf = [];
    var v, i;
    if(typeof(vars) !== 'object') {
        buf.push(vars);
    } else {
        if(multiLevel(vars)) {
            for(i = 0; i < vars.length; i++) {
                v = vars[i];
                if(typeof(v) === 'object' && v.length > 1) {
                    buf.push(encodeURIComponent(v[0])+"="+encodeURIComponent(v[1]));
                } else {
                    buf.push(encodeURIComponent(v));
                }
            }
        } else {
            if(vars.length > 1) {
                buf.push(encodeURIComponent(vars[0])+"="+encodeURIComponent(vars[1]));
            } else {
                buf.push(encodeURIComponent(vars[0]));
            }
        }
    }

    return buf;
}

function push(vars) {


    if(!getCookie('GleamId')) {
        setCookie('GleamId', generateId());
    }

    if(getCookie('GleamId')) {
        var f = document.createElement('script');

        f.src = 'https://gleam.io/track.js?i='+encodeURIComponent(getCookie('GleamId'))+"&" +
                "k="+campaignKeys().join(',')+"&"+
                "v="+encodeURIComponent(parseVars(vars).join('&'));

        s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(f, s);
    }
}

function initGleamTracker() {
    window.Gleam = { push: push, init: true }
}

if(typeof(Gleam) === 'undefined') {
    initGleamTracker();
} else if(typeof(Gleam.init) === 'undefined') {
    var onLoadTracking = Gleam;
    initGleamTracker();
    Gleam.push(onLoadTracking);
}


  addOverlay();
})();