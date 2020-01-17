package com.odoo.pages;

import com.odoo.utilities.BrowserUtils;
import com.odoo.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
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
      waitUntilLoaderMaskDisappearBasePage();
      PosModule.click();
  }


  public void PageLimit(String expectedResult) {
      waitUntilLoaderMaskDisappear();
      String actualResult = PageLimit.getText();
      waitUntilLoaderMaskDisappear();
      Assert.assertEquals("Not Equal", actualResult, expectedResult);
  }

  public void NavigateToOrders(){
      BrowserUtils.wait(2);
      Orders.click();
      BrowserUtils.wait(2);
  }

  public void typeintoSearchBox(){
      waitUntilLoaderMaskDisappear();
      SearchBox.sendKeys("iphone", Keys.ENTER);
      waitUntilLoaderMaskDisappear();
  }
  public void MessageDisplayed(){
      waitUntilLoaderMaskDisappear();
      SearchBox.sendKeys("iphone", Keys.ENTER);
      waitUntilLoaderMaskDisappear();
      Assert.assertTrue(message.isDisplayed());
  }

  public void ListIsDisplayed(String expectedList){
      BrowserUtils.wait(1);
      Actions act=new Actions(Driver.get());
      WebElement hover=Driver.get().findElement(By.xpath("//*[@data-view-type='list']"));
      act.moveToElement(hover).build().perform();
      String actualList=hover.getAttribute("data-original-title");
      Assert.assertEquals("not equal",actualList,expectedList);
  }







    }



