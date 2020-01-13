@regression
 # @quotations
Feature: Quotations Module Functionality

  Background: user logs in as eventscrmmanager2 and clicks at the "CRM" and "Quotations" modules
    Given user is on the login page
    When user logs in as "eventscrmmanager2"
    And user navigates to "CRM"
    Then user navigates to Quotations

  #Noah
  @select_all_checkbox
  Scenario: Verify that that all checkboxes are clicked when user clicks at 'select all checkbox'.
    Then user select the "select all checkbox"
    And all checkboxes are clicked

   @Five_Buttons
   Scenario: Verify that "List", "Kanban", "Calendar", "Pivot" and "Graph" buttons are functioning
     And user clicks at five "buttons" in order List, Kanban, Calendar, Pivot and Graph


   @Print_Action_Buttons
   Scenario: Verify that "Print" and "Action" buttons are displayed and functioning
     And user checks the first present checkbox
     Then user clicks at Print and Action buttons to see the options

   @Send_A_Card_Recovery_Email
   Scenario: Verify that user is able to check one of the quotations, save it as a template and send a recovery email
     And user checks the first present checkbox
     And user clicks at Print and Action buttons to see the options
     And user clicks at "send a recovery email" option
     And user should save it as a new template
     Then user clicks at the send button to send the recovery email