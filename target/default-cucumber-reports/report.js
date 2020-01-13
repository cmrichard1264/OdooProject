$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/contacts_module/Contacts.feature");
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
      "name": "@contacts_page"
    },
    {
      "name": "@create_a_contact"
    }
  ]
});
formatter.step({
  "name": "user logs in as \"pos5\"",
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
  "name": "user creates a contact",
  "keyword": "Then "
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
      "name": "@contacts_page"
    },
    {
      "name": "@delete_a_contact"
    }
  ]
});
formatter.step({
  "name": "user logs in as \"pos1\"",
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
  "name": "search and delete \"elton john\" contact",
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
      "name": "@contacts_page"
    },
    {
      "name": "@Verify_checkbox_isClicked"
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
      "name": "@contacts_page"
    },
    {
      "name": "@Verify_message_isDisplayed"
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
});