import { atomWithStorage } from 'jotai/utils';
import type { theme } from '../definitions';

export const themeAtom = atomWithStorage<theme>('THEME', 'light');
