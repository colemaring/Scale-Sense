// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
let transpositionDelta = urlParams.get("delta");

// Retrieve the value of the "score" parameter
const scoreValue = urlParams.get("points");

// Get the <h1> element by its ID
const h1Element = document.getElementById("score");

// Set the text content of the <h1> element to the score value
if (scoreValue !== null) {
  h1Element.textContent = scoreValue;
}

// Give feedback based off of percentage value (rounded to two places)
let percentage = (scoreValue / 15) * 100;
percentage = percentage.toFixed(2);
if (percentage >= 100) {
  h1Element.textContent = percentage + "%: Superior score!";
} else if (percentage > 90) {
  h1Element.textContent = percentage + "%: Excellent score!";
} else if (percentage > 80) {
  h1Element.textContent = percentage + "%: Good score!";
} else {
  h1Element.textContent =
    percentage + "%: Try to practice more to beat your score!";
}

const homeButton = document.getElementById("homeButtonScore");

// Add a click event listener to the button
homeButton.addEventListener("click", function () {
  // Navigate to the desired HTML page
  window.location.href = "index.html";
});

const tryAgain = document.getElementById("tryAgain");
const urlParamsIndex = new URLSearchParams(window.location.search);
const scaleIndex = urlParamsIndex.get("index");

// Add a click event listener to the button
tryAgain.addEventListener("click", function () {
  // Navigate to the desired HTML page
  window.location.href = `scales.html?index=${scaleIndex}&scale=${urlParams.get(
    "scale"
  )}&mm=${urlParams.get("mm")}&transposition=${urlParams.get("transposition")}`;
});

// splits up index string into an arr of ints storing the indexes of wrong notes
const wrongIndexes = urlParams.get("wrong");
function wrongToIntegerArray(wrongIndexes) {
  // Split the input string into an array using hyphen as the delimiter
  const parts = wrongIndexes.split("-");

  // Use the map function to convert the parts into integers
  const integerArray = parts.map((part) => parseInt(part, 10));

  return integerArray;
}

// the arr of integers representing wrong notes (indexes)
let newIn = wrongToIntegerArray(wrongIndexes);
if (newIn.length === 1)
  document.getElementById("wrongNotes").style.display = "none";

// Create transScaleIndex for transposed wrong notes
let scaleType = Math.floor(scaleIndex / 12);
let transScaleIndex = scaleIndex % 12;
transScaleIndex -= transpositionDelta;
if (transScaleIndex < 0) transScaleIndex += 12;
if (transScaleIndex > 11) transScaleIndex -= 12;
transScaleIndex += 12 * scaleType;

// wrong note indexes
console.log(newIn);

let spanContainer = document.getElementById("spanHolder");

// append spans showing wrong notes
function createSpanElementsFromArray(newIn) {
  const container = document.createElement("div"); // Create a container element to hold the <span> elements

  const uniqueDisplayValues = new Set(); // Use a Set to track unique display values

  // Iterate through the array of strings and create a <span> element for each string
  for (let inte of wrongIndexes) {
    let display = displayArray[transScaleIndex][inte]; // Get the display value
    if (!uniqueDisplayValues.has(display)) {
      const span = document.createElement("span"); // Create a <span> element
      span.id = display; // Set the id of the <span> element to the display value

      span.textContent = display; // Set the text content of the <span> element
      span.textContent += " ";
      container.appendChild(span); // Append the <span> element to the container
      uniqueDisplayValues.add(display); // Add the display value to the Set to mark it as seen
    }
  }

  return container; // Return the container with unique <span> elements based on display values
}
let container = createSpanElementsFromArray(wrongIndexes);
spanContainer.appendChild(container);
