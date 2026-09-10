import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get, Post } from '@nestjs/common';

@Controller()
class HealthController {
  @Get('health') health() { return { status: 'ok' }; }
  @Post('v1/feedback') feedback() { return { status: '待实现' }; }
}

@Module({ controllers: [HealthController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080, '0.0.0.0');
}
bootstrap();
