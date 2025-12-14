// Knights travails JS index

function knightMoves(startSquare, endSquare) {
  const knightMovesGraph = {};

  const rows = 8;
  const columns = 8;

  // Helper to check if a position is on the board
  function isValid(r, c) {
    return r >= 0 && r < rows && c >= 0 && c < columns;
  }

  // Generate moves for each square and adds them to graph
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const position = [r, c];
      knightMovesGraph[position] = [];
      const moves = [
        [r + 2, c + 1],
        [r + 2, c - 1],
        [r - 2, c + 1],
        [r - 2, c - 1],
        [r + 1, c + 2],
        [r + 1, c - 2],
        [r - 1, c + 2],
        [r - 1, c - 2],
      ];
      for (let [row, column] of moves) {
        if (isValid(row, column)) {
          knightMovesGraph[position].push([row, column]);
        }
      }
    }
  }

  const queue = [];
  let currentMove;

  const visited = [];
  for (let r = 0; r < rows; r++) {
    visited[r] = [];
    for (let c = 0; c < columns; c++) {
      visited[r][c] = false;
    }
  }

  const parent = [];
  for (let r = 0; r < rows; r++) {
    parent[r] = [];
    for (let c = 0; c < columns; c++) {
      parent[r][c] = [];
    }
  }

  // Moves from start to end square tracking parents to enable constructing shortest route
  queue.push(startSquare);
  while (JSON.stringify(currentMove) != JSON.stringify(endSquare)) {
    currentMove = queue[0];
    visited[currentMove[0]][currentMove[1]] = true;
    const newMoves = knightMovesGraph[currentMove];
    for (const move of newMoves) {
      if (!visited[move[0]][move[1]]) {
        queue.push(move);
        parent[move[0]][move[1]] = currentMove;
      }
    }
    queue.shift();
  }

  const route = [];
  let nextRouteMove = endSquare;

  // Contstructs route from end back to start square
  while (nextRouteMove) {
    route.push(nextRouteMove);
    if (parent[nextRouteMove[0]][nextRouteMove[1]].length > 0) {
      nextRouteMove = parent[nextRouteMove[0]][nextRouteMove[1]];
    } else {
      nextRouteMove = parent[nextRouteMove[0]][nextRouteMove[1]][0];
    }
  }

  // Outputs number of moves and route to get there
  route.reverse();
  let result = `You made it in ${route.length} moves! Here's your path: \n`;
  for (const move of route) {
    result += move + `\n`;
  }

  return result;
}

console.log(knightMoves([0, 0], [7, 7]));
