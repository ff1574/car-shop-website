/**
 * This is application's entry point based on the MVC architectural pattern.
 * The controller that represents the brains of the application is being
 * initialized and connects the model and the view.
 *
 * The controller is used to intermediate between the view and the model.
 * The controller monitors user interaction with the view and communicates
 * any changes to the model.
 */
import { CarModel } from "./model/CarModel.js";
import { CarView } from "./view/CarView.js";
import { CarController } from "./controller/CarController.js";

const carModel = new CarModel();
const carView = new CarView();
const carController = new CarController(carModel, carView);
