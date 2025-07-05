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

export const dummnyAbility: Ability = {
  name: "",
  description: "",
  attack: 0,
  heal: 0,
  critChance: 0,
  critPower: 0,
  defense: 0,
  speed: 0,
  evation: 0,
  duration: 0,
  target: 'self',
}