// File validation
function fileValidation(){
    var inputFile = document.getElementById("file")
    let fileType = inputFile.value
    let allowedExt = /(\.mp4)$/i

    if(!allowedExt.exec(fileType)){
        alert('Archivo no válido. Por favor, seleccione un archivo .mp4');
        return false;
    }
}
// File Upload process
function fileLoader(){
    var inputFile = document.getElementById("file").files[0]
    var video = document.getElementById("video")
    let reader = new FileReader()

    reader.readAsDataURL(inputFile);
    reader.onloadend =  ()=> {
        video.setAttribute("src", reader.result);
    };
    
}


// Play button
function playVideo(){
    var video = document.getElementById("video")
    var play = document.getElementById("play")
    if(video.paused == false && video.ended == false){
        video.pause()
        play.innerHTML = "Reproducir"
    }else{
        video.play()
        play.innerHTML = "Pausar"
    }
}

// Volume up button
function volumeUp(){
    var video = document.getElementById("video")
    video.volume +=0.1
}

// Volume down button
function volumeDown(){
    var video = document.getElementById("video")
    video.volume -=0.1
}