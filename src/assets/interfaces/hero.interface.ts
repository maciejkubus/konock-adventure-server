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
  critChance: number;
  critPower: number;
  target: 'AoE' | 'single' | 'self';
}

export interface HeroTierData {
  baseStats: BaseStats;
  ability: Ability;
  basicAttack: Ability;
}

export interface Hero {
  id: string;
  name: string;
  normal: HeroTierData;
  rare: HeroTierData;
  epic: HeroTierData;
  legendary: HeroTierData;
}