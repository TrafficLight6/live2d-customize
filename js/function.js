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