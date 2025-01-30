import { Schema } from 'mongoose';

const scoresSchema = new Schema({
  playerX: { type: Number, default: 0 },
  playerO: { type: Number, default: 0 },
  draw: { type: Number, default: 0 },
});

export default scoresSchema;
