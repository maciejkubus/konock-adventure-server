import { Inject, Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { expeditions } from 'src/assets/expeditions/expeditions';
import { OwnedHeroService } from 'src/owned-hero/owned-hero.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { StartExpeditionDto } from './dto/start-expedition.dto';
import { Fight } from './fight/fight';

@Injectable()
export class ExpeditionService {
  constructor(
    @Inject('EXPEDITION_REPOSITORY')
    private expeditionResult: Repository<ExpeditionService>,
    private ownedHeroService: OwnedHeroService,
    private usersService: UsersService,
  ) {}

  findExpedition(expeditionId: number) {
    const expedition = expeditions.find(e => e.id == expeditionId);
    if(!expedition)
      throw new NotFoundError('Expedition doesnt exist');
    return expedition;
  }
  

  async startExpedition(expeditionId: number, userId: any, dto: StartExpeditionDto) {
    const user = await this.usersService.findOne(userId);
    const expedition = this.findExpedition(expeditionId);
    const team = [
      await this.ownedHeroService.getOneForFight(dto.front),
      await this.ownedHeroService.getOneForFight(dto.middle),
      await this.ownedHeroService.getOneForFight(dto.back),
    ];
    const fight = new Fight(expedition, team);

    return fight.getResults();
  }
}
