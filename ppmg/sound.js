
var bgm = new Audio();
bgm.src = "bgm_test.mp3";
bgm.loop = true;
bgm.autoplay = false;
bgm.volume = 0.3;
bgm.preload = "auto";

$(function(){
 bgm.load();
 bgm.addEventListener('canplaythrough', function(e) {
  bgm.play();
 }
});