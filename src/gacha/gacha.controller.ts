import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SummonDto } from './dto/summon-dto';
import { GachaService } from './gacha.service';

@Controller('gacha')
@UseGuards(AuthGuard('jwt'))
export class GachaController {
  constructor(private readonly gachaService: GachaService) {}

  @Post('summon')
  async summon(@Req() req, @Body() dto: SummonDto) {
    return this.gachaService.multiSummon(req.user.id, dto.count);
  }
}
