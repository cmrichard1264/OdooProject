package com.odoo.pages;

import com.odoo.utilities.BrowserUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class PosPage extends BasePage{

    @FindBy(xpath = "//a[@data-menu=\"484\"]")
    public WebElement PosModule;

    @FindBy(xpath = "//span[@class=\"o_pager_limit\"]")
    public WebElement PageLimit;

    @FindBy(xpath="//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[1]/a")
    public WebElement Orders;

    @FindBy(css="input[class='o_searchview_input']")
    public WebElement SearchBox;

    @FindBy(xpath="//p[contains(text(),\"Configure at least one Point of Sale to be able to sell through the PoS interface.\")]")
    public WebElement message;

  public void navigateToPosModule(){
      BrowserUtils.wait(2);
      PosModule.click();
      BrowserUtils.wait(2);
  }


  public void PageLimit() {

      BrowserUtils.wait(2);
      String pagelimit = PageLimit.getText();
      BrowserUtils.wait(1);
      Integer actualresult = Integer.parseInt(pagelimit);
      Integer expectedresult = 32;

      if(actualresult== expectedresult){
          System.out.println("passed");
      }else{
          System.out.println("failed");
      }
  }

  public void NavigateToOrders(){
      BrowserUtils.wait(2);
      Orders.click();
      BrowserUtils.wait(2);
  }
  public void typeintoSearchBox(){
      BrowserUtils.wait(2);
      SearchBox.sendKeys("iphone", Keys.ENTER);
      BrowserUtils.wait(2);
  }
  public void MessageDisplayed(){
      BrowserUtils.wait(2);
      SearchBox.sendKeys("iphone", Keys.ENTER);
      BrowserUtils.wait(2);
      Assert.assertTrue(message.isDisplayed());





  }








}
