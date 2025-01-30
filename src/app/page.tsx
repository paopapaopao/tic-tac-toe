'use client';

import { useEffect, useState } from 'react';

import { Board, Button, GameData, Info, PlayerForm } from '@/components';
import {
  INITIAL_BOARD,
  INITIAL_PLAYERS,
  INITIAL_SCORES,
  WINNING_COMBINATIONS,
} from '@/lib/constants';
import { TicTacToeContext } from '@/lib/contexts';
import { Phase, Turn } from '@/lib/enums';
import { useCreateGame } from '@/lib/hooks';

export default function Home() {
  const { mutate: createGame } = useCreateGame();

  const [phase, setPhase] = useState<Phase>(Phase.HOME);

  const [players, setPlayers] = useState<{
    x: string;
    o: string;
  }>(INITIAL_PLAYERS);

  const [scores, setScores] = useState<{
    x: number;
    o: number;
    draw: number;
  }>(INITIAL_SCORES);

  const [board, setBoard] = useState<string[][]>(INITIAL_BOARD);
  const [turn, setTurn] = useState<Turn>(Turn.X);
  const [combination, setCombination] = useState<number[][]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  //
  const winner =
    combination.length === 0
      ? null
      : board[combination[0][0]][combination[0][1]];

  useEffect(() => {
    const hasWinner = WINNING_COMBINATIONS.some((combination: number[][]) => {
      const [row1, col1] = combination[0];
      const [row2, col2] = combination[1];
      const [row3, col3] = combination[2];

      if (
        board[row1][col1] === board[row2][col2] &&
        board[row1][col1] === board[row3][col3] &&
        board[row1][col1] !== ''
      ) {
        setCombination(combination);

        return true;
      }

      return false;
    });

    const hasFinished = board.every((row: string[]) => {
      return row.every((col: string) => {
        return col !== '';
      });
    });

    if (hasWinner || hasFinished) {
      setIsFinished(true);
    }
  }, [board]);

  //
  useEffect(() => {
    if (isFinished) {
      setScores((previousScores) => {
        if (winner === null) {
          return { ...previousScores, draw: previousScores.draw + 1 };
        }

        return winner === Turn.X
          ? { ...previousScores, x: previousScores.x + 1 }
          : { ...previousScores, o: previousScores.o + 1 };
      });
    }
  }, [isFinished, winner]);

  const handleStartNewGameClick = () => {
    setPhase(Phase.FORM);
  };

  const handleSubmit = (formData: FormData) => {
    setPlayers({
      x: formData.get('x')?.toString() ?? '',
      o: formData.get('o')?.toString() ?? '',
    });

    setPhase(Phase.GAME);
  };

  const handleCellClick = (cellRow: number, cellCol: number) => {
    setBoard((previousBoard: string[][]) => {
      return previousBoard.map((boardRow: string[], boardRowIndex: number) => {
        if (boardRowIndex !== cellRow) {
          return boardRow;
        }

        return boardRow.map((boardCol: string, boardColIndex: number) => {
          if (boardColIndex !== cellCol) {
            return boardCol;
          }

          return boardCol === '' ? turn : '';
        });
      });
    });

    setTurn((previousTurn: Turn) => {
      return previousTurn === Turn.X ? Turn.O : Turn.X;
    });
  };

  const handleContinueClick = () => {
    setBoard(INITIAL_BOARD);
    setTurn(Turn.X);
    setCombination([]);
    setIsFinished(false);
  };

  const handleStopClick = () => {
    createGame({
      players: {
        playerX: { name: players.x },
        playerO: { name: players.o },
      },
      scores: {
        playerX: scores.x,
        playerO: scores.o,
        draw: scores.draw,
      },
    });

    setPhase(Phase.HOME);
    setPlayers(INITIAL_PLAYERS);
    setScores(INITIAL_SCORES);

    handleContinueClick();
  };

  return (
    <TicTacToeContext.Provider
      value={{
        board,
        combination,
        isFinished,
        players,
        scores,
        onClick: handleCellClick,
        onSubmit: handleSubmit,
      }}
    >
      <div className='min-h-dvh p-8 flex flex-col items-center gap-8 justify-center'>
        <h1 className='text-5xl'>Tic-Tac-Toe Game</h1>
        {phase === Phase.HOME && (
          <>
            <Button onClick={handleStartNewGameClick}>Start New Game</Button>
            <GameData />
          </>
        )}
        {phase === Phase.FORM && <PlayerForm />}
        {phase === Phase.GAME && (
          <>
            <Info />
            <Board />
          </>
        )}
        {isFinished && (
          <div className='flex gap-4'>
            <Button onClick={handleContinueClick}>Continue</Button>
            <Button onClick={handleStopClick}>Stop</Button>
          </div>
        )}
      </div>
    </TicTacToeContext.Provider>
  );
}
