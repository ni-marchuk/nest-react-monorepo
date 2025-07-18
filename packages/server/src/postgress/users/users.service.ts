import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }
  async createUser(user: CreateUserDto): Promise<User> {
    const created = this.usersRepository.create(user);
    return this.usersRepository.save(created);
  }
}
