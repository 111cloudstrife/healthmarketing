var OptiMonkRegistry = {
    account: 3755,
    baseUrl: document.location.protocol + '//front.optimonk.com'
};
var OptiMonk = OptiMonk || {};

!function(n,e){n.ayepromise=e()}(OptiMonk,function(){"use strict";var n={},e=function(){var n=!1;return function(e){return function(){n||(n=!0,e.apply(null,arguments))}}},t=function(n){var e=n&&n.then;return"object"==typeof n&&"function"==typeof e?function(){return e.apply(n,arguments)}:void 0},r=function(e,t){var r=n.defer(),o=function(n,e){setTimeout(function(){var t;try{t=n(e)}catch(o){return void r.reject(o)}t===r.promise?r.reject(new TypeError("Cannot resolve promise with itself")):r.resolve(t)},1)},i=function(n){e&&e.call?o(e,n):r.resolve(n)},c=function(n){t&&t.call?o(t,n):r.reject(n)};return{promise:r.promise,handle:function(n,e){n===u?i(e):c(e)}}},o=0,u=1,i=2;return n.defer=function(){var n,c=o,f=[],a=function(e,t){c=e,n=t,f.forEach(function(e){e.handle(c,n)}),f=null},l=function(n){a(u,n)},s=function(n){a(i,n)},p=function(e,t){var u=r(e,t);return c===o?f.push(u):u.handle(c,n),u.promise},v=function(n){var t=e();try{n(t(d),t(s))}catch(r){t(s)(r)}},d=function(n){var e;try{e=t(n)}catch(r){return void s(r)}e?v(e):l(n)},h=e();return{resolve:h(d),reject:h(s),promise:{then:p,fail:function(n){return p(null,n)}}}},n});
var OptiMonk;
(function (OptiMonk) {
    var Data = (function () {
        function Data() {
        }
        Data.load = function () {
            var defer = OptiMonk.ayepromise.defer();
            this.Loader.load(defer);
            return defer.promise;
        };
        return Data;
    })();
    OptiMonk.Data = Data;
    Data.Loader = {
        load: function (defer) { defer.resolve(); }
    };
})(OptiMonk || (OptiMonk = {}));
OptiMonk.Util = {};

