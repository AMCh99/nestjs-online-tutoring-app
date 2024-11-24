import { Controller, Get, Post, Param, Body, Delete, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({
    description: 'Get all users.',
  })
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({
    description: 'Get user by id.',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The ID of the user to retrieve',
    example: '1',
  })
  @Get(':id')
  getUserById(@Param() id: string) {
    return this.usersService.findOneById(parseInt(id));
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.creteUser(userDto);
  }

  @ApiOkResponse({
    description: 'Get users by role.',
  })
  @ApiQuery({
    name: 'role',
    type: 'string',
    description: 'The role to filter users by.',
    example: 'tutor',
  })
  @Get('/role')
  findUsersByRole(@Query('role') role: 'student' | 'tutor' | 'admin') {
    return this.usersService.findUsersByRole(role);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The ID of the user to remove.',
    example: '1',
  })
  deleteUser(@Param() id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
