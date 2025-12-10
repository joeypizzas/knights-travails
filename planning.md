# Knights travails

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- No UI. Only inputs are function parameters in JS file. Function is executed in Node.

## How do you plan to design the application state?

- No application state modules. Project is a function in one JS file.

## How do you plan to organize your project files?

- Index.js is only file.

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- Only inputs are function parameters when running the function.

## Given your inputs, what are the steps necessary to return the desired output?

- knightMoves function:
  - Takes two string parameters, in "0,0", "5,6" format.
  - Returns shortest path to get from the first square to the second square, sharing all the moves the knight will make along the way.
  - First step is to create a graph of all the valid moves that can be made from any one square.
