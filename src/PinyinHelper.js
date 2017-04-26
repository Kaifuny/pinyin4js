/**
 * 汉字转拼音
 * 
 * @auth superbiger(superbiger@qq.com)
 */
export var PinyinFormat = {
    WITH_TONE_MARK      :"WITH_TONE_MARK",  //带声调
    WITHOUT_TONE        :"WITHOUT_TONE",    //不带声调
    WITH_TONE_NUMBER    :"WITH_TONE_NUMBER" //带声调数字尾缀
}

var PINYIN_TABLE = PinyinResource.getPinyinResource();  //词组字典
var MUTIL_PINYIN_TABLE = PinyinResource.getMutilPinyinResource();  //单字字典
var REVERSER_MUTIL_PINYIN_TABLE = PinyinResource.getMutilPinyinReverseResource();   //反向索引 单字字典（MUTIL_PINYIN_TABLE）
var PINYIN_SEPARATOR = ","; //拼音分隔符
var CHINESE_LING = '〇';
var ALL_UNMARKED_VOWEL = "aeiouv";
var ALL_MARKED_VOWEL = "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ"; //所有带声调的拼音字母

export class PinyinHelper {
    /**
     * 将带声调格式的拼音转换为数字代表声调格式的拼音
     * @param {string/char} str 
     */
    static _convertWithToneNumber(str) {

    }

    /**
     * 将带声调格式的拼音转换为不带声调格式的拼音
     * @param {string/char} str 
     */
    static _convertWithoutTone(str) {
        
    }

    /**
     * 将带声调的拼音格式化为相应格式的拼音
     * @param {string/char} str 
     * @param {PinyinFormat} format 拼音格式：WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调
     */
    static _formatPinyin(str, format) {
        if (pinyinFormat == PinyinFormat.WITH_TONE_MARK) {
			return pinyinString.split(PINYIN_SEPARATOR);
		} else if (pinyinFormat == PinyinFormat.WITH_TONE_NUMBER) {
			return this._convertWithToneNumber(pinyinString);
		} else if (pinyinFormat == PinyinFormat.WITHOUT_TONE) {
			return this._convertWithoutTone(pinyinString);
		}
		return [""];
    }

    /**
     * 将字符串转换成相应格式的拼音
     * @param {string} str 
     * @param {string} separator 
     * @param {PinyinFormat} format 拼音格式：WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调
     */
    static convertToPinyinString(str, separator, format) {

    }

    /**
     * 判断一个汉字是否为多音字
     * @param {string/char} c 
     */
    static hasMultiPinyin(c) {

    }

    /**
     * 获取字符串对应拼音的首字母
     * @param {string} str 
     */
    static getShortPinyin(str) {

    }

    static addPinyinDictResource(res) {

    }

    static addMutilPinyinDictResource(res) {
        
    }

    static getShortMultiResource(res) {
        
    }

    static getFullMultiResource(res) {
        
    }
}
