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
        System.out.println("User is on the login page");
        Driver.get().get(ConfigurationReader.getProperty("url"));
    }

    @Given("user logs in as inventory_manager")
    public void user_logs_in_as_inventory_manager() {
        //we read username and password from properties file
        //usually in java we use camel case for naming variables
        String userName = ConfigurationReader.getProperty("contacts1.username");
        String password = ConfigurationReader.getProperty("allcontacts.password");
        loginPage.login(userName, password);
        System.out.println("User logged in as Inventory Manager!");
    }

    @Then("user navigates to Contacts module")
    public void user_navigates_to_module() {
        contactsPage.navigateToContacts();
        System.out.println("User is in Contacts module");
    }

    @Then("user creates a contact {string}")
    public void user_creates_a_contact(String contact) {
        contactsPage.waitUntilLoaderMaskDisappear();
        contactsPage.createContact(contact);
        System.out.println("Contact "+contact+" is created successfully!");
    }

    @Then("search and delete {string} contact")
    public void search_and_delete_contact(String contact) {
        contactsPage.waitUntilLoaderMaskDisappear();
        contactsPage.deleteContact(contact);
        System.out.println("Contact "+contact+" is deleted successfully!");

    }

    @Then("verify that the top checkbox is clicked")
    public void verify_that_the_top_checkbox_is_clicked() {
        contactsPage.waitUntilLoaderMaskDisappear();
        contactsPage.CheckBoxisClicked();
        System.out.println("Box is checked!");
    }

    @Then("verify that message is displayed")
    public void verify_that_message_is_displayed() {
        contactsPage.waitUntilLoaderMaskDisappear();
        contactsPage.MessageIsDisplayed();
        System.out.println("Message is displayed!");
    }


}