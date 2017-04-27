"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PinyinHelper = exports.PinyinFormat = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 汉字转拼音
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @auth superbiger(superbiger@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _PinyinResource = require("./PinyinResource.js");

var _ChineseHelper = require("./ChineseHelper.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PinyinFormat = exports.PinyinFormat = {
    WITH_TONE_MARK: "WITH_TONE_MARK", //带声调
    WITHOUT_TONE: "WITHOUT_TONE", //不带声调
    WITH_TONE_NUMBER: "WITH_TONE_NUMBER" //数字代表声调
};

var PINYIN_TABLE = _PinyinResource.PinyinResource.getPinyinResource(); //词组字典
var MUTIL_PINYIN_TABLE = _PinyinResource.PinyinResource.getMutilPinyinResource(); //单字字典
var PINYIN_SEPARATOR = ","; //拼音分隔符
var CHINESE_LING = '〇';
var ALL_UNMARKED_VOWEL = "aeiouv";
var ALL_MARKED_VOWEL = "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ"; //所有带声调的拼音字母

var PinyinHelper = exports.PinyinHelper = function () {
    function PinyinHelper() {
        _classCallCheck(this, PinyinHelper);
    }

    _createClass(PinyinHelper, null, [{
        key: "_convertWithToneNumber",

        /**
         * 将带声调格式的拼音转换为数字代表声调格式的拼音
         * @param {string/char} str 
         */
        value: function _convertWithToneNumber(str) {
            var pinyinArray = str.split(PINYIN_SEPARATOR);

            for (var i = pinyinArray.length - 1; i >= 0; i--) {
                var hasMarkedChar = false;
                var originalPinyin = pinyinArray[i].replace("ü", "v");

                for (var j = originalPinyin.length - 1; j >= 0; j--) {
                    var originalChar = originalPinyin.charAt(j);
                    if (originalChar < 'a' || originalChar > 'z') {
                        var indexInAllMarked = ALL_MARKED_VOWEL.indexOf(originalChar);
                        var toneNumber = indexInAllMarked % 4 + 1;
                        var replaceChar = ALL_UNMARKED_VOWEL.charAt((indexInAllMarked - indexInAllMarked % 4) / 4);

                        pinyinArray[i] = originalPinyin.replace(originalChar, replaceChar) + toneNumber;
                        hasMarkedChar = true;
                        break;
                    }
                }
                if (!hasMarkedChar) {
                    // 找不到带声调的拼音字母说明是轻声，用数字5表示
                    pinyinArray[i] = originalPinyin + "5";
                }
            }
            return pinyinArray;
        }

        /**
         * 将带声调格式的拼音转换为不带声调格式的拼音
         * @param {string/char} str 
         */

    }, {
        key: "_convertWithoutTone",
        value: function _convertWithoutTone(str) {
            var pinyinArray;
            for (var i = ALL_MARKED_VOWEL.length - 1; i >= 0; i--) {
                var originalChar = ALL_MARKED_VOWEL.charAt(i);
                var replaceChar = ALL_UNMARKED_VOWEL.charAt((i - i % 4) / 4);
                str = str.replace(originalChar, replaceChar);
            }
            pinyinArray = str.replace("ü", "v").split(PINYIN_SEPARATOR);
            return pinyinArray;
        }

        /**
         * 将带声调的拼音格式化为相应格式的拼音
         * @param {string/char} str 
         * @param {PinyinFormat} format 拼音格式：WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调
         */

    }, {
        key: "_formatPinyin",
        value: function _formatPinyin(str, format) {
            if (format == PinyinFormat.WITH_TONE_MARK) {
                return str.split(PINYIN_SEPARATOR);
            } else if (format == PinyinFormat.WITH_TONE_NUMBER) {
                return this._convertWithToneNumber(str);
            } else if (format == PinyinFormat.WITHOUT_TONE) {
                return this._convertWithoutTone(str);
            }
            return [];
        }

        /**
         * 将单个汉字转换为相应格式的拼音
         * 
         * @param {string/char} c 
         * @param {PinyinFormat} format 拼音格式：WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调
         */

    }, {
        key: "_convertToPinyinArray",
        value: function _convertToPinyinArray(c, format) {
            var pinyin = PINYIN_TABLE[c];
            if (typeof pinyin != "undefined") {
                var arr = [];
                var pinyinArray = this._formatPinyin(pinyin, format);
                for (var i = 0; i < pinyinArray.length; i++) {
                    arr.push(pinyinArray[i]);
                }
                return arr;
            }
            return [];
        }
        /**
         * 将字符串转换成相应格式的拼音
         * @param {string} str 
         * @param {string} separator 
         * @param {PinyinFormat} format 拼音格式：WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调
         */

    }, {
        key: "convertToPinyinString",
        value: function convertToPinyinString(str, separator, format) {
            str = _ChineseHelper.ChineseHelper.convertToSimplifiedChinese(str);
            var i = 0;
            var strLen = str.length;
            var str_result = '';
            while (i < strLen) {
                var subStr = str.substring(i);
                var commonPrefixList = ''; //词组字典有的情况返回该起点下分词数组，没有的情况返回空数组
                if (commonPrefixList.length == 0) {
                    //不是词组
                    var c = str.charAt(i);
                    if (_ChineseHelper.ChineseHelper.isChinese(c) || c == CHINESE_LING) {
                        var pinyinArray = this._convertToPinyinArray(c, format);
                        if (pinyinArray.length > 0) {
                            str_result += pinyinArray[0];
                        } else {
                            str_result += str.charAt(i);
                        }
                    } else {
                        str_result += c;
                    }
                    i++;
                } else {
                    //是词组
                    var words = MUTIL_PINYIN_TABLE[commonPrefixList[commonPrefixList.length - 1]];
                    var pinyinArray = _formatPinyin(MUTIL_PINYIN_TABLE[words], format);
                    for (var j = 0, l = pinyinArray.length; j < l; j++) {
                        str_result += pinyinArray[j];
                        if (j < l - 1) {
                            str_result += separator;
                        }
                    }
                    i += words.length;
                }
                if (i < strLen) {
                    str_result += separator;
                }
            }
            return str_result;
        }

        /**
         * 获取字符串对应拼音的首字母
         * @param {string} str 
         */

    }, {
        key: "getShortPinyin",
        value: function getShortPinyin(str) {}

        /**
         * 判断一个汉字是否为多音字
         * @param {string/char} c 
         */

    }, {
        key: "hasMultiPinyin",
        value: function hasMultiPinyin(c) {}
    }, {
        key: "addPinyinDictResource",
        value: function addPinyinDictResource(res) {}
    }, {
        key: "addMutilPinyinDictResource",
        value: function addMutilPinyinDictResource(res) {}
    }, {
        key: "getShortMultiResource",
        value: function getShortMultiResource(res) {}
    }, {
        key: "getFullMultiResource",
        value: function getFullMultiResource(res) {}
    }]);

    return PinyinHelper;
}();