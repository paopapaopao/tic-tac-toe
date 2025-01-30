import { connect } from 'mongoose';

const connection: { isConnected?: number } = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }

  const db = await connect(process.env.MONGODB_URI!);

  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
