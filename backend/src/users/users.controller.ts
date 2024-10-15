import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.creteUser(userDto);
  }

  @Delete(':id')
  deleteUser(@Param() id: string) {
    return `${id} user deleted`;
  }
}
