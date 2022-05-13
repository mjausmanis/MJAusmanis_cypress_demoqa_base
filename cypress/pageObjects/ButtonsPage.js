import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
    static get url() {
    return "/buttons";
    }

    static get doubleClickMeButton() {
        return cy.get("#doubleClickBtn");
    }
    static get rightClickMeButton() {
        return cy.get("#rightClickBtn");
    }
    static get dynamicClickMeButton() {
        return cy.get(".btn-primary").contains(/^Click Me/);
    }
    static get doubleClickMessage() {
        return cy.get("#doubleClickMessage");
    }
    static get rightClickMessage() {
        return cy.get("#rightClickMessage");
    }


}

export default ButtonsPage;
