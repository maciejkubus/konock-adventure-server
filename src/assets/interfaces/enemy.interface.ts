import { Ability } from "./ability.interface";
import { BaseStats } from "./base-stats.interface";

export interface Enemy extends BaseStats {
  id: number;
  name: string;
  description: string;
  biome: "forest" | "desert" | "caves" | "dungeon";
  ability: Ability;
  basicAttack: Ability;
}