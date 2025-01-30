type GamePayload = {
  players: {
    playerX: { name: string };
    playerO: { name: string };
  };
  scores: {
    playerX: number;
    playerO: number;
    draw: number;
  };
};

export default GamePayload;
