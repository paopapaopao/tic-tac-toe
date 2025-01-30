import { Schema } from 'mongoose';

const playerSchema = new Schema({
  name: { type: String, required: true },
});

export default playerSchema;
