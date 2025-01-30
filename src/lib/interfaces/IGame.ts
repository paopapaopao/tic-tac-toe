import { IPlayer } from './IPlayer';
import { IScores } from './IScores';

export interface IGame {
  _id: string;
  players: {
    playerX: IPlayer;
    playerO: IPlayer;
  };
  scores: IScores;
  createdAt: string;
}
