import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullNameInputField() {
    return cy.get("#userName");
  }
  static get emailInputField() {
    return cy.get("#userEmail");
  }
  static get currentAddressInputField() {
    return cy.get("textArea[id='currentAddress']");
  }
  static get permanentAddressInputField() {
    return cy.get("textArea#permanentAddress");
  }
  static get submitbutton() {
    return cy.get("#submit")
  }
  static get paragraphName() {
    return cy.get("#name")
  }
  static get paragraphEmail() {
    return cy.get("#email")
  }
  static get paragraphCurrentAddress() {
    return cy.get("p#currentAddress")
  }
  static get paragraphPermanentAddress() {
    return cy.get("p#permanentAddress")
  }
}

export default TextBoxPage;
