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
  let moveCount = 0;

  const visited = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      visited[r][c] = false;
    }
  }

  const parents = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      parents[r][c] = [];
    }
  }
}
