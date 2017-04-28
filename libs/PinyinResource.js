"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PinyinResource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 字典加载
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @auth superbiger(superbiger@qq.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _chineseDict = require("./dict/chinese.dict.js");

var _mutil_pinyinDict = require("./dict/mutil_pinyin.dict.js");

var _pinyinDict = require("./dict/pinyin.dict.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PinyinResource = exports.PinyinResource = function () {
    function PinyinResource() {
        _classCallCheck(this, PinyinResource);
    }

    _createClass(PinyinResource, null, [{
        key: "getPinyinResource",

        //单字拼音字典库
        value: function getPinyinResource() {
            return _pinyinDict.pinyin_dict;
        }
        //词组拼音字典库

    }, {
        key: "getMutilPinyinResource",
        value: function getMutilPinyinResource() {
            return _mutil_pinyinDict.mutil_pinyin_dict;
        }
        //简繁对照库

    }, {
        key: "getChineseResource",
        value: function getChineseResource() {
            return _chineseDict.chinese_dict;
        }
    }]);

    return PinyinResource;
}();