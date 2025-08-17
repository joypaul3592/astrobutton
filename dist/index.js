'use strict';

var jsxRuntime = require('react/jsx-runtime');

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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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

var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.style, style = _d === void 0 ? {} : _d, props = __rest(_a, ["children", "onClick", "variant", "size", "style"]) // Spread remaining props to button element
    ;
    // বেস স্টাইল
    var baseStyles = {
        fontWeight: 500,
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        fontFamily: "inherit",
    };
    // ভ্যারিয়েন্ট অনুযায়ী স্টাইল
    var variantStyles = {
        primary: {
            backgroundColor: "#2563eb",
            color: "white",
        },
        secondary: {
            backgroundColor: "#e5e7eb",
            color: "#111827",
        },
    };
    // সাইজ অনুযায়ী স্টাইল
    var sizeStyles = {
        small: {
            padding: "6px 12px",
            fontSize: "14px",
        },
        medium: {
            padding: "8px 16px",
            fontSize: "16px",
        },
        large: {
            padding: "12px 24px",
            fontSize: "18px",
        },
    };
    // Hover effects
    var handleMouseEnter = function (e) {
        if (variant === "primary") {
            e.currentTarget.style.backgroundColor = "#1d4ed8";
        }
        else {
            e.currentTarget.style.backgroundColor = "#d1d5db";
        }
    };
    var handleMouseLeave = function (e) {
        if (variant === "primary") {
            e.currentTarget.style.backgroundColor = "#2563eb";
        }
        else {
            e.currentTarget.style.backgroundColor = "#e5e7eb";
        }
    };
    var combinedStyles = __assign(__assign(__assign(__assign({}, baseStyles), variantStyles[variant]), sizeStyles[size]), style);
    return (jsxRuntime.jsx("button", __assign({ style: combinedStyles, onClick: onClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, props, { children: children })));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
