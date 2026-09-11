$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 500, 350, 15);
createPlatform(170, 498, 15, 15);
createBadPlatform(0, 499, 350, 16);
createPlatform(350, 165, 10, 485);
createPlatform(280, 250, 80, 15);
createPlatform(0, 375, 80, 5);
createPlatform(350, 165, 700, 70);
createPlatform(1380, 275, 20, 5);
createPlatform(1049, 165, 5, 335);
createPlatform(1225, 400, 175, 5);
createPlatform(1050, 275, 20, 5);
createPlatform(874, 350, 5, 600);
createPlatform(1026, 500, 20, 3);
createPlatform(800, 625, 100, 10);
createPlatform(800, 380, 85, 10);
createPlatform(450, 500, 250, 10);
createFakePlatform(350, 500, 350, 10);
createPlatform(175, 650, 50, 100);
createPlatform(350, 650, 100, 5);
createPlatform(450, 505, 5, 150);

    // TODO 3 - Create Collectables
createCollectable("coin", 50, 275);
createCollectable("coin", 1375, 25);
createCollectable("coin", 375, 275);
createCollectable("coin", 50, 700);
createCollectable("coin", 1025, 260);


    
    // TODO 4 - Create Cannons
createCannon("left", 475, 9999);
createCannon("bottom", 1250, 9999);
createCannon("bottom", 818, 9999);
createCannon("right", 500, 9999);
createCannon("bottom", 0, 9999);
createCannon("left", -50, 0);
createCannon("right", 68, 0);
createCannon("bottom", 345, 2000000000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
