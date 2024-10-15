import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public getAllUsers() {
    return this.users;
  }

  public getUserById(id: string) {
    return this.users.filter((user) => user.id === id);
  }

  public creteUser(userDto: CreateUserDto) {
    const newId = (this.users.length + 1).toString();
    const newUser = new User(
      newId,
      userDto.firstName,
      userDto.secondName,
      userDto.age,
      userDto.email,
    );

    this.users.push(newUser);
    return newUser;
  }
}
