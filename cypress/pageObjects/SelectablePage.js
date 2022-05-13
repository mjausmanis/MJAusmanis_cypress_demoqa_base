import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get verticalListContainer(){
    return cy.get("[id='verticalListContainer']")
  }
  static get gridButton(){
    return cy.get("#demo-tab-grid")
  }
  static get gridRow1(){
    return cy.get("#row1");
  }
  static get gridRow2(){
    return cy.get("#row2");
  }
  static get gridRow3(){
    return cy.get("#row3");
  }
}

export default SelectablePage;
