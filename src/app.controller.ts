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

//  Aqui se definen los metodos que se van a usar en el microservicio en base al topico que se mande desde el cliente MQTT que publica los mensajes
  @MessagePattern('ftf-input')
  sumData(@Payload() payload: number[] , @Ctx() context: MqttContext){ // esto ordena los datos que se reciben en el payload y el contexto
    console.log(`___New message ${context.getTopic()}___`);
    console.log("Payload: ", payload);
    console.log("Packet: ", context.getPacket());
    this.appService.sumDataService(payload); //esto manda el payload(mensaje) hacia el servicio(funcion) que se creo en app.service.ts (ahora ver comentarios en app.service.ts)
  }

  @MessagePattern('ftf-output') //como en app.service.ts se manda el mensaje al topico ftf-output, aqui se recibe el mensaje
  logData(@Payload() payload: string, @Ctx() context: MqttContext): string {
    console.log(`___New message ${context.getTopic()}___`); //esto imprime en consola el topico del mensaje
    console.log("Payload: ", payload); 
    console.log("Packet: ", context.getPacket());
    return payload+ `response from logdata() in -t ${context.getTopic()}`; //esto regresa el mensaje que se recibio
  }
}
