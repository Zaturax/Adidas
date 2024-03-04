# How to run the tests

Start by running "npm i" this will install the needed libs as wells as the PW browser binaries.

Just need to run "npm t". This will trigger all scenarios in all .feature files.


# Project structure

## Config => config/

There are some files that are frequently seen across different UI tests projects and should be created as needed

- paths.yml => contains selectors to the elements we are performing actions on
- hosts.yml => contains all the hosts for page navigation and endpoints for API requests
- inputs.yml => contains all the credentials and application inputs, usually ignored by the .gitignore
- env.json => used solely for local dev, replaced by an environment variable when running in pipelines, contains the environment that should be loaded and where the tests will run (e.g. qa, staging)

There are two main folders under the config folder

- common/ => contains all the configuration files that are common across all the environments

- environments/ => contains all different environnments and configuration files associated with it

Variables to be used across different step definitions should be stored on the variables object that also lives inside the global config

### config.js

The file that reads all the configurations. They are stored on the global config object `global.config`. Configs from the common and environment are merged so if there two files with the same name on the common and environment folders all the keys of those files will be added. If coliding keys exist, the one on the environment prevails.
e.g. The typical structure of the global config object

```
global.config = {
  paths: {
    button: ".button-selector"
  },
  scripts: {
    alert: "alert(1);"
  },
  hosts: {
    homepage: "https://example.com"
  },
  inputs: {
    username: "user1",
    password: "pA55Word"
  },
  env: "qa",

}
```

## Features => features/

All the feature files with gherking structure live here

## Step Definitions => step_definitions/

Step definitions for steps used in the .feature files

## Support => support/

Contains 2 main files

- hooks.js => all the hooks to the test execution BeforeAll, Before, After and AfterAll
- logger.js => initialization of the logger to be used across the development

## Others

- cucumber.js => cucumber configuration
- package.json => includes some important scripts
  - test => execute the tests with three retries upon failure


# Test Management


## ARGUE TO THE BUSINESS WHY TEST MANAGEMENT & AUTOMATION ARE IMPORTANT


TM is the cornerstone of Quality assurance. It answers the questions "HOW, WHY, WHEN and WHAT":
  - What is automated (Which flows are currently being covered)
  - When do certain flow are tested (Can be an event or time trigger)
  - Why certain tests are currently being reworked or created (You can contextualize how a certain test script needs to be executed)
  - How these tests are being executed (Manual vs Automated, Cost vs Return)


## YOUR CHOSEN TECHNICAL APPROACH


A mix between activity-based and revenue-based approach: the activity-based approach guarantees that the most used flows by the users are always working or in the case that they aren't, the dev/eng team is the first to know. Revenue-based approach prioritizes the coverage of the flows that currently collect/earn the most money for the company. This guarantees that if something impacts the company's revenue we can be ahead of the curve and minimize/remove the risk of losing money


## TECHNOLOGIES YOU WOULD USE TO MANAGE, AUTOMATE, THE INFRASTRUCTURE TO SUPPORT SCALING AND EXECUTION, AND MONITOR/TRACK/REPORT


- Management : XRAY, Zephyr, or some Jira Adjacent tool
- Automate : a dev-used coding language, a browser-automation tool, static image analysis, k6/Gatling for non functional tests, lighthouse/in-house browser performance tool
- Support scalling: CI CD integration, terraform
- Reporting: Xray, test rails and slack


## TYPES OF TESTING


Functional test: Front end and back end (for FE, also use data-driven and image analysis (result vs baseline))
Non Functional: Tradicional load and performance, browser compatibility and performance, accessibility and user experience


## TESTING PROCESS AND TESTING FLOW
 ??


## TEAM STRUCTURE


A mix of all levels of expertise but something in a pyramid shape: 1 senior to be my right-hand person and someone who can cover when I'm not present, 2 mids that have some learning/growth to do but can do 70% of tasks independently and 3 juniors that grasp that concepts but might not have delved in certain aspects of test automation




# DYNAMIC CONTENT CHALLENGES


## WHAT ARE THE TYPICAL PITFALLS IN SUCH A SOLUTION AND HOW DO YOU OVERCOME THEM?


- Stale data(inputs) and therefore an imperceptible lag behind reality
- Flows can become very complex thus leading to higher testing costs
- States along the testing flow can be tricky to maintain




## WHAT TOOLS WOULD YOU IDEALLY HAVE ACCESS IN ORDER TO COME UP WITH YOUR SOLUTION, AND WHY?


- Data-driven testing (using both input and output data as a reference frame)
- Visual validation tools (image comparison using image analysis or AI validation)
- Data/event synchronousness
- Low-level interaction injection (JS execution)
