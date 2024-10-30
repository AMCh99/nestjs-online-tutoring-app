import { Injectable } from '@nestjs/common';
// import { User } from './users';
import { CreateUserDto } from './dtos/user.dto';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from 'src/entities/address.entity';
import { CreateAddressDto } from './dtos/address.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
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
  async findUserWithAddress(userId: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['address'],
    });
  }

  async updateAddress(userId: number, updateAddressDto: CreateAddressDto): Promise<Address> {
    const user = await this.findUserWithAddress(userId);
    if (!user) throw new Error('User not found');

    const updatedAddress = await this.usersRepository.save({
      ...user.address,
      ...updateAddressDto,
    });

    return updatedAddress;
  }
}
