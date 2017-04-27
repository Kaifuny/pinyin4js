## pinyin4js
<a href="https://circleci.com/gh/superbiger/pinyin4js/master"><img src="https://img.shields.io/circleci/project/superbiger/pinyin4js/master.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/dt/pinyin4js.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/v/pinyin4js.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/l/pinyin4js.svg" alt="License"></a>
> pinyin4js是一个汉字转拼音的Javascript开源库  
> A opensource javascript library for converting chinese to pinyin  
Thanks for [JPinyin](https://github.com/stuxuhai/jpinyin)  

## Features

* **词库灵活导入,打包**   
 
* **准确、完善的字库**  
Unicode编码从4E00-9FA5范围及3007（〇）的20903个汉字中，pinyin4js能转换除46个异体字（异体字不存在标准拼音）之外的所有汉字  

* **拼音转换速度快**  

* **多拼音格式输出支持**  
支持多种拼音输出格式：带音标、不带音标、数字表示音标以及拼音首字母输出格式  

* **常见多音字识别**  
支持常见多音字的识别，其中包括词组、成语、地名等  

* **简繁体中文转换**  

* **支持添加自定义字典**  
支持添加用户自定义字典，自定义词库默认优先

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
```javascript
    //ES5
    require("pinyin4js"); //import 'pinyin4js';

    // more detail methods in test
    // output: xià#mén#nǐ#hǎo#dà#shà#xià#mén
    console.log(PinyinHelper.convertToPinyinString('厦门你好大厦厦门', '#', PinyinFormat.WITH_TONE_MARK))
```
## How to Dev

* **Init**
```
    npm install
```
* **Build ES6 ---> ES5**
```
    npm run build
```
* **Build Browser**
```
    npm run build
    npm run build-browser
```
* **Test**
```
    npm run test
```
