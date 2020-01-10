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
  "name": "verify that configure message displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Pos_page"
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
});