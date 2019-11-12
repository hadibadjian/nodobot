# NodoBot

## Environment
Node v10.16.3

## Run
```
// run the program with the default input file
$ npm run cli

// run the program with a relative file path to an input file
$ npm --relPath=tests/fixtures/example2.txt run cli
$ npm --relPath=../../Desktop/example3.txt run cli
```

## Test
```
npm test
```

Output Sample:
```
> iselect-coding-challenge-robot@0.1.0 test /Users/hb/Projects/iselect-coding-challenge-robot
> jest --coverage --runInBand

 PASS  tests/entry.spec.js
  Entry
    ✓ runs example1 (9ms)
    ✓ runs example2 (1ms)
    ✓ runs example3 (1ms)
    ✓ runs example4

 PASS  tests/car.spec.js
  Car
    report command
      ✓ reports the current position and direction (1ms)
    place command
      ✓ puts the robot in a position (1ms)
      when the placement position is outside the boundary
        ✓ does not change the robot position (1ms)
        ✓ only places the car in valid positions
        ✓ ignores subsequent move command
        ✓ ignores subsequent left command (1ms)
        ✓ ignores subsequent right command
        when a valid place command is issued
          ✓ respects the next valid place command
          ✓ runs the subsequent commands (1ms)
    left command
      ✓ rotates the robot 90 degrees counter clockwise (1ms)
    right command
      ✓ rotates the robot 90 degrees clockwise (2ms)
    move command
      ✓ moves the robot one unit forward in its current direction (2ms)

 PASS  tests/commands/place-command.spec.js
  Place Command
    ✓ should run the correct action (3ms)

 PASS  tests/adapters/input-adapter.spec.js
  Input Adapter
    ✓ should not be used directly (3ms)

 PASS  tests/commands/right-command.spec.js
  Right Command
    ✓ should run the correct action (1ms)

 PASS  tests/commands/move-command.spec.js
  Move Command
    ✓ should run the correct action (1ms)

 PASS  tests/commands/left-command.spec.js
  Left Command
    ✓ should run the correct action (1ms)

 PASS  tests/commands/command.spec.js
  Command
    ✓ should not be used directly (2ms)

 PASS  tests/adapters/file-adapter.spec.js
  File Adapter
    ✓ parses the commands (1ms)

 PASS  tests/commands/report-command.spec.js
  Report Command
    ✓ should run the correct action

--------------------|----------|----------|----------|----------|-------------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------|----------|----------|----------|----------|-------------------|
All files           |      100 |      100 |      100 |      100 |                   |
 src                |      100 |      100 |      100 |      100 |                   |
  car.js            |      100 |      100 |      100 |      100 |                   |
  entry.js          |      100 |      100 |      100 |      100 |                   |
 src/adapters       |      100 |      100 |      100 |      100 |                   |
  file-adapter.js   |      100 |      100 |      100 |      100 |                   |
  input-adapter.js  |      100 |      100 |      100 |      100 |                   |
 src/commands       |      100 |      100 |      100 |      100 |                   |
  command.js        |      100 |      100 |      100 |      100 |                   |
  left-command.js   |      100 |      100 |      100 |      100 |                   |
  move-command.js   |      100 |      100 |      100 |      100 |                   |
  place-command.js  |      100 |      100 |      100 |      100 |                   |
  report-command.js |      100 |      100 |      100 |      100 |                   |
  right-command.js  |      100 |      100 |      100 |      100 |                   |
--------------------|----------|----------|----------|----------|-------------------|
Test Suites: 10 passed, 10 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        2.555s
Ran all test suites.
```
