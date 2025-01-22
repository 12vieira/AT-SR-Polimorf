/*Enunciado:
Crie uma hierarquia de classes para diferentes tipos de contas bancárias. A classe base
ContaBancaria deve ter o método calcularJuros. Crie classes derivadas como
ContaPoupanca e ContaCorrente, sobrescrevendo esse método. No final, itere por uma
lista de contas, chamando o método de forma polimórfica.*/

class ContaBancaria {
    calcularJuros(){
        throw new Error('deve ser subscrito')
    }
}

class ContaPoupanca extends ContaBancaria{
    calcularJuros(){
        console.log("o juros da ContaPoupanca é 0.5% a.m ")
    }
}
class ContaCorrente extends ContaBancaria{
    calcularJuros(){
        console.log("o juros da ContaCorrente é 2.5% a.m")
    }
}

const counts = [
    new ContaPoupanca(),
    new ContaCorrente(),
    new ContaPoupanca(),
    new ContaCorrente()
]
counts.forEach((tool) => tool.calcularJuros())
