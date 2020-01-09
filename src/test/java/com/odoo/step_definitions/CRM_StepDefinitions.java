package com.odoo.step_definitions;

import com.odoo.pages.CRM_Page;
import com.odoo.pages.LoginPage;
import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class CRM_StepDefinitions {

    LoginPage loginPage = new LoginPage();
    CRM_Page crm_page = new CRM_Page();

    public WebDriverWait wait;
    public WebDriver driver;

    //##################################################################################################################

//      Feature: Quotations Module Functionality
//      Scenario: Verify that that all checkboxes are clicked when user clicks at 'select all checkbox'.
//      By Noah Adams
//      01.07.2020

    @When("user logs in as {string}")
    public void user_logs_in_as(String string) {
       loginPage.login(string);
        BrowserUtils.wait(2);
    }

    @And("user navigates to {string}")
    public void user_navigates_to(String string) {
        crm_page.navigateToCrmModule();
        crm_page.quotationsSubModule.click();
    }

    @Then("user select the {string}")
    public void user_select_the(String string) {
        BrowserUtils.wait(5);
        WebElement q = crm_page.quotationSelectAllCheckBox;
//        wait.until(ExpectedConditions.visibilityOf(q));
//        wait.until(ExpectedConditions.elementToBeClickable(q));
        q.click();
        BrowserUtils.wait(3);
        Assert.assertTrue(q.isSelected());
    }

    @Then("all checkboxes are clicked")
    public void all_checkboxes_are_clicked() {
        int count = 0;
        List<WebElement> allCheckBoxes = crm_page.quotationsAllCheckBoxes;
       // BrowserUtils.wait(3);
        for(WebElement each: allCheckBoxes){
            if(each.isSelected()){
                count++;
                System.out.println(count+"nth checkbox is checked!");
            }
        }
    }
    //##################################################################################################################

    // Feature: Pipeline Module Functionality
    //  Scenario Outline: Verify that create an opportunity when click the create button.
    //  Created by: Ibrahim Yazar 01/08/2020
    @Then("user click to Create button")
    public void user_click_to_Create_button() {
    crm_page.clickCreateButtonPipelinePage();
    }

    @Then("verify that {string} module-title display")
    public void verify_that_module_title_display(String string) {
    String actualResult = crm_page.createAnOpportunity_modal_Title();
        System.out.println("Modul-Title is: " + actualResult);
    Assert.assertEquals(string, actualResult);

    }

    @Then("user enter Opportunity Title in the {string} Title box")
    public void user_enter_Opportunity_Title_in_the_Title_box(String string) {
    crm_page.opportunityBox(string);
    }

    @When("user enter customer name in the {string} box")
    public void user_enter_customer_name_in_the_box(String string) {
    crm_page.EnterCustomerName(string);
    }

    @Then("verify that {string} second module-title display")
    public void verifyThatSecondModuleTitleDisplay(String string) {
        String moduleTitle = crm_page.CreateCustomerModuleTitle();
        System.out.println("Module title is: " + moduleTitle);
        Assert.assertEquals(string, moduleTitle);
    }

    @Then("user click Create button on the Create a Customer module")
    public void user_click_Create_button_on_the_Create_a_Customer_module() {
    crm_page.createButtonOnCreateCustomerPage();
    }

    @Then("user clear the expected revenue box")
    public void user_clear_the_expected_revenue_box() {
    crm_page.clearRevenueBox();
    }

    @Then("user enter amount in {string} box")
    public void user_enter_amount_in_box(String string) {
    crm_page.enterAmountInRevenueBox(string);
    }

    @Then("user pick the priority")
    public void user_pick_the_priority() {
    crm_page.selectPriority();
    }

    @Then("user click the {string} button.")
    public void user_click_the_button(String string) {
    crm_page.clickCreateButton();

    }

    @Then("verify that {string} displayed")
    public void verify_that_displayed(String string) {
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Driver.get().navigate().refresh();
        System.out.println("verify: " + crm_page.verifyNewOpportunity());
    Assert.assertEquals(string,crm_page.verifyNewOpportunity());
    }



}
