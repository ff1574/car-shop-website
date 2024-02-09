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

        if (!this.validateInputs()) {
            return;
        }

        this.model.persist();
        let formData = new FormData(this.view.form);
        for (let entry of formData) {
            localStorage.setItem(entry[0], entry[1]);
        }
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
            alert("Please fill in all the fields");
        }

        return allFilled;
    };
}
