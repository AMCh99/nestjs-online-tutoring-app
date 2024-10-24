import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  firstName: string;
  @ApiProperty()
  secondName: string;
  @ApiProperty()
  age: number;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
