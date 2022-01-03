# PA Media Group - QA Engineer Technical Assessment (JavaScript)

*This README relates to the JavaScript/TypeScript version of PA Media Group's QA Engineer Technical Assessment.*

## About This Challenge

  * This challenge should take around 60 minutes to complete. Please do not spend more than 90 minutes at most.
  * We have provided bootstrapped projects for Engineers who wish to provide either a Java or JavaScript-based solution
  * We will accept submissions in other languages of choice
  * This assessment will be judged on your approach, the "how", "why" and "what" as well as simply the technical implementation

When you have completed the challenge, please push your code into a GitHub repository and send the link back to us for review.

## Setting Up

### Pre-Requisites

In order to build and run these tests you need to have installed:
  - Node.js v12.20 (or greater) - *please note if you have nvm installed, `nvm use` can be used to set the correct version of Node.js*

### Installing the Depedencies and Running the Tests

To install the dependencies run `npm i`

To run the tests run `npm test`

## Challenge

### Scenario to Test

We would like you to implement tests for the following scenario:

`As a MetaWeather API client, I want to retrieve 'tomorrows' weather for "Nottingham"`

When you are writing your test please consider:

  - What kind of tests would you expect to see if you were testing this feature as part of a "production" release?
  - What kind of validation would you expect to find when testing a JSON and/or XML based API?
  - What if we needed to expand the test in future (e.g. to include different dates or locations)?

Documentation and API url are available here: [https://www.metaweather.com/api](https://www.metaweather.com/api)

### Refactoring

In the sample projects provided, we have included an existing test based around the same metaweather API.  This one test includes code that could be refactored to enable that code to be re-used in future scenarios.

The test file to be refactored can be found in [`./test/metaweather-location.ts`](./test/metaweather-location.ts).

We would like you to undertake that refactoring - making the changes you would make if you were responsible for maintaining this test suite, taking into consideration engineering best practices that you are aware of to make the appropriate changes.
