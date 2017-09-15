'use strict';
var PinyinHelper = require('../pinyin4js/libs/PinyinHelper');
var ChineseHelper = require('../pinyin4js/libs/ChineseHelper');
;(function(){
    global.PinyinHelper = PinyinHelper.PinyinHelper;
    global.ChineseHelper = ChineseHelper.ChineseHelper;
})();

