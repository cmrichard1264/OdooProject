package com.odoo.step_definitions;

import com.odoo.pages.LoginPage;
import com.odoo.pages.PosPage;
import com.odoo.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class PosStepDefinitions {

    LoginPage loginPage  = new LoginPage();

    PosPage posPage = new PosPage();

    @Given("user logs in as Pos manager")
    public void user_logs_in_as_Pos_manager() {
        System.out.println("Login as Pos manager");
        String username = ConfigurationReader.getProperty("pos1.username");
        String password = ConfigurationReader.getProperty("all.pos.password");
        loginPage.login(username, password);
    }

    @Then("user navigates to Pos Module")
    public void user_navigates_to_Pos_Module() {
        posPage.navigateToPosModule();
        System.out.println("I am in Pos Module");
    }

    @Then("verify that page limit is {int}")
    public void verify_that_page_limit_is(Integer int1) {
        posPage.PageLimit();
        System.out.println("Page limit is "+int1);
    }


}
