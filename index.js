'use strict';
var PinyinHelper = require('./lib/PinyinHelper');
var ChineseHelper = require('./lib/ChineseHelper');

;(function(){
    global.PinyinHelper = PinyinHelper.PinyinHelper;
    global.ChineseHelper = ChineseHelper.ChineseHelper;
})();

