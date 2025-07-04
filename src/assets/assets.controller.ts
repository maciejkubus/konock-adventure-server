import { Controller, Get } from '@nestjs/common';
import { enemies } from './enemies/enemies';
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
}