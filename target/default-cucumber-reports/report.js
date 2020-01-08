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
});