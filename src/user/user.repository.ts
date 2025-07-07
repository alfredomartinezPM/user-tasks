import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findById(id: number): Promise<User | null> {
    return this.findOneBy({ id });
  }

  async findByName(name: string): Promise<User | null> {
    return this.findOneBy({ name });
  }

  async createIfNotExists(name: string): Promise<User> {
    let user = await this.findByName(name);
    if (!user) {
      user = this.create({ name });
      await this.save(user);
    }
    return user;
  }
}
