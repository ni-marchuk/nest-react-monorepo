import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // удалит лишние поля
      forbidNonWhitelisted: true, // выкинет 400 если лишние поля
      transform: true, // преобразует типы (например, строку "true" в boolean)
    }),
  );
  await app.listen(8000, '0.0.0.0');
}

bootstrap();

// auth docs https://docs.nestjs.com/recipes/passport
