// setting up a separate js file for week4 assignment

function jsButtonFunction(){
    console.log("jsbutton");
    var input = document.getElementById("user");
    var num = input.value;
    console.log(num);
    getRandomNumber(num);
  }
function getRandomNumber(number){
    number = Math.random() * number;
    var img = document.createElement("img");
    img.src = "feet_01.jpg";
    img.style.backgroundColor = "blue"

    var src = document.getElementById("p1");
    src.appendChild(img);

    //document.body.insertBefore(newDiv, currentDiv);

}

