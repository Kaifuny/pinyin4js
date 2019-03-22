[[English Document](https://github.com/superbiger/pinyin4js/blob/master/README_EN.md)]
[[中文文档](https://github.com/superbiger/pinyin4js/blob/master/README.md)]
 
## pinyin4js  
<a href="https://codebeat.co/projects/github-com-superbiger-pinyin4js-master"><img alt="codebeat badge" src="https://codebeat.co/badges/66eb52ae-bd9e-47d6-84cd-8c01cc01b46f" /></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/dy/pinyin4js.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/v/pinyin4js.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/l/pinyin4js.svg" alt="License"></a>
> pinyin4js是一个汉字转拼音的Javascript开源库-零依赖  
> A opensource javascript library for converting chinese to pinyin  
Thanks for [JPinyin](https://github.com/stuxuhai/jpinyin)  
> 注：同时支持Node和浏览器使用！！！  
> Demo Online: https://npm.runkit.com/pinyin4js

## Features
* **零依赖**  

* **词库灵活导入,打包**   
可以自行调整字典，具体可以参照src/dict；所有资源调用由PinyinResource封装，可自行修改后打包  

* **准确、完善的字库**  
Unicode编码从4E00-9FA5范围及3007（〇）的20903个汉字中，pinyin4js能转换除46个异体字（异体字不存在标准拼音）之外的所有汉字  

* **拼音转换速度快**  
经测试，从4E00-9FA5范围的20902个汉字，pinyin4js耗时约110毫秒

* **多拼音格式输出支持**  
支持多种拼音输出格式：带音标、不带音标、数字表示音标以及拼音首字母输出格式  

* **常见多音字识别**  
支持常见多音字的识别，其中包括词组、成语、地名等  

* **简繁体中文转换**  

* **支持添加自定义字典**  
支持添加用户自定义字典

## How to use

* **INSTALL**
> Brower
```html
    <script src="./dist/pinyin4js.js"></script>
```
> Node
```
    npm install pinyin4js
```

* **USE**

#### Node

```javascript
    //pinyin4js@1.3.16 or latest
    import pinyin4js from 'pinyin4js';

    // more detail methods in test
    // WITH_TONE_NUMBER--数字代表声调，WITHOUT_TONE--不带声调，WITH_TONE_MARK--带声调

    // output: xià#mén#nǐ#hǎo#dà#shà#xià#mén
    console.log(pinyin4js.convertToPinyinString('厦门你好大厦厦门', '#', pinyin4js.WITH_TONE_MARK))

    //首字母风格
    // output: xmnhdsxm
    console.log(pinyin4js.convertToPinyinString('厦门你好大厦厦门', '', pinyin4js.FIRST_LETTER))
    // or
    console.log(pinyin4js.getShortPinyin('厦门你好大厦厦门'))
```

#### Browers

```javascript
    // <script src="./dist/pinyin4js.js"></script>

    // output: xià#mén#nǐ#hǎo#dà#shà#xià#mén
    console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '#', PinyinFormat.WITH_TONE_MARK))

    //首字母风格
    // output: xmnhdsxm
    console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '', PinyinFormat.FIRST_LETTER))
    // or
    console.log(PinyinHelper.getShortPinyin('厦门你好大厦厦门'))
```

## How to Dev

* **Init**
```
    git clone https://github.com/superbiger/pinyin4js.git
    cd pinyin4js
    npm install
    npm run build
```  

* **Build Browser**
```
    npm run build
    npm run build-browser   // PS: 打包浏览器包，必须先执行npm run build
```  

* **Test**
```
    npm run test
```
