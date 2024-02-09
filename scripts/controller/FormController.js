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
  };

  handleFormSubmit = (event) => {
    //prevent the default action of a form (prevent submitting it)
    event.preventDefault();

    if (!this.validateInputs() || !this.validateTermsAndConditions()) {
      return;
    }

    let formData = new FormData(this.view.form);
    let formDataObj = {};
    for (let entry of formData) {
      formDataObj[entry[0]] = entry[1];
    }

    localStorage.setItem("personal-information", JSON.stringify(formDataObj));
    alert("Your order has been submitted");
  };

  validateInputs = () => {
    let allFilled = true;
    const inputs = document
      .querySelector(".input-container")
      .querySelectorAll("input");
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        allFilled = false;
      } else {
        input.style.borderColor = "";
      }
    });

    if (!allFilled) {
      console.log("Please fill in all the fields");
    }

    return allFilled;
  };

  validateTermsAndConditions = () => {
    const termsCheckbox = document.querySelector("#terms");
    if (!termsCheckbox.checked) {
      console.log("Please accept the terms and conditions.");
      return false;
    } else
    return true;
  };
}
