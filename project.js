function navopen(){
	var x=window.matchMedia('(min-width: 601px)')
	if(x.matches){
		document.getElementById('nav').style.height="10%"		
		document.getElementById('hburger').style.visibility="hidden"
	}
	else {
		
		document.getElementById('nav').style.width="30%"
		document.getElementById('nav').style.height="100%"	
		document.getElementById('nav').style.right="0"	
		document.getElementById('oc').style.top="10%"

		document.getElementById('hburger').style.visibility="hidden"
		
	}
}
function navclose(){
	var x= window.matchMedia('(min-width: 601px)')
	if(x.matches){
		document.getElementById('nav').style.height="0%"
		document.getElementById('hburger').style.visibility="visible"
	}
	else {
		
		document.getElementById('nav').style.width="0%"
		document.getElementById('hburger').style.visibility="visible"
	}
} 

window.onscroll=function(){scroll()};
function scroll(){
	var currentposition=document.documentElement.scrollTop;
	var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
	var scrol=(currentposition/height)*100;
	document.getElementById('bar').style.width=scrol+"%";
}
const bg=document.getElementById("parallax");
window.addEventListener('scroll',function(){
      bg.style.backgroundSize = 100 + +window.pageYOffset/12+'%';   

})





var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("leftSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1200);    
}



 
      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

