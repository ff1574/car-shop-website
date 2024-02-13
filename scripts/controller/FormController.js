import FormValidator from "../util/FormValidator.js";
/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that
 * provides a way to easily construct a set of key/value pairs representing form
 * fields and their values.
 *
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */
export class FormController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.createInputs(this.model.getInputData());
    this.validator = new FormValidator();

    // register one event handler for all input 'change' events
    this.view.inputs.forEach((input) => {
      input.addEventListener("change", this.handleInputChange);
    });

    // register form submit handler
    this.view.form.addEventListener("submit", this.handleFormSubmit);
  }

  handleInputChange = (event) => {
    //update model
    let input = event.target;
    this.model[input.name] = input.value;
    this.validator.validateForm();
  };

  handleFormSubmit = (event) => {
    //prevent the default action of a form (prevent submitting it)
    event.preventDefault();

    if (!this.validator.validateForm()) {
      return;
    }

    let formData = new FormData(this.view.form);
    let formDataObj = {};
    for (let entry of formData) {
      formDataObj[entry[0]] = entry[1];
    }

    localStorage.setItem("personal-information", JSON.stringify(formDataObj));

    // Show the order success modal
    let modal = document.getElementById("order-success-modal");
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    document.getElementsByClassName("close-button")[0].onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
}
