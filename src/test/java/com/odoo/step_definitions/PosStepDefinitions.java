package com.odoo.step_definitions;

import com.odoo.pages.LoginPage;
import com.odoo.pages.PosPage;
import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PosStepDefinitions {

    LoginPage loginPage = new LoginPage();
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

    @Then("verify that page limit is {string}")
    public void verify_that_page_limit_is(String limit) {
        posPage.PageLimit(limit);
        System.out.println("Page limit is "+limit);
    }
    @Given("userlogs in as pos_manager")
    public void userlogs_in_as_pos_manager() {
        System.out.println("Login as Pos manager");

        String username = ConfigurationReader.getProperty("pos1.username");
        String password = ConfigurationReader.getProperty("all.pos.password");
        loginPage.login(username, password);

    }

    @Then("user navigates to POS module")
    public void user_navigates_to_POS_module() {
        posPage.navigateToPosModule();
        System.out.println("I am in Pos Module");

    }


    @And("user types into search box")
    public void user_types_into_search_box(){
        posPage.typeintoSearchBox();
        System.out.println("Typed into search box");
    }


    @Then("verify that configure message displayed")
    public void verify_that_configure_message_displayed() {
        posPage.MessageDisplayed();
    }

    @When("user hovers the mouse on list icon {string} is displayed")
    public void user_hovers_the_mouse_on_list_icon_is_displayed(String string) {
    posPage.ListIsDisplayed(string);
        System.out.println(string+" is displayed!");
    }

}