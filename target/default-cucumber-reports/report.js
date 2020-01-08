$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/crm_module/Quotations.feature");
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
});