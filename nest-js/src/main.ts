import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.API_PREFIX);

  // Swagger APIs
  const config = new DocumentBuilder()
    .setTitle('API Definition')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('Simple')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${process.env.API_PREFIX}/swagger`, app, document);

  // CORS
  const cors = {
    origin: ['*'],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
    exposedHeaders: ['Set-Cookie'],
  };
  app.enableCors(cors);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
