const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Clear existing items so repeated clicks do not duplicate the list
  numberList.replaceChildren();

  // Loop from 1 through 5, creating one <li> per number
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "The number is " + i;
    numberList.appendChild(li);
  }
}

generateBtn.addEventListener("click", generateNumbers);
