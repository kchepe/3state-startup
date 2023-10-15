import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 10000000000000000, maxFiles: 10 }),
  );
  // app.enableCors({
  //   allowedHeaders: ['content-type'],
  //   origin: 'http://localhost:3001',
  //   credentials: true,
  // });
  await app.listen(3000);
}
bootstrap();
