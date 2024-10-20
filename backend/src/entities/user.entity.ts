import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;  // Primary key, auto-generated

  @Column()
  firstName: string;  // Corresponds to firstName in the DTO

  @Column()
  secondName: string;  // Corresponds to secondName in the DTO

  @Column()
  age: number;  // Corresponds to age in the DTO

  @Column({ unique: true })
  email: string;  // Corresponds to email in the DTO (unique to prevent duplicates)
}
