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
    if (message == null) {
      break;
    }
    if (message.length > 50) {
      alert("Your message is too long. Keep it under 50 characters.");
    }
  } while (message.length > 50);

  if (message != null) {
  ctx.font = '48px sans-serif';
  ctx.strokeText(message, 30,70,994);
}
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
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (width == null || height == null || x == null || y == null) {
        break;
      }
      if (width > 1024 || width < 1) {
        alert("Your width must be between 1 and 1024.");
      } else if (height > 512 || height < 1) {
        alert("Your height must be between 1 and 512.");
      } else if (x > 1024 || x < 1) {
        alert("Your x-coordinate must be between 1 and 1024.");
      } else if (y > 512 || y < 1) {
        alert("Your y-coordinate must be between 1 and 512.");
      } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
        alert("One of your values is not a number.");
      }
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
    } while (width > 1024 || width < 1 || height > 512 || height < 1 || x > 1024 || x < 1 || y > 512 || y < 1 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y));

  if (width != null || height != null || x != null || y != null || width < 1024 || width > 1 || height < 512 || height > 1 || x < 1024 || x > 1 || y < 512 || y > 1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeRect(x, y, width, height);

}
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  var canvas = document.getElementById("student-canvas-3");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var color = (prompt("Color: "));
    if (color == null) {
      break;
    }
    color = String(color);
    var formatted = color.toLowerCase();
    if (formatted != "blue" && formatted != "black" && formatted != "green" && formatted != "orange" && formatted != "purple" && formatted != "red" && formatted != "yellow") {
      alert (color + " is not a supported color.");
    }
  } while (formatted != "blue" && formatted != "black" && formatted != "green" && formatted != "orange" && formatted != "purple" && formatted != "red" && formatted != "yellow");

  if (color != null) {
    ctx.fillStyle = formatted;
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
     if (side1 == null || side2 == null || side3 == null ||side1 == 0 || side2 == 0 || side3 == 0) {
       break;
     }
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
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
  } while ((newSide1 * newSide1) + (newSide2 * newSide2) !== (newSide3 * newSide3) || isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 > 1024 || side2 > 1024 || side3 > 1024 );

  var height = newSide1;
  var base = newSide2;
  var hypotenuse = newSide3;

  height = height + 25;
  base = base + 25;
  if (side1 != null || side2 != null || side3 != null || side1 == 0 || side2 == 0 || side3 == 0 ) {
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(25, height);
    ctx.lineTo(base, height);
    ctx.lineTo(25,25);
    ctx.stroke();
  }
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
    radius = Number(prompt("Radius: "));
    if (radius == null) {
      break;
    }
    if (radius < 32) {
      alert("Your radius must be at least 32.");
    }
    if (radius > 256) {
      alert("Your smiley face won't fit on the canvas.");
    }
    if (isNaN(radius)) {
      alert("Your radius is not a number.");
    }
    if (radius == null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  } while(radius < 32 || radius > 256 || isNaN(radius));

  if (radius != null && radius >= 32 && radius <= 256) {

    ctx.beginPath();
    ctx.arc(512, 256, radius, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 + 0.4 * radius, 256 - 0.4 * radius, radius * 0.15, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, radius * 0.15, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512, 256, radius * 0.7, 0, Math.PI)
    ctx.stroke();
    ctx.closePath();

  }
};


/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  var distance = 0;
  var height = 0;
  var row = 0;
  var column = 0;
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
    } else if (isNaN(side)) {
      alert("Your block size is not a number.");
    }
  } while (side < 1 || side > canvas.height || side > canvas.width || isNaN(side));

  for (i = 5; i > 0; i--) {
    counter = i;
    while (counter >= 1) {
    ctx.beginPath();
    ctx.rect(10 + Number(distance), (502 - side) - Number(height), Number(side), Number(side));
    ctx.stroke();
    ctx.closePath();
    distance = Number(distance) + Number(side);
    counter--;
  }
  row++;
  distance =  row * (1/2 * side);
  column ++;
  height = column * side;
}
};
