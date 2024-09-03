import { Message } from 'primeng/api';

import * as wsb from './WS_Beans';

// Crie aqui todas as váriaveis de processo
export interface ResponseLoadData {
  initial: number;
  tabs: number[];
  vp: VP_BPM;
}

export class AnexoFile {
  file: File;
  bytes: ArrayBuffer;

  constructor(file: File, bytes: ArrayBuffer) {
    this.file = file;
    this.bytes = bytes;
  }
}

export class VP_BPM {
  public overlay: boolean = true;
  public Buscando_WS: boolean = true;

  public alertas: Message[] = [];

  public token: string = '';
  public user_fullName: string = '';


  public anexo_files: File[] = [];
  public anexo_id: string = '';
  public anexo_nome: string = 'nome';

  public testecheck: boolean = true

  public show_servicos: wsb.Servicos[] = [];
  public nomeSolicitante: string = '';

  public readonlyNomeSolicitante : boolean = false;
}

