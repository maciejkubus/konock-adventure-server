import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from 'src/users/users.module';
import { OwnedHeroController } from './owned-hero.controller';
import { ownedHeroesProviders } from './owned-hero.providers';
import { OwnedHeroService } from './owned-hero.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  exports: [OwnedHeroService],
  providers: [OwnedHeroService, ...ownedHeroesProviders],
  controllers: [OwnedHeroController]
})
export class OwnedHeroModule {}
