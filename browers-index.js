'use strict';
var PinyinHelper = require('./lib/PinyinHelper');
var ChineseHelper = require('./lib/ChineseHelper');
var PinyinFormat = require('./lib/PinyinHelper');

;(function(){
    global.PinyinHelper = PinyinHelper.PinyinHelper;
    global.ChineseHelper = ChineseHelper.ChineseHelper;
    global.PinyinFormat = PinyinFormat.PinyinFormat;
})();