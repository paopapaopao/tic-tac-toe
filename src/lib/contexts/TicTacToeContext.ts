import { createContext } from 'react';

type Value = {
  board: string[][];
  combination: number[][];
  isFinished: boolean;
  players: {
    o: string;
    x: string;
  };
  scores: {
    draw: number;
    o: number;
    x: number;
  };
  onClick: (cellRow: number, cellCol: number) => void;
  onSubmit: (formData: FormData) => void;
};

const TicTacToeContext = createContext<Value | null>(null);

export default TicTacToeContext;
