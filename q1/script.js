// Select the paragraph and the button using DOM selection methods
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Replace the paragraph text (textContent inserts plain text, never HTML)
function changeMessage() {
  message.textContent = "Hello there!";
}

// Attach the function to the button's click event
changeBtn.addEventListener("click", changeMessage);
