// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(decreaseBlue);
  applyFilterNoBackground(reddify);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(invertColor);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
/*This function takes in a filter and gets each individual square
it then converts the squares rgb value from a string into a array
then applies the filter to the pixel, converts it back to a string
updates the current pixel to the new pixel
*/
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
      console.log(image[i][j]);
      var pixel = row[j];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later//
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
//This function will apply the filter to everything but the background//
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixel = image[i][j];
        var pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
//This keeps the rgb value in a range of 0 to 255//
function keepInBounds(num) {
  //Old code before refactoring//
  /*if (num <= 0) {
    num = 0;
  } else if (num >= 255) {
    num = 255;
  } else {
    return num;
  }*/
  return num <= 0 ? 0 : num >= 255 ? 255 : num;
}
//TEST CODE//
/*console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125
*/

// TODO 4: Create reddify filter function
//This filter changes the red rgb value//
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}


// TODO 7 & 8: Create more filter functions
//This filter decreases the blue rgb value until it is 0//
function decreaseBlue(pixelArray) {
  var newBlue = pixelArray[BLUE];
  newBlue -= 50;
  pixelArray[BLUE] = keepInBounds(newBlue);
}
//This filter decreases the green rgb value by the blue rgb value//
function increaseGreenByBlue(pixelArray) {
  var newGreen = pixelArray[GREEN] + pixelArray[BLUE];
  pixelArray[GREEN] = keepInBounds(newGreen);
}

// CHALLENGE code goes below here
function invertColor(pixelArray) {
  keepInBounds(pixelArray[RED] = 255 - pixelArray[RED]);
  keepInBounds(pixelArray[BLUE] = 255 - pixelArray[BLUE]);
  keepInBounds(pixelArray[GREEN] = 255 - pixelArray[GREEN]);
}