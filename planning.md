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
  - Takes two string parameters, in array 0,0, 5,6 format.
  - Returns shortest path to get from the first square to the second square, sharing all the moves the knight will make along the way.
  - First step is to create a graph of all the valid moves that can be made from any one square. Use existing function to do this.
  - Create empty queue.
  - Create currentMove variable.
  - Create moveCount variable and set it to 0.
  - created 2d visited array and set each square to false.
  - Push starting square param to queue with move count of 0. Use push to add moveCount to currentMove.
  - set visited with starting square to true.
  - While currentMove != target square param:
    - Set currentMove to first item from queue.
    - set visited of currentMove true.
    - increment moveCount.
    - const newMoves = list of moves from knightMoves set to currentMove.
    - For of loop with move of NewMoves:
      - If !visited move, then push move to queue while using push to add moveCount to each move.
    - shift first queue item out of queue.
