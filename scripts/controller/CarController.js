/**
 * Class that represents the car controller. The controller acts as a mediator between the model and the view.
 * It listens to events triggered by the UI, updates the model and instructs the view to update.
 */
export class CarController {
  /**
   * Creates an object representing the car controller.
   *
   * @param {CarModel} model - The model the controller interacts with.
   * @param {CarView} view - The view the controller interacts with.
   * @returns {CarController} The object representing the car controller.
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Ensure the controller is correctly initializing the view and model
    this.view.modelInput.addEventListener(
      "change",
      this.handleInputChange.bind(this)
    );
    this.view.colorInput.addEventListener(
      "change",
      this.handleInputChange.bind(this)
    );
    this.view.rimsInput.addEventListener(
      "change",
      this.handleInputChange.bind(this)
    );
    this.view.carForm.addEventListener(
      "submit",
      this.handleFormSubmit.bind(this)
    );
  }

  /**
   * Handles "change" events fired by input fields.
   * On change, the model is updated to reflect the new values and the view
   * is tasked with enabling/disabling the submit button.
   *
   * @param {Event} event - the event to be processed
   */
  handleInputChange = (event) => {
    let input = event.target;
    switch (input.id) {
      case "car-model":
        this.model.model = input.value;
        this.handleCarModelChange();
        break;
      case "color":
        this.model.color = input.value;
        break;
      case "rims":
        this.model.rims = input.value;
        break;
    }

    if (this.view.checkFormCompletion(this.model)) {
      this.view.renderCar(this.model.model, this.model.color, this.model.rims);
    }
  };

  /**
   * Handles the change of the car model.
   * This function clears the existing options in the color and rims select elements,
   * adds new options based on the selected car model, and selects the first option by default.
   */
  handleCarModelChange() {
    let colorSelect = document.getElementById("color");
    let rimsSelect = document.getElementById("rims");

    // Clear existing options
    colorSelect.innerHTML = "";
    rimsSelect.innerHTML = "";

    // Clear previously selected values
    this.model.color = "";
    this.model.rims = "";

    if (this.model.model === "model3") {
      colorSelect.innerHTML +=
        '<option value="">Select a color</option><option value="silver">Glacier Silver</option><option value="blue">Mediterranean Blue</option>';
      rimsSelect.innerHTML +=
        '<option value="">Select a rim</option><option value="silver">(Silver) Mercury Mist</option><option value="black">(Black) Obsidian Onyx</option>';
    } else if (this.model.model === "model8") {
      colorSelect.innerHTML +=
        '<option value="">Select a color</option><option value="blue">Imperial Blue</option><option value="green">British Racing Green</option>';
      rimsSelect.innerHTML +=
        '<option value="">Select a rim</option><option value="silver1">(Silver) Silver Serenity</option><option value="silver2">(Silver) Arctic Alloy</option>';
    }

    // Select the first option by default
    colorSelect.selectedIndex = 1;
    rimsSelect.selectedIndex = 1;

    // Update the model with the selected values
    this.model.color = colorSelect.value;
    this.model.rims = rimsSelect.value;

    this.view.checkFormCompletion(this.model);
  }

  /**
   * Handles "submit" events fired by the form.
   * On submit, the view renders the car image, and then, it's reset to initial
   * values.
   *
   * @param {Event} event - the event to be processed
   */
  handleFormSubmit = (event) => {
    //prevent the default action of a form (prevent submitting it)
    event.preventDefault();
    if (this.view.checkFormCompletion(this.model)) {
      window.location.href = "order-form.html";
    } else {
      alert("Please complete the form before submitting!");
    }
    this.view.reset();
  };
}
