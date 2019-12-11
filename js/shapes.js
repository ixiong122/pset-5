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
    if (message = null) {
      break;
    }
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
      } else if (Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) {
        alert("One of your values is not a number.");
      }
    } while (width > 1024 || width < 1 || height > 512 || height < 1 || x > 1024 || x < 1 || y > 512 || y < 1);
    ctx.rect(x, y, width, height);
    ctx.stroke();
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  var finalColor;
  var color;
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (color == null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  do {
    finalColor = "";
    color = String(prompt("Color: "));
    color = color.toLowerCase();
    finalColor = color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch(finalColor) {
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
      color = "white";
      finalColor = "white";
      break;
  }
} while (finalColor == "white");

if (finalColor !== "white") {

ctx.fillStyle = finalColor;
ctx.fillRect(10, 10, 100, 50);
}
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  var side1;
  var side2;
  var side3;
  var newSide1;
  var newSide2;
  var newSide3;
  var canvas = document.getElementById("student-canvas-4");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
     side1 = Number(prompt("Side 1: "));
     side2 = Number(prompt("Side 2: "));
     side3 = Number(prompt("Side 3: "));
    if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
      alert("One of your sides is not a number.");
    } else if (side1 > 1024 || side2 > 1024 || side3 > 1024) {
      alert("Your triangle won't fit on the canvas.");
    }
    if (side1 < side2 && side1 < side3 && side2 < side3) {
      newSide1 = side1;
      newSide2 = side2;
      newSide3 = side3;
    } else if (side1 < side2 && side1 < side3 && side2 > side3) {
      newSide1 = side1;
      newSide2 = side3;
      newSide3 = side2;
    } else if (side2 < side1 && side2 < side3 && side1 < side3) {
      newSide1 = side2;
      newSide2 = side1;
      newSide3 = side3;
    } else if (side2 < side1 && side2 < side3 && side1 > side3) {
      newSide1 = side2;
      newSide2 = side3;
      newSide3 = side1
    } else if (side3 < side1 && side3 < side2 && side2 < side1) {
      newSide1 = side3;
      newSide2 = side2;
      newSide3 = side1;
    } else if (side3 < side1 && side3 < side2 && side2 > side1) {
      newSide1 = side3;
      newSide2 = side1;
      newSide3 = side2;
    }
    if ((newSide1 * newSide1) + (newSide2 * newSide2) !== (newSide3 * newSide3)) {
      alert("That's not a valid right triangle.");
    }
  } while ((newSide1 * newSide1) + (newSide2 * newSide2) !== (newSide3 * newSide3) || Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3) || side1 > 1024 || side2 > 1024 || side3 > 1024 );

  var height = newSide1;
  var base = newSide2;
  var hypotenuse = newSide3;

  height = height + 25;
  base = base + 25;

  ctx.beginPath();
  ctx.moveTo(25,25);
  ctx.lineTo(25, height);
  ctx.lineTo(base, height);
  ctx.lineTo(25,25);
  ctx.stroke();
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  var radius;
  var canvas = document.getElementById("student-canvas-5");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
    radius = prompt("Radius: ");
    if (radius < 32) {
      alert("Your radius must be at least 32.");
    }
    if (radius > 256) {
      alert("Your smiley face won't fit on the canvas.");
    }
  } while(radius < 32 || radius > 256)
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  var distance = Number(distance);
  var height = Number(height);
  var row;
  var column;
  var counter = 5;
  var canvas = document.getElementById("student-canvas-6");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var side = prompt("Side: ");

    if (side < 1) {
      alert("Your block size must be at least one.");
    } else if (side > canvas.height || side > canvas.width) {
      alert("Your pyramid won't fit on the canvas.");
    } else if (Number.isNaN(side)) {
      alert("Your block size is not a number.");
    }
  } while (side < 1 || side > canvas.height || side > canvas.width || Number.isNaN(side));
  for (i =5; i > 0; i--) {
    ctx.beginPath();
    ctx.rect(10 + distance, (502 - side) - height, Number(side), Number(side));
    ctx.stroke();
    ctx.closePath();
    distance = Number(distance) + Number(side);
    counter--;
  }
  row++;
  distance =  row * (1/2 * side);
  column ++;
  jeogjt = column + side;
};
