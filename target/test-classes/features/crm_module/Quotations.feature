Feature: Quotations Module Functionality

  Background: user logs in as a eventscrmmanager2 and clicks at the "CRM" and "Quotations" modules
    Given user is on the login page
    When user logs in as "eventscrmmanager2"
    And user navigates to "CRM"
    Then user navigates to "Quotations"

  #Noah
  @select_all_checkbox
  Scenario: Verify that that all checkboxes are clicked when user clicks at 'select all checkbox'.
    Then user select the "select all checkbox"
    And all checkboxes are clicked

   @Five_Buttons
   Scenario: Verify that "List", "Kanban", "Calendar", "Pivot" and "Graph" buttons are functioning
     And user clicks at five "buttons" in order List, Kanban, Calendar, Pivot and Graph


