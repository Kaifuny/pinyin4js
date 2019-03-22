[[English Document](https://github.com/superbiger/pinyin4js/blob/master/README_EN.md)]
[[中文文档](https://github.com/superbiger/pinyin4js/blob/master/README.md)]

## pinyin4js  
<a href="https://circleci.com/gh/superbiger/pinyin4js/master"><img src="https://img.shields.io/circleci/project/superbiger/pinyin4js/master.svg" alt="Build Status"></a>
<a href="https://codebeat.co/projects/github-com-superbiger-pinyin4js-master"><img alt="codebeat badge" src="https://codebeat.co/badges/66eb52ae-bd9e-47d6-84cd-8c01cc01b46f" /></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/dt/pinyin4js.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/v/pinyin4js.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/pinyin4js"><img src="https://img.shields.io/npm/l/pinyin4js.svg" alt="License"></a> 
> A opensource javascript library for converting chinese to pinyin  
Thanks for [JPinyin](https://github.com/stuxuhai/jpinyin)    
> Demo Online: https://npm.runkit.com/pinyin4js  

## Features
* **Zero-dependency**  
* **Fork & Package yourself easily**    
* **Support Traditional and Simplified Chinese**  
* **Support multiple pinyin style**  
* **Support Node and Browser**  

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
    npm run build-browser
```  

* **Test**
```  
    npm run test
```
