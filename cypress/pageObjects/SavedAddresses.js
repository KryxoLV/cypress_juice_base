import BasePage from "../pageObjects/basePage";

class SavedAdresses extends BasePage {
  static get url() {
    return "/#/address/saved";
  }


  static get AddressButton(){
      return cy.get('button[aria-label="Add a new address"]');
  }

static get AllAddressesRows(){
    return cy.get('[role=row]')
}

}
export default SavedAdresses;
