package com.odoo.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "@target/rerun.txt",
        glue = "com/odoo/step_definitions",
        plugin = {
                "html:target/rerun-default-cucumber-reports",
        }
)
public class FailedRunner {
}
