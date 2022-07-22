import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PrismaModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
