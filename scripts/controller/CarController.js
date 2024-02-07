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
 * Here, that's the AnimalController object.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
export class CarController {
  /**
   * Creates an object representing the animal controller.
   *
   * @param {type} model - The model the controller interacts with.
   * @param {type} view - The view the controller interatcs with.
   * @returns {CarController} The object representing the animal controller.
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.proceedToOrderButton = document.getElementById("submit-button");

    // Add a click event handler to the "Proceed to Order" button
    this.proceedToOrderButton.addEventListener(
      "click",
      this.handleProceedToOrder
    );
    // 1. render all selects
    let properties = this.model.getProperties();
    this.view.renderSelects(properties);

    // 2. populate the first select
    let firstSelectID = properties[0];
    this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

    // 3. register one event handler for all select 'change' events
    this.view.selects.forEach((select) => {
      select.addEventListener("change", this.handleSelectChange);
    });

    // 4. register form submit handler
    this.view.carForm.addEventListener("submit", this.handleSubmit.bind(this));
  }

  /**
   * Handles the change event generated by a select. When 'change' event is
   * triggered,
   * @param {type} event
   * @returns {undefined}
   */
  handleSelectChange = (event) => {
    let select = event.target;

    //1. UPDATE MODEL ------------------------------------------------------
    //Once the current model property is update, the other model properties
    //that are defined after the current property, they need to be reset to
    //"undefined".
    this.model[select.id] = select.value;
    this.model.resetNextProperties(select.id);
    console.log(this.model);

    
    const allSelectsChosen = Array.from(this.view.selects).every(
      (select) => select.selectedIndex > 0
    );
    if (allSelectsChosen) {
      this.proceedToOrderButton.style.display = "block";
      this.proceedToOrderButton.removeAttribute("disabled");
    } else {
      this.proceedToOrderButton.style.display = "none";
      this.proceedToOrderButton.setAttribute("disabled", "true");
    }
    //2. UPDATE VIEW (selectsDiv + animalDiv -------------------------------

    //2.1 Update the selectsDiv - reset next selects & load new options into
    // the next select only if the current selected option is different than
    // '-- Select the ... --', which index is 0
    this.view.resetNextSiblings(select.id);
    let nextSelect = select.nextElementSibling;
    if (select.selectedIndex > 0 && nextSelect) {
      this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
    }

    //2.2. Update the carDiv
    this.view.renderCar();
  };
  /**
   * Method to handle submit event
   * @param {*} event 
   */
  handleSubmit = (event) => {
    event.preventDefault(); // This line prevents the default form submission behavior
    window.location.href = "order.html"; // Redirect or handle the form data as needed
    console.log("Form submitted");
  };
}
