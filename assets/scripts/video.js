var myVideo = document.getElementById("video"); 
function playPause() { 
$('.player').fadeOut()
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } 
  function videoContainer(){
    $('.player').fadeToggle()
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  }