OptiMonk.Util.JSON = JSON || {};
OptiMonk.Util.quote=function(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'};
OptiMonk.Util.str=function(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return OptiMonk.Util.quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=OptiMonk.Util.str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=OptiMonk.Util.str(r,a);if(i){u.push(OptiMonk.Util.quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=OptiMonk.Util.str(r,a);if(i){u.push(OptiMonk.Util.quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}};
OptiMonk.Util.stringify=function(e,t,n){if(typeof OptiMonk.Util.JSON.stringify==="function"){return JSON.stringify(e,t,n)}escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return OptiMonk.Util.str("",{"":e})};
OptiMonk.Util.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}if(typeof OptiMonk.Util.JSON.parse==="function"){return JSON.parse(text,reviver)}cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")};
OptiMonk.Cookie = (function (Util) {
    var localSetItem;
    var localGetItem;
    var localRemoveItem;
    var localHasItem;
    var sessionSetItem;
    var sessionGetItem;
    var sessionRemoveItem;
    var sessionHasItem;

    var safeValue = function (value) {
        if (typeof value === 'object') {
            value = Util.stringify(value);
        }

        if (navigator.userAgent.match(/^Opera.* Version\/12.*/)) {
            return encodeURIComponent(value);
        }
        return value;
    };

    localGetItem = sessionGetItem = function (key) {
        var matchKey = document.cookie.match(new RegExp(key + '=([^;]+)'));
        return matchKey ? decodeURIComponent(matchKey[1]) : null;
    };
    localHasItem = sessionHasItem = function (key) {
        if (!key) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    };
    localRemoveItem = sessionRemoveItem = function (key) {
        if (localHasItem(key) === false) {
            return false;
        }
        document.cookie = encodeURIComponent(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
        return true;
    };

    localSetItem = function (key, data) {
        var expiration = 1480;
        var expirationDate = new Date();
        var cookieValue = safeValue(data);

        expirationDate.setDate(expirationDate.getDate() + expiration);
        cookieValue += "; expires=" + expirationDate.toUTCString();

        document.cookie = key + "=" + cookieValue + ";path=/;";
    };

    sessionSetItem = function (key, data) {
        var cookieValue = safeValue(data);
        document.cookie = key + "=" + cookieValue + ";path=/;";
    };

    return {
        local: {
            setItem: localSetItem,
            getItem: localGetItem,
            removeItem: localRemoveItem,
            hasItem: localHasItem
        },
        session: {
            setItem: sessionSetItem,
            getItem: sessionGetItem,
            removeItem: sessionRemoveItem,
            hasItem: sessionHasItem
        }
    };
})(OptiMonk.Util);

OptiMonk.Storage = (function (Cookie, Util) {
    var localSetItem;
    var localGetItem;
    var localRemoveItem;
    var localHasItem;
    var sessionSetItem;
    var sessionGetItem;
    var sessionRemoveItem;
    var sessionHasItem;

    if (typeof localStorage === 'object') {
        localSetItem = function (key, data) {
            localStorage.setItem(key, Util.stringify(data));
        };
        localGetItem = function (key) {
            return Util.parse(localStorage.getItem(key));
        };
        localRemoveItem = function (key) {
            localStorage.removeItem(key);
        };
        localHasItem = function (key) {
            return localGetItem(key) !== null;
        };

        sessionSetItem = function (key, data) {
            sessionStorage.setItem(key, Util.stringify(data));
        };
        sessionGetItem = function (key) {
            return Util.parse(sessionStorage.getItem(key));
        };
        sessionRemoveItem = function (key) {
            sessionStorage.removeItem(key);
        };
        sessionHasItem = function (key) {
            return sessionGetItem(key) !== null;
        }
    } else {
        return Cookie;
    }

    return {
        local: {
            setItem: localSetItem,
            getItem: localGetItem,
            removeItem: localRemoveItem,
            hasItem: localHasItem
        },
        session: {
            setItem: sessionSetItem,
            getItem: sessionGetItem,
            removeItem: sessionRemoveItem,
            hasItem: sessionHasItem
        }
    };
})(OptiMonk.Cookie, OptiMonk.Util);
OptiMonk.ajax={load:function(t){function e(){4===n.readyState&&t&&t(n.responseText)}var n,a,o;if("undefined"!=typeof XMLHttpRequest)n=new XMLHttpRequest,"withCredential"in n&&(n.withCredentials=!0);else{var i=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];for(a=0,o=i.length;o>a;a++)try{n=new ActiveXObject(i[a]);break}catch(p){}}return n.onreadystatechange=e,n},get:function(t,e){var n=OptiMonk.ajax.load(e);n.open("GET",t,!0),n.send("")},post:function(t,e,n){var a=OptiMonk.ajax.load(n);a.open("POST",e,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(t)}};
OptiMonk.each = function (array, callback) {
    var key;

    for (key in array) {
        if (array.hasOwnProperty(key) && key !== 'length') {
            callback(key, array[key]);
        }
    }
};

OptiMonk.getCookie = function () {
    var cookies = OptiMonk.Cookie.local.getItem('optiMonkClient');
    if (cookies) {
        return OptiMonk.Util.parse(cookies);
    }

    cookies = {};
    cookies[OptiMonkRegistry.account] = {};

    return cookies;
};

OptiMonk.saveCookie = function () {
    var browserCookie = OptiMonk.getCookie();
    browserCookie[OptiMonkRegistry.account] = OptiMonkRegistry.Cookie;
    OptiMonk.Cookie.local.setItem('optiMonkClient', browserCookie);
};

OptiMonk.isCookieEnabled = function () {
    var navigatorCookie = navigator.cookieEnabled;
    var cookieEnabled = !!navigatorCookie;
    if (typeof navigatorCookie == "undefined" && !cookieEnabled) {
        document.cookie = "isCookie";
        cookieEnabled = (document.cookie.indexOf("isCookie") != -1);
    }
    return cookieEnabled;
};

OptiMonk.addResponseToHead = function (response) {
    var scriptObject = document.createElement('script');
    scriptObject.innerHTML = response;
    scriptObject.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(scriptObject);
};

OptiMonk.triggerEvent = function (element, eventName, parameters) {
    var event;
    if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, true);
    } else if (document.createEventObject) {
        event = document.createEventObject();
        event.eventType = eventName;
    }

    event.eventName = eventName;
    event.parameters = parameters || {};

    if (element.dispatchEvent) {
        element.dispatchEvent(event);
    } else if (element.fireEvent) {
        element.fireEvent('on' + event.eventType, event);
    } else if (element[eventName]) {
        element[eventName]();
    } else if (element['on' + eventName]) {
        element['on' + eventName]();
    }
};

OptiMonk.sendLoadRequest = function () {
    OptiMonk.ajax.post(
        'url=' + encodeURIComponent(window.location.href) + '&cookie=' + OptiMonk.Util.stringify(OptiMonk.getCookie()),
        OptiMonkRegistry.baseUrl + '/public/' + OptiMonkRegistry.account + '/js/load',
        OptiMonk.addResponseToHead
    );
};
OptiMonk.messaging=function(){var e,t,n=1,r,i=this;return{postMessage:function(e,t,r){if(!t){return}r=r||parent;if(i["postMessage"]){r["postMessage"](e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else if(t){r.location=t.replace(/#.*$/,"")+"#"+ +(new Date)+n++ +"&"+e}},receiveMessage:function(n,s){if(i["postMessage"]){if(n){r=function(e){if(typeof s==="string"&&e.origin!==s||Object.prototype.toString.call(s)==="[object Function]"&&s(e.origin)===!1){return!1}n(e)}}if(i["addEventListener"]){i[n?"addEventListener":"removeEventListener"]("message",r,!1)}else{i[n?"attachEvent":"detachEvent"]("onmessage",r)}}else{e&&clearInterval(e);e=null;if(n){e=setInterval(function(){var e=document.location.hash,r=/^#?\d+&/;if(e!==t&&r.test(e)){t=e;n({data:e.replace(r,"")})}},100)}}}}}();

OptiMonk.triggerEvent(document.getElementsByTagName('html')[0], 'optimonk#preload-initialized');

OptiMonk.Data.load()
    .then(function () {
        if (OptiMonk.isCookieEnabled()) {
            OptiMonk.sendLoadRequest();
        };
    });


