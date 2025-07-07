import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity';
import { User } from './user/entities/user.entity';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [User, Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Task, User]),
    TaskModule,
    UserModule,
  ],
})
export class AppModule {}
