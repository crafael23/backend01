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
        options: {
          subscribeOptions: {qos: 1},
          url: 'mqtt://localhost:1883',
        }
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
