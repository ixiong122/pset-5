window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;


}

/*
 * Exercise 1.
 */

const sayHello = function() {
  var message;
  var canvas = document.getElementById("student-canvas-1");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
    message = prompt("Message: ");
    if (message.length > 50) {
      alert("Your message is too long. Keep it under 50 characters.");
    }
  } while (message.length > 50);

  ctx.font = '48px sans-serif';
  ctx.strokeText(message, 30,70,994);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    const canvas = document.getElementById("student-canvas-2");
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    do {
      var width = prompt("Width: ");
      var height = prompt("Height: ");
      var x = prompt("X: ");
      var y = prompt("Y: ");
      if (width > 1024 || width < 1) {
        alert("Your width must be between 1 and 1024.");
      } else if (height > 512 || height < 1) {
        alert("Your height must be between 1 and 512.");
      } else if (x > 1024 || x < 1) {
        alert("Your x-coordinate must be between 1 and 1024.");
      } else if (y > 512 || x < 1) {
        alert("Your y-coordinate must be between 1 and 512.");
      }
    } while (width > 1024 || width < 1 || height > 512 || height < 1 || x > 1024 || x < 1 || y > 512 || y < 1);
    ctx.rect(x, y, width, height);
    ctx.stroke();
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
    let finalColor;
    var color = String(prompt("Color: "));
    color = color.toLowerCase();
    switch(color) {
    case "blue":
      finalColor = "blue"
      break;
    case "black":
      finalColor = "black"
      break;
    case "green":
      finalColor = "green"
      break;
    case "orange":
      finalColor = "orange"
      break;
    case "purple":
      finalColor = "purple"
      break;
    case "red":
      finalColor = "red"
      break;
    case "yellow":
      finalColor = "yellow"
      break;
    default:
    alert(color + " is not a supported color.")
  }
  } while (color == null);
ctx.fillStyle = color;
ctx.fillRect(10, 10, 100, 50);

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  var canvas = document.getElementById("student-canvas-4");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
