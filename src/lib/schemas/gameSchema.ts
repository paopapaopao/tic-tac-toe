import { Schema } from 'mongoose';

import playerSchema from './playerSchema';
import scoresSchema from './scoresSchema';

const gameSchema = new Schema(
  {
    players: {
      playerX: { type: playerSchema, required: true },
      playerO: { type: playerSchema, required: true },
    },
    scores: {
      type: scoresSchema,
      default: () => ({ playerX: 0, playerO: 0, draw: 0 }),
    },
  },
  { timestamps: true }
);

export default gameSchema;
