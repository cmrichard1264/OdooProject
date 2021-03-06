package com.odoo.step_definitions;

import com.odoo.pages.CRM_Page;
import com.odoo.pages.LoginPage;
import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.ConfigurationReader;
import com.odoo.utilities.Driver;
import com.odoo.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

public class CRM_StepDefinitions {

    LoginPage loginPage = new LoginPage();
    CRM_Page crm_page = new CRM_Page();

    public WebDriverWait wait;
    public WebDriver driver;

    //##################################################################################################################
    //##################################################################################################################

    //      Feature: Quotations Module Functionality
    //      Scenario: Verify that that all checkboxes are clicked when user clicks at 'select all checkbox'.
    //      By Noah Adams
    //      01.07.2020

    @When("user logs in as {string}")
    public void user_logs_in_as(String string) {
        loginPage.login(string);
        System.out.println("User logged in as "+string);

    }

    @And("user navigates to {string}")
    public void user_navigates_to(String string) {
        crm_page.navigateToCrmModule();
    }

    @Then("user navigates to Quotations")
    public void user_navigates_to_Quotations() {
        crm_page.waitUntilLoaderMaskDisappear();
        crm_page.quotationsSubModule.click();
    }

    @Then("user select the {string}")
    public void user_select_the(String string) {
        crm_page.waitUntilLoaderMaskDisappear();
        WebElement q = crm_page.quotationSelectAllCheckBox;
        q.click();
        crm_page.waitUntilLoaderMaskDisappear();
        Assert.assertTrue(q.isSelected());
    }

    @Then("all checkboxes are clicked")
    public void all_checkboxes_are_clicked() {
        int count = 0;
        List<WebElement> allCheckBoxes = crm_page.quotationsAllCheckBoxes;
        for (WebElement each : allCheckBoxes) {
            if (each.isSelected()) {
                count++;
                System.out.println(count + "nth checkbox is checked!");
            }
        }
    }

    //##################################################################################################################
    //##################################################################################################################

    //      Feature: Quotations Module Functionality
    //      Scenario: Verify that "List", "Kanban", "Calendar", "Pivot" and "Graph" buttons are functioning
    //      By Noah Adams
    //      01.09.2020 / Around 10:00 PM


    @Then("user clicks at five {string} in order List, Kanban, Calendar, Pivot and Graph")
    public void user_clicks_at_five_in_order_List_Kanban_Calendar_Pivot_and_Graph(String string) {
        crm_page.quotationsFiveButtons();
    }

    //##################################################################################################################
    //##################################################################################################################

    //      Feature: Quotations Module Functionality
    //      Scenario: Verify that "List", "Kanban", "Calendar", "Pivot" and "Graph" buttons are functioning
    //      By Noah Adams
    //      01.10.2020   /  19:03 - 22:01 PM

    @Then("user checks the first present checkbox")
    public void user_checks_the_first_present_checkbox() {
        crm_page.waitUntilLoaderMaskDisappear();
        crm_page.firstCheckboxQuotations.click();
    }

    @Then("user clicks at Print and Action buttons to see the options")
    public void user_clicks_at_Print_and_Action_buttons_to_see_the_options() {
        crm_page.checkTheFunctionaltyOfPrintAndActionButtons();
    }

    //##################################################################################################################
    //##################################################################################################################

    //      Feature: Quotations Module Functionality
    //      Scenario: Verify that user is able to check one of the quotations, save it as a template and send a recovery email
    //      By Noah Adams
    //      01.11.2020   /  16:13 - 16:33 PM

    @Then("user clicks at {string} option")
    public void user_clicks_at_option(String option) {
        crm_page.recoveryEmailButtonQuotations.click();
        Driver.get().manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
    }

    @Then("user should save it as a new template")
    public void user_should_save_it_as_a_new_template() {
        Assert.assertTrue(crm_page.saveAsNewTemplateButton.isDisplayed());
        crm_page.saveAsNewTemplateButton.click();
        Driver.get().manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
    }

    @Then("user clicks at the send button to send the recovery email")
    public void user_clicks_at_the_send_button_to_send_the_recovery_email() {
       Assert.assertTrue(crm_page.sendButtonQuotations.isDisplayed());
       crm_page.sendButtonQuotations.click();
    }

    //##################################################################################################################
    //##################################################################################################################


    // Feature: Pipeline Module Functionality
    //  Scenario Outline: Verify that create an opportunity when click the create button.
    //  Created by: Ibrahim Yazar 01/08/2020

    @Then("user click to Create button")
    public void user_click_to_Create_button() {
        crm_page.waitUntilLoaderMaskDisappear();
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

    @Then("user click the Create button.")
    public void user_click_the_Create_button() {
        crm_page.clickCreateButton();
    }

    @Then("the text should read {string}")
    public void the_text_should_read(String string) {
        String newTagText = crm_page.newTagName.getText();
        System.out.println("text: " + newTagText);
        BrowserUtils.wait(3);
        Assert.assertEquals(string, newTagText);
    }

    @Then("verify that {string} displayed")
    public void verify_that_displayed(String string) {
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Driver.get().navigate().refresh();
        System.out.println("verify: " + crm_page.verifyNewOpportunity());
        Assert.assertEquals(string, crm_page.verifyNewOpportunity());
    }

    //*****************ibrahim @deletingOpportunity *****************************
    @Then("user deletes {string}")
    public void user_deletes(String string) {
        crm_page.deleteOpportunity(string);
        System.out.println(string+" is successfully deleted!");
    }









    //*****************Cihan*****************************

    @Then("user goes to {string} under {string} module")
    public void user_goes_to_under_module(String submodule, String module) {
        crm_page.waitUntilLoaderMaskDisappear();
        crm_page.leadsTab.click();
        System.out.println("User clicked the "+ module+" module!");
        crm_page.waitUntilLoaderMaskDisappear();
        crm_page.leadTagsTab.click();
        System.out.println("User is on "+submodule+" module!");
    }

    @Then("user creates and saves a new tag {string}")
    public void user_creates_and_saves_a_new_tag(String newTag) {
        crm_page.createNewTag(newTag);
        System.out.println(newTag+" is created!");
    }

    @Then("user verifies that message displayed is equal to {string}")
    public void user_verifies_that_message_displayed_is_equal_to(String expectedText) {
        crm_page.waitUntilLoaderMaskDisappear();
        String actualText = crm_page.newTagName.getText();
        Assert.assertEquals(actualText, expectedText);
        System.out.println(actualText+ " is equals to "+expectedText+"!");
    }

    @Then("user deletes the tag {string}")
    public void user_deletes_the_tag(String tag) {
        crm_page.deleteTag();
        System.out.println(tag+" is deleted!!!");
    }

    //******************Cihan****************************


}






