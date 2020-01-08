@contacts_page
Feature: Contacts page testing

  @create_a_contact
  Scenario: Create a new contact
    Given user is on the login page
    And user enters valid username and password
    Then user navigates to Contacts module
    And user creates a contact

  @Verify_checkbox_isClicked
  Scenario: Verify  that check box is clicked
    Given user is on the login page
    And user logs in as inventory_manager
    Then user navigates to Contacts module
    And verify that the top checkbox is clicked

  @Verify_message_isDisplayed
  Scenario: Verify that display
      Given user is on the login page
      And user logs in as inventory_manager
      Then user navigates to Contacts module
  And verify that message is displayed

