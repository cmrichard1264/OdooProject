$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/crm_module/Pipeline.feature");
formatter.feature({
  "name": "Pipeline Module Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Deleting the created an opportunity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deletingOpportunity"
    }
  ]
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in as \"eventscrmmanager2\"",
  "keyword": "When "
});
formatter.step({
  "name": "user navigates to \"CRM\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click to Create button",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter Opportunity Title in the \"\u003cOpportunity\u003e\" Title box",
  "keyword": "And "
});
formatter.step({
  "name": "user enter customer name in the \"\u003cCustomer\u003e\" box",
  "keyword": "When "
});
formatter.step({
  "name": "user click Create button on the Create a Customer module",
  "keyword": "And "
});
formatter.step({
  "name": "user clear the expected revenue box",
  "keyword": "And "
});
formatter.step({
  "name": "user enter amount in \"\u003cExpected Revenue\u003e\" box",
  "keyword": "And "
});
formatter.step({
  "name": "user pick the priority",
  "keyword": "And "
});
formatter.step({
  "name": "user click the Create button.",
  "keyword": "Then "
});
formatter.step({
  "name": "user click the vertical ellipsis",
  "keyword": "And "
});
formatter.step({
  "name": "user click the Delete button",
  "keyword": "Then "
});
formatter.step({
  "name": "verify that \"Are you sure you want to delete this record ?\" sentence displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "click the OK button",
  "keyword": "Then "
});
formatter.step({
  "name": "verify that \"\u003cOpportunity\u003e\" is not displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Opportunity",
        "Customer",
        "Expected Revenue"
      ]
    },
    {
      "cells": [
        "Opportunity #4",
        "Ibr",
        "2500"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deleting the created an opportunity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deletingOpportunity"
    }
  ]
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in as \"eventscrmmanager2\"",
  "keyword": "When "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"CRM\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to Create button",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_to_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter Opportunity Title in the \"Opportunity #4\" Title box",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_enter_Opportunity_Title_in_the_Title_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter customer name in the \"Ibr\" box",
  "keyword": "When "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_enter_customer_name_in_the_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Create button on the Create a Customer module",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_Create_button_on_the_Create_a_Customer_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clear the expected revenue box",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clear_the_expected_revenue_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter amount in \"2500\" box",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_enter_amount_in_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user pick the priority",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_pick_the_priority()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the Create button.",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_the_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the vertical ellipsis",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click the Delete button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify that \"Are you sure you want to delete this record ?\" sentence displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click the OK button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify that \"Opportunity #4\" is not displayed",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});