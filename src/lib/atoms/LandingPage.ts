import { atomWithStorage } from 'jotai/utils';

export const difficultyAtom = atomWithStorage<'easy' | 'medium' | 'hard' | ''>(
  'DIFFICULTY',
  ''
);
