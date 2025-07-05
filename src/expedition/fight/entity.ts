import { Ability } from "src/assets/interfaces/ability.interface";
import { Effect } from "../interface/effect.interface";
import FightLogger from "./logger";

export class Entity {
  name: string;
  stats: {
    hp: number;
    maxHp: number;
    defense: number;
    evasion: number;
    energy: number;
    maxEnergy: number;
  }
  alive: boolean;
  skills: {
    utimate: Ability;
    basic: Ability;
  }
  effects: Effect[] = [];
  logger: FightLogger;

  constructor(name: string, stats: any, utimate: Ability, basicAttack: Ability, alive = true) {
    this.name = name;
    this.stats = stats;
    this.skills = {
      utimate,
      basic: basicAttack,
    }
    this.alive = alive;
  }

  setLogger(l: FightLogger) {
    this.logger = l;
  }

  evade() {
    const evastion = this.stats.evasion + this.effects.reduce((sum,e) => sum + e.evation, 0);
    const rand = Math.random();
    const evade = evastion > rand;
    this.logger.add('EVADE', this.name, evade ? 'Evaded' : 'Not Evaded');
    return evade;
  }

  checkIfDied() {
    if(this.stats.hp <= 0) {
      this.alive = false;
      this.logger.add('DEAD', this.name, 'Dead');
    }
  }

  takeDamage(dmg: number, penetration: number = 0) {
    if(!this.alive) return 0;
    if(this.evade()) return 0;

    let defence = this.skills.basic.defense - this.effects.reduce((sum,e) => sum + e.defense, 0);
    defence -= penetration*defence;
    let incoming = dmg - defence;
    if(incoming < 0) incoming = 0;

    this.stats.hp -= incoming;

    if(this.stats.hp < 0)
      this.stats.hp = 0;

    this.logger.add("DEFEND", this.name, 'Defended: ' + defence);
    this.logger.add("HP", this.name, 'HP: ' + this.stats.hp);

    this.checkIfDied();
  }

  createEffect(ability: Ability): Effect {
    return {
      ...ability
    }
  }

  updateEffects() {
    for (const [index, effect] of this.effects.entries()) {
      if(effect.attack > 0) {
        this.takeDamage(effect.attack)
        this.logger.add("EFFECTS", this.name, 'Effect damage');
      }

      effect.duration--;
      this.logger.add("EFFECTS", this.name, `Effect ${effect.name} left: ${effect.duration}`);

      if(effect.duration <= 0) {
        this.effects.splice(index, 1);
        this.logger.add("EFFECTS", this.name, `Effect ${effect.name} no longer working`);
      }
    }
  }

  addEffect(effect: Effect) {
    const index = this.effects.findIndex(e => e.name == effect.name);

    if(index > 0) {
      this.effects[index].duration += effect.duration;
      this.logger.add("EFFECTS", this.name, `Effect ${effect.name} left: ${effect.duration}`);
    }
    else {
      this.logger.add("EFFECTS", this.name, `New Effect ${effect.name} left: ${effect.duration}`);
      this.effects.push({ ...effect });
    }
  }

  heal(heal: number) {
    this.stats.hp += heal;
    if(this.stats.hp > this.stats.maxHp)
      this.stats.hp = this.stats.maxHp;

    this.logger.add("HP", this.name, `Healed to ${this.stats.hp}/${this.stats.maxHp}`);

    this.stats.energy += Math.floor(heal/10);
  }


  attack() {
    let key = 'basic'
    if(this.stats.energy >= 100) {
      this.stats.energy = 0;
      key = 'utimate';
    }

    const type = this.skills[key].heal > 0 ? 'heal' : 'dmg';
    let dmg = (type == 'dmg') ? this.skills[key].attack : this.skills[key].heal;
    const rand = parseFloat((Math.random() * 10).toFixed(2));
    if(this.skills[key].critChance > rand) {
      dmg *= this.skills[key].critPower;
    };

    this.stats.energy += Math.floor(dmg/10);
    const effect = this.skills[key].duration > 0 ? this.createEffect(this.skills[key]) : null;

    this.logger.add("ATTACK", this.name, `Attack ${key}/${type} damage: ${dmg} (${this.skills[key].target})`);

    return {
      dmg,
      target: this.skills[key].target,
      type,
      effect
    }
  }
}