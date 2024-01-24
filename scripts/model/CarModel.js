/**
 * Represents the application model. The model contains the data, the information
 * regarding the car such as: type and color. The model can obtain data either
 * from a database or files, which could be located locally or externally. The
 * model does not talk directly to a view, instead is made available to a controller
 * which accesses it when needed.
 */
class CarModel {
  /**
   * Represents the type of the car.
   * @type String
   */
  #model = "undefined";

  /**
   * Represents the color of the car.
   * @type String
   */
  #color = "undefined";

  /**
   * Represents the rims of the car.
   * @type String
   */
  #rims = "undefined";

  /**
   * Sets the model of this CarModel object.
   * @param {String} model - the model of the car
   */
  set model(model) {
    if (model === "") this.#model = "undefined";
    else this.#model = model;
  }

  /**
   * Sets the color of this CarModel object.
   * @param {String} color - the color of the car
   */
  set color(color) {
    if (color === "") this.#color = "undefined";
    else this.#color = color;
  }

  /**
   * Sets the rims of this CarModel object.
   * @param {String} rims - the rims of the car
   */
  set rims(rims) {
    if (rims === "") this.#rims = "undefined";
    else this.#rims = rims;
  }

  /**
   * Returns the model of the car represented by this object.
   * @returns {String} the model of the car represented by this object
   */
  get model() {
    return this.#model;
  }

  /**
   * Returns the color of the car represented by this object.
   * @returns {String} the color of the car represented by this object
   */
  get color() {
    return this.#color;
  }

  /**
   * Returns the rims of the car represented by this object.
   * @returns {String} the rims of the car represented by this object
   */
  get rims() {
    return this.#rims;
  }
}
