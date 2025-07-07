import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class TaskService {
  constructor(
    private taskRepository: TaskRepository,
    private userRepository: UserRepository,
  ) {}

  async create(dto: CreateTaskDto) {
    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      throw new Error('User not found');
    }
    const task = this.taskRepository.createTask(dto.title, user.id);
    return task;
  }

  findAll() {
    return this.taskRepository.findAllTasks();
  }
}
