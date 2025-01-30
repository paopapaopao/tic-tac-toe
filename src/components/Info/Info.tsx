import useTicTacToe from '@/lib/hooks/useTicTacToe';

const Info = () => {
  const { players, scores } = useTicTacToe();

  return (
    <div className='min-w-[784px] flex justify-between gap-16'>
      <div className='flex flex-col gap-4'>
        <p className='flex items-center gap-2'>
          <span className='text-2xl'>Player 1:</span>
          <span className='text-3xl font-bold'>{players.x}</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='text-2xl'>Score:</span>
          <span className='text-3xl font-bold'>{scores.x}</span>
        </p>
      </div>
      <p className='flex items-center gap-2'>
        <span className='text-2xl'>Draw:</span>
        <span className='text-3xl font-bold'>{scores.draw}</span>
      </p>
      <div className='flex flex-col gap-4'>
        <p className='flex items-center gap-2'>
          <span className='text-2xl'>Player 2:</span>
          <span className='text-3xl font-bold'>{players.o}</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='text-2xl'>Score:</span>
          <span className='text-3xl font-bold'>{scores.o}</span>
        </p>
      </div>
    </div>
  );
};

export default Info;
