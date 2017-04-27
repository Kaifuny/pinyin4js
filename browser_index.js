/**
 * pinyin4js for brower
 */
var PinyinFormat = require('./libs/PinyinHelper');
var PinyinHelper = require('./libs/PinyinHelper');
var ChineseHelper = require('./libs/ChineseHelper');

;(function(){
    window.PinyinFormat = PinyinFormat.PinyinFormat;
    window.PinyinHelper = PinyinHelper.PinyinHelper;
    window.ChineseHelper = ChineseHelper.ChineseHelper;
})();