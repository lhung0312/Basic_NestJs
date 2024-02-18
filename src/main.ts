import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const configService = app.get(ConfigService);

  app.useStaticAssets(join(__dirname, '..', 'public')); 
  // asset giup truy cap vao js css img
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  /// view store view engine
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
