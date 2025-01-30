'use client';

import clsx from 'clsx';

import useTicTacToe from '@/lib/hooks/useTicTacToe';

type Props = {
  row: number;
  col: number;
};

const Cell = ({ row, col }: Props) => {
  const { board, combination, isFinished, onClick } = useTicTacToe();

  const text = board[row][col];

  const isInCombination = combination.some((cell: number[]) => {
    return cell[0] === row && cell[1] === col;
  });

  const classNames = clsx(
    'size-64 rounded-lg',
    (!isFinished || (isFinished && !isInCombination)) && 'bg-yellow-300',
    isFinished && isInCombination && 'bg-green-300',
    !isFinished && text === '' && 'hover:bg-yellow-500'
  );

  return (
    <button
      disabled={isFinished || text !== ''}
      onClick={() => {
        onClick(row, col);
      }}
      className={classNames}
    >
      <span className='text-8xl text-black'>{text}</span>
    </button>
  );
};

export default Cell;
