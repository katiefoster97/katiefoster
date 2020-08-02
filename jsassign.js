// setting up a separate js file for week4 assignment

//creating first javascript file and learning functions, objects, and events

//window.onload = function sayHi() { 

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
 

//using js to return response upon text being submitted in 
//html element

function myform() {
    alert("Wow, that is cool!");
  }
//working on random number generator and still have 1 error to debug

function randomNum () {
    var input = document.getElementById("number_select");
    var number = input.value;
    var randNum = Math.floor(Math.random() * number);
      return (randNum);
  }
function numberDiv () {
    randomNum();
    document.getElementById("numberdiv").innerHTML = randomNum ();
}
// the following script will attempt to create elements from the random 
//number generated above
//function smiles () {
    //var getValue = document.getElementById("numberdiv");
    //var faceNum = getValue.innerHTML;
   // var randomPositionLeft = Math.floor(Math.random() * 101);
    //var randomPositionTop = Math.floor(Math.random() * 101);
    //for (let i = 0; i < faceNum; i++) {
       // var faceDiv = document.createElement('div');
        //document.body.appendChild(faceDiv);
       // var randomPositionLeft = Math.floor(Math.random() * 101);
       // var randomPositionTop = Math.floor(Math.random() * 101);
       // faceDiv.setAttribute('class', 'faces');
       // faceDiv.style.left = (randomPositionLeft) + "%";
       // faceDiv.style.top =  (randomPositionTop) + "%";

//}
    



