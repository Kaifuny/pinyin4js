'use strict';
var PinyinHelper = require('./src/PinyinHelper');
var ChineseHelper = require('./src/ChineseHelper');

;(function(){
    global.PinyinHelper = PinyinHelper.PinyinHelper;
    global.ChineseHelper = ChineseHelper.ChineseHelper;
})();

