$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Pos_module/Pos.feature");
formatter.feature({
  "name": "Pos page testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Pos_page"
    }
  ]
});
formatter.scenario({
  "name": "verify that page limit is 16",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Pos_page"
    },
    {
      "name": "@page_limit_is_16"
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
  "name": "user logs in as Pos manager",
  "keyword": "And "
});
formatter.match({
  "location": "PosStepDefinitions.user_logs_in_as_Pos_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Pos Module",
  "keyword": "Then "
});
formatter.match({
  "location": "PosStepDefinitions.user_navigates_to_Pos_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that page limit is 16",
  "keyword": "And "
});
formatter.match({
  "location": "PosStepDefinitions.verify_that_page_limit_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/contacts_module/Contacts.feature");
formatter.feature({
  "name": "Contacts page testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@contacts_page"
    }
  ]
});
formatter.scenario({
  "name": "Create a new contact",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contacts_page"
    },
    {
      "name": "@create_a_contact"
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
  "name": "user logs in as inventory_manager",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_logs_in_as_inventory_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Contacts module",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_navigates_to_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates a contact",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_creates_a_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify  that check box is clicked",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contacts_page"
    },
    {
      "name": "@Verify_checkbox_isClicked"
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
  "name": "user logs in as inventory_manager",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_logs_in_as_inventory_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Contacts module",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_navigates_to_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that the top checkbox is clicked",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.verify_that_the_top_checkbox_is_clicked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that display",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contacts_page"
    },
    {
      "name": "@Verify_message_isDisplayed"
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
  "name": "user logs in as inventory_manager",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_logs_in_as_inventory_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to Contacts module",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_navigates_to_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.verify_that_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/crm_module/Pipeline.feature");
formatter.feature({
  "name": "Pipeline Module Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that create an opportunity when click the create button.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PipelineTest1"
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
  "name": "verify that \"Create an Opportunity\" module-title display",
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
  "name": "verify that \"Create a Customer\" second module-title display",
  "keyword": "Then "
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
  "name": "user click the \"Create\" button.",
  "keyword": "Then "
});
formatter.step({
  "name": "verify that \"\u003cOpportunity\u003e\" displayed",
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
  "name": "Verify that create an opportunity when click the create button.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PipelineTest1"
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
  "name": "user click to Create button",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_to_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Create an Opportunity\" module-title display",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.verify_that_module_title_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter Opportunity Title in the \"Opportunity #4\" Title box",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_enter_Opportunity_Title_in_the_Title_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter customer name in the \"Ibr\" box",
  "keyword": "When "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_enter_customer_name_in_the_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Create a Customer\" second module-title display",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.verifyThatSecondModuleTitleDisplay(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Create button on the Create a Customer module",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_Create_button_on_the_Create_a_Customer_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clear the expected revenue box",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clear_the_expected_revenue_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter amount in \"2500\" box",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_enter_amount_in_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user pick the priority",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_pick_the_priority()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the \"Create\" button.",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_the_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"Opportunity #4\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.verify_that_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/crm_module/Quotations.feature");
formatter.feature({
  "name": "Quotations Module Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that that all checkboxes are clicked when user clicks at \u0027select all checkbox\u0027.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@select_all_checkbox"
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
  "name": "user navigates to \"Quotations\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the \"select all checkbox\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all checkboxes are clicked",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.all_checkboxes_are_clicked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/crm_module/module.feature");
formatter.feature({
  "name": "New Tag Testing",
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
  "keyword": "Then "
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
  "name": "user goes to \"Lead Tags\" under \"Leads \u0026 Opportunities\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_goes_to_under_module(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates and saves a new tag \"New Cars\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_creates_and_saves_a_new_tag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that message displayed is equal to \"New Cars\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_verifies_that_message_displayed_is_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes the tag \"New Cars\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_deletes_the_tag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});