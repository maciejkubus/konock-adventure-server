import { Hero } from "../interfaces/hero.interface";

export const heroMirinElf: Hero = {
  id: 'hero_mirin_001',
  name: 'Mirin',
  description: 'Edgy smoll elf',
  normal: {
    baseStats: { hp: 750, defense: 55, speed: 95, evasion: 0.07 },
    ability: {
      name: 'Piercing Arrow',
      description: 'Attacks single enemy, ignores defense',
      attack: 320,
      heal: 0,
      critChance: 0.07,
      critPower: 1.5,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
    basicAttack: {
      name: "Quick Shot",
      description: "Basic ranged attack",
      attack: 65,
      heal: 0,
      critChance: 0.05,
      critPower: 1.4,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
  rare: {
    baseStats: { hp: 850, defense: 65, speed: 105, evasion: 0.08 },
    ability: {
      name: 'Shadow Volley',
      description: 'AoE arrow attack',
      attack: 400,
      heal: 0,
      critChance: 0.1,
      critPower: 1.7,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Quick Shot",
      description: "Basic ranged attack",
      attack: 80,
      heal: 0,
      critChance: 0.07,
      critPower: 1.6,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
  epic: {
    baseStats: { hp: 950, defense: 75, speed: 115, evasion: 0.09 },
    ability: {
      name: 'Nightmare Arrow',
      description: 'Piercing AoE arrow attack',
      attack: 550,
      heal: 0,
      critChance: 0.13,
      critPower: 2,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Quick Shot",
      description: "Basic ranged attack",
      attack: 100,
      heal: 0,
      critChance: 0.1,
      critPower: 2.2,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
  legendary: {
    baseStats: { hp: 1100, defense: 90, speed: 130, evasion: 0.1 },
    ability: {
      name: 'Dark Piercer',
      description: 'Massive piercing AoE arrow attack',
      attack: 750,
      heal: 0,
      critChance: 0.18,
      critPower: 2.5,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Quick Shot",
      description: "Basic ranged attack",
      attack: 120,
      heal: 0,
      critChance: 0.15,
      critPower: 2.7,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
};
