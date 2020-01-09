
Feature: Lead Tags

  @TestingNewTag
  Scenario: Creating new tag
    Given user is on the login page
    When user logs in as "eventscrmmanager2"
    And user navigates to "CRM"
    And I click the Leads And Opportunities tab
    And I click the lead tags tab
    And I click the create button
    And I type "new cars"
    And I click save button
    Then the text should read "new cars"

