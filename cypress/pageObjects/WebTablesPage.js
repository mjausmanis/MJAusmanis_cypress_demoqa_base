import BasePage from "./BasePage";

class WebTablesPage extends BasePage {
    static get url() {
    return "/webtables";
    }

    static get addButton() {
        return cy.get("#addNewRecordButton");
    }
    static get firstNameInputField() {
        return cy.get("#firstName");
    }
    static get lastNameInputField() {
        return cy.get("#lastName");
    }
    static get emailNameInputField() {
        return cy.get("#userEmail");
    }
    static get ageInputField() {
        return cy.get("#age");
    }
    static get salaryInputField() {
        return cy.get("#salary");
    }
    static get departmentInputField() {
        return cy.get("#department");
    }
    static get submitButton() {
        return cy.get("#submit");
    }
    static get rows() {
        return cy.get("[role='rowgroup']")
    }
    static findRow(value) {
        return this.rows.contains(value).parent();    
    }
    static deleteUser(value) {
        return this.findRow(value).find("[title='Delete']").click();
    }



}

export default WebTablesPage;
