import { Controller, Get } from '@nestjs/common';
import { enemies } from './enemies/enemies';
import { expeditions } from './expeditions/expeditions';
import heroes from './heroes/heroes';

@Controller('assets')
export class AssetsController {
  @Get('heroes')
  getHeroes() {
    return heroes;
  }

  @Get('enemies')
  getEnemies() {
    return enemies;
  }

  @Get('expeditions')
  getExpeditions() {
    return expeditions;
  }
}