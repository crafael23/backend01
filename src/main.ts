import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//  Agregar los importes enmedio de estos comentarios


import { MicroserviceOptions , Transport } from '@nestjs/microservices';


//  Agregar los importes enmedio de estos comentarios


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.MQTT,
    options: {
      subscribeOptions: {qos: 1},
      url: 'mqtt://localhost:1883',
    },
  });
  app.listen();
}
bootstrap();
