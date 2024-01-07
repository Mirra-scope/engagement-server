import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { StorageDriver, initializeTransactionalContext } from 'typeorm-transactional';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const logger = new Logger('Engagement.ts');
const port = +process.env.PORT || 8000;

async function bootstrap() {
  initializeTransactionalContext({ storageDriver: StorageDriver.AUTO });

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    logger: ['log', 'error', 'warn', 'debug', 'verbose', 'fatal'],
    options: {
      host: '0.0.0.0',
      port: port,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen();

  logger.log(`Movie app is listening on port ${port}`);
  logger.log(`Graphiql playground is available at http://127.0.0.1:${port}/graphql`);
}

bootstrap();
