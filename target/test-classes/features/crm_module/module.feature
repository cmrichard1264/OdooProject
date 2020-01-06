@crm_main_page
Feature: Module is clickable

  @crm_title @smoke_test
  Scenario: User should be able to click CRM module
    Given User is on login page
    Then User enters valid username and password
    When User click at Log in button
    Then User should click at the CRM module
    And Verify that the page title is "Pipeline - Odoo"