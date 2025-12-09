export enum Category {
  WEAPONS = 'WEAPONS',
  CHEATS = 'CHEATS',
  BUGS = 'BUGS',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface Weapon {
  id: string;
  name: string;
  price: string;
  team: 'T' | 'CT' | 'BOTH';
  damage: number; // 0-100 scale representation
  recoil: number; // 0-100 scale
  fireRate: number; // 0-100 scale
  description: string;
  image: string;
}

export interface CheatCode {
  id: string;
  command: string;
  description: string;
  type: 'CHEAT' | 'CONFIG';
}

export interface GameBug {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  map?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}