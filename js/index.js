var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 7000);    
}


var index = 0;
carousel1();

function carousel1() {
	var h;
	var y = document.getElementsByClassName("slides1");

for (h = 0; h < y.length; h++) {
    y[h].style.display = "none";  
  }
  index++;
  if (index > y.length) {index = 1}    
  y[index-1].style.display = "block";  
  setTimeout(carousel1, 8000);
}  

var ndex = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("slides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  ndex++;
  if (ndex > x.length) {ndex = 1}    
  x[ndex-1].style.display = "block";  
  setTimeout(carousel2, 9000);    
}