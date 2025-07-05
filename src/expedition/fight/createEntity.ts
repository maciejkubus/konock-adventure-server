import { dummnyAbility } from "src/assets/interfaces/ability.interface";
import { Enemy } from "src/assets/interfaces/enemy.interface";
import { Hero } from "src/assets/interfaces/hero.interface";
import { OwnedHero } from "src/owned-hero/entities/owned-hero.entity";
import { Entity } from "./entity";

export const createEntityBlank = (): Entity => {
const entity = new Entity(
    "",
    {
      hp: 0,
      maxHp: 0,
      defense: 0,
      evasion: 0,
      energy: 0,
      maxEnergy: 100,
    },
    
    dummnyAbility,
    dummnyAbility,
    false
  );

  return entity;
}

export const createEntityFromEnemy = (enemy: Enemy): Entity => {
  if(!enemy) 
    return null;
  
  const entity = new Entity(
    enemy.name,
    {
      hp: enemy.hp,
      maxHp: enemy.hp,
      defense: enemy.defense,
      evasion: enemy.evasion,
      energy: 0,
      maxEnergy: 100,
    },
    enemy.ability,
    enemy.basicAttack,
  );

  return entity;
}

export const createEntityFromHero = (hero: { 
  ownedHero: OwnedHero, hero: Hero 
}): Entity => {
  const tier = hero.ownedHero.tier;
  const stats = hero.hero[tier].baseStats;
  const entity = new Entity(
    hero.hero.name,
    {
      hp: stats.hp,
      maxHp: stats.hp,
      defense: stats.defense,
      evasion: stats.evasion,
      energy: 0,
      maxEnergy: 100,
    },
    hero.hero[tier].ability,
    hero.hero[tier].basicAttack,
  );

  return entity;
}