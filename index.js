// File validation
function fileValidation(){
    let inputFile = document.getElementById("file")
    let fileType = inputFile.value
    let allowedExt = /(\.mp4)$/i

    if(!allowedExt.exec(fileType)){
        alert('Archivo no válido. Por favor, seleccione un archivo .mp4');
        fileInput.value = '';
        return false;
    }
}