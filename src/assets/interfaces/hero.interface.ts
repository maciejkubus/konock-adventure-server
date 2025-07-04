export type HeroTier = 'normal' | 'rare' | 'epic' | 'legendary';
export type TargetType = 'AoE' | 'single' | 'self';

export interface Hero {
  id: string;
  name: string;
  tier: HeroTier;
  baseStats: {
    hp: number;
    defense: number;
    speed: number;
    evasion: number;
  };
  ability: {
    name: string;
    description: string;
    attack: number;
    critChance: number;
    critPower: number;
    target: TargetType;
  };
  basicAttack: {
    attack: number;
    critChance: number;
    critPower: number;
    target: TargetType;
  };
}