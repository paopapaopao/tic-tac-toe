'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { GameSchema } from '../types';

const useCreateGame = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: GameSchema) => {
      const response = await fetch('/api/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      return await response.json();
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['GAMES'] });
    },
  });
};

export default useCreateGame;
