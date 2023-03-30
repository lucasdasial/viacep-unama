import axios from "axios";

export interface IResponseGetCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

//classe responsável por implementar a comunicação com a api
export class CepService {
  async getData(cep: string) {
    const urlApi = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const result = await axios.get<IResponseGetCep>(urlApi);
      return result.data;
    } catch (error) {
      alert("Cep inválido");
    }
  }
}
