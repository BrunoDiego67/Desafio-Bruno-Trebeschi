function valoresDaCompra (formasDePagamento, itens) {
    const cardapio = {
        cafe : 3.00,
        chantily : 1.50,
        suco : 6.20,
        sanduiche : 6.50,
        queijo : 2.00,
        salgado : 7.25,
        combo1 : 9.50,
        combo2 : 7.50,
    };

    const formasDePagamentoValidos = ['dinheiro', 'debito', 'credito'];

    if(!formasDePagamentoValidos.includes(formasDePagamento)) {
        return "Forma de pagamento inválida!"
    }

    let totalCompra = 0

    for(let intemIfo of itens) {
        const [codigo, quantidade] = intemIfo.split(',')

        if (!cardapio[codigo]) {
            return "Item inválido"
        }
        if (codigo === 'chantily' || codigo === 'queijo') {
            const itemPrincipal = codigo === 'chantily' ? 'cafe' : 'sanduiche' ;
            if (!itens.includes(`${itemPrincipal},${quantidade}`)) {
                return "Item extra não pode ser pedido sem o principal"
            }
        }
      
         totalCompra += cardapio[codigo] * quantidade
    }

    if (totalCompra === 0) {
        return "Quantidade inválida"
    }

    if (formasDePagamento === 'dinheiro') {
        totalCompra *= 0.95
    } else if (formasDePagamento === 'credito') {
        totalCompra *= 1.03
    }
    
    return `R$ ${totalCompra.toFixed(2)}`
}

console.log(valoresDaCompra('debito', ['chantily, 1']))
console.log(valoresDaCompra('debito', ['cafe,1', 'chantily,1']))
console.log(valoresDaCompra('credito', ['combo1,1','cafe,2']))