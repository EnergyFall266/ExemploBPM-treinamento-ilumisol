import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {


  vp.anexo_id = map.get('anexo_id');
  vp.nomeSolicitante = map.get('nomeSolicitante');
  vp.descricao = map.get('descricao')
  // vp.stringColaboradores = map.get('stringColaboradores')
  // if(vp.stringColaboradores)
  // vp.arrayColaboradores = JSON.parse('stringColaboradores')

  return vp;
}
