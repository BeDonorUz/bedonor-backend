import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { DonationsModule } from './donations/donations.module';
import { IdMiddleware } from './utils/middlewares/id.middleware';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [UsersModule, PrismaModule, DonationsModule, CitiesModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdMiddleware).forRoutes('*');
  }
}
