import { model, models } from 'mongoose';

import { gameSchema } from '../schemas';

const Game = models.Game || model('Game', gameSchema);

export default Game;
