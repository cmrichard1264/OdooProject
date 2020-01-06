@contacts_page
Feature: Contacts page testing

  @create_a_contact
  Scenario: Create a new contact
    Given user is on the login page
    And user logs in as inventory_manager
    Then user navigates to Contacts module
    And user creates a contact


