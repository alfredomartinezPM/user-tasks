import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { User } from '../user/entities/user.entity';
import { TaskRepository } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  providers: [TaskService, TaskRepository],
  controllers: [TaskController],
  exports: [TaskRepository],
})
export class TaskModule {}
