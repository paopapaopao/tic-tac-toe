'use client';

import { useReadGames } from '@/lib/hooks';
import { IGame } from '@/lib/interfaces';
import { dateFormatter } from '@/lib/utils';

const GameData = () => {
  const { data: games, isLoading } = useReadGames();

  if (isLoading) {
    return (
      <p className='text-2xl text-yellow-200 italic'>
        Loading previous game data...
      </p>
    );
  }

  if (games?.length === 0) {
    return <p className='text-2xl'>No previous game data yet</p>;
  }

  return games.map((game: IGame) => (
    <table
      key={game._id}
      className='min-w-[400px] border'
    >
      <thead>
        <tr>
          <th className='p-2 border'>Player</th>
          <th className='p-2 border'>Name</th>
          <th className='p-2 border'>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='p-2 border'>Player 1 (X)</td>
          <td className='p-2 border'>{game.players.playerX.name}</td>
          <td className='p-2 border text-right'>{game.scores.playerX}</td>
        </tr>
        <tr>
          <td className='p-2 border'>Player 2 (O)</td>
          <td className='p-2 border'>{game.players.playerO.name}</td>
          <td className='p-2 border text-right'>{game.scores.playerO}</td>
        </tr>
        <tr>
          <td
            colSpan={2}
            className='p-2 border'
          >
            Draws
          </td>
          <td className='p-2 border text-right'>{game.scores.playerO}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={3}
            className='p-2 italic text-sm'
          >
            Played on {dateFormatter.format(new Date(game.createdAt))}
          </td>
        </tr>
      </tfoot>
    </table>
  ));
};

export default GameData;
