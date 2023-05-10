import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

//  Agregar los importes enmedio de estos comentarios
import{ Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { PayloadModuloDTO, PayloadReservaAguaDTO } from './MQTT_dtos/Payload.dto';
//  Agregar los importes enmedio de estos comentarios

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) { }


  @MessagePattern('modulo1')
  executeSave1(@Payload() payload: PayloadModuloDTO , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}____`);
    console.log("Payload: ", payload);
  }
  @MessagePattern('modulo2')
  executeSave2(@Payload() payload: PayloadModuloDTO , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}____`);
    console.log("Payload: ", payload);
  }
  @MessagePattern('modulo3')
  executeSave3(@Payload() payload: PayloadModuloDTO , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}____`);
    console.log("Payload: ", payload);
  }
  @MessagePattern('modulo4')
  executeSave4(@Payload() payload: PayloadModuloDTO , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}____`);
    console.log("Payload: ", payload);

  }

  @MessagePattern('Reserva_Agua')
  executeSave5(@Payload() payload: PayloadReservaAguaDTO , @Ctx() context: MqttContext){
    console.log(`___New message ${context.getTopic()}____`);
    console.log("Payload: ", payload);
  }
}

