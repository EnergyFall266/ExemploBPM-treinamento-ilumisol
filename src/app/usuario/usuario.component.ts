import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  @Input() vp!: VP_BPM;
  public colaboradoresFiltrados : any[] = []
  public selecionar() {
    this.vp.numEmp = this.vp.colaborador.empresa
    this.vp.tipCol = this.vp.colaborador.tipoColaborador
    this.vp.numCad = this.vp.colaborador.cadastro

    console.log(this.vp.numEmp)
  }

  public colaboradorInput(event: any) {
    if(event){
      const query = event.query.toLowerCase()
      this.colaboradoresFiltrados = this.vp.colaboradores.filter(
        (col) =>
        col.nome.toLowerCase().includes(query) ||
        col.cadastro.toString().includes(query)
      )
    }
    else {
      this.colaboradoresFiltrados = this.vp.colaboradores
    }
  }
}
