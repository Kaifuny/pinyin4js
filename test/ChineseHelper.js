var should = require("should")
import { ChineseHelper } from "../src/ChineseHelper.js"

describe("# ChineseHelper", function() {
    describe("* convertToSimplifiedChinese(str)", function() {
        it("ChineseHelper.convertToSimplifiedChinese('臺喪麗') = '台丧丽'", function(){
            ChineseHelper.convertToSimplifiedChinese('臺喪麗').should.eql('台丧丽')
        })
    })
    describe("* convertToTraditionalChinese(str)", function() {
        it("ChineseHelper.convertToTraditionalChinese('台丧丽') = '臺喪麗'", function(){
            ChineseHelper.convertToTraditionalChinese('台丧丽').should.eql('臺喪麗')
        })
    })
    describe("* containsChinese(str)", function() {
        it("ChineseHelper.containsChinese('12台丧丽') = true", function(){
            ChineseHelper.containsChinese('12台丧丽').should.eql(true)
        })
        it("ChineseHelper.containsChinese('123') = false", function(){
            ChineseHelper.containsChinese('123').should.eql(false)
        })
    })
    describe("* isTraditionalChinese(c)", function() {
        it("ChineseHelper.isTraditionalChinese('臺') = true", function(){
            ChineseHelper.isTraditionalChinese('臺').should.eql(true)
        })
        it("ChineseHelper.isTraditionalChinese('台') = false", function(){
            ChineseHelper.isTraditionalChinese('台').should.eql(false)
        })
    })
    describe("* isChinese(c)", function() {
        it("ChineseHelper.isChinese('台') = true", function(){
            ChineseHelper.isChinese('台').should.eql(true)
        })
        it("ChineseHelper.isChinese('3') = false", function(){
            ChineseHelper.isChinese('3').should.eql(false)
        })
    })
})