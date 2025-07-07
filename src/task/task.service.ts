import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateTaskDto) {
    const user = await this.userRepo.findOneBy({ id: dto.userId });
    const task = this.taskRepo.create({ title: dto.title, user });
    return this.taskRepo.save(task);
  }

  findAll() {
    return this.taskRepo.find();
  }
}