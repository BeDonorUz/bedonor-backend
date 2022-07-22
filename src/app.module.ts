import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from 'ormconfig';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DonationsModule } from './donations/donations.module';
import { IdMiddleware } from './utils/middlewares/id.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(config as TypeOrmModuleOptions),
    UsersModule,
    PrismaModule,
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdMiddleware).forRoutes('*');
  }
}
