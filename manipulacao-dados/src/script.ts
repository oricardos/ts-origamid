import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

type TransacaoValor = Transacao & { valor: number }

async function handleData() {
    const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?')
    if (!data) return;

    const transacoes = data.map(normalizarTransacao)
    fillTable(transacoes)
    fillStatistics(transacoes)
}

function filterValue(transacao: Transacao): transacao is TransacaoValor {
    return transacao.valor !== null
}

function fillStatistics(transacoes: Transacao[]): void {
    const total = transacoes.filter(filterValue).reduce((acc, item) => {
        return acc + item.valor
    }, 0)

    const totalElement = document.querySelector<HTMLElement>('#total span')

    if (totalElement) {
        totalElement.innerText = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }
}

function fillTable(transacoes: Transacao[]): void {
    const table = document.querySelector('#transacoes tbody')
    if (!table) return;

    transacoes.forEach((transacao) => {
        table.innerHTML += `
            <tr>
                <td>${transacao.nome}</td>
                <td>${transacao.email}</td>
                <td>R$ ${transacao.moeda}</td>
                <td>${transacao.pagamento}</td>
                <td>${transacao.status}</td>
            </tr>
        `
    })
}

handleData()

