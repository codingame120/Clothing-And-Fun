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
  setTimeout(carousel, 4000);    
}


var index = 0;
carousell();

function carousell() {
	var h;
	var y = document.getElementsByClassName("slides1");

for (h = 0; h < y.length; h++) {
    y[h].style.display = "none";  
  }
  index++;
  if (index > y.length) {index = 1}    
  y[index-1].style.display = "block";  
  setTimeout(carousell, 6000);
}  

