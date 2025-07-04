import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import heroes from 'src/assets/heroes/heroes';
import { HeroTier } from 'src/assets/interfaces/hero.interface';
import { User } from 'src/users/entities/user.entity';
import { In, Repository } from 'typeorm';
import { FuseHeroesDto } from './dto/fuse-heroes.dto';
import { OwnedHero } from './entities/owned-hero.entity';

@Injectable()
export class OwnedHeroService {
  constructor(
    @Inject('OWNED_HEROES_REPOSITORY')
    private ownedHeroesRepository:Repository<OwnedHero>,
  ) {}

  getHeroesWithoutUser(heroes: OwnedHero[]) {
    const filtered: OwnedHero[] = [];
    for (const hero of heroes) {
      filtered.push({
        id: hero.id,
        heroId: hero.heroId,
        tier: hero.tier,
      });
    }
    return filtered;
  }

  async findAllForUser(userId: number): Promise<OwnedHero[]> {
    return this.ownedHeroesRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  getStats(heroes: OwnedHero[]) {
    const stats = {
      count: 0,
      rarities: {
        normal: 0,
        rare: 0,
        epic: 0,
        legendary: 0
      }
    }

    for (const hero of heroes) {
      stats.count++;
      stats.rarities[hero.tier]++;
    }

    return stats;
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

  async fuse(userId: number, dto: FuseHeroesDto): Promise<OwnedHero> {
    const heroes = await this.ownedHeroesRepository.find({
      where: {
        id: In(dto.ownedHeroIds),
      },
      relations: ['user'],
    });

    if (heroes.length !== dto.ownedHeroIds.length) {
      throw new BadRequestException('Some heroes not found');
    }

    // Weryfikacja własności
    if (heroes.some(h => h.user.id !== userId)) {
      throw new UnauthorizedException('Not your heroes');
    }

    const [first] = heroes;

    // Weryfikacja zgodności
    if (!heroes.every(h => h.heroId === first.heroId && h.tier === first.tier)) {
      throw new BadRequestException('All heroes must be the same ID and tier');
    }

    // Sprawdź wymagania ilościowe
    const tierOrder = ['normal', 'rare', 'epic', 'legendary'] as const;
    const currentTierIndex = tierOrder.indexOf(first.tier as any);
    const requiredCount = currentTierIndex + 2;

    if (heroes.length !== requiredCount) {
      throw new BadRequestException(`You need ${requiredCount} heroes for fusion`);
    }

    // Nowy tier
    const nextTier = tierOrder[currentTierIndex + 1];
    if (!nextTier) {
      throw new BadRequestException('Cannot fuse at max tier');
    }

    // Usuń stare
    await this.ownedHeroesRepository.remove(heroes);

    // Dodaj nowego
    const fused = this.ownedHeroesRepository.create({
      heroId: first.heroId,
      tier: nextTier,
      user: first.user,
    });

    return this.ownedHeroesRepository.save(fused);
  }
}
