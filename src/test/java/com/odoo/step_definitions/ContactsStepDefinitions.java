package com.odoo.step_definitions;


import com.odoo.pages.ContactsPage;
import com.odoo.pages.LoginPage;
import com.odoo.utilities.ConfigurationReader;
import com.odoo.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;


public class ContactsStepDefinitions {

    LoginPage loginPage = new LoginPage();//created a login page object
    ContactsPage contactsPage = new ContactsPage();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println("I am on the login page");
        Driver.get().get(ConfigurationReader.getProperty("url"));
    }

    @Given("user logs in as inventory_manager")
    public void user_logs_in_as_inventory_manager() {
        System.out.println("Login as inventory manager");
        //we read username and password from properties file
        //usually in java we use camel case for naming variables
        String userName = ConfigurationReader.getProperty("contacts1.username");
        String password = ConfigurationReader.getProperty("allcontacts.password");
        loginPage.login(userName, password);
    }

    @Then("user navigates to Contacts module")
    public void user_navigates_to_module() {
        contactsPage.navigateToContacts();
        System.out.println("I am in Contacts module");
    }

    @Then("user creates a contact")
    public void user_creates_a_contact() {
        contactsPage.createContact();
        System.out.println("Contact created successfully!");
    }


    @Then("verify that the top checkbox is clicked")
    public void verify_that_the_top_checkbox_is_clicked() {
        contactsPage.CheckBoxisClicked();
        System.out.println("Box is checked");
    }


}