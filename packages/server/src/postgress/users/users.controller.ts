import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<Array<User>> {
    return this.usersService.getAllUsers();
  }
  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.createUser(user);
  }
}
