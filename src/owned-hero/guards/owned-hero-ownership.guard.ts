import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OwnedHeroService } from '../owned-hero.service';

@Injectable()
export class OwnedHeroOwnershipGuard implements CanActivate {
  constructor(private readonly service: OwnedHeroService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const heroId = request.params.id;

    const hero = await this.service.findOneById(heroId);

    if (!hero) {
      throw new NotFoundException('OwnedHero not found');
    }

    if (hero.user.id !== user.userId) {
      throw new ForbiddenException('This is not your hero');
    }
    
    request.ownedHero = hero;

    return true;
  }
}