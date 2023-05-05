import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//  Agregar los importes enmedio de estos comentarios


import { MicroserviceOptions , Transport } from '@nestjs/microservices';


//  Agregar los importes enmedio de estos comentarios


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, { //esto crea el microservicio de nestjs para poder correr MQTT
    transport: Transport.MQTT, // el metodo de tranporte de los datos es MQTT
    options: {
      subscribeOptions: {qos: 1}, // el QOS es el quality of service, esto no importa explicarlo
      url: 'mqtt://localhost:1883', // la url del broker MQTT, si fuera en la nube seria una url especifica o si fuera otro dispositivo fuera de la red local seria una ip.                 
    }, //ahora ir a app.module.ts
  });
  app.listen();
}
bootstrap();
