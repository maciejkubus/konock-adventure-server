import { Hero } from "../interfaces/hero.interface";

export const heroWarrior001: Hero = {
  id: 'hero_warrior_001',
  name: 'Korgul the Unbroken',
  tier: 'epic',
  baseStats: {
    hp: 1200,
    defense: 100,
    speed: 80,
    evasion: 0.05
  },
  ability: {
    name: 'Blade Storm',
    description: 'Spin and strike all enemies',
    attack: 500,
    critChance: 0,
    critPower: 1,
    target: 'AoE'
  },
  basicAttack: {
    attack: 100,
    critChance: 0.1,
    critPower: 2,
    target: 'single'
  }
};