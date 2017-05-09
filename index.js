'use strict';
var PinyinFormat = require('./libs/PinyinHelper');
var PinyinHelper = require('./libs/PinyinHelper');
var ChineseHelper = require('./libs/ChineseHelper');
;(function(){
    global.PinyinFormat = PinyinFormat.PinyinFormat;
    global.PinyinHelper = PinyinHelper.PinyinHelper;
    global.ChineseHelper = ChineseHelper.ChineseHelper;
})();

