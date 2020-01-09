Feature: Quotations Module Functionality

  #Enes
  @select_all_checkbox
  Scenario: Verify that that all checkboxes are clicked when user clicks at 'select all checkbox'.
    Given user is on the login page
    When user logs in as "eventscrmmanager2"
    And user navigates to "CRM"
    Then user navigates to "Quotations"
    Then user select the "select all checkbox"
    And all checkboxes are clicked


