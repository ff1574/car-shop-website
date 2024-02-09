/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements.
 */
export class FormView {
    constructor() {
        this.inputs = null;
        this.form = document.querySelector("#order-form");
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     *
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            if(property === 'name') continue;
            this.form.querySelector(".order-information").insertAdjacentHTML(
                "beforeend",
                `
                    <label>${property}:</label>
                        <input name='${property}' 
                               value='${dataObject[property]}' 
                               type='text' size='30'/>
                     `
            );
        }
        this.inputs = this.form.querySelectorAll("input[type=text]");
    }
}
