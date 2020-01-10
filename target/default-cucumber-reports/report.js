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
  "name": "search and delete \"Dzhamol\" contact",
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
});