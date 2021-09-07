window.onload = function(){ 
         var audio1 = document.getElementById('music1');
         audio1.pause();
         var audio2 = document.getElementById('music2');
         audio2.pause();
         var audio3 = document.getElementById('music3');
         audio3.pause();
}
function play1() {
    var audio1 = document.getElementById('music1');
    if (audio1.paused) {
        audio1.play();
    }else{
        audio1.pause();
        audio1.currentTime = 0;
    }
}
function play2() {
  var audio2 = document.getElementById('music2');
  if (audio2.paused) {
      audio2.play();
  }else{
      audio2.pause();
      audio2.currentTime = 0;
  }
}
function play3() {
var audio3 = document.getElementById('music3');
if (audio3.paused) {
    audio3.play();
}else{
    audio3.pause();
    audio3.currentTime = 0;
}
}