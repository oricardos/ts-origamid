import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    fillTable(transacoes);
    fillStatistics(transacoes);
}
function filterValue(transacao) {
    return transacao.valor !== null;
}
function fillStatistics(transacoes) {
    const total = transacoes.filter(filterValue).reduce((acc, item) => {
        return acc + item.valor;
    }, 0);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerText = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
}
function fillTable(transacoes) {
    const table = document.querySelector('#transacoes tbody');
    if (!table)
        return;
    transacoes.forEach((transacao) => {
        table.innerHTML += `
            <tr>
                <td>${transacao.nome}</td>
                <td>${transacao.email}</td>
                <td>R$ ${transacao.moeda}</td>
                <td>${transacao.pagamento}</td>
                <td>${transacao.status}</td>
            </tr>
        `;
    });
}
handleData();
//# sourceMappingURL=script.js.map