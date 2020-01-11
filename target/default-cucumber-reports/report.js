$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/crm_module/Quotations.feature");
formatter.feature({
  "name": "Quotations Module Functionality",
  "description": "",
  "keyword": "Feature"
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
  "status": "passed"
});
formatter.step({
  "name": "user clicks at the send button to send the recovery email",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_clicks_at_the_send_button_to_send_the_recovery_email()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});