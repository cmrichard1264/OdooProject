Feature: Pipeline Module Functionality

  # Created by ibrahim_Yazar
  @PipelineTest1
  Scenario Outline: Verify that create an opportunity when click the create button.
    Given user is on the login page
    When user logs in as "eventscrmmanager2"
    And user navigates to "CRM"
    Then user click to Create button
    Then verify that "Create an Opportunity" module-title display
    And user enter Opportunity Title in the "<Opportunity>" Title box
    When user enter customer name in the "<Customer>" box
    Then verify that "Create a Customer" second module-title display
    And user click Create button on the Create a Customer module
    And user clear the expected revenue box
    And user enter amount in "<Expected Revenue>" box
    And user pick the priority
    Then user click the "Create" button.
    And verify that "<Opportunity>" displayed
    Examples:
    | Opportunity    | Customer | Expected Revenue |
    | Opportunity #4 | Ibr      | 2500             |
