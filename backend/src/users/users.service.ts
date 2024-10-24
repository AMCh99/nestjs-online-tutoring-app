import { Injectable } from '@nestjs/common';
// import { User } from './users';
import { CreateUserDto } from './dtos/user.dto';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  public findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  public findOneByUserName(userName: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ userName });
  }

  public async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  public async creteUser(userDto: CreateUserDto) {
    const newUser = this.usersRepository.create(userDto);

    return await this.usersRepository.save(newUser);
  }
}
