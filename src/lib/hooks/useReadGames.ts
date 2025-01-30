'use client';

import { useQuery } from '@tanstack/react-query';

const useReadGames = () => {
  return useQuery({
    queryKey: ['GAMES'],
    queryFn: async () => {
      const response = await fetch('/api/games/');

      return await response.json();
    },
  });
};

export default useReadGames;
