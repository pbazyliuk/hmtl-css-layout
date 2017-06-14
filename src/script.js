let vid = document.querySelector(".video-wrapper");
let pauseButton = document.querySelector(".btn-video-play-img");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.classList.remove('btn-video-play-img-pause');
    pauseButton.classList.add('btn-video-play-img');
  } else {
    vid.pause();
    pauseButton.classList.remove('btn-video-play-img');
    pauseButton.classList.add('btn-video-play-img-pause');
  }
})

