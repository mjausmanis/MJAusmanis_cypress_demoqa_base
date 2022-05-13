import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";
import LinksPage from "../../pageObjects/LinksPage";
import SelectablePage from "../../pageObjects/SelectablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Input information
      TextBoxPage.fullNameInputField.type("John Smith");
      TextBoxPage.emailInputField.type("email@email.com");
      TextBoxPage.currentAddressInputField.type("adrese");
      TextBoxPage.permanentAddressInputField.type("cita adrese");
      // Click submit
      TextBoxPage.submitbutton.click();
      // Validate results
      TextBoxPage.paragraphName.should('exist').should('be.visible').should('contain', 'John Smith');
      TextBoxPage.paragraphEmail.should('contain', 'email@email.com');
      TextBoxPage.paragraphCurrentAddress.should('contain', 'adrese');
      TextBoxPage.paragraphPermanentAddress.should('contain', 'cita adrese');

    });
    it("Filling in Text Boxes", () => {
      cy.fixture("textBoxData").then((data) => {
        //Input information
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.currentAddressInputField.type(data.currentAddress);
        TextBoxPage.permanentAddressInputField.type(data.permanentAddress)
        // Click submit
        TextBoxPage.submitbutton.click();
        // Validate results
        TextBoxPage.paragraphName.should('contain', data.fullName);
        TextBoxPage.paragraphEmail.should('contain', data.email);
        TextBoxPage.paragraphCurrentAddress.should('contain', data.currentAddress);
        TextBoxPage.paragraphPermanentAddress.should('contain', data.permanentAddress);
      });
    });
  });
  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    it("Click checkboxes - Notes and General", () => {
      // Click +/expand button
      CheckBoxPage.plusButton.click();
      // CLick Notes checkbox
      CheckBoxPage.checkBoxTitles.contains('Notes').click();
      // Click General checkbox
      CheckBoxPage.checkBoxTitles.contains('General').click();
      // Validate that "You have selected notes general"
      CheckBoxPage.validationText.should('contain', 'notes').should('contain', 'general')
    });

    it("Click checkboxes - Office", () => {
      // Click +/expand button
      CheckBoxPage.plusButton.click();
      // CLick Office 
      CheckBoxPage.checkBoxTitles.contains('Office').click();
      // Validate that all the Office ellements are checked
      CheckBoxPage.validationText
        .should('contain', 'office')
        .should('contain', 'public')
        .should('contain', 'private')
        .should('contain', 'classified')
        .should('contain', 'general');
    });
  });
  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    it("Click Radio Buttons", () => {
      //Click - Yes button
      RadioButtonsPage.yesButton.click({ force: true});
      //Validate - Yes is clicked
      RadioButtonsPage.resultsSection.should('contain', 'Yes');
      //Click - Impressive button
      RadioButtonsPage.impressiveButton.click({ force: true});
      //Validate - Impressive is clicked
      RadioButtonsPage.resultsSection.should('contain', 'Impressive');
      //Disabled button
      RadioButtonsPage.noButton.should('exist').should('be.disabled');

    });
  });

  context("Web Tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });
    it("Create user in tables", () => {
      //Click Add button
      WebTablesPage.addButton.click();
      //Input necessary information about user
      WebTablesPage.firstNameInputField.type("John");
      WebTablesPage.lastNameInputField.type("Smith");
      WebTablesPage.emailNameInputField.type("email@email.com");
      WebTablesPage.ageInputField.type(21);
      WebTablesPage.salaryInputField.type(100000);
      WebTablesPage.departmentInputField.type("IT")
      //Click Submit
      WebTablesPage.submitButton.click();
      //Validate User in the List by Email
      WebTablesPage.findRow("email@email.com").should('contain', 'Smith');
      WebTablesPage.findRow("email@email.com").should('contain', 'John');
    });
    it("Delete all users in the list", () => {
      //Create method that deletes user based on email
      //Delete user with email: cierra@example.com
      WebTablesPage.rows.should('contain', 'cierra@example.com');
      WebTablesPage.deleteUser("cierra@example.com");
      WebTablesPage.rows.should('not.contain', 'cierra@example.com');
      //Delete user with email: alden@example.com
      WebTablesPage.deleteUser("alden@example.com");
      WebTablesPage.rows.should('not.contain', 'alden@example.com');
      //Delete user with email: kierra@example.com
      WebTablesPage.deleteUser("kierra@example.com");
      WebTablesPage.rows.should('not.contain', 'kierra@example.com');
    });
  });
  
  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });
    it("Click all buttons in different ways", () => {
      //Create neccessary elements
      //Click them in the meant way
      ButtonsPage.doubleClickMeButton.dblclick();
      ButtonsPage.doubleClickMessage.should("be.visible").should("contain", "You have done a double click");
      ButtonsPage.rightClickMeButton.rightclick();
      ButtonsPage.rightClickMessage.should("be.visible").should("contain", "You have done a right click");
      ButtonsPage.dynamicClickMeButton.should("be.visible");
    });
  });

  context("Links scenarios", () => {
    beforeEach(() => {
      LinksPage.visit();
    });
    it("API intercepting", () => {
      // cy.intercept("GET", "created", { statusCode: 202});
      LinksPage.createdLink.click();
      LinksPage.linkResponse.should('contain', '201');
    });

  });
});

context("Interactions Page", () => { 
  context("Selectable page scenarios", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Selecting 'Cras justo odio' and 'Morbi leo risus'.", () => {
      //Click on "Cras justo odio" and "Morbi leo risus"
      SelectablePage.verticalListContainer.contains('Cras justo odio').click();
      SelectablePage.verticalListContainer.contains('Morbi leo risus').click();

      //Validate that the clicked fields are active
      SelectablePage.verticalListContainer.contains('Cras justo odio').should('have.class','active');
      SelectablePage.verticalListContainer.contains('Morbi leo risus').should('have.class', 'active');

      //Validate that the unclicked fields are not active
      SelectablePage.verticalListContainer.contains('Dapibus ac facilisis in').should('not.have.class', 'active');
      SelectablePage.verticalListContainer.contains('Porta ac consectetur ac').should('not.have.class', 'active');

    });

    it.only("Selecting 'Two', 'Four', 'Six', 'Eight'.", () => {
      //Go to the "Grid" section
      SelectablePage.gridButton.click();
      //Click on 'Two', 'Four', 'Six', 'Eight'.
      SelectablePage.gridRow1.contains("Two").click();
      SelectablePage.gridRow2.contains("Four").click();
      SelectablePage.gridRow2.contains("Six").click();
      SelectablePage.gridRow3.contains("Eight").click();
      //Validate that the clicked fields are active
      SelectablePage.gridRow1.contains('Two').should('have.class','active');
      SelectablePage.gridRow2.contains('Four').should('have.class','active');
      SelectablePage.gridRow2.contains('Six').should('have.class','active');
      SelectablePage.gridRow3.contains('Eight').should('have.class','active');
      //Validate that the unclicked fields are not active
      SelectablePage.gridRow1.contains('One').should('not.have.class','active');
      SelectablePage.gridRow1.contains('Three').should('not.have.class','active');
      SelectablePage.gridRow2.contains('Five').should('not.have.class','active');
      SelectablePage.gridRow3.contains('Seven').should('not.have.class','active');
      SelectablePage.gridRow3.contains('Nine').should('not.have.class','active');

    });
  });
});
