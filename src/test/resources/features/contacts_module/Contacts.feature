@regression
  #@contacts_module
Feature: Contacts page testing

  Background: user is on the login page
    Given user is on the login page



  #Madina
  @create_a_contact
  Scenario: Create a new contact
    Given user logs in as "pos5"
    Then user navigates to Contacts module
    Then user creates a contact "elton john"

    @delete_a_contact
      Scenario: Delete a contact
      Given user logs in as "pos5"
      Then user navigates to Contacts module
      Then search and delete "elton john" contact


    #Suna
  @Verify_checkbox_isClicked
  Scenario: Verify  that check box is clicked
    Given user is on the login page
    And user logs in as inventory_manager
    Then user navigates to Contacts module
    And verify that the top checkbox is clicked

    #Aijamal
  @Verify_message_isDisplayed
  Scenario: Verify that display
    Given user is on the login page
    And user logs in as inventory_manager
    Then user navigates to Contacts module
    And verify that message is displayed

