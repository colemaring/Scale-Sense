// Get references to the dropdowns and the start button
const startingPitchDropdown = document.getElementById("startingPitchDropdown");
const scaleDropdown = document.getElementById("chooseScaleDropdown");
const transpositionDropdown = document.getElementById("transpositionDropdown");
const startButton = document.getElementById("startButton");

// JQuery to set text of dropdown to the selected item
$(document).ready(function () {
  // Handle the click event on dropdown items
  $(".dropdown-menu a").click(function () {
    // Get the text of the clicked item
    var newText = $(this).text();
    // Find the parent dropdown button and update its text
    $(this).closest(".dropdown").find(".dropdown-toggle").text(newText);
  });
});

// On start button click, send dropdown values to assignIndex
startButton.addEventListener("click", function () {
  assignIndex(
    startingPitchDropdown.innerText,
    scaleDropdown.innerText,
    transpositionDropdown.innerText
  );
});

// Assigns a unique index to the chosen scale combination
function assignIndex(startingPitch, scale, transpositionValue) {
  if (startingPitch === "Starting Pitch " || scale === "Scale ") {
  } else {
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

    if (scale === "Minor") {
      index += 12;
    } else if (scale === "Harmonic Minor") {
      index += 24;
    } else if (scale === "Melodic Minor") {
      index += 36;
    }

    window.location.href = `scales.html?index=${index}&transposition=${transpositionValue}&mm=${scale}&scale=${startingPitch}`;
  }
}
