# Metadelta Solver  
**Step-by-step equation solving for [metadelta](https://github.com/metadelta/metadelta)**

## Usage
To solve an equation:
```js
const solver = require('@metadelta/solver');

const steps  = solver.solveEquation('2x + 3x = 35');

steps.forEach(step => {
    console.log("Before this change: " + step.oldEquation.print());  // e.g. before change: 2x + 3x = 35
    console.log("Type of change: " + step.changeType);               // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("After this change: " + step.newEquation.print());   // e.g. after change: 5x = 35
    console.log("Number of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
});
```

To see all the change types:
```js
const changes = solver.ChangeTypes;
```

## Build

First clone the project from github:

    git clone https://github.com/metadelta/metadelta.git
    cd packages/solver

Install the project dependencies:

    npm install

## Test

To execute tests for the library, install the project dependencies once:

    npm install

Then, the tests can be executed:

    npm test

### License
This project is a fork of socratic.org's [mathsteps](https://github.com/socraticorg/mathsteps) and licensed under the Apache 2.0 License.
