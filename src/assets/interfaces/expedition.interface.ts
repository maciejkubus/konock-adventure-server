import { Enemy } from "./enemy.interface";

export interface Expedition {
  id: number;
  biome: "forest" | "desert" | "caves" | "dungeon";
  name: string;
  enemies: Enemy[];
}