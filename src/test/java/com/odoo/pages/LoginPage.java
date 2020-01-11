package com.odoo.pages;

import com.odoo.utilities.ConfigurationReader;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    @FindBy(css = "[type=\"submit\"]")
    public WebElement loginButton;

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
        String password = "";


        switch (role) {
            case ("contancts_user1"):
                userName = ConfigurationReader.getProperty("contacts1.username");
                password = ConfigurationReader.getProperty("allcontacts.password");
                break;
            case "contancts_user2":
                userName = ConfigurationReader.getProperty("contacts2.username");
                password = ConfigurationReader.getProperty("allcontacts.password");
                break;
             case "contancts_user3":
                 userName = ConfigurationReader.getProperty("contacts3.username");
                 password = ConfigurationReader.getProperty("allcontacts.password");
                 break;
             case "contancts_user4":
                userName = ConfigurationReader.getProperty("contacts4.username");
                 password = ConfigurationReader.getProperty("allcontacts.password");
                 break;
             case "contancts_user5":
                userName = ConfigurationReader.getProperty("contacts5.username");
                 password = ConfigurationReader.getProperty("allcontacts.password");
                 break;
            case "pos1":
                userName = ConfigurationReader.getProperty("pos1.username");
                password = ConfigurationReader.getProperty("all.pos.password");
                break;
            case "pos2":
                userName = ConfigurationReader.getProperty("pos2.username");
                password = ConfigurationReader.getProperty("all.pos.password");
                break;
            case "pos3":
                userName = ConfigurationReader.getProperty("pos3.username");
                password = ConfigurationReader.getProperty("all.pos.password");
                break;
            case "pos4":
                userName = ConfigurationReader.getProperty("pos4.username");
                password = ConfigurationReader.getProperty("all.pos.password");
                break;
            case "pos5":
                userName = ConfigurationReader.getProperty("pos5.username");
                password = ConfigurationReader.getProperty("all.pos.password");
                break;
            case "eventscrmmanager1":
                userName = ConfigurationReader.getProperty("eventscrmmanager1");
                password = ConfigurationReader.getProperty("all.crm.password");
                break;
            case "eventscrmmanager2":
                userName = ConfigurationReader.getProperty("eventscrmmanager2");
                password = ConfigurationReader.getProperty("all.crm.password");
                break;
            default:
                throw new RuntimeException("Invalid role!");
        }
        login(userName, password);
    }

}
