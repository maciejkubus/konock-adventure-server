import { HeroTier } from 'src/assets/interfaces/hero.interface';
import { ExpeditionResult } from 'src/expedition/entities/expedition-result.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @Column({type: "boolean", default: false})
  archived: boolean;

  @CreateDateColumn({ nullable: true })
  created?: Date;

  @UpdateDateColumn({ nullable: true })
  updated?: Date;

  @OneToMany(() => ExpeditionResult, (expeditionResult) => expeditionResult.front)
  posFront?: ExpeditionResult[];

  @OneToMany(() => ExpeditionResult, (expeditionResult) => expeditionResult.middle)
  posMiddle?: ExpeditionResult[];

  @OneToMany(() => ExpeditionResult, (expeditionResult) => expeditionResult.back)
  posBack?: ExpeditionResult[];
}
