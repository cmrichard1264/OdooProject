@regression
Feature:Pos page testing

  #Robert
 @page_limit_is_16
  Scenario: verify that page limit is 16
    Given user is on the login page
    And user logs in as Pos manager
    Then user navigates to Pos Module
    And verify that page limit is 16

   #Aysel
  @configure_message
  Scenario: verify that configure message displayed
    Given user is on the login page
    And userlogs in as pos_manager
    Then user navigates to POS module
    And user types into search box
    Then verify that configure message displayed