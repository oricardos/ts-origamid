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
    const semana = {
        ['Domingo']: 0,
        ['Segunda']: 1,
        ['Terça']: 2,
        ['Quarta']: 3,
        ['Quinta']: 4,
        ['Sexta']: 5,
        ['Sábado']: 6,
    };
    for (let i = 0; i < transacoes.length; i++) {
        const day = transacoes[i].data.getDay();
        switch (day) {
            case 0:
                semana['Domingo'] += 1;
                break;
            case 1:
                semana['Segunda'] += 1;
                break;
            case 2:
                semana['Terça'] += 1;
                break;
            case 3:
                semana['Quarta'] += 1;
                break;
            case 4:
                semana['Quinta'] += 1;
                break;
            case 5:
                semana['Sexta'] += 1;
                break;
            case 6:
                semana['Sábado'] += 1;
                break;
        }
    }
    const vendaValue = Object.entries(semana).sort((a, b) => {
        return b[1] - a[1];
    })[0];
    const vendaElement = document.querySelector('#venda span');
    if (vendaElement) {
        vendaElement.innerText = vendaValue[0];
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