import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HeroTier } from 'src/assets/interfaces/hero.interface';
import { FuseHeroesDto } from './dto/fuse-heroes.dto';
import { OwnedHeroOwnershipGuard } from './guards/owned-hero-ownership.guard';
import { OwnedHeroService } from './owned-hero.service';

@Controller('owned-heroes')
@UseGuards(AuthGuard('jwt'))
export class OwnedHeroController {
  constructor(private readonly service: OwnedHeroService) {}

  @Get()
  async getMyHeroes(@Req() req) {
    const heroes = await this.service.findAllForUser(req.user.id);
    const stats = this.service.getStats(heroes);
    return {
      ...stats,
      heroes,
    }
  }

  @Post()
  addHero(@Req() req, @Body('heroId') heroId: string, @Body('tier') tier: HeroTier) {
    return this.service.addHeroToUser(req.user, heroId, tier);
  }

  @UseGuards(OwnedHeroOwnershipGuard)
  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.service.findOneById(id);
  }

  @Post('fuse')
  @UseGuards(AuthGuard('jwt'))
  async fuse(@Req() req, @Body() dto: FuseHeroesDto) {
    return this.service.fuse(req.user.id, dto);
  }
}
