import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { IdInterceptor } from './utils/interceptors/id.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new IdInterceptor());
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle(`${process.env.APP_NAME} Docs`)
    .setDescription(`The ${process.env.APP_NAME} API description`)
    .setVersion(process.env.VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
