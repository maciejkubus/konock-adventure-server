import { Controller, Get } from '@nestjs/common';
import heroes from './heroes/heroes';

@Controller('assets')
export class AssetsController {
  @Get('heroes')
  getHeroes() {
    return heroes;
  }
}