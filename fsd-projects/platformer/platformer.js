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
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 500, 350, 15);
createPlatform(350, 150, 10, 500);
createPlatform(300, 270, 60, 15);
createPlatform(0, 375, 60, 5);
createPlatform(350, 150, 700, 85);
createPlatform(1380, 275, 20, 5);
createPlatform(1049, 150, 5, 335);
createPlatform(1225, 400, 175, 5);
createPlatform(1050, 275, 10, 5);
createPlatform(1050, 700, 350, 50);
createPlatform(874, 350, 5, 600);
createPlatform(1046, 500, 5, 3);
createPlatform(800, 625, 100, 10);
createPlatform(800, 380, 85, 10);
createPlatform(350, 500, 350, 50);
createPlatform(1390, 175, 5, 5);


    // TODO 3 - Create Collectables
createCollectable("steve", 50, 275);
createCollectable("diamond", 1375, 25);
createCollectable("max", 375, 275);
createCollectable("database", 50, 700);
createCollectable("grace", 1025, 260);


    
    // TODO 4 - Create Cannons
createCannon("left", 550, 100);
createCannon("bottom", 1350, 25);
createCannon("bottom", );
createCannon("right", );

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
