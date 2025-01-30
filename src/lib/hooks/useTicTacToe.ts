'use client';

import { useContext } from 'react';

import { TicTacToeContext } from '../contexts';

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

const useTicTacToe = () => {
  const context = useContext<Value | null>(TicTacToeContext);

  if (context === null) {
    throw new Error(
      'useTicTacToe must be used within TicTacToeContext.Provider'
    );
  }

  return context;
};

export default useTicTacToe;
