$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/crm_module/module.feature");
formatter.feature({
  "name": "Lead Tags",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Creating new tag",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestingNewTag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"eventscrmmanager2\"",
  "keyword": "When "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"CRM\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Leads And Opportunities tab",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.i_click_the_Leads_And_Opportunities_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the lead tags tab",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.i_click_the_lead_tags_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the create button",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.i_click_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"new cars\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.i_type(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[1]/div[2]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/input\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027betuls-MBP.frontierlocal.net\u0027, ip: \u0027fe80:0:0:0:8ac:a415:f09a:bf5a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.2\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/w4/p675dc_503l...}, goog:chromeOptions: {debuggerAddress: localhost:58650}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cb905125d776c2d8b39a25ef7d7ad47a\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[1]/div[2]/div[2]/div/div/div/table/tbody/tr[1]/td[2]/input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\n\tat com.odoo.step_definitions.CRM_StepDefinitions.i_type(CRM_StepDefinitions.java:166)\n\tat ✽.I type \"new cars\"(file:src/test/resources/features/crm_module/module.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click save button",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.i_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the text should read \"new cars\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.the_text_should_read(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});