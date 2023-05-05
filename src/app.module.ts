import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


//  Agregar los importes enmedio de estos comentarios
import { ClientsModule , Transport } from '@nestjs/microservices';
//  Agregar los importes enmedio de estos comentarios

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_CLIENT',
        transport: Transport.MQTT,
        options: {           // En  app.module.ts  se configura el cliente MQTT, en este caso se llama TEST_CLIENT(podemos cambiar el nombre a lo que sea)
          subscribeOptions: {qos: 1},
          url: 'mqtt://localhost:1883',
        }
      },
    ]), // ver los commentarios de app.controller.ts
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
