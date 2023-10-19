let transpositionDelta = 0;
let userString = "You chose ";
const urlParams = new URLSearchParams(window.location.search);
const scaleIndex = urlParams.get("index");
document.getElementById("userSelection").innerHTML += scaleIndex;

userString += urlParams.get("mm") + " and ";
userString += urlParams.get("scale");

document.getElementById("userSelection").innerHTML = userString;

const transpositionString = urlParams.get("transposition");
let pleasework = document.getElementById("transpositionVal");
pleasework.innerHTML = "Transposition:  " + transpositionString;

function createSpanElementsFromArray(stringsArray) {
  console.log(stringsArray);
  const container = document.getElementById("holdSpan"); // Create a container element to hold the <span> elements

  // Iterate through the array of strings and create a <span> element for each string
  let goingDownOnScale = 0;

  for (let str of stringsArray) {
    const span = document.createElement("span"); // Create a <span> element

    // avoid duplication error by adding suffix
    if (goingDownOnScale === 14) {
      str += "2";
    } else if (goingDownOnScale > 6) {
      str += "1";
    }
    span.id = str; // Set the id of the <span> element to the modified string

    // convert transposition string into appropriate value
    transpositionDelta = 0;
    if (transpositionString === "Concert_Pitch") transpositionDelta = 0;
    if (transpositionString === "F_Transposition") transpositionDelta = -7;
    if (transpositionString === "Bb_Transposition") transpositionDelta = -2;
    if (transpositionString === "Eb_Transposition") transpositionDelta = -9;
    if (transpositionString === "A_Transposition") transpositionDelta = -3;
    if (transpositionString === "G_Transposition") transpositionDelta = -5;
    let scaleType = Math.floor(scaleIndex / 12);
    let transScaleIndex = scaleIndex % 12;
    transScaleIndex -= transpositionDelta;
    if (transScaleIndex < 0) transScaleIndex += 12;
    if (transScaleIndex > 11) transScaleIndex -= 12;
    transScaleIndex += 12 * scaleType;
    let display = displayArray[transScaleIndex];
    span.textContent = display[goingDownOnScale] + " "; // Set the text content of the <span> element to the modified string
    container.appendChild(span); // Append the <span> element to the container
    goingDownOnScale++;
  }

  return container; // Return the container with the <span> elements
}

const stringsArray = scaleArray[scaleIndex];
const container = createSpanElementsFromArray(stringsArray);

// Append the container to the body (or any other element you want)
document.body.appendChild(container);

// Get a reference to the button element
const homeButton = document.getElementById("homeButton");

// Add a click event listener to the button
homeButton.addEventListener("click", function () {
  // Navigate to the desired HTML page
  window.location.href = "index.html";
});

// initialize high scores to 0 for all 48 arr
let highScores = new Array(48);
for (let i = 0; i < 48; i++) {
  highScores[i] = 0;
}

let pitch;
let audioStream;

// scale is with "sharp"
let scale = scaleArray[scaleIndex];
const chromatic = [
  "C",
  "Csharp",
  "D",
  "Dsharp",
  "E",
  "F",
  "Fsharp",
  "G",
  "Gsharp",
  "A",
  "Asharp",
  "B",
];

let currentNote = "";

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

function setup() {
  createCanvas(640, 520);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  document.getElementById("userSelection").innerHtml = window.startingPitch;
}

