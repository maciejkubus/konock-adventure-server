import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { OwnedHero } from 'src/owned-hero/entities/owned-hero.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique identifier' })
  id?: number;

  @Column('text')
  @Unique(['username'])
  @ApiProperty({ example: 'john_doe', description: 'User name' })
  username: string;

  @Column('text', { select: false })
  password: string;

  @Column('text')
  @Unique(['email'])
  @ApiProperty({ example: 'user@domain.com', description: 'User email' })
  email: string;

  @Column('text', { default: 'user' })
  role: string;

  @Column('text')
  @CreateDateColumn()
  @ApiProperty({
    example: '2023-06-04T22:42:33.278Z',
    description: 'User created date',
  })
  created?: Date;

  @UpdateDateColumn()
  @ApiProperty({
    example: '2023-06-04T22:42:33.278Z',
    description: 'User last updated date',
  })
  updated?: Date;

  @Column({ default: 0 })
  gold: number;

  @Column({ default: 0 })
  summonScrolls: number;

  @Column({ default: 0 })
  xp: number;

  @Column({ default: 1 })
  level: number;

  @OneToMany(() => OwnedHero, (ownedHero) => ownedHero.user)
  ownedHeroes: OwnedHero[];

  private tempPassword?: string;

  // @AfterLoad()
  // private loadTempPassword(): void {
  //   this.tempPassword = this.password;
  // }

  // @BeforeInsert()
  // @BeforeUpdate()
  // private encryptPassword(): void {
  //   if (this.tempPassword !== this.password) {
  //     this.password = hashSync(this.password, 8);
  //   }
  // }

  public hashPassword(password: string): void {
    this.password = hashSync(password, 8);
  }
}
