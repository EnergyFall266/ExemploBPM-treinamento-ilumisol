import { Injectable } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';
import * as wsb from 'src/beans/WS_Beans';
import { ResponseLoadData } from 'src/beans/VP_BPM';
import { exportaG5 } from 'src/functions/WS_Axios';

const STEP = environment.tarefa();

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor() { }

  public async exportaWS(port: string, body: string = '') {
    let g5: wsb.G5Response;

    g5 = await exportaG5(port, body);

    const r: {
      totReg: number;
      msgRet: string;
      servicos: any[];
    } = { totReg: g5.qtdReg ?? 0, msgRet: g5.msgRet ?? '', servicos: g5.servicos ?? [] };

    return r
  }
}





