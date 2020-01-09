$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/crm_module/module.feature");
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