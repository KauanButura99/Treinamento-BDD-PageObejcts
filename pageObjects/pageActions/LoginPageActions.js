const loginElementsLocators = require('../pageElements/LoginPageElements.json')

export class loginPageElements {

  username(username) {
    cy.get(loginElementsLocators.loginPageLocators.username_text).type(username)
    return
  }

  password(password) {
    cy.get(loginElementsLocators.loginPageLocators.password_text).type(password)
    return
  }

  loginButton() {
    cy.get(loginElementsLocators.loginPageLocators.login_Button).click()
    return
  }
}

