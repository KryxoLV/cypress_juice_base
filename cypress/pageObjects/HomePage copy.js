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

  static get notYetACustomer(){
    return cy.get('div#newCustomerLink');
  }
}

export default HomePage;
