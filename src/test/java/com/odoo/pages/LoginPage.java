package com.odoo.pages;

import com.odoo.utilities.ConfigurationReader;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    @FindBy(linkText = "Sign in")
    public WebElement sign_In_Element;

    @FindBy(id = "login")
    public WebElement userNameInput;

    @FindBy(id = "password")
    public WebElement passwordInput;

    public void login(String userName, String password) {
        userNameInput.sendKeys(userName);
        //Keys.ENTER to replace login click
        passwordInput.sendKeys(password, Keys.ENTER);
    }

    public void login() {
        login(ConfigurationReader.getProperty("username"), ConfigurationReader.getProperty("password"));
    }

    public void login(String role) {
        String userName = "";
        String password = ConfigurationReader.getProperty("password");

        switch (role) {
            case "contancts_user1":
                userName = ConfigurationReader.getProperty("contacts1.username");
                break;
            case "contancts_user2":
                userName = ConfigurationReader.getProperty("contacts2.username");
                break;
             case "contancts_user3":
                 userName = ConfigurationReader.getProperty("contacts3.username");
                break;
             case "contancts_user4":
                userName = ConfigurationReader.getProperty("contacts4.username");
                break;
             case "contancts_user5":
                userName = ConfigurationReader.getProperty("contacts5.username");
                break;
            case "pos_user1":
                userName = ConfigurationReader.getProperty("pos1.username");
                break;
            case "pos_user2":
                userName = ConfigurationReader.getProperty("pos2.username");
                break;
            case "pos_user3":
                userName = ConfigurationReader.getProperty("pos3.username");
                break;
            case "pos_user4":
                userName = ConfigurationReader.getProperty("pos4.username");
                break;
            case "pos_user5":
                userName = ConfigurationReader.getProperty("pos5.username");
                break;
            case "crm_user1":
                userName = ConfigurationReader.getProperty("crm1.username");
                break;
            case "crm_user2":
                userName = ConfigurationReader.getProperty("crm2.username");
                break;
            default:
                throw new RuntimeException("Invalid role!");
        }
        login(userName, password);
    }

}
