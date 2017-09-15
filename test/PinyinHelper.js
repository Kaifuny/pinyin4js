var should = require("should")
import { PinyinFormat } from "../src/PinyinHelper.js";
import { PinyinHelper } from "../src/PinyinHelper.js";

describe("# PinyinHelper", function() {
    describe("* convertToPinyinString(str, separator, format)", function() {
        it("PinyinHelper.convertToPinyinString('厦门你好大厦厦门', ',', PinyinFormat.WITH_TONE_MARK) = 'xià,mén,nǐ,hǎo,dà,shà,xià,mén'", function(){
            PinyinHelper.convertToPinyinString('厦门你好大厦厦门', ',', PinyinFormat.WITH_TONE_MARK).should.eql('xià,mén,nǐ,hǎo,dà,shà,xià,mén')
        })
        it("PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '#', PinyinFormat.WITH_TONE_MARK) = 'xià#mén#nǐ#hǎo#dà#shà#xià#mén'", function(){
            PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '#', PinyinFormat.WITH_TONE_MARK).should.eql('xià#mén#nǐ#hǎo#dà#shà#xià#mén')
        })
        it("PinyinHelper.convertToPinyinString('厦门你好大厦厦门', ',', PinyinFormat.WITHOUT_TONE) = 'xia,men,ni,hao,da,sha,xia,men'", function(){
            PinyinHelper.convertToPinyinString('厦门你好大厦厦门', ',', PinyinFormat.WITHOUT_TONE).should.eql('xia,men,ni,hao,da,sha,xia,men')
        })
        it("PinyinHelper.convertToPinyinString('厦门你好大厦厦门', ',', PinyinFormat.WITH_TONE_NUMBER) = 'xia4,men2,ni3,hao3,da4,sha4,xia4,men2'", function(){
            PinyinHelper.convertToPinyinString('厦门你好大厦厦门', ',', PinyinFormat.WITH_TONE_NUMBER).should.eql('xia4,men2,ni3,hao3,da4,sha4,xia4,men2')
        })
    })
    describe("* getShortPinyin(str)", function() {
        it("PinyinHelper.getShortPinyin('厦门你好大厦厦门') = 'xmnhdsxm'", function(){
            PinyinHelper.getShortPinyin('厦门你好大厦厦门').should.eql('xmnhdsxm')
        })
    })
    describe("* hasMultiPinyin(c)", function() {
        it("PinyinHelper.hasMultiPinyin('厦') = true", function(){
            PinyinHelper.hasMultiPinyin('厦').should.eql(true)
        })
        it("PinyinHelper.hasMultiPinyin('你') = false", function(){
            PinyinHelper.hasMultiPinyin('你').should.eql(false)
        })
    })
})