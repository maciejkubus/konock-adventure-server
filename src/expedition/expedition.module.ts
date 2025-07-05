import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OwnedHeroModule } from 'src/owned-hero/owned-hero.module';
import { UsersModule } from 'src/users/users.module';
import { ExpeditionController } from './expedition.controller';
import { expeditionsProviders } from './expedition.providers';
import { ExpeditionService } from './expedition.service';

@Module({
  imports: [DatabaseModule, OwnedHeroModule, UsersModule],
  controllers: [ExpeditionController],
  providers: [ExpeditionService, ...expeditionsProviders],
})
export class ExpeditionModule {}
