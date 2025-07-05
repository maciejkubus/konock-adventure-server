import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StartExpeditionDto } from './dto/start-expedition.dto';
import { ExpeditionService } from './expedition.service';

@Controller('expedition')
@UseGuards(AuthGuard('jwt'))
export class ExpeditionController {
  constructor(private readonly expeditionService: ExpeditionService) {}

  @Post('start/:id')
  startExpedition(
    @Param('id') id: number,
    @Body() dto: StartExpeditionDto,
    @Req() req
  ) {
    return this.expeditionService.startExpedition(id, req.user.id, dto);
  }
}