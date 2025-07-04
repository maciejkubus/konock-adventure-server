import { Injectable, UnauthorizedException } from '@nestjs/common';
import heroes from 'src/assets/heroes/heroes';
import { OwnedHeroService } from 'src/owned-hero/owned-hero.service';
import { UsersService } from 'src/users/users.service';
import { OwnedHero } from '../owned-hero/entities/owned-hero.entity';
import { rollTier } from './roll/rollTier';

@Injectable()
export class GachaService {
  constructor(
    private readonly userService: UsersService,
    private readonly ownedHeroService: OwnedHeroService
  ) {}

  async summon(userId: number): Promise<OwnedHero> {
    const user = await this.userService.findOne(userId);
    if (!user || user.summonScrolls <= 0) {
      throw new UnauthorizedException('Not enough summon scrolls');
    }

    // Losowy bohater
    const hero = heroes[Math.floor(Math.random() * heroes.length)];

    // Losowy tier (zgodny z tym jakie ma dostępne)
    const tier = rollTier();
    const ownedHero = this.ownedHeroService.addHeroToUser(user, hero.id, tier)

    await this.userService.update(user.id, {
      summonScrolls: user.summonScrolls - 1,
    });

    return ownedHero;
  }

  async multiSummon(userId: number, count: number){
    const user = await this.userService.findOne(userId);
    if (!user || user.summonScrolls < count) {
      throw new UnauthorizedException('Not enough summon scrolls');
    }

    const summonedHeroes: OwnedHero[] = [];

    for (let i = 0; i < count; i++) {
      const hero = await this.summon(userId)
      summonedHeroes.push(hero);
    }

    const stats = this.ownedHeroService.getStats(summonedHeroes);

    const heroes = this.ownedHeroService.getHeroesWithoutUser(summonedHeroes);

    return {
      stats,
      heroes,
    };
  }
}
