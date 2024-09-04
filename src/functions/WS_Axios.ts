import axios, { AxiosResponse } from 'axios';
import * as wsb from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';

const URL = environment.url_padrao;

export const exportaUsuarios = async (body: string) =>
  (
    await axios.post<
      AxiosResponse<any>,
      AxiosResponse<any>
    >(
      `https://senior.ilumisol.com.br:8183/SXI/G5Rest?server=https://senior.ilumisol.com.br:8183&module=rubi&service=ColaboradorAtivo&port=GetDados&useAlwaysArray=true`,
      body,
      wsb.ws_beans_header
    )
  ).data;


