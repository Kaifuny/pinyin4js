/**
 * 兼容pinyin
 */
/**
 * segment: 是否启用分词模式
 * 
 * hetegronym: 是否启用多音字模式
 * 
 * style:
 *  .STYLE_NORMAL 普通风格 pin yin
 *  .STYLE_TONE 默认风格 pīn yīn
 *  .STYLE_TONE2 声调2 pin1 yin1
 *  .STYLE_TONE3 声调3 pi1n yi1n
 *  .STYLE_INITIALS 声母风格 中国：zh g
 *  .STYLE_FIRST_LETTER 首字母风格 p y
 * 
 * 支持shell:
 *  $ pinyin 中心
 *  zhōng xīn
 */
export default {
    HETERONYM   : false,//默认关闭多音字模式
    SEGMENT     : true, //默认开启分词模式

    STYLE_NORMAL        : "STYLE_NORMAL",
    STYLE_TONE          : "STYLE_TONE",
    STYLE_TONE2         : "STYLE_TONE2",
    STYLE_TONE3         : "STYLE_TONE3",
    STYLE_INITIALS      : "STYLE_INITIALS",
    STYLE_FIRST_LETTER  : "STYLE_FIRST_LETTER",

    pinyin:function(str, options){
        return "pinyin"
    }
}