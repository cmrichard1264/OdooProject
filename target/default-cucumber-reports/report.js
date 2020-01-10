$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/crm_module/Quotations.feature");
formatter.feature({
  "name": "Quotations Module Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "user logs in as a eventscrmmanager2 and clicks at the \"CRM\" and \"Quotations\" modules",
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
  "name": "user navigates to \"Quotations\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CRM_StepDefinitions.user_navigates_to(String)"
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
});