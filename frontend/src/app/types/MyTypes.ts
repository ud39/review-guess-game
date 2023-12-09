export interface Review {
  id: number;
  title: string;
  text: string;
  recommend: boolean;
  played_hours: number;
  helpful: number;
  funny: number;
}

export type DIFFCUILTY = 1 | 2 | 3;

export type User = {
  cached: boolean;
  role: 'guesser' | 'delayer';
  score: number;
};
