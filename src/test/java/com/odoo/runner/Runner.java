package com.odoo.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "com/odoo/step_definitions",
        dryRun = false,
        tags = "@page_limit_is_16",
        plugin = {"html:target/default-cucumber-reports",
                "json:target/cucumber.json"
        }
)

public class Runner {
}
