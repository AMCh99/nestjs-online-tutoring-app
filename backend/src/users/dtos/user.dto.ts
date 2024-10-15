import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  firstName: string;
  secondName: string;
  age: number;
  @IsEmail()
  email: string;
}
