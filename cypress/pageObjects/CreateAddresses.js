import BasePage from "../pageObjects/basePage";

class CreateAddresses extends BasePage {
  static get url() {
    return "/#/address/create";
  }
  static get CountryInput(){
    return cy.get('input[data-placeholder="Please provide a country."]');
}

static get NameInput(){
  return cy.get('input[data-placeholder="Please provide a name."]');
}

static get MobileNumberInput(){
  return cy.get('input[data-placeholder="Please provide a mobile number."]');
}

static get ZipCodeInput(){
  return cy.get('input[data-placeholder="Please provide a ZIP code."]');
}

static get AddressInput(){
  return cy.get('#address');
}

static get CityInput(){
  return cy.get('input[data-placeholder="Please provide a city."]');
}
static get StateInput(){
  return cy.get('input[data-placeholder="Please provide a state."]');
}

static get SubmitAddress(){
  return cy.get('#submitButton');
}
}
export default CreateAddresses;
