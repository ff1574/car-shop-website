/**
 * Class that represents the application controller. The controller is responsible
 * for accessing data from the model and displaying it on the view. The controller
 * is used to intermediate between the view and the model. It monitors user interactions
 * with the view and communicates any changes to the model. On the other hand,
 * changes (if any) to the model are observed by the controller and subsequently
 * reflected in the view.
 *
 * The controller contains the code that handles different types of events. The
 * controller's methods are event handlers.
 *
 * BEWARE of the 'this' keyword. The 'this' keyword behaves a little differently
 * in JavaScript compared to other languages. In most cases, the value of 'this'
 * is determined by how a function is called (runtime binding). Inside a handler,
 * 'this' points to the UI element that triggered the event. Inside an arrow
 * function, 'this' points to the object that owns/defines the arrow function.
 * Here, that's the CarController object.
 */
class CarController {
  /**
   * Creates an object representing the car controller.
   *
   * @param {type} model - The model the controller interacts with.
   * @param {type} view - The view the controller interacts with.
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
