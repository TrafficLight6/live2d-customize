# Live2D-CUSTOMIZE 使用教程

## 快速上手

- 引入
     - html 部分
        ```html
        <!-- body标签 -->
        <!-- 可以再任何你想要的地方放入这个div标签，但不能更改id熟悉 -->
        <div id="live2d_main"></div>
        <script src="js/live2d.js"></script>
        <script src="js/function.js"></script>
        <script>
            initLive2d();   // 初始化live2d
        </script>
        <script src="js/LAppDefine.js"></script>
        ```
    __注意这个顺序不能乱__
- 效果  
![alt 图片加载不出来，114514](./image/1.png)

## 功能细究

- ### 按钮UI
    内置了一套按钮UI~~但非常丑~~，下面是起用法及自定义  
    - 引入
    ```html
    <!-- head -->
    <!-- 下面一条标签为必要 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <!-- 有能力的可以自己写css -->
    <link rel="stylesheet" href="./default-css/light.css">
    <!-- 或者 -->
    <link rel="stylesheet" href="./default-css/dark.css">
    ```
    ```html
    <!-- 在body的id为live2d_main内嵌入以下标签 -->
    <div id="live2d_tool">
    <center>
    <button id="Change" class="active"><i class="fa fa-users"></i></button>
    <button id="texure" class="active"><i class="fa fa-street-view"></i></button>
    </center>
    </div>
    ```

    ```javascript
    //在引入时initLive2d()下面加入
    btuFunc();
    ```
    效果  ~~非常丑~~  
    ![alt 图片加载不出来，114514](./image/2.gif)
    当然可以自己加按钮，自己绑定事件  
- ### 配置文件
    __LAppDefine.js__
    ```javascript
    var LAppDefine = {
    //这里配置canvsa元素的id
    CANVAS_ID: "live2d",

    //是否允许拖拽，默认为true，目前不可用
    IS_DRAGABLE: true,
    /**
     *  模型定义
        自定义配置模型，同一数组内放置同个模型的不同皮肤，换肤时按照顺序依次显示
        这里请用相对路径配置
        及相对应你要引入的html文件
     */
    MODELS: [
        ["model/22/model.default.json", "model/22/model.2016.xmas.1.json", "model/22/model.2016.xmas.2.json", "model/22/model.2017.cba-normal.json", "model/22/model.2017.cba-super.json", "model/22/model.2017.newyear.json", "model/22/model.2017.school.json", "model/22/model.2017.summer.normal.1.json", "model/22/model.2017.summer.normal.2.json", "model/22/model.2017.summer.super.1.json", "model/22/model.2017.summer.super.2.json", "model/22/model.2017.tomo-bukatsu.high.json", "model/22/model.2017.tomo-bukatsu.low.json", "model/22/model.2017.valley.json", "model/22/model.2017.vdays.json", "model/22/model.2018.bls-summer.json", "model/22/model.2018.bls-winter.json", "model/22/model.2018.lover.json", "model/22/model.2018.spring.json"], 
        ["model/33/model.default.json", "model/33/model.2016.xmas.1.json", "model/33/model.2016.xmas.2.json", "model/33/model.2017.cba-normal.json", "model/33/model.2017.cba-super.json", "model/33/model.2017.newyear.json", "model/33/model.2017.school.json", "model/33/model.2017.summer.normal.1.json", "model/33/model.2017.summer.normal.2.json", "model/33/model.2017.summer.super.1.json", "model/33/model.2017.summer.super.2.json", "model/33/model.2017.tomo-bukatsu.high.json", "model/33/model.2017.tomo-bukatsu.low.json", "model/33/model.2017.valley.json", "model/33/model.2017.vdays.json", "model/33/model.2018.bls-summer.json", "model/33/model.2018.bls-winter.json", "model/33/model.2018.lover.json", "model/33/model.2018.spring.json"],
        ]
        //所以增删改模型文件在MODELS对象内操作
        //下面省略了一些代码
    };
    ```

- ### 函数详解
    - ```initLive2d(path)```  
        参数path是指定默认打开模型的路径参数，默认值为"model/22/model.default.json"
#### 2023年7月12日23:20:02