function startPitch() {
  console.log("Listening");
  const url =
    "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
  pitch = ml5.pitchDetection(url, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  select("#status").html("Model Loaded");
  getPitch();
}

let i = 0;
let temp = "";
let repeat = 0;
let lastNote = "";

// points keeps track of correct notes
let points = 0;

// creates an arr of wrong note indexes
let wrong = new Array();
let wrongCount = 0;

function getPitch() {
  pitch.getPitch(function (err, frequency) {
    // if done with excercise, end

    if (i >= scale.length) {
      // push new score to arr
      // checkForHighScore(points, scaleIndex);
      console.log("end points " + points);
      console.log("Scale completed!");
      let stringNameMe = returnWrong(wrong);
      let scaleString = document.getElementById;
      window.location.href = `score.html?points=${points}&index=${scaleIndex}&wrong=${stringNameMe}&scale=${urlParams.get(
        "scale"
      )}&mm=${urlParams.get("mm")}&transposition=${urlParams.get(
        "transposition"
      )}&delta=${transpositionDelta}`;

      // exit and dont listen anymore
      return;
    }

    // if frequency is detected, convert to note
    if (frequency) {
      let midiNum = freqToMidi(frequency);
      currentNote = chromatic[midiNum % 12];
      console.log("you played a " + currentNote);

      let result = coolFunction(currentNote, scale, i);
      if (result == 0) {
        i++;
      } else if (result == 1) {
        i++;

        // do red
      } else {
        // do nothing
      }
    }
    getPitch();
  });
}

// boolean funciton, is last note the current note?
function weShouldTryNote(currentNote, lastNote, correctNote) {
  if (lastNote === "") return true;
  if (lastNote === correctNote) return true;
  if (lastNote === currentNote) return false;
  // returns boolean value if current note being played is the same as the last one
  return true;
}

// perform assessment of current note
function coolFunction(currentNote, scale, i) {
  // underlines and removes underline from previous span

  let num = "";
  // if last one, add suffix of 2
  if (i - 1 === 14) num = 2;
  // if repeat, add suffix of 1
  else if (i - 1 > 6) num = 1;
  // create suffix string, concat
  let stringToCheck = scale[i - 1] + num;
  // get the correct element and turn green
  const elementPrev = document.getElementById(stringToCheck);

  // Check if the element with the specified ID exists
  if (elementPrev) {
    if ((elementPrev.style.textDecoration = "underline")) {
      elementPrev.style.textDecoration = "none";
    }
    // Use the style property to apply the 'text-decoration' CSS property
  }

  // if last one, add suffix of 2
  if (i === 14) num = 2;
  // if repeat, add suffix of 1
  else if (i > 6) num = 1;
  // create suffix string, concat
  let stringToCheck2 = scale[i] + num;
  // get the correct element and turn green

  // underline
  const element = document.getElementById(stringToCheck2);

  // Check if the element with the specified ID exists
  if (element) {
    // Use the style property to apply the 'text-decoration' CSS property
    element.style.textDecoration = "underline";
  }

  if (weShouldTryNote(currentNote, lastNote, scale[i])) {
    if (currentNote === temp) {
      repeat++;
    } else {
      temp = currentNote;
      repeat = 0;
    }
  }
  // tick check
  if (repeat > 50 - slider.value) {
    // right note, make green case
    if (currentNote === scale[i]) {
      console.log("correct note");

      // turn note green

      let num = "";
      // if last one, add suffix of 2
      if (i === 14) num = 2;
      // if repeat, add suffix of 1
      else if (i > 6) num = 1;
      // create suffix string, concat
      let string = scale[i] + num;
      // get the correct element and turn green
      document.getElementById(string).style.color = "green";

      // increase points!
      points++;

      repeat = 0;
      // update previous note
      lastNote = currentNote;
      return 0;
    }
    // not the right note, make red case
    else {
      console.log("right note was " + scale[i]);
      let num = "";
      if (i === 14) num = 2;
      else if (i > 6) num = 1;
      let string = scale[i] + num;
      document.getElementById(string).style.color = "red";
      repeat = 0;
      lastNote = currentNote;

      // keep track of an arr of all the wrong notes
      wrong[wrongCount] = i + "-";
      wrongCount++;

      return 1;
    }
  }
  // not 12 ticks, make blank case
  else {
    return 2;
  }
}

// pass indexes of wrong notes over query params as 1-4-23
// return string of indexes of wrong notes seperated by "-"
function returnWrong(wrong) {
  let str = "";
  for (let i = 0; i < wrong.length; i++) {
    str += wrong[i];
  }

  return str;
}
