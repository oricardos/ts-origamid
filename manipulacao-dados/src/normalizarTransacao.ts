import currencyToNumber from "./currencyToNumber.js";

declare global {
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

    interface Trasacao {
        nome: string;
        id: number;
        data: string;
        status: TrasacaoStatus;
        email: string;
        moeda: string;
        valor: number | null;
        pagamento: TransacaoPagamento;
        novo: boolean;
    }
}

export default function normalizarTransacao(transacao: TransacaoAPI) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: currencyToNumber(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    }
}