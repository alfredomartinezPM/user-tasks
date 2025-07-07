import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { User } from '../user/entities/user.entity';
import { TaskRepository } from './task.repository';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  providers: [TaskService, TaskRepository, UserRepository],
  controllers: [TaskController],
  exports: [TaskRepository],
})
export class TaskModule {}
