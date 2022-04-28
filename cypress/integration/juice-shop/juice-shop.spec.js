import { homedir } from "os";
import CreateAddresses from "../../pageObjects/CreateAddresses";
import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegisterPage from "../../pageObjects/RegisterPage";
import SavedAdresses from "../../pageObjects/SavedAddresses";
import SavedPayments from "../../pageObjects/SavedPayments";
import WalletPage from "../../pageObjects/WalletPage";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
  let email = "testmail"+Math.floor(Math.random() * 1000)+"@gmail.com";
   HomePage.account.contains('Account').click();
   HomePage.login.contains('Login').click();
   LoginPage.notYetACustomer.contains('Not yet a customer?').click();
   RegisterPage.email.type(email);
   RegisterPage.password.type('testPassword');
   RegisterPage.repeatPassword.type('testPassword');
   RegisterPage.securityQuestion.click();
   RegisterPage.listBox.contains("Mother's maiden name?").click();
   RegisterPage.answer.type('Test');
   RegisterPage.registerButton.click();
   LoginPage.toastMessage.should('contain', 'Registration completed successfully. You can now log in.');
  });

  it("Login", () => {
     HomePage.account.contains('Account').click();
     HomePage.login.contains('Login').click();
     LoginPage.email.type('demo');
     LoginPage.password.type('demo');
     LoginPage.login.click();
     HomePage.account.contains('Account').click();
      LoginPage.loginValidation.should('contain', 'demo');

    });
});

describe("Juice-shop", () => {
  beforeEach(() => {
    cy.login('demo','demo');
    HomePage.visit();
    });
    it("Lemon ar validaaciju",() =>{
    HomePage.search.contains("search").click();
    HomePage.searchInput.type('lemon{enter}');
    HomePage.productCardName.contains("Lemon").click();
    HomePage.productCardDialogBox.should('contain', 'Sour but full of vitamins.');
    });

    it("500ml tikai lemon ar validaaciju",() =>{
      HomePage.search.contains("search").click();
      HomePage.searchInput.type('500ml{enter}');
      HomePage.productCardName.contains("Lemon").click();
      HomePage.productCardDialogBox.should('contain', 'Sour but full of vitamins.');
      });
    it("500ml visi triis gadiijumi ar validaaciju",() =>{
      HomePage.search.contains("search").click();
      HomePage.searchInput.type('500ml{enter}');
      HomePage.productCardName.contains("Lemon").click();
      HomePage.productCardDialogBox.should('contain', 'Sour but full of vitamins.');
      HomePage.closeButton.click();
      HomePage.productCardName.contains("Eggfruit").click();
      HomePage.productCardDialogBox.should('contain', 'Now with even more exotic flavour.');
      HomePage.closeButton.click();
      HomePage.productCardName.contains("Strawberry").click();
      HomePage.productCardDialogBox.should('contain', 'Sweet & tasty!');
      });

      it("Rewiev ar",() =>{
        HomePage.search.contains("search").click();
        HomePage.searchInput.type('King{enter}');
        HomePage.productCardName.contains("King").click();
        HomePage.rewievOpenButton.wait(500).click();
        HomePage.allRewievs.should('contain', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
        });

      it("Rewiev ar pievienošanu",() =>{
        HomePage.search.contains("search").click();
        HomePage.searchInput.type('Raspberry{enter}');
        HomePage.productCardName.contains("Raspberry").click();
        HomePage.rewievOpenButton.wait(500).click();
        let comments = "baigi laba sula" + Math.floor(Math.random() * 100);
        HomePage.textAreaInput.type(comments);
        HomePage.submitbutton.click();
        HomePage.allRewievs.should('contain',comments);
          });

      it("Add an adress",() =>{
        SavedAdresses.visit();
        let city = 'Talsi';
        let state = 'Talsu';
        SavedAdresses.AddressButton.click();
        CreateAddresses.CountryInput.type('Latvia');
        CreateAddresses.NameInput.type('Kristers Rutkis');
        CreateAddresses.MobileNumberInput.type('22192104');
        CreateAddresses.ZipCodeInput.type('LV-3201');
        CreateAddresses.AddressInput.type('Dundagas iela 10-58');
        CreateAddresses.CityInput.type(city);
        CreateAddresses.StateInput.type(state);
        CreateAddresses.SubmitAddress.click().wait(500);
        SavedAdresses.AllAddressesRows.should('contain','Dundagas iela 10-58, Talsi, Talsu, LV-3201')
        SavedAdresses.toastMessage.should('contain',city);

      });

      it("Add an payment method",() =>{
        SavedPayments.visit();
        SavedPayments.addANewDropDown.contains('Add new card').click();
        SavedPayments.nameInput.type('Kristers Rutkis');
        SavedPayments.CardNumberInput.type('1234567812345678');
        SavedPayments.ExpiryMonthButton.select(11);
        SavedPayments.ExpiryYearButton.select(11);
        SavedPayments.submitButton.click();
        SavedPayments.allRows.contains('Kristers Rutkis').parent().should('contain', '************5678');
        SavedPayments.toastMessage.should('contain', 'Your card ending with 5678 has been saved for your convenience.');
      });

      it.only("add money to wallet",() =>{
        HomePage.visit();
        const addedValue=1000;
        HomePage.account.contains('Account').click();
        WalletPage.PaymentsButton.click();
        WalletPage.WalletButton.click();
        ///saglabaa starta balanci
        WalletPage.newBallance.should('be.visible').then(el => {
          cy.wrap(el.text()).as("StartingValue");
        });
        WalletPage.AmountInput.type(addedValue);
        WalletPage.continiueButton.click();
        WalletPage.matRadioButton.click();
        WalletPage.moreContiniueButton.click();
        ///salidizina
        WalletPage.newBallance.should('be.visible').then((el) => {
          cy.get('@StartingValue').then((StartingValue)=>{
            expect(parseFloat(el.text())).to.eq(parseFloat(StartingValue)+addedValue);
          });
        });





        WalletPage.toastMessage.should('contain', 'Wallet successfully charged.')
      });

});
