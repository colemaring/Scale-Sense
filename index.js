// Get references to the dropdowns and the start button
const startingPitchDropdown = document.getElementById("dropdownMenuButton1");
const scaleDropdown = document.getElementById("dropdownMenuButton2");
const startButton = document.getElementById("startButton");
const transpositionDropdown = document.getElementById("dropdownMenuButton3");

if (startButton) {
  // Add a click event listener to the start button
  startButton.addEventListener("click", function () {
    scaleValue = scaleDropdown.innerText;
    startingPitchValue = startingPitchDropdown.innerText;
    let transpositionValue = transpositionDropdown.innerText;

    yourFunction(startingPitchValue, scaleValue, transpositionValue);
    let trans = transpositionDropdown.innerText;
    console.log(trans + "hello");
  });
}

function yourFunction(startingPitch, scale, transpositionValue) {
  // Do something with the selected values
  //   console.log(startingPitch + " " + scale);
  //   console.log("Starting Pitch:", startingPitch);
  //   console.log("Scale:", scale);
  //   window.startingPitch;
  //   window.scale;

  if (startingPitch === "Starting Pitch " || scale === "Scale ") {
    console.log("select stuff");
  } else {
    // Redirect to scales.html
    // window.location.href = "scales.html";
    // logic for conversion of startingPitch/scale to int value
    // index is a global variable
    let index;
    switch (startingPitch) {
      case "Concert_C":
        index = 0;
        break;
      case "Concert_Db":
        index = 1;
        break;
      case "Concert_D":
        index = 2;
        break;
      case "Concert_Eb":
        index = 3;
        break;
      case "Concert_E":
        index = 4;
        break;
      case "Concert_F":
        index = 5;
        break;
      case "Concert_F#":
        index = 6;
        break;
      case "Concert_G":
        index = 7;
        break;
      case "Concert_Ab":
        index = 8;
        break;
      case "Concert_A":
        index = 9;
        break;
      case "Concert_Bb":
        index = 10;
        break;
      case "Concert_B":
        index = 11;
        break;

      default:
        index = 0;
    }

    if (scaleValue === "Minor") {
      index += 12;
    } else if (scaleValue === "Harmonic Minor") {
      index += 24;
    } else if (scaleValue === "Melodic Minor") {
      index += 36;
    }

    //window.index = index;
    window.location.href = `scales.html?index=${index}&transposition=${transpositionValue}&mm=${scale}&scale=${startingPitch}`;
  }
}
