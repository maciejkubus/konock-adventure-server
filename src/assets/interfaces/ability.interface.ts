export interface Ability {
  name: string;
  description: string;
  attack: number;
  heal: number;
  critChance: number;
  critPower: number;
  defense: number;
  speed: number;
  evation: number;
  duration: number;
  target: 'AoE' | 'single' | 'self' | 'team';
}