package com.odoo.pages;

import com.odoo.step_definitions.CRM_StepDefinitions;
import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonTypeInfo;
import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.security.PublicKey;
import java.util.*;
import java.util.concurrent.TimeUnit;

public class CRM_Page extends BasePage {

    //Five Buttons##########

    @FindBy(css = "[data-original-title=\"List\"]")
    public WebElement list;

    @FindBy(css = "[data-original-title=\"Kanban\"]")
    public WebElement kanban;

    @FindBy(css = "[data-original-title=\"Calendar\"]")
    public WebElement calendar;

    @FindBy(css = "[data-original-title=\"Pivot\"]")
    public WebElement pivot;

    @FindBy(css = "[data-original-title=\"Graph\"]")
    public WebElement graph;

    //######################

    //Print and Action Buttons(Quotations)

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/table/tbody/tr[1]/td[1]/div/input")
    public WebElement firstCheckboxQuotations;

    @FindBy(xpath = "//button[contains(text(), 'Print' )]")
    public WebElement printButtonQuotations;

    @FindBy(linkText = "Quotation / Order")
    public WebElement quotationOrderOption;

    @FindBy(xpath = "//button[contains(text(), 'Action' )]")
    public WebElement actionButtonQuotations;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div/div[2]/ul/li[1]")
    public WebElement exportButtonQuotations;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div/div[2]/ul/li[2]")
    public WebElement deleteButtonQuotations;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div/div[2]/ul/li[3]")
    public WebElement invoiceOrderButtonQuotations;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div/div[2]/ul/li[4]")
    public WebElement recoveryEmailButtonQuotations;

    @FindBy(xpath = "//span[contains(text(), 'Save as')]")
    public WebElement saveAsNewTemplateButton;

    @FindBy(css = "[class=\"btn btn-sm btn-primary o_mail_send\"]")
    public WebElement sendButtonQuotations;

    //######################

    public WebDriverWait wait;

    @FindBy(linkText = "CRM")
    public WebElement crmModule;

    @FindBy(linkText = "Quotations")
    public WebElement quotationsSubModule;

    @FindBy(xpath = "//table//tr//th[1]//div//input")
    public WebElement quotationSelectAllCheckBox;

    @FindBy(css = "[type=\"checkbox\"]")
    public List<WebElement> quotationsAllCheckBoxes;

    @FindBy (css = "[ class = 'btn btn-primary btn-sm o-kanban-button-new']")
    public WebElement createButtonPipelineElement;

    @FindBy(xpath = "//*[text()='Create an Opportunity']")
    public WebElement createAnOpportunitymodal_TitleElement;

    @FindBy (css = "[placeholder='e.g. Customer Deal']")
    public WebElement opportinityBoxElement;

    @FindBy (xpath = "//input [@class='o_input ui-autocomplete-input'][1]")
    public WebElement costumerNameBoxElemnet;

    @FindBy (css = "[class='o_form_sheet']")
    public WebElement clickEmptySpaceElement;

    @FindBy (xpath = "//*[text() = 'Create a Customer']")
    public WebElement customer_Module_Title_Element;

    @FindBy (xpath = "//button[@ class = 'btn btn-sm btn-primary'][@type = 'button'][span='Create']")   // @FindBy(css = "[name ='close_dialog']")
    public WebElement createButtonOnCreateOpportunityPage;

    @FindBy (css = "[class='o_field_float o_field_number o_field_widget o_input']")
    public WebElement revenueboxElement;

    @FindBy(css = "[class='o_form_sheet']")
    public WebElement priorityElement;

    @FindBy(xpath = "// button [@class='btn btn-sm btn-primary'][span='Create']")
    public WebElement lastcreateButton;

    @FindBy (xpath = "//*[text() ='Opportunity #4']")
    public WebElement verifyNewOppotunityElement;

    //********************CIHAN********************************
    @FindBy(xpath = "//span[contains(text(), \"Leads & Opportunities\")]")
    public WebElement leadsTab;

    @FindBy(xpath = "//span[contains(text(), \"Lead Tags\")]")
    public WebElement leadTagsTab;

    @FindBy(xpath = "//button[@accesskey=\"c\"]")
    public WebElement createButton;

    @FindBy(xpath = "//input[contains(@class, \"required_modifier\")]")
    public WebElement tagNameInput;

    @FindBy(xpath = "//button[@accesskey=\"s\"]")
    public WebElement saveButton;

    @FindBy(xpath = "//span[@name=\"name\"]")
    public WebElement newTagName;

    //*************CHIHAN****************************


    public void Wait(){
        wait = new WebDriverWait(Driver.get(),10);
    }


    public void quotationsFiveButtons() {
        List<WebElement> fiveButtons = new ArrayList<WebElement>(Arrays.asList(list, kanban, calendar, pivot, graph));

        for(WebElement eachButton: fiveButtons){
            eachButton.click();
            Assert.assertTrue("This button is not displayed!",eachButton.isDisplayed());
           //BrowserUtils.wait(1);
        }

    }

    public void checkTheFunctionaltyOfPrintAndActionButtons() {

        BrowserUtils.wait(3);
        printButtonQuotations.click();

        Assert.assertTrue("the button is not displayed!",quotationOrderOption.isDisplayed());
        Assert.assertEquals("the button matches correctly!", "Quotation / Order", quotationOrderOption.getText());

        BrowserUtils.wait(3);

        actionButtonQuotations.click();
        List<WebElement> options = new ArrayList<>(Arrays.asList((exportButtonQuotations),(deleteButtonQuotations),(invoiceOrderButtonQuotations),(recoveryEmailButtonQuotations)));
        List<String> texts = new ArrayList<>(Arrays.asList("Export", "Delete", "Invoice Order", "Send a Cart Recovery Email"));


        BrowserUtils.wait(2);

        for(int i =0; i < 4; i++) {
            WebElement eachOption = options.get(i);
            String actualText = options.get(i).getText();
            String expectedText = texts.get(i);
            Assert.assertTrue("This option is not visible!",eachOption .isDisplayed());
            Assert.assertEquals("This option doesn't match with expected!", expectedText, actualText);
            BrowserUtils.wait(2);
        }

    }




    public void navigateToCrmModule() {
//        wait.until(ExpectedConditions.visibilityOf(crmModule));
//        wait.until(ExpectedConditions.elementToBeClickable(crmModule));
        BrowserUtils.wait(2);
        crmModule.click();
    }

    public void clickCreateButtonPipelinePage(){
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        createButtonPipelineElement.click();
    }

    public String createAnOpportunity_modal_Title(){
       // wait.until(ExpectedConditions.visibilityOf(createAnOpportunitymodal_TitleElement));
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
      return  createAnOpportunitymodal_TitleElement.getText();
    }

    //user enter Opportunity Title in the Opportunity Title box
    public void opportunityBox(String Opportunity){
        opportinityBoxElement.sendKeys(Opportunity);
    }

    //user enter customer name in the {string} box
    public void EnterCustomerName(String Customer){
        Driver.get().manage().timeouts().implicitlyWait(7,TimeUnit.SECONDS);
        costumerNameBoxElemnet.click();
        BrowserUtils.wait(2);
        costumerNameBoxElemnet.sendKeys(Customer);
        BrowserUtils.wait(2);
        clickEmptySpaceElement.click();
    }

    //verify that "Create a Customer" module-title display
    public String CreateCustomerModuleTitle(){
      Driver.get().manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
      return customer_Module_Title_Element.getText();
    }

    //user click Create button on the Create a Customer module
    public void createButtonOnCreateCustomerPage(){
       BrowserUtils.wait(2);
        createButtonOnCreateOpportunityPage.click();
    }
    //user clear the expected revenue box
    public void clearRevenueBox(){
        BrowserUtils.wait(2);
        revenueboxElement.click();
        revenueboxElement.clear();

    }

    //user enter amount in {string} box
    public void enterAmountInRevenueBox(String string){
        BrowserUtils.wait(2);
        revenueboxElement.sendKeys(string);
    }

    //user pick the priority
    public void selectPriority(){
        BrowserUtils.wait(2);
        priorityElement.click();
    }

    //user click the {string} button.
    public void clickCreateButton(){
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        lastcreateButton.click();
    }

    // verify that {string} displayed
    public String verifyNewOpportunity(){
        BrowserUtils.wait(2);
       return verifyNewOppotunityElement.getText();
    }

//***************Cihan************************
    public void createNewTag(String newTag){
        BrowserUtils.wait(3);
        createButton.click();
        BrowserUtils.wait(1);
        tagNameInput.sendKeys(newTag);
        saveButton.click();
    }

    public void deleteTag(){
        Driver.get().findElement(By.xpath("//button[contains(text(), \"Action\")]")).click();
        BrowserUtils.wait(1);
        Driver.get().findElement(By.xpath("//a[contains(text(), \"Delete\")]")).click();
        BrowserUtils.wait(1);
        Driver.get().findElement(By.xpath("//button[@class=\"btn btn-sm btn-primary\"]")).click();
    }
    //*******************Cihan*****************************

    //*******************ibrahim @test2*****************************
    @FindBy (xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[5]/div[1]/a/span")
    public WebElement verticalEllipsisDotsElements;

    @FindBy (xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[5]/div[1]/ul/li[2]/a")
    public WebElement deleteButtonElement;

    @FindBy (css = "[class='modal-body']")
    public WebElement sentenceElement;

    @FindBy (css = "[class='btn btn-sm btn-primary']")
    public WebElement okButtonElement;

    // click the vertical ellipsis
    public void clickVerticalEllipsisDots(){
        BrowserUtils.waitForClickablility(verticalEllipsisDotsElements,3);
        verticalEllipsisDotsElements.click();
    }

    // click the Delete button
    public void clickDeleteButton(){
        BrowserUtils.waitForClickablility(deleteButtonElement,3);
        deleteButtonElement.click();
    }

    //Are you sure you want to delete this record ? sentence dispaled
    public String warningSentence(){
       String sentence = sentenceElement.getText();
        return sentence;
    }

    //click the OK button
    public void clickOkButton(){
        okButtonElement.click();
    }

     //verify that opportunity is not displayed
    public void deleteOpportunity() {
//        BrowserUtils.wait(2);

        BrowserUtils.wait(2);
        if(Driver.get().findElements(By.xpath("//*[text() ='Opportunity #4']")).size() != 0) {
            System.out.println("Element is present please check you code!!!");
        } else{
            System.out.println("Good Work");
        }
//
    }
}
