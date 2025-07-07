import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  findPendingTasksByUser(userId: number) {
    return this.find({
      where: {
        user: { id: userId },
        completed: false,
      },
      order: {
        dueDate: 'ASC',
      },
    });
  }

  async markAsCompleted(taskId: number) {
    await this.update(taskId, { completed: true });
    return this.findOneBy({ id: taskId });
  }
}
