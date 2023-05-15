function doClick() {
    var el = document.getElementById("file");
    if (el) {
      el.click();
    }
  }

// File validation
function fileValidation(){
    var inputFile = document.getElementById("file")
    let fileType = inputFile.value
    let allowedExt = /(\.mp4)$/i

    if(!allowedExt.exec(fileType)){
        alert('Archivo no válido. Por favor, seleccione un archivo .mp4');
        return false;
    }else{
        return true
    }
}
// File Upload process
function fileLoader(){
    if(fileValidation()){
    var inputFile = document.getElementById("file").files[0]
    var video = document.getElementById("video")
    let reader = new FileReader()

    reader.onprogress = () =>{
        let icon = document.getElementById("icon")
        icon.setAttribute("class", "fa fa-circle-o-notch fa-spin")
        alert("Carga en proceso")
    }

    reader.readAsDataURL(inputFile);
    reader.onloadend =  ()=> {
        video.setAttribute("src", reader.result);
        video.setAttribute("poster", "")
        let icon = document.getElementById("icon")
        icon.setAttribute("class", "fa fa-check-square")
        let text = document.getElementById("buttonText")
        text.style.backgroundColor = "green"
        setVisible(play)
        setVisible(document.getElementById("vol-up"))
        setVisible(document.getElementById("vol-dowm"))
    };
    }
}


// Play button
function playVideo(){
    var video = document.getElementById("video")
    var play = document.getElementById("play")
    if(video.paused == false && video.ended == false){
        video.pause()
        play.innerHTML = "Reproducir"
        play.setAttribute("class", "fa fa-play-circle playerBtn")
    }else{
        video.play()
        play.innerHTML = "Pausar"
        play.setAttribute("class", "fa fa-pause-circle playerBtn")
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

function setVisible(btn){
    btn.style.visibility = "visible"
}