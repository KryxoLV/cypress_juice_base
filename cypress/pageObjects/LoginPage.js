import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {
    static get url() {
      return "/#/login";
    }
    static get notYetACustomer(){
      return cy.get('div#newCustomerLink');
    }

    static get confirmation(){
        return cy.get('span[class="mat-simple-snack-bar-content"');
    }

    static get email(){
        return cy.get('#email');
    }

    static get password(){
        return cy.get('#password');
    }

    static get login(){
        return cy.get('#loginButton');
    }

    static get loginValidation(){
        return cy.get('button[aria-label="Go to user profile"]');
    }
  }
  
  export default LoginPage;