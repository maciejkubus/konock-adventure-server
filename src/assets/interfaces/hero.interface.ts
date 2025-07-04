export type HeroTier = 'normal' | 'rare' | 'epic' | 'legendary';
export type TargetType = 'AoE' | 'single' | 'self';

export interface BaseStats {
  hp: number;
  defense: number;
  speed: number;
  evasion: number;
}

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

export interface HeroTierData {
  baseStats: BaseStats;
  ability: Ability;
  basicAttack: Ability;
}

export interface Hero {
  id: string;
  name: string;
  description: string;
  normal: HeroTierData;
  rare: HeroTierData;
  epic: HeroTierData;
  legendary: HeroTierData;
}