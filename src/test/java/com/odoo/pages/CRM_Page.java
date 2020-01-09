package com.odoo.pages;

import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class CRM_Page extends BasePage {

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

    @FindBy(xpath = "/html/body/nav/div[2]/ul[1]/li[5]/a/span")

    public WebElement crmTab;

    @FindBy(xpath = "/html/body/div[1]/div[1]/div[1]/div[5]/ul[3]/li[3]/a/span")

    public WebElement leadsTab;

    @FindBy(xpath = "/html/body/div[1]/div[1]/div[1]/div[5]/ul[3]/li[3]/ul/li[1]/a/span")
    public WebElement leadTagsTab;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[1]/div/button[1]")
    public WebElement createButton;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/input")
    public WebElement tagNameBox;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[2]/div[1]/div/div[2]/button[1]")
    public WebElement saveButton;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/span")
    public WebElement newTagName;


    public void Wait(){
        wait = new WebDriverWait(Driver.get(),10);
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
    }

    //verify that "Create a Customer" module-title display
    public String CreateCustomerModuleTitle(){
        clickEmptySpaceElement.click();
        Driver.get().manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
      return customer_Module_Title_Element.getText();
    }

    //user click Create button on the Create a Customer module
    public void createButtonOnCreateCustomerPage(){
        createButtonOnCreateOpportunityPage.click();
    }
    //user clear the expected revenue box
    public void clearRevenueBox(){
        revenueboxElement.click();
        revenueboxElement.clear();

    }

    //user enter amount in {string} box
    public void enterAmountInRevenueBox(String string){
        revenueboxElement.sendKeys(string);
    }

    //user pick the priority
    public void selectPriority(){
        priorityElement.click();
    }

    //user click the {string} button.
    public void clickCreateButton(){
        lastcreateButton.click();
    }

    // verify that {string} displayed
    public String verifyNewOpportunity(){
        BrowserUtils.wait(3);
       return verifyNewOppotunityElement.getText();
    }
}
