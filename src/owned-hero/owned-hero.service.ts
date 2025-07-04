import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import heroes from 'src/assets/heroes/heroes';
import { HeroTier } from 'src/assets/interfaces/hero.interface';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { OwnedHero } from './entities/owned-hero.entity';

@Injectable()
export class OwnedHeroService {
  constructor(
    @Inject('OWNED_HEROES_REPOSITORY')
    private ownedHeroesRepository:Repository<OwnedHero>,
  ) {}

  async findAllForUser(userId: number): Promise<OwnedHero[]> {
    return this.ownedHeroesRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  async addHeroToUser(user: User, heroId: string, tier: HeroTier): Promise<OwnedHero> {
    if(!heroes.find(hero => hero.id == heroId))
      throw new NotFoundException('Hero doesnt exist');
    
    const newHero = this.ownedHeroesRepository.create({
      heroId,
      tier,
      user,
    });
    return this.ownedHeroesRepository.save(newHero);
  }

  async findOneById(id: number): Promise<OwnedHero | null> {
    return this.ownedHeroesRepository.findOne({ where: { id }, relations: ['user'] });
  }
}
