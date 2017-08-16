'use strict';
var PinyinHelper = require('./libs/PinyinHelper');
var ChineseHelper = require('./libs/ChineseHelper');
;(function(){
    global.PinyinHelper = PinyinHelper.PinyinHelper;
    global.ChineseHelper = ChineseHelper.ChineseHelper;
})();

