//Enunciado:
//Implemente uma classificação de classes para representar métodos de pagamento. Uma
//classe base Pagamentodeve conter um método processarPagamento, que é sobrescrito
//pelas classes derivadas CartaoDeCredito, Boletoe Pix.
//Cada classe derivada deve exibir uma mensagem específica no método
//processarPagamento. Crie instâncias de cada classe, armazene-as em um array e itere
//chame o método processarPagamentopara demonstrar polimorfismo.

class Pagamentodeve {
    processarPagamento(){
        throw new Error("O método 'processarPagamento' precisa ser sobrescrito!");
    }
}

class CartaoDeCredito extends Pagamentodeve{
    processarPagamento(){
        console.log('O pagamento será feito no Cartão de Crédito')
    }
}
class Boleto extends Pagamentodeve{
    processarPagamento(){
        console.log('O pagamento será feito no Boleto')
    }
}
class Pix extends Pagamentodeve{
    processarPagamento(){
        console.log('O pagamento será feito no Pix')
    }
}

const pagamentos = [
    new Pix(),
    new CartaoDeCredito(),
    new Boleto(),
    new Boleto(),
    new Pix(),   
    new Boleto(), 
    new CartaoDeCredito(),
    new Boleto(),
    new Pix()
]
pagamentos.forEach((pagar) => {pagar.processarPagamento()});
