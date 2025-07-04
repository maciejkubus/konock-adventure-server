import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import {
  Column,
  CreateDateColumn,
  Entity,
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
