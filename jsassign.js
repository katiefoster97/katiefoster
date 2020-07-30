// setting up a separate js file for week4 assignment

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
    //number = Math.random() * number;
    //var img = document.createElement("img");
    //img.src = "feet_01.jpg";
    //img.style.backgroundColor = "blue"

   // var src = document.getElementById("p1");
    //src.appendChild(img);

    //document.body.insertBefore(newDiv, currentDiv);

}

