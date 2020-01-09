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
        for (WebElement each : allCheckBoxes) {
            if (each.isSelected()) {
                count++;
                System.out.println(count + "nth checkbox is checked!");
            }
        }
    }
    //##################################################################################################################


    //Cihan Kaya steps and methods

    @Then("user goes to {string} under {string} module")
    public void user_goes_to_under_module(String submodule, String module) {
        crm_page.leadsTab.click();
        System.out.println("User clicked the "+ module+" module!");
        BrowserUtils.wait(1);
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
        BrowserUtils.wait(1);
        String actualText = crm_page.newTagName.getText();
        Assert.assertEquals(actualText, expectedText);
        System.out.println(actualText+ " is equals to "+expectedText+"!");
    }

    @Then("user deletes the tag {string}")
    public void user_deletes_the_tag(String tag) {
     crm_page.deleteTag();
        System.out.println(tag+" is deleted!!!");
    }


}






