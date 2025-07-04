import { Hero } from "../interfaces/hero.interface";

export const heroJinxLoL: Hero = {
  id: 'hero_jinx_001',
  name: 'Jinx',
  description: 'Boom! Paw! Paw!',
  normal: {
    baseStats: { hp: 800, defense: 55, speed: 90, evasion: 0.06 },
    ability: {
      name: 'Zap!',
      description: 'Quick ranged attack',
      attack: 280,
      heal: 0,
      critChance: 0.06,
      critPower: 1.4,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
    basicAttack: {
      name: "Pow-Pow",
      description: "Rapid gunfire",
      attack: 70,
      heal: 0,
      critChance: 0.05,
      critPower: 1.5,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
  rare: {
    baseStats: { hp: 900, defense: 65, speed: 100, evasion: 0.07 },
    ability: {
      name: 'Switcheroo',
      description: 'Rapid fire on all enemies',
      attack: 350,
      heal: 0,
      critChance: 0.1,
      critPower: 1.6,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Pow-Pow",
      description: "Rapid gunfire",
      attack: 80,
      heal: 0,
      critChance: 0.07,
      critPower: 1.7,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
  epic: {
    baseStats: { hp: 1000, defense: 75, speed: 115, evasion: 0.08 },
    ability: {
      name: 'Super Mega Death Rocket!',
      description: 'Fires a rocket that deals AoE damage',
      attack: 500,
      heal: 0,
      critChance: 0.12,
      critPower: 1.9,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Pow-Pow",
      description: "Rapid gunfire",
      attack: 95,
      heal: 0,
      critChance: 0.1,
      critPower: 2.1,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
  legendary: {
    baseStats: { hp: 1150, defense: 85, speed: 130, evasion: 0.09 },
    ability: {
      name: 'Fishbones',
      description: 'Unleashes massive explosive damage',
      attack: 700,
      heal: 0,
      critChance: 0.18,
      critPower: 2.4,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Pow-Pow",
      description: "Rapid gunfire",
      attack: 110,
      heal: 0,
      critChance: 0.15,
      critPower: 2.5,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'single',
    },
  },
};
