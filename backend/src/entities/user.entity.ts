import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  birthDate: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}
