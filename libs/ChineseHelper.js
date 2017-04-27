"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChineseHelper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 汉字简繁转换
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @auth superbiger(superbiger@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _PinyinResource = require("./PinyinResource.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHINESE_REGEX = /^[\u4e00-\u9fa5]+$/;
var CHINESE_MAP = _PinyinResource.PinyinResource.getChineseResource();

var ChineseHelper = exports.ChineseHelper = function () {
    function ChineseHelper() {
        _classCallCheck(this, ChineseHelper);
    }

    _createClass(ChineseHelper, null, [{
        key: "_convertCharToSimplifiedChinese",

        /**
         * 将单个繁体字转换为简体字
         * @param {string/char} c
         */
        value: function _convertCharToSimplifiedChinese(c) {
            var simplifiedChinese = CHINESE_MAP[c];
            if (typeof simplifiedChinese == "undefined") {
                return c;
            }
            return simplifiedChinese;
        }

        /**
         * 将单个简体字转换为繁体字
         * @param {string/char} c
         */

    }, {
        key: "_convertCharToTraditionalChinese",
        value: function _convertCharToTraditionalChinese(c) {
            for (var key in CHINESE_MAP) {
                if (CHINESE_MAP[key] == c) {
                    return key;
                }
            }
            return c;
        }

        /**
         * 将繁体转化为简体
         * @param {string} str 
         */

    }, {
        key: "convertToSimplifiedChinese",
        value: function convertToSimplifiedChinese(str) {
            var result = '';
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                result += this._convertCharToSimplifiedChinese(c);
            }
            return result;
        }

        /**
         * 将简体转化为繁体
         * @param {string} str 
         */

    }, {
        key: "convertToTraditionalChinese",
        value: function convertToTraditionalChinese(str) {
            var result = '';
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                result += this._convertCharToTraditionalChinese(c);
            }
            return result;
        }

        /**
         * 判断是否为繁体字
         * @param {string/char} c 
         */

    }, {
        key: "isTraditionalChinese",
        value: function isTraditionalChinese(c) {
            var val = CHINESE_MAP[c];
            return typeof val != 'undefined';
        }

        /**
         * 判断是否为汉字
         * @param {string/char} c 
         */

    }, {
        key: "isChinese",
        value: function isChinese(c) {
            return '〇' == c || CHINESE_REGEX.test(c);
        }

        /**
         * 是否包含汉字
         * @param {string} str 
         */

    }, {
        key: "containsChinese",
        value: function containsChinese(str) {
            for (var i = 0; i < str.length; i++) {
                if (this.isChinese(str.charAt(i))) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "addChineseDictResource",
        value: function addChineseDictResource(res) {
            CHINESE_MAP = Object.assign(res, CHINESE_MAP);
        }
    }]);

    return ChineseHelper;
}();