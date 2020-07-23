//creating first javascript file and learning functions, objects, and events

//window.onload = function sayHi() { 
//
  //  alert(HelloWorldofJavascript);
//}

var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("first").innerHTML = y;

function sayHi() {
    var elemRef = document.getElementById("first");
    elemRef.innerHTML = "goodbye";

}