//creating first javascript file and learning functions, objects, and events

//window.onload = function sayHi() { 
//
  //  alert(HelloWorldofJavascript);
//}

//practicing my js below
var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("first").innerHTML = y;

function sayHi() {
    var elemRef = document.getElementById("first");
    elemRef.innerHTML = "goodbye";

}
//adding a function to my index.html to reveal an answer

function myFunctionreveal() {
    document.getElementById("jsbutton").innerHTML = "Milan, Italy";
  }

  function myFunctionlook() {
    document.getElementById("jsbuttonstyle").style.color = "blue";
  }

  //using js to add a new element to my index.html file
  //inserting after a <p> tag
 // was unable to determine how to insert after
    var para = document.createElement("p");
    var node = document.createTextNode("Paris, France");
    para.appendChild(node);

    var element = document.getElementById("jsnew");
    var child = document.getElementById("p1");
    element.insertBefore(para,child);
    element.classList.add("jsstyle");

//using js to return response upon text being submitted in 
//html element

function myform() {
    alert("Wow, that is cool!");
  }
  

