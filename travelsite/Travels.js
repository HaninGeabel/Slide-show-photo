var thisPic = 0;


window.onload= function showSlides() {
  var i;
  var myPic = document.getElementsByClassName("slide_show");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < myPic.length; i++) {
    myPic[i].style.display = "none";  
  }
  thisPic++;
  if (thisPic > myPic.length) {
  thisPic = 1;
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  myPic[thisPic-1].style.display = "block";  
  dots[thisPic-1].className += " active";
  setTimeout(showSlides, 3000); 
};
