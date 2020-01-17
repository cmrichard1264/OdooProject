package com.odoo.pages;

import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class ContactsPage extends BasePage {

    @FindBy(xpath = "//button[@accesskey=\"c\"][@type=\"button\"]")
    public WebElement create;

    @FindBy(xpath = "//button[@accesskey=\"s\"][@type=\"button\"]")
    public WebElement save;

    @FindBy(xpath = "//input[@placeholder=\"Name\"]")
    public WebElement name;

    @FindBy(xpath = "//input[@name=\"street\"]")
    public WebElement street;

    @FindBy(xpath = "//input[@name=\"city\"]")
    public WebElement city;

    @FindBy(xpath = "//input[@name=\"zip\"]")
    public WebElement zip;

    @FindBy(xpath = "//input[@name=\"function\"]")
    public WebElement jobPosition;

    @FindBy(xpath = "//input[@name=\"phone\"]")
    public WebElement phone;

    @FindBy(xpath = "//input[@name=\"email\"]")
    public WebElement email;

    @FindBy(xpath = "//input[@name=\"website\"]")
    public WebElement website;

    @FindBy(xpath = "//button[@data-original-title=\"List\"]")
    public WebElement List;

    @FindBy(xpath = "//tr[1]/td/div/input")
    public WebElement topCheckbox;

    @FindBy(xpath = "//input[@class=\"o_searchview_input\"][@placeholder=\"Search...\"]")
    public WebElement Search;

    @FindBy(xpath = "//p[contains(text(), \"Click to add a contact in your contacts directory.\")]")
    public WebElement Message;

    @FindBy(xpath = "//tr/th/div/input")
    public WebElement selectAllCheckBox;

    @FindBy(xpath = "//button[contains(text(), \"Action\")]")
    public WebElement actionButton;

    @FindBy(xpath = "//a[contains(text(), \"Delete\")]")
    public WebElement actionDelete;

    @FindBy(xpath = "//button[@class=\"btn btn-sm btn-primary\"]")
    public WebElement deleteOK;

    @FindBy(xpath = "//span[contains(text(), \"Contacts\")]")
    public WebElement ContactsModule;



    public void createContact(String contact) {
        waitUntilLoaderMaskDisappear();
        create.click();
        waitUntilLoaderMaskDisappear();
        name.sendKeys(contact);
        street.sendKeys("123 Love Street");
        city.sendKeys("Louisville");
        zip.sendKeys("10001");
        jobPosition.sendKeys("SDET");
        phone.sendKeys("9412666825");
        email.sendKeys("elton@gmail.com");
        website.sendKeys("elton_john.com");
        save.click();
        waitUntilLoaderMaskDisappear();
    }

    public void navigateToContacts() {
        waitUntilLoaderMaskDisappearBasePage();
        ContactsModule.click();
    }

    public void CheckBoxisClicked() {
        waitUntilLoaderMaskDisappear();
        List.click();
        waitUntilLoaderMaskDisappear();
        topCheckbox.click();
        Assert.assertTrue(topCheckbox.isSelected());
    }

    public void MessageIsDisplayed() {
        waitUntilLoaderMaskDisappear();
        Search.sendKeys("Aijamal", Keys.ENTER);
        waitUntilLoaderMaskDisappear();
        Assert.assertTrue(Message.isDisplayed());
    }

    public void deleteContact(String contact){
        waitUntilLoaderMaskDisappear();
        Search.sendKeys(contact, Keys.ENTER);
        waitUntilLoaderMaskDisappear();
        List.click();
        waitUntilLoaderMaskDisappear();
        selectAllCheckBox.click();
        waitUntilLoaderMaskDisappear();
        actionButton.click();
        waitUntilLoaderMaskDisappear();
        actionDelete.click();
        BrowserUtils.wait(1);
        deleteOK.click();
        waitUntilLoaderMaskDisappear();
    }


}