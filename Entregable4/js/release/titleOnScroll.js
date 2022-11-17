let title = document.getElementById("scrollEffect");
var offset = title.offsetTop;
var pos = window.pageYOffset;
console.log(pos);
console.log(offset);
/*
window.onscroll = function(){
    var posCurrent = window.pageYOffset
    console.log(posCurrent);
    console.log(pos);
    if(offset>posCurrent){
        title.style.opacity = 0;
    }else{
        title.style.opacity = 1;
    }
}*/
/*function change() {
  for (var i = 0; i < title.length; i++) {
    var xpos = Math.sin(t / 1000 + 1000 * i) * 50 + 50;
    title[i].style.opacity = xpos;
  }
  
}
change();*/