package com.odoo.pages;

import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

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




    public void Wait(){
        wait = new WebDriverWait(Driver.get(),10);
    }

    public void navigateToCrmModule() {
//        wait.until(ExpectedConditions.visibilityOf(crmModule));
//        wait.until(ExpectedConditions.elementToBeClickable(crmModule));
        BrowserUtils.wait(2);
        crmModule.click();
    }

    public void createNewTag(String newTag){
        BrowserUtils.wait(2);
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

}
