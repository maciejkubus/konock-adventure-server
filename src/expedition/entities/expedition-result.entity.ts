import { OwnedHero } from 'src/owned-hero/entities/owned-hero.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ExpeditionResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  expeditionId: number;

  @Column()
  result: 'win' | 'loss';

  @Column('json')
  log: any; // tutaj logi z przebiegu walki

  @CreateDateColumn({ nullable: true })
  created?: Date;

  @UpdateDateColumn({ nullable: true })
  updated?: Date;

  @ManyToOne(() => OwnedHero, (ownedHeros) => ownedHeros.posFront)
  front: OwnedHero;

  @ManyToOne(() => OwnedHero, (ownedHeros) => ownedHeros.posMiddle)
  middle: OwnedHero;

  @ManyToOne(() => OwnedHero, (ownedHeros) => ownedHeros.posBack)
  back: OwnedHero;
}