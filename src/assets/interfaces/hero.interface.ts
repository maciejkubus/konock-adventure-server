import { Ability } from "./ability.interface";
import { BaseStats } from "./base-stats.interface";

export type HeroTier = 'normal' | 'rare' | 'epic' | 'legendary';

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