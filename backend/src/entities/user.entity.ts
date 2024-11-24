import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ default: 'student', type: 'enum', enum: ['student', 'tutor', 'admin'] })
  role: 'student' | 'tutor' | 'admin';

  @Column({ nullable: true })
  bio: string;

  @OneToOne(() => Address, { nullable: true, cascade: true })
  @JoinColumn()
  address: Address;
}
