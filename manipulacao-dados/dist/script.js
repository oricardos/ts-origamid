import countBy from "./countBy.js";
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
function fillList(list, id) {
    const totalElement = document.getElementById(id);
    if (totalElement) {
        Object.keys(list).forEach(key => {
            totalElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
        });
    }
}
function fillStatistics(transacoes) {
    const totalValue = transacoes.filter(filterValue).reduce((acc, item) => {
        return acc + item.valor;
    }, 0);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerText = totalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    const totalPagamentoValue = countBy(transacoes.map(({ pagamento }) => pagamento));
    fillList(totalPagamentoValue, 'pagamento');
    const totalStatusValue = countBy(transacoes.map(({ status }) => status));
    fillList(totalStatusValue, 'status');
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