/**
 * Class that represents the application view. The view displays information
 * contained in the model: type & color. The view does not obtain the information
 * directly from the model, it uses the controller as a mediator which instructs
 * it when and what to display.
 *
 * The view holds references to all UI elements with which the user interacts with
 * AND for which the event-handling mechanism needs to be implemented.
 */
class CarView {
  constructor() {
    this.modelInput = document.querySelector("#car-model");
    this.colorInput = document.querySelector("#color");
    this.rimsInput = document.querySelector("#rims");
    this.carForm = document.querySelector("#customize-car-form");
    this.carImage = document.querySelector("#car-image");
    this.submitButton = document.querySelector("#submit-button");
  }

  /**
   * Enables or disables the submit button depending on the input values.
   * If all input is values are as expected, the button will be enabled.
   */
  checkFormCompletion(model) {
    // If all fields have been selected, return true. Otherwise, return false.
    if (
      model.model !== "undefined" &&
      model.color !== "undefined" &&
      model.rims !== "undefined"
    ) {
      this.submitButton.disabled = false;
      return true;
    }
    this.submitButton.disabled = true;
    return false;
  }

  /**
   * Renders the image based on the model data.
   *
   * @param {String} model - The model of the car image.
   * @param {String} color - The color of the car image.
   * @param {String} rims - The rims of the car image.
   * @returns {undefined}
   */
  renderCar(model, color, rims) {
    // Get the car image element
    const carImage = document.getElementById("car-image");

    // Log the values of model, color, rims, and carImage.src
    // console.log("model:", model);
    // console.log("color:", color);
    // console.log("rims:", rims);

    // Check if any of the variables are undefined or null
    if (
      model === undefined ||
      model === null ||
      color === undefined ||
      color === null ||
      rims === undefined ||
      rims === null
    ) {
      // If any are, set the styles to hidden and none
      carImage.style.display = "none";
      carImage.style.visibility = "hidden";
    } else {
      // If all have valid values, update the source of the car image
      carImage.src = `assets/${model}-${color}-${rims}.png`;

      // Log the new source of the car image
      //   console.log("carImage.src:", carImage.src);

      // Change the styles to block and visible
      carImage.style.display = "block";
      carImage.style.visibility = "visible";
    }
  }

  /**
   * Resets the input values and the submit button.
   */
  reset() {
    this.modelInput.value = "";
    this.colorInput.value = "";
    this.rimsInput.value = "";
    this.submitButton.disabled = true;
  }
}
