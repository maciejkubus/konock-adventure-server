import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { OwnedHeroModule } from './owned-hero/owned-hero.module';
import { GachaModule } from './gacha/gacha.module';

@Module({
  imports: [ConfigModule.forRoot(),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    AssetsModule,
    OwnedHeroModule,
    GachaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
