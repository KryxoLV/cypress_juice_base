import BasePage from "../pageObjects/basePage";

class WalletPage extends BasePage {
  static get url() {
    return "/#/wallet";
  }
  static get PaymentsButton(){
      return cy.get('button[aria-label="Show Orders and Payment Menu"]');
  }

  static get WalletButton(){
    return cy.get('button[aria-label="Go to wallet page"]');
}

static get AmountInput(){
    return cy.get('input[aria-label="Enter an amount"]');
}

static get continiueButton(){
    return cy.get('button[aria-label="Button to continue to payment"]');
}

static get matRadioButton(){
    return cy.get('mat-radio-button#mat-radio-40');
}

static get moreContiniueButton(){
    return cy.get('button[aria-label="Proceed to review"]');
}
static get newBallance(){
    return cy.get('span[class="confirmation"]')
}


}
export default WalletPage;
