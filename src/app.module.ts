import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from 'ormconfig';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

console.log(config);
@Module({
  imports: [TypeOrmModule.forRoot(config as TypeOrmModuleOptions), UsersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
