import { HeroTier } from 'src/assets/interfaces/hero.interface';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OwnedHero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  heroId: string; // np. "hero_warrior_001"

  @Column({ type: 'varchar' })
  tier: HeroTier;

  @ManyToOne(() => User, (user) => user.ownedHeroes)
  user?: User;
}
