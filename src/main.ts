import "./index.css";
import { CepService } from "./service";

// declaração das constantes e captura dos elementos html
const form = document.querySelector("#form");
const inputCep = <HTMLInputElement>document.querySelector("#inputCep");
const inputUF = <HTMLInputElement>document.querySelector("#inputUF");
const inputCity = <HTMLInputElement>document.querySelector("#inputCity");
const inputDistrict = <HTMLInputElement>(
  document.querySelector("#inputDistrict")
);

// função assíncrona que lida com o evento de submissão do formulário
async function handleSubmit(event: Event) {
  event.preventDefault();
  clearInputs();

  // instancia da classe de serviço que abstrai a comunicação com a api
  const cepService = new CepService();
  const dataCep = await cepService.getData(inputCep.value);

  //verificação se o dados nao vieram undefined
  if (dataCep?.uf && dataCep?.bairro && dataCep.localidade) {
    inputUF.value = String(dataCep.uf);
    inputCity.value = String(dataCep.localidade);
    inputDistrict.value = String(dataCep.bairro);
  }
}

function clearInputs() {
  inputUF.value = "";
  inputCity.value = "";
  inputDistrict.value = "";
}

form?.addEventListener("submit", (e) => handleSubmit(e));
