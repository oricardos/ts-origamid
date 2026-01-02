import fetchData from "./fetchData.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TrasacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";

interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TrasacaoStatus;
    Email: string;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
    ['Forma de Pagamento']: TransacaoPagamento;
}

async function handleData() {
    const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json')
    console.log(data)
}

handleData()

