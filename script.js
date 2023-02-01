let firstImage = document.getElementById("image1");
let secondImage = document.getElementById("image2");
let thirdImage = document.getElementById("image3");
let fourthImage = document.getElementById("image4");

let firstImageClicked = false;
let secondImageClicked = false;
let thirdImageClicked = false;
let fourthImageClicked = false;

var rollCount = 0;
var total = 0;

secondImage.style.pointerEvents = "none";
// Event listener on 1st image
firstImage.addEventListener("click", function () {
  if (!firstImageClicked) {
    firstImageClicked = true;
    document.getElementById("form").style.display = "block";
  }
});
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  localStorage.setItem("name", name);
  localStorage.setItem("username", username);
  secondImage.style.pointerEvents = "auto";
  document.getElementById("form").style.display = "none";
});

//Event listener on 2nd image
secondImage.addEventListener("click", function () {
  if (!secondImageClicked && firstImageClicked) {
    secondImageClicked = true;
    var name = localStorage.getItem("name");
    var username = localStorage.getItem("username");
    document.getElementById("display").innerHTML =
      "Name: " + name + "<br>" + "Username: " + username;
    document.getElementById("display").style.display = "block";
  }
});

// Event listener on Third image
thirdImage.addEventListener("click", function () {
  if (!thirdImageClicked && secondImageClicked) {
    thirdImageClicked = true;
    document.getElementById("dice").style.display = "block";
  }
});

document.getElementById("rollDice").addEventListener("click", function () {
  rollCount++;
  var roll = Math.floor(Math.random() * 6) + 1;
  total += roll;
  document.getElementById("displayNumber").innerHTML =
    "You rolled a " + roll + "<br>" + "Total: " + total;
  if (rollCount === 3) {
    if (total > 10) {
      fourthImage.style.pointerEvents = "auto";
      document.getElementById("displayNumber").innerHTML =
        "Congrats you are now able to click on 4th image";
      rollCount = 0;
      total = 0;
    }else {
      document.getElementById("displayNumber").innerHTML =
        "Total: " + total + "<br>" + "Try again!";
      rollCount = 0;
      total = 0;
    }
  }
});


fourthImage.addEventListener("click", function () {
    if (!fourthImageClicked && thirdImageClicked){
        fourthImageClicked = true;
        fourthImage.style.pointerEvents = "none";
  document.getElementById("coupon").style.display = "block";
  var coupon = Math.floor(Math.random() * 1000000000000).toString();
  document.getElementById("displayCoupon").innerHTML =
    "Your coupon code: " + coupon;
  document.getElementById("congratsImage").style.display = "block";
    }
});

