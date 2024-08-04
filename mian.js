var popUp = document.querySelector(".calculate");
var popUPContainer = document.querySelector(".video-container");
var closePopUpBtn = document.querySelector(".close-popup");

var video = document.getElementById('video')
video.pause()

function openPopUp() {
  popUPContainer.classList.add("active");
  video.play()
  
  console.log(popUp, popUPContainer);
}

function closePopUp() {
  popUPContainer.classList.remove("active");
  video.pause();
  video.currentTime = 0;
}

popUp.addEventListener("click", () => {
  openPopUp();
});

closePopUpBtn.addEventListener('click', ()=> {
    closePopUp()
})