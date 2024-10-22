import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

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
    return this.usersService.findOne(parseInt(id));
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.creteUser(userDto);
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
