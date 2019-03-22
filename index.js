'use strict';
var PinyinHelper = require('./lib/PinyinHelper');
var ChineseHelper = require('./lib/ChineseHelper');

var pinyin4js = {
    WITH_TONE_MARK      :"WITH_TONE_MARK",   //带声调
    WITHOUT_TONE        :"WITHOUT_TONE",     //不带声调
    WITH_TONE_NUMBER    :"WITH_TONE_NUMBER", //数字代表声调
    FIRST_LETTER        :"FIRST_LETTER",      //首字母风格

    convertToPinyinString(str, separator, format) {
        return PinyinHelper.PinyinHelper.convertToPinyinString(str, separator, format)
    },

    convertToSimplifiedChinese(str) {
        return ChineseHelper.ChineseHelper.convertToSimplifiedChinese(str)
    },

    convertToTraditionalChinese(str) {
        return ChineseHelper.ChineseHelper.convertToTraditionalChinese(str)
    },

    getShortPinyin(str) {
        return PinyinHelper.PinyinHelper.getShortPinyin(str)
    }
}

export default pinyin4js 

