import { Module } from '@nestjs/common';
import { OwnedHeroModule } from 'src/owned-hero/owned-hero.module';
import { UsersModule } from 'src/users/users.module';
import { GachaController } from './gacha.controller';
import { GachaService } from './gacha.service';

@Module({
  imports: [UsersModule, OwnedHeroModule],
  providers: [GachaService],
  controllers: [GachaController]
})
export class GachaModule {}
