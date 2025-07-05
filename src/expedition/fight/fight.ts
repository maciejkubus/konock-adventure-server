import { Expedition } from "src/assets/interfaces/expedition.interface";
import { TeamPositions } from "../interface/team-positions.interface";
import { Team } from "../interface/team.interface";
import { createEntityBlank, createEntityFromEnemy, createEntityFromHero } from "./createEntity";
import { Entity } from "./entity";
import FightLogger from "./logger";

export class Fight {
  expedition: Expedition;
  team: Team = {
    player: { front: null, middle: null, back: null },
    enemy: { front: null, middle: null, back: null }
  }
  turn = ['player','front'];
  logger: FightLogger;
  over = false;
  round = 0;

  constructor(expedition: Expedition, heroes: any[]){
    this.expedition = expedition;
    this.team.enemy.front = createEntityFromEnemy(expedition.enemies[0]);
    this.team.enemy.middle = expedition.enemies[1] ? createEntityFromEnemy(expedition.enemies[1]) : createEntityBlank();
    this.team.enemy.back = expedition.enemies[2] ? createEntityFromEnemy(expedition.enemies[2]) : createEntityBlank();
    this.team.player.front = createEntityFromHero(heroes[0]);
    this.team.player.middle = createEntityFromHero(heroes[1]);
    this.team.player.back = createEntityFromHero(heroes[2]);
    this.logger = new FightLogger();

    for (const teamKey in this.team) {
      for (const posKey in this.team[teamKey]) {
        const entity = this.team[teamKey][posKey];
        if(!entity) continue;
        entity.setLogger(this.logger);
      }
    }
    this.play();
  }

  chooseEntity(positions: TeamPositions) {
    const options = [];
    if(positions.front) options.push(positions.front);
    if(positions.middle) options.push(positions.middle);
    if(positions.back) options.push(positions.back);
    return options[Math.floor(Math.random()*options.length)];
  }

  lost(team: 'player' | 'enemy') {
      if(!this.team[team].front.alive && !this.team[team].back.alive && !this.team[team].middle.alive) {
        this.logger.add("FINISH", 'Systen', `${team} lost`);
        this.over = true;
        return false;
      }
  }

  play() {
    while(true) {
      const current: Entity | null = this.team[this.turn[0]][this.turn[1]];
      if(!current) { 
        continue;
      }
      current.updateEffects();
      const attack = current.attack();
      const key = (this.turn[0] == 'player') ? "enemy" : "player";

      //'AoE' | 'single' | 'self' | 'team'
      if(attack.target == "AoE") {
        for (const pos in this.team[key]) {
          for (const index of ['front', 'middle', 'back'] ) {
            pos[index].takeDamage(attack.dmg);
          }
        }
      }
      else if(attack.target == "single") {
        const entity = this.chooseEntity(this.team[key]);
        entity.takeDamage(attack.dmg);
      }
      else if(attack.target == 'self') {
        current.heal(attack.dmg)
      }
      else if(attack.target == 'team') {
        for (const entity of this.team[this.turn[0]][this.turn[1]]) {
            entity.heal(attack.dmg);
        }
      }
      this.round++;

      if(this.turn[0] == 'player') {
        this.turn[0] = 'enemy';
      }
      else {
        this.turn[0] = 'player';

      if(this.turn[1] == 'front')
        this.turn[1] = 'middle';
      else if(this.turn[1] == 'middle')
        this.turn[1] = 'back';
      else if(this.turn[1] == 'back')
        this.turn[1] = 'front';
      }

      this.logger.add("NEXT", 'Systen', `${this.turn[0]} ${this.turn[1]}`);

      this.lost('player');
      this.lost('enemy');

      if(this.over)
        break;
    }
  }

  getResults() {
    return this.logger.getAll();
  }
}