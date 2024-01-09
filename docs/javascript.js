const opne = document.getElementById("opne"),
      close = document.getElementById("close"),
      menuside = document.querySelector(".menuside"),
      videoplayer = document.getElementById("videoplayer"),
      video = document.getElementById("video");

opne.addEventListener("click", () =>{
    menuside.classList.add("opnemenubar");
});

close.addEventListener("click", () =>{
    menuside.classList.remove("opnemenubar");
});

function stopvideo(){
    videoplayer.style.display = "none";
}

function playvideo(file){
    video.src = file;
    videoplayer.style.display = "block";
}