# General

This is a directory to keep track of the leetcode questions I'm solving.
This also utilizes mocha chai to have the testing environment on my local rather than on leetcode.

## Install Packagees

Run `npm i` at the root to install necessary packages/dependencies

## Running Tests

To run the tests for a particular question, run `npm test tests/<test file>`

-   Ex: `npm test tests/1-two-sum.test.js`

## Creating New LeetCode Question

Run `npm run create <question name>`

-   Ex: `npm run create 1-two-sum`

Note: The command must be provided an argument formatted `<Question number>-<Question name, delimited by '-'>`

-   Invalid examples:

    -   `npm run create 1 `
        -   Name of the LeetCode question is not provided
    -   `npm run create 1--`
        -   '-' is not a valid name of the LeetCode question
    -   `npm run create two-sum`
        -   LeetCode question number is not provided

-   Valid examples:
    -   `npm run create 1-two-sum`
    -   `npm run create 12-integer-to-roman`
