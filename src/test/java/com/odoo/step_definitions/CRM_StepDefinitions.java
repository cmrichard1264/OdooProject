package com.odoo.step_definitions;

import com.odoo.pages.CRM_Page;
import com.odoo.pages.LoginPage;
import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.ConfigurationReader;
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






    @Given("I am on the login page")
    public void i_am_on_the_login_page() {
        Driver.get().get(ConfigurationReader.getProperty("url"));

    }

    @When("I login regular user")
    public void i_login_regular_user() {
        String userName = ConfigurationReader.getProperty("crm1.username");
        String password = "eventscrmmanager";

        LoginPage loginPage = new LoginPage();
        loginPage.login(userName, password);

    }

    @When("I navigate to CRM module")
    public void i_navigate_to_CRM_module() {

        BrowserUtils.wait(3);

        crm_page.crmTab.click();

    }

    @When("I click the Leads And Opportunities tab")
    public void i_click_the_Leads_And_Opportunities_tab() {
        crm_page.leadsTab.click();

    }

    @When("I click the lead tags tab")
    public void i_click_the_lead_tags_tab() {
        crm_page.leadTagsTab.click();
    }

    @When("I click the create button")
    public void i_click_the_create_button() {
        BrowserUtils.wait(3);
        crm_page.createButton.click();
    }

    @When("I type {string}")
    public void i_type(String string) {
        BrowserUtils.wait(3);
        crm_page.tagNameBox.sendKeys("New Cars");
    }

    @When("I click save button")
    public void i_click_save_button() {
        crm_page.saveButton.click();
    }

    @Then("the text should read {string}")
    public void the_text_should_read(String string) {

        String newTagText = crm_page.newTagName.getText();
        System.out.println("text: " + newTagText );

        BrowserUtils.wait(3);
        Assert.assertEquals(string, newTagText);
    }



}






