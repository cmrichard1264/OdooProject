package com.odoo.step_definitions;

import com.odoo.pages.CRM_Page;
import com.odoo.pages.LoginPage;
import com.odoo.utilities.ConfigurationReader;
import com.odoo.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class CRM_Page_Step_Definitions {

    LoginPage loginPage = new LoginPage();
    CRM_Page crm_page = new CRM_Page();

    @Given("User is on login page")
    public void user_is_on_login_page() {
        Driver.get().get(ConfigurationReader.getProperty("url"));
    }

    @Then("User enters valid username and password")
    public void user_enters_valid_username_and_password() {
        loginPage.sign_In_Element.click();
        String userName = ConfigurationReader.getProperty("crm1.username");
        String password = ConfigurationReader.getProperty("all.crm.pass" +
                "word");
        loginPage.login(userName, password);
    }

//    @When("User click at Log in button")
//    public void user_click_at_Log_in_button() {
//        crm_page.login_Button_Element.click();
//
//    }

//    @Then("User should click at the CRM module")
//    public void user_should_click_at_the_module() {
//    crm_page.crmModuleClick();
//    }
//
//    @Then("Verify that the page title is {string}")
//    public void verify_that_the_page_title_is(String string) {
//
//       // crm_page.getPageTitle();
//        String actual_result = crm_page.getPageTitle();
//        Assert.assertEquals(string, actual_result);
//
//    }

}
