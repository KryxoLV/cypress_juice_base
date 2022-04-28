import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }


  static get email(){
    return cy.get('input#emailControl');
  }

  static get password(){
    return cy.get('input#passwordControl');
  }

  static get repeatPassword(){
    return cy.get('input#repeatPasswordControl');
  }

  static get securityQuestion(){
      return cy.get('div[class="mat-form-field-infix ng-tns-c118-16"');
  }

  static get listBox(){
      return cy.get('div[role="listbox"]')
  }

  static get answer(){
      return cy.get('#securityAnswerControl');
  }

  static get registerButton(){
      return cy.get('#registerButton');
  }
  
  
}

export default RegisterPage;
