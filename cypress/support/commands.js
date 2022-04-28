Cypress.Commands.add("login", (username, password) => {
    cy.session(
      [username, password],
      () => {
        cy.request({
          method: "POST",
          url: "/rest/user/login",
          body: { email: username, password: password },
        }).then(({ body }) => {
          cy.setCookie("token", body.authentication.token);
          cy.setCookie("cookieconsent_status", "dismiss");
          cy.setCookie("welcomebanner_status", "dismiss");
          cy.setCookie("language", "en");
          window.localStorage.setItem("token", body.authentication.token);
          window.sessionStorage.setItem("bid", body.authentication.bid);
        });
      },
      {
        validate() {
          cy.request("/whoami").its("status").should("eq", 200);
        },
      }
    );
  });