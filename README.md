# SchoonerDice

Hi there! This is a sample of my coding style. It was entirely done with TDD,
and you can hopefully get an idea of how the code evolved over time by viewing
the [commit history](https://github.com/colejona/SchoonerDice/commits/main).

You may also want to take a look around the [tests](src/__tests__) to get a feel for what
[SchoonerDice](src/schooner-dice.js) can do. [This](src/__tests__/schooner-dice_test.js)
is a good starting point.

## How to Run

1. Install [Git](https://git-scm.com/)
1. Install [node.js](https://nodejs.org/)
1. Clone this repository:
   ```shell
   git clone https://github.com/colejona/SchoonerDice.git
   ```
1. In the base directory of this project, install dependencies:
   ```shell
   npm install
   ```
1. Run the tests:
   ```shell
   npm test
   ```
   You should see some results like this:
   ```shell
   > schooner-dice@1.0.0 test C:\Users\colej\dev\SchoonerDice
   > jest
   
   PASS src/__tests__/score_test.js
   PASS src/__tests__/score-chance_test.js
   PASS src/__tests__/schooner-dice_test.js
   PASS src/__tests__/score-full-house_test.js
   PASS src/__tests__/score-large-straight_test.js
   PASS src/__tests__/score-small-straight_test.js
   PASS src/__tests__/score-n-of-a-kind_test.js
   PASS src/__tests__/score-single-numbers_test.js
   PASS src/__tests__/score-schooner_test.js
   PASS src/__tests__/score-all-different_test.js
   PASS src/__tests__/top-categories_test.js
   
   Test Suites: 11 passed, 11 total
   Tests:       54 passed, 54 total
   Snapshots:   0 total
   Time:        1.328 s
   Ran all test suites.
   ```
