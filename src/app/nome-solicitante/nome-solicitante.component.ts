import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-nome-solicitante',
  templateUrl: './nome-solicitante.component.html',
  styleUrls: ['./nome-solicitante.component.scss']
})
export class NomeSolicitanteComponent {
  @Input() vp!: VP_BPM;
}
