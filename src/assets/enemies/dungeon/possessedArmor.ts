import { Enemy } from "src/assets/interfaces/enemy.interface";

export const possessedArmor: Enemy = {
  id: 20,
  name: 'Possessed Armor',
  description: 'Empty armor animated by pure malice.',
  biome: 'dungeon',
  hp: 1100,
  defense: 130,
  speed: 20,
  evasion: 0.01,
  ability: {
    name: 'Iron Will',
    description: 'Raises team defense by 25 for 2 turns.',
    attack: 0,
    heal: 0,
    critChance: 0,
    critPower: 1,
    defense: 25,
    speed: 0,
    evation: 0,
    duration: 2,
    target: 'team',
  },
  basicAttack: {
    name: 'Blade Bash',
    description: 'Heavy blade strike.',
    attack: 160,
    heal: 0,
    critChance: 0.05,
    critPower: 1.5,
    defense: 0,
    speed: 0,
    evation: 0,
    duration: 0,
    target: 'single',
  },
};
