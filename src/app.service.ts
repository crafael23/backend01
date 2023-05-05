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
      const response= payload.reduce(( a , b) => a + b , 0 );
      const record= new MqttRecordBuilder(`${response}`)
        .setQoS(1)
        .build();
      
      this.client.send('ftf-output', record).subscribe(res=>{
        console.log('Response output: <', res, '>');
      });
    }
  
}

