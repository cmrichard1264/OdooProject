$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Pos_module/Pos.feature");
formatter.feature({
  "name": "Pos page testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "verify that page limit is 32",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@page_limit_is_32"
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
  "name": "verify that page limit is \"32\"",
  "keyword": "And "
});
formatter.match({
  "location": "PosStepDefinitions.verify_that_page_limit_is(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Not Equal expected:\u003c3[9]\u003e but was:\u003c3[2]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.odoo.pages.PosPage.PageLimit(PosPage.java:41)\r\n\tat com.odoo.step_definitions.PosStepDefinitions.verify_that_page_limit_is(PosStepDefinitions.java:33)\r\n\tat ✽.verify that page limit is \"32\"(file:src/test/resources/features/Pos_module/Pos.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that configure message displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@configure_message"
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
  "name": "userlogs in as pos_manager",
  "keyword": "And "
});
formatter.match({
  "location": "PosStepDefinitions.userlogs_in_as_pos_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to POS module",
  "keyword": "Then "
});
formatter.match({
  "location": "PosStepDefinitions.user_navigates_to_POS_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types into search box",
  "keyword": "And "
});
formatter.match({
  "location": "PosStepDefinitions.user_types_into_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that configure message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PosStepDefinitions.verify_that_configure_message_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that \"List\" is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@List_menu_check"
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
  "name": "user logs in as \"pos2\"",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to POS module",
  "keyword": "Then "
});
formatter.match({
  "location": "PosStepDefinitions.user_navigates_to_POS_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers the mouse on list icon \"List\" is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "PosStepDefinitions.user_hovers_the_mouse_on_list_icon_is_displayed(String)"
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
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "user is on the login page",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Create a new contact",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@create_a_contact"
    }
  ]
});
formatter.step({
  "name": "user logs in as \"Inventory Manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
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
  "name": "user creates a contact \"Suna Tatar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinitions.user_creates_a_contact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on the login page",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Delete a contact",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@delete_a_contact"
    }
  ]
});
formatter.step({
  "name": "user logs in as \"Inventory Manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
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
  "name": "search and delete \"Suna Tatar\" contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinitions.search_and_delete_contact(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on the login page",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Verify  that check box is clicked",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Verify_checkbox_isClicked"
    }
  ]
});
formatter.step({
  "name": "user logs in as \"Inventory Manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
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
formatter.background({
  "name": "user is on the login page",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Verify that display",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Verify_message_isDisplayed"
    }
  ]
});
formatter.step({
  "name": "user logs in as \"Inventory Manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_logs_in_as(String)"
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
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
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
  "name": "user click the Create button.",
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
      "name": "@regression"
    },
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
  "name": "user click the Create button.",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_click_the_Create_button()"
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
formatter.scenario({
  "name": "Deleting the created an opportunity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@deletingOpportunity"
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
  "name": "user deletes \"Opportunity #4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_deletes(String)"
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
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "user logs in as eventscrmmanager2 and clicks at the \"CRM\" and \"Quotations\" modules",
  "description": "",
  "keyword": "Background"
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
  "name": "user navigates to Quotations",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to_Quotations()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that that all checkboxes are clicked when user clicks at \u0027select all checkbox\u0027.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@select_all_checkbox"
    }
  ]
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
formatter.background({
  "name": "user logs in as eventscrmmanager2 and clicks at the \"CRM\" and \"Quotations\" modules",
  "description": "",
  "keyword": "Background"
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
  "name": "user navigates to Quotations",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to_Quotations()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that \"List\", \"Kanban\", \"Calendar\", \"Pivot\" and \"Graph\" buttons are functioning",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Five_Buttons"
    }
  ]
});
formatter.step({
  "name": "user clicks at five \"buttons\" in order List, Kanban, Calendar, Pivot and Graph",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clicks_at_five_in_order_List_Kanban_Calendar_Pivot_and_Graph(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user logs in as eventscrmmanager2 and clicks at the \"CRM\" and \"Quotations\" modules",
  "description": "",
  "keyword": "Background"
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
  "name": "user navigates to Quotations",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to_Quotations()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that \"Print\" and \"Action\" buttons are displayed and functioning",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Print_Action_Buttons"
    }
  ]
});
formatter.step({
  "name": "user checks the first present checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_checks_the_first_present_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks at Print and Action buttons to see the options",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clicks_at_Print_and_Action_buttons_to_see_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user logs in as eventscrmmanager2 and clicks at the \"CRM\" and \"Quotations\" modules",
  "description": "",
  "keyword": "Background"
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
  "name": "user navigates to Quotations",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to_Quotations()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user is able to check one of the quotations, save it as a template and send a recovery email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Send_A_Card_Recovery_Email"
    }
  ]
});
formatter.step({
  "name": "user checks the first present checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_checks_the_first_present_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks at Print and Action buttons to see the options",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clicks_at_Print_and_Action_buttons_to_see_the_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks at \"send a recovery email\" option",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clicks_at_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should save it as a new template",
  "keyword": "And "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_should_save_it_as_a_new_template()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(), \u0027Save as\u0027)]\"}\n  (Session info: chrome\u003d80.0.3987.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2GM29HE\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.106, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\madin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59060}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ad895c194b6b8f826688394a7224736b\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(), \u0027Save as\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat com.odoo.step_definitions.CRM_StepDefinitions.user_should_save_it_as_a_new_template(CRM_StepDefinitions.java:129)\r\n\tat ✽.user should save it as a new template(file:src/test/resources/features/crm_module/Quotations.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks at the send button to send the recovery email",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clicks_at_the_send_button_to_send_the_recovery_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/crm_module/module.feature");
formatter.feature({
  "name": "New Tag Testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Creating new tag",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
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