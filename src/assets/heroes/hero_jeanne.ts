import { Hero } from "../interfaces/hero.interface";

export const heroJeanne: Hero = {
  id: 'hero_joanna_001',
  name: "Jeanne d’Arc",
  description: 'Orléans hope',
  normal: {
    baseStats: { hp: 1050, defense: 90, speed: 65, evasion: 0.04 },
    ability: {
      name: 'Holy Blessing',
      description: 'Increases defense of allies',
      attack: 0,
      heal: 0,
      critChance: 0,
      critPower: 1,
      defense: 30,
      speed: 0,
      evation: 0,
      duration: 3,
      target: 'team',
    },
    basicAttack: {
      name: "Sword Strike",
      description: "Basic melee attack",
      attack: 75,
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
    baseStats: { hp: 1150, defense: 110, speed: 70, evasion: 0.05 },
    ability: {
      name: 'Inspiring Rally',
      description: 'Boosts attack of all allies',
      attack: 0,
      heal: 0,
      critChance: 0,
      critPower: 1,
      defense: 20,
      speed: 10,
      evation: 0,
      duration: 3,
      target: 'team',
    },
    basicAttack: {
      name: "Sword Strike",
      description: "Basic melee attack",
      attack: 90,
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
    baseStats: { hp: 1300, defense: 130, speed: 75, evasion: 0.06 },
    ability: {
      name: 'Divine Charge',
      description: 'Charges and deals AoE damage',
      attack: 400,
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
      name: "Sword Strike",
      description: "Basic melee attack",
      attack: 110,
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
    baseStats: { hp: 1500, defense: 160, speed: 80, evasion: 0.07 },
    ability: {
      name: 'Saint’s Wrath',
      description: 'Massive AoE holy damage',
      attack: 600,
      heal: 0,
      critChance: 0,
      critPower: 2.3,
      defense: 0,
      speed: 0,
      evation: 0,
      duration: 0,
      target: 'AoE',
    },
    basicAttack: {
      name: "Sword Strike",
      description: "Basic melee attack",
      attack: 130,
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
