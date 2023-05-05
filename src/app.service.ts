import { Inject, Injectable } from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import { ClientProxy , MqttRecordBuilder } from '@nestjs/microservices';
//  Agregar los importes enmedio de estos comentarios

@Injectable()
export class AppService {
  constructor(
    @Inject('TEST_CLIENT') private client: ClientProxy,
    ) { }

    sumDataService(payload:number[]){
      const response= payload.reduce(( a , b) => a + b , 0 );  // esto reduce los datos que se reciben en el payload a soolo los datos que queremmos, en este caso la suma de los datos
      const record= new MqttRecordBuilder(`${response}`)// esto crea un nuevo mensaje con el resultado de la suma
        .setQoS(1)
        .build();
      
      this.client.send('ftf-output', record).subscribe(res=>{  // esto envia el mensaje al topico ftf-output
        console.log('Response output: <', res, '>'); // esto imprime en consola el mensaje que se envio
      });
    }
    //Ahora ver otravez app.controller.ts
}

