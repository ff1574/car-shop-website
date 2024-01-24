// Updates car image and enables/disables dropdowns based on the selected model
document.getElementById("car-model").addEventListener("change", function () {
  const colorSelect = document.getElementById("color");
  const rimsSelect = document.getElementById("rims");

  // Clear previous options
  colorSelect.innerHTML = '<option value="">Select a color</option>';
  rimsSelect.innerHTML = '<option value="">Select a rim</option>';

  // Enable or disable the dropdowns based on the selected model
  const isModelSelected = this.value !== "";
  colorSelect.disabled = !isModelSelected;
  rimsSelect.disabled = !isModelSelected;

  // Update the options based on the selected model
  if (this.value === "model3") {
    colorSelect.innerHTML +=
      '<option value="silver">Glacier Silver</option><option value="blue">Mediterranean Blue</option>';
    rimsSelect.innerHTML +=
      '<option value="silver">(Silver) Mercury Mist</option><option value="black">(Black) Obsidian Onyx</option>';
  } else if (this.value === "model8") {
    colorSelect.innerHTML +=
      '<option value="blue">Imperial Blue</option><option value="green">British Racing Green</option>';
    rimsSelect.innerHTML +=
      '<option value="silver1">(Silver) Silver Serenity</option><option value="silver2">(Silver) Arctic Alloy</option>';
  }

  // Show the image if a model is selected
  if (isModelSelected) {
    document.getElementById("car-image").style.display = "block";
  }

  // Show the image, automatically select the first color and rims if a model is selected
  if (isModelSelected) {
    document.getElementById("car-image").style.display = "block";
    document.getElementById("car-image").style.visibility = "visible";
    colorSelect.selectedIndex = 1;
    rimsSelect.selectedIndex = 1;
  } else {
    document.getElementById("car-image").style.display = "none";
    document.getElementById("car-image").style.visibility = "hidden";
  }

  // Check form completion
  checkFormCompletion();

  // Update car image
  updateCarImage();
});

// Whenever the color or rims dropdowns are changed, check if the form is complete and update the car image
document.getElementById("color").addEventListener("change", function () {
  checkFormCompletion();
  updateCarImage();
});
document.getElementById("rims").addEventListener("change", function () {
  checkFormCompletion();
  updateCarImage();
});

// Whenever the submit button is clicked, check if the form is complete, if not throw an alert
document.getElementById("submit-button").addEventListener("click", function (event) {

  event.preventDefault(); // Prevent the form from submitting normally
  
  if (!checkFormCompletion()) {
    alert("Please complete the form before submitting!");
  } 
  else {
    // If the form is valid, redirect to the personal information page
    window.location.href = "order-form.html";
  }
});

// Function that checks if the form is complete and enables/disables the submit button accordingly
function checkFormCompletion() {
  const carModel = document.getElementById("car-model").value;
  const color = document.getElementById("color").value;
  const rims = document.getElementById("rims").value;

  const isFormComplete = carModel !== "" && color !== "" && rims !== "";

  return isFormComplete;
}

// Function that updates the car image based on the selected model, color and rims
function updateCarImage() {
  const carModel = document.getElementById("car-model").value;
  const color = document.getElementById("color").value;
  const rims = document.getElementById("rims").value;

  if (carModel && color && rims) {
    document.getElementById(
      "car-image"
    ).src = `assets/${carModel}-${color}-${rims}.png`;
  }
}
