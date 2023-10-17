/// <reference types='cypress'/>

import { loginPageElements } from "../../../pageObjects/pageActions/LoginPageActions";
const Login_Elements = new loginPageElements

describe('Page Objects Model Tutorial  ', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });

  it('Login Page', () => {

    Login_Elements.username('admin')
    Login_Elements.password('admin123')
    Login_Elements.loginButton()


  })
});