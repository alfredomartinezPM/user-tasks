import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(name: string): Promise<User> {
    const user = this.userRepository.createIfNotExists(name);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
