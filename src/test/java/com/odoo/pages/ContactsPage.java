package com.odoo.pages;

import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class ContactsPage extends BasePage {

    @FindBy(xpath = "//button[@accesskey=\"c\"][@type=\"button\"]")
    public WebElement create;

    @FindBy(xpath = "//button[@accesskey=\"s\"][@type=\"button\"]")
    public WebElement save;

    @FindBy(xpath = "//input[@placeholder=\"Name\"]")
    public WebElement name;

    @FindBy(xpath = "//input[@name=\"street\"]" )
    public WebElement street;

    @FindBy(xpath = "//input[@name=\"city\"]")
    public WebElement city;

    @FindBy(xpath = "//input[@name=\"zip\"]" )
    public WebElement zip;

    @FindBy(xpath = "//input[@name=\"function\"]" )
    public WebElement jobPosition;

    @FindBy(xpath = "//input[@name=\"phone\"]" )
    public WebElement phone;

    @FindBy(xpath = "//input[@name=\"email\"]" )
    public WebElement email;

    @FindBy(xpath = "//input[@name=\"website\"]" )
    public WebElement website;



    public void createContact(){
        BrowserUtils.wait(1);
        create.click();
        BrowserUtils.wait(2);
        name.sendKeys("Elton John");
        street.sendKeys("123 Love Street");
        city.sendKeys("Louisville");
        zip.sendKeys("10001");
        jobPosition.sendKeys("SDET");
        phone.sendKeys("9412666825");
        email.sendKeys("elton@gmail.com");
        website.sendKeys("elton_john.com");
        save.click();
        BrowserUtils.wait(3);
    }

    public void navigateToContacts(){
        BrowserUtils.wait(2);
        Driver.get().findElement(By.xpath("//a[@data-menu=\"68\"]")).click();
        BrowserUtils.wait(1);

    }








}
