import { Hero } from "../interfaces/hero.interface";

export const heroWarrior001: Hero = {
  id: 'hero_warrior_001',
  name: 'Korgul the Unbroken',
  normal: {
    baseStats: {
      hp: 1000,
      defense: 80,
      speed: 70,
      evasion: 0.03,
    },
    ability: {
      name: 'Blade Storm',
      description: 'Spin and strike',
      attack: 350,
      critChance: 0.05,
      critPower: 1.1,
      target: 'AoE',
    },
    basicAttack: {
      name: "Basic Attack",
      description: "just basic attack",
      attack: 70,
      critChance: 0.05,
      critPower: 1.5,
      target: 'single',
    },
  },
  rare: {
    baseStats: {
      hp: 1100,
      defense: 90,
      speed: 75,
      evasion: 0.04,
    },
    ability: {
      name: 'Blade Storm',
      description: 'Spin and strike with force',
      attack: 400,
      critChance: 0.08,
      critPower: 1.25,
      target: 'AoE',
    },
    basicAttack: {
      name: "Basic Attack",
      description: "just basic attack",
      attack: 85,
      critChance: 0.07,
      critPower: 1.8,
      target: 'single',
    },
  },
  epic: {
    baseStats: {
      hp: 1200,
      defense: 100,
      speed: 80,
      evasion: 0.05,
    },
    ability: {
      name: 'Blade Storm',
      description: 'Spin and strike all enemies',
      attack: 500,
      critChance: 0,
      critPower: 1,
      target: 'AoE',
    },
    basicAttack: {
      name: "Basic Attack",
      description: "just basic attack",
      attack: 100,
      critChance: 0.1,
      critPower: 2,
      target: 'single',
    },
  },
  legendary: {
    baseStats: {
      hp: 1500,
      defense: 130,
      speed: 85,
      evasion: 0.06,
    },
    ability: {
      name: 'Blade Storm',
      description: 'Unleash a deadly storm on all foes',
      attack: 700,
      critChance: 0.15,
      critPower: 1.6,
      target: 'AoE',
    },
    basicAttack: {
      name: "Basic Attack",
      description: "just basic attack",
      attack: 120,
      critChance: 0.15,
      critPower: 2.2,
      target: 'single',
    },
  },
};