import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//  Agregar los importes enmedio de estos comentarios
import{ Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
//  Agregar los importes enmedio de estos comentarios

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) { }


  @MessagePattern('ftf-input')
  sumData(@Payload() payload: number[] , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}___`);
    console.log("Payload: ", payload);
    console.log("Packet: ", context.getPacket());
    this.appService.sumDataService(payload);
  }
  
  @MessagePattern('ftf-output')
  logData(@Payload() payload: string, @Ctx() context: MqttContext): string {
    console.log(`___New message ${context.getTopic()}___`);
    console.log("Payload: ", payload); 
    console.log("Packet: ", context.getPacket());
    return payload+ `response from logdata() in -t ${context.getTopic()}`;
  }
  
}

