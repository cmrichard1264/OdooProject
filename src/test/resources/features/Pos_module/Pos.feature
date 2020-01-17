@regression
  #@pos_page
Feature:Pos page testing

  #Robert
 @page_limit_is_32
  Scenario: verify that page limit is 32
    Given user is on the login page
    And user logs in as Pos manager
    Then user navigates to Pos Module
    And verify that page limit is "32"

   #Aysel
  @configure_message
  Scenario: verify that configure message displayed
    Given user is on the login page
    And userlogs in as pos_manager
    Then user navigates to POS module
    And user types into search box
    Then verify that configure message displayed

    #Bahadir
   @List_menu_check
   Scenario: verify that "List" is displayed
     Given user is on the login page
     And user logs in as "pos2"
     Then user navigates to POS module
     When user hovers the mouse on list icon "List" is displayed

