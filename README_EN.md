[[English Document](https://github.com/superbiger/pinyin4js/blob/master/README_EN.md)]
[[中文文档](https://github.com/superbiger/pinyin4js/blob/master/README.md)]

## pinyin4js  
<a href="https://circleci.com/gh/superbiger/pinyin4js/master"><img src="https://img.shields.io/circleci/project/superbiger/pinyin4js/master.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/dt/pinyin4js.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/v/pinyin4js.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/l/pinyin4js.svg" alt="License"></a>  
> A opensource javascript library for converting chinese to pinyin  
Thanks for [JPinyin](https://github.com/stuxuhai/jpinyin)  

## Features
* **Zero-dependency**  
* **Folk & Package yourself easily**    
* **Support Traditional and Simplified Chinese**  
* **Support multiple pinyin style**  

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
