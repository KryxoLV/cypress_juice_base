import BasePage from "../pageObjects/basePage";

class SavedPayments extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addANewDropDown(){
      return cy.get('mat-expansion-panel');
  }
  static get nameInput(){
    return cy.get("mat-label").contains("Name").parents(".mat-form-field-infix").find("input");
  }
  static get CardNumberInput(){
      return cy.get("mat-label").contains("Card Number").parents(".mat-form-field-infix").find("input");
  }
  static get ExpiryMonthButton(){
    return cy.get("mat-label").contains("Expiry Month").parents(".mat-form-field-infix").find("select");
}
static get ExpiryYearButton(){
    return cy.get("mat-label").contains("Expiry Year").parents(".mat-form-field-infix").find("select");
}
static get submitButton(){
    return cy.get('#submitButton');
}

static get allRows(){
    return cy.get("mat-row");
}

}
export default SavedPayments;
