class FormValidator {
  constructor() {
    this.nameInput = document.querySelector('input[name="name"]');
    this.emailInput = document.querySelector('input[name="email"]');
    this.phoneInput = document.querySelector('input[name="phone"]');
    this.addressInput = document.querySelector('input[name="address"]');
    this.creditCardInput = document.querySelector('input[name="credit-card"]');
  }

  validateName = (name) => {
    if (!name.trim()) {
      console.log("Name is required.");
      this.showError(this.nameInput, "Invalid or empty name.");
      return false;
    }
    this.hideError(this.nameInput);
    return true;
  };

  validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      console.log("Invalid email.");
      this.showError(this.emailInput, "Invalid or empty email address.");
      return false;
    }
    this.hideError(this.emailInput);
    return true;
  };

  validatePhone = (phone) => {
    const regex = /^\d{6,12}$/;
    if (!regex.test(phone)) {
      console.log("Invalid phone number.");
      this.showError(this.phoneInput, "Invalid or empty phone number.");
      return false;
    }
    this.hideError(this.phoneInput);
    return true;
  };

  validateAddress = (address) => {
    if (!address.trim()) {
      console.log("Address is required.");
      this.showError(this.addressInput, "Invalid or empty address.");
      return false;
    }
    this.hideError(this.addressInput);
    return true;
  };

  validateCreditCard = (creditCardNumber) => {
    const regex = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$"); // This is for Visa cards
    if (!regex.test(creditCardNumber.trim())) {
      console.log("Invalid credit card number.");
      this.showError(this.creditCardInput, "Invalid or empty credit card.");
      return false;
    }
    this.hideError(this.creditCardInput);
    return true;
  };

  validateTermsAndConditions = () => {
    const termsCheckbox = document.querySelector("#terms");
    if (!termsCheckbox.checked) {
      console.log("Please accept the terms and conditions.");
      this.showError(termsCheckbox, "Please accept the terms and conditions.");
      return false;
    }
    this.hideError(termsCheckbox);
    return true;
  };

  showError = (input, message) => {
    input.style.borderColor = "red";
    let errorElement = input.nextSibling;
    if (
      errorElement &&
      errorElement.classList &&
      errorElement.classList.contains("error-message")
    ) {
      // If an error message is already displayed, update it
      errorElement.textContent = message;
    } else {
      // If no error message is displayed, create one
      errorElement = document.createElement("span");
      errorElement.textContent = message;
      errorElement.classList.add("error-message");
      input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
  };

  hideError = (input) => {
    input.style.borderColor = "";
    if (
      input.nextSibling &&
      input.nextSibling.classList &&
      input.nextSibling.classList.contains("error-message")
    ) {
      input.parentNode.removeChild(input.nextSibling);
    }
  };

  validateForm = () => {
    if (!this.validateName(this.nameInput.value)) {
      return false;
    }

    if (!this.validateEmail(this.emailInput.value)) {
      return false;
    }

    if (!this.validatePhone(this.phoneInput.value)) {
      return false;
    }

    if (!this.validateAddress(this.addressInput.value)) {
      return false;
    }

    if (!this.validateCreditCard(this.creditCardInput.value)) {
      return false;
    }

    if (!this.validateTermsAndConditions()) {
      return false;
    }

    return true;
  };
}

export default FormValidator;
