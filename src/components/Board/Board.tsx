import Cell from './Cell';

const Board = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {Array.from({ length: 3 }).map((_, row: number) =>
        Array.from({ length: 3 }).map((_, col: number) => (
          <Cell
            key={`row${row}-col${col}`}
            row={row}
            col={col}
          />
        ))
      )}
    </div>
  );
};

export default Board;
