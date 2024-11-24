import { IsEmail, IsEnum, IsNotEmpty, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Username of the user',
  })
  userName: string;

  @ApiProperty({
    description: 'First name of the user',
  })
  firstName: string;

  @ApiProperty({
    description: 'Second name of the user',
  })
  secondName: string;

  @ApiProperty({
    description: 'Birth date of the user',
    type: Date,
  })
  birthDate: Date;

  @IsEmail()
  @ApiProperty({
    description: 'Email address of the user',
  })
  email: string;

  @IsStrongPassword()
  @ApiProperty({
    description: 'Password for the user account',
  })
  password: string;

  @IsEnum(['student', 'tutor', 'admin'], {
    message: 'Role must be either student, tutor, or admin',
  })
  @ApiProperty({
    description: 'Role of the user (student, tutor, or admin)',
    enum: ['student', 'tutor', 'admin'],
  })
  role: 'student' | 'tutor' | 'admin';
}
