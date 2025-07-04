import { DataSource } from 'typeorm';
import { OwnedHero } from './entities/owned-hero.entity';

export const ownedHeroesProviders = [
  {
    provide: 'OWNED_HEROES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OwnedHero),
    inject: ['DATA_SOURCE'],
  },
];
