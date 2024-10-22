import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  secondName: string;
  @ApiProperty()
  age: number;

  @IsEmail()
  @ApiProperty()
  email: string;
}
