import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

//  Agregar los importes enmedio de estos comentarios
import{ Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
//  Agregar los importes enmedio de estos comentarios

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) { }


  @MessagePattern('modulo1/sensores/#')
  sumData(@Payload() payload: number[] , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}____`);
    console.log("Payload: ", payload);
    console.log("Packet: ", context.getPacket());
    //this.appService.sumDataService(payload);
  }
}

