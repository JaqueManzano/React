const precos = [
    'Crédito',
    'R$ 400',
    'R$ 300',
    'Contas Pagar',
    'R$ 400',
    'R$ 750',
    'Meus dados'
]

const precosFiltrados = precos.filter((preco) => preco.includes('R$'));
const precosNumeros = precosFiltrados.map((preco) => Number(preco.replace('R$ ', '')))

console.log(precosNumeros);