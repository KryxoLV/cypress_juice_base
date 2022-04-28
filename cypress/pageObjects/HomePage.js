import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }


  static get account(){
    return cy.get('span');
  }

  static get login(){
    return cy.get('div[class="mat-menu-content ng-tns-c255-2"');
  }

  static get search(){
    return cy.get('mat-icon[role="img"]');
  }

  static get searchInput(){
    return cy.get('input#mat-input-0');
  }

  static get productCardName(){
    return cy.get('.item-name');
  }
  static get productCardDialogBox(){
    return cy.get('app-product-details');
  }
  static get closeButton(){
    return cy.get('button[aria-label="Close Dialog"]');
  }

  static get rewievOpenButton(){
    return cy.get('mat-expansion-panel[aria-label="Expand for Reviews"]');
  }

  static get allRewievs(){
    return cy.get('.comment');
  }

  static get textAreaInput(){
    return cy.get('textarea[aria-label="Text field to review a product"]');
  }
  static get submitbutton(){
    return cy.get('#submitButton');
  }
}

export default HomePage;
