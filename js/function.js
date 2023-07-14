function initLive2d(defaultModelPath="model/22/model.default.json"){
    document.getElementById("live2d_main").innerHTML=document.getElementById("live2d_main").innerHTML+'<canvas class="live2d" id="live2d" width="" height="300"></canvas>'
    loadlive2d("live2d", defaultModelPath);
}

function btnFunc(idNameOfChange,idNameOfTexure) {
    var current_model_id = 1;
    var current_texure_id = 1;
    btnChangeExure = document.getElementById(idNameOfTexure);
    btnChangeExure.addEventListener('click', function (e) {
        current_texure_id++;
        if (current_texure_id > LAppDefine.MODELS[current_model_id - 1].length) current_texure_id = 1;
        loadlive2d(LAppDefine.CANVAS_ID, LAppDefine.MODELS[current_model_id - 1][current_texure_id - 1]);
    })

    btnChangeModel = document.getElementById(idNameOfChange);
    btnChangeModel.addEventListener("click", function (e) {
        current_model_id++;
        current_texure_id = 1;
        if (current_model_id > LAppDefine.MODELS.length) current_model_id = 1;
        loadlive2d(LAppDefine.CANVAS_ID, LAppDefine.MODELS[current_model_id - 1][current_texure_id - 1]);
    })

}

function initLive2dWithGui(defaultModelPath="model/22/model.default.json"){
    document.getElementById("live2d_main").innerHTML=document.getElementById("live2d_main").innerHTML+'<div id="live2d_tools"><br><br><br><p id="change"><i class="fa fa-users"></i></p><p id="texure"><i class="fa fa-street-view"></i></p><p id="close"><i class="fa fa-window-close"></i></p></div><canvas class="live2d" id="live2d" width="250px" height="300"></canvas>'
    loadlive2d("live2d", defaultModelPath);
    var current_model_id = 1;
    var current_texure_id = 1;
    btnChangeExure = document.getElementById("texure");
    btnChangeExure.addEventListener('click', function (e) {
        current_texure_id++;
        if (current_texure_id > LAppDefine.MODELS[current_model_id - 1].length) current_texure_id = 1;
        loadlive2d(LAppDefine.CANVAS_ID, LAppDefine.MODELS[current_model_id - 1][current_texure_id - 1]);
    })

    btnChangeModel = document.getElementById("change");
    btnChangeModel.addEventListener("click", function (e) {
        current_model_id++;
        current_texure_id = 1;
        if (current_model_id > LAppDefine.MODELS.length) current_model_id = 1;
        loadlive2d(LAppDefine.CANVAS_ID, LAppDefine.MODELS[current_model_id - 1][current_texure_id - 1]);
    })
    closegui=document.getElementById('close');
    closegui.addEventListener('click',function(){
        document.getElementById('live2d_main').style.display="none"
    })
}