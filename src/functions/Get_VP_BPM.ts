import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {


  vp.anexo_id = map.get('anexo_id');
  vp.nomeSolicitante = map.get('nomeSolicitante');


  return vp;
}
