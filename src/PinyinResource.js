/**
 * 字典加载
 * 
 * @auth superbiger(superbiger@qq.com)
 */
import { chinese_dict } from "./dict/chinese.dict.js"
import { mutil_pinyin_dict } from "./dict/mutil_pinyin.dict.js"
import { pinyin_dict } from "./dict/pinyin.dict.js"
export class PinyinResource {
    static getPinyinResource() {
        return pinyin_dict;
    }

    static getMutilPinyinResource() {
        return mutil_pinyin_dict;
    }

    static getMutilPinyinReverseResource() {
        var dict = {}
        for(var key in mutil_pinyin_dict) {
            dict[mutil_pinyin_dict[key]] = key;
        }
        return dict;
    }

    static getChineseResource() {
        return chinese_dict;
    }
}