import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async createTask(title: string, userId: number): Promise<Task> {
    const task = this.create({ title, user: { id: userId } });
    return this.save(task);
  }

  async findAllTasks(): Promise<Task[]> {
    return this.find({ relations: ['user'] });
  }

  async markAsCompleted(taskId: number) {
    await this.update(taskId, { completed: true });
    return this.findOneBy({ id: taskId });
  }
}
