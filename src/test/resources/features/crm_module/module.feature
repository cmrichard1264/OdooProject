
Feature: Lead Tags

  #Cihan
  @TestingNewTag
  Scenario: Creating new tag
    Given user is on the login page
    Then user logs in as "eventscrmmanager2"
    And user navigates to "CRM"
    Then user goes to "Lead Tags" under "Leads & Opportunities" module
    And user creates and saves a new tag "New Cars"
    And user verifies that message displayed is equal to "New Cars"
    And user deletes the tag "New Cars"


   # And I click the lead tags tab
   # And I click the create button
  #  And I type "new cars"
    #And I click save button
    #Then the text should read "new cars"

