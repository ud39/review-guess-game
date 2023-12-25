export interface Review {
  steam_id: string;
  review: string;
  playtime_forever: number;
  voted_up: boolean;
  votes_up: number;
  votes_funny: number;
}

export interface Game {
  title: string;
  app_id: number;
}

export type DIFFCUILTY = 1 | 2 | 3;

export type User = {
  cached: boolean;
  role: 'guesser' | 'reviewer';
  score: number;
};
