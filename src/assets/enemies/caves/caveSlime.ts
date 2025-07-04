import { Enemy } from "src/assets/interfaces/enemy.interface";

export const caveSlime: Enemy = {
  id: 14,
  name: 'Cave Slime',
  description: 'Gelatinous creature absorbing damage.',
  biome: 'caves',
  hp: 900,
  defense: 80,
  speed: 30,
  evasion: 0.01,
  ability: {
    name: 'Absorb',
    description: 'Heals self for 3 turns.',
    attack: 0,
    heal: 50,
    critChance: 0,
    critPower: 1,
    defense: 0,
    speed: 0,
    evation: 0,
    duration: 3,
    target: 'self',
  },
  basicAttack: {
    name: 'Pseudopod',
    description: 'Slow but powerful strike.',
    attack: 130,
    heal: 0,
    critChance: 0.05,
    critPower: 1.6,
    defense: 0,
    speed: 0,
    evation: 0,
    duration: 0,
    target: 'single',
  },
};
