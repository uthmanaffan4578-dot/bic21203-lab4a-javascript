const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  // Read the input and remove leading/trailing spaces
  const text = userInput.value.trim();

  // Convert the string to a number. Number("abc") is NaN.
  const value = Number(text);

  // Empty or whitespace-only input must be checked first,
  // because Number("") would otherwise give 0.
  if (text === "" || !Number.isFinite(value)) {
    result.textContent = "Please enter a valid number!";
  } else if (value < 10) {
    result.textContent = "The number is lower than 10";
  } else if (value > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);
