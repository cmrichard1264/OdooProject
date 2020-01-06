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
formatter.scenario({
  "name": "Create a new contact",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@contacts_page"
    },
    {
      "name": "@checkbox"
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
  "name": "checkbox is selected",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinitions.checkbox_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});