package com.odoo.pages;

public class CRM_Page {
import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Wait;

import java.util.concurrent.TimeUnit;

public class CRM_Page extends BasePage {

    @FindBy(css = "[data-menu='261']")
    public WebElement crmModuleElement;

    @FindBy (xpath = "//*[contains(text(), 'Pipeline - Odoo')]")
    public WebElement crmPageTitleElement;

    @FindBy(css = "[type=\"submit\"]")
    public WebElement login_Button_Element;

    public void crmModuleClick(){
        BrowserUtils.waitForClickablility(crmModuleElement, 10);
        crmModuleElement.click();
    }


//    public String crmPageTitle(){
//        return string;
//    }

    public String getPageTitle() {

//        BrowserUtils.wait(3);
//      String title = Driver.get().getTitle();
//      return title;
       // BrowserUtils.wait(3);
       // BrowserUtils.waitForStaleElement(crmPageTitleElement);
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        String title = crmPageTitleElement.getText();
        return title;
    }

}
