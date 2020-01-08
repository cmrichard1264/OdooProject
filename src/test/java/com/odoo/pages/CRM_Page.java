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


    public void Wait(){
        wait = new WebDriverWait(Driver.get(),10);
    }

    public void navigateToCrmModule() {
//        wait.until(ExpectedConditions.visibilityOf(crmModule));
//        wait.until(ExpectedConditions.elementToBeClickable(crmModule));
        BrowserUtils.wait(2);
        crmModule.click();
    }

}
