const INITIAL_PLAYERS = { x: '', o: '' };

const INITIAL_SCORES = { x: 0, o: 0, draw: 0 };

const INITIAL_BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const WINNING_COMBINATIONS = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

export { INITIAL_BOARD, INITIAL_PLAYERS, INITIAL_SCORES, WINNING_COMBINATIONS };
