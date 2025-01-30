import { Button } from '../Button';

import useTicTacToe from '@/lib/hooks/useTicTacToe';

const PlayerForm = () => {
  const { onSubmit } = useTicTacToe();

  return (
    <form
      action={onSubmit}
      className='min-w-[240px] flex flex-col gap-8'
    >
      <div className='flex flex-col gap-4'>
        <label className='font-bold'>Player 1</label>
        <input
          type='text'
          name='x'
          defaultValue='X'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label className='font-bold'>Player 2</label>
        <input
          type='text'
          name='o'
          defaultValue='O'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <Button>Start</Button>
    </form>
  );
};

export default PlayerForm;
