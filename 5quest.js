/*Enunciado:
Crie uma hierarquia de classes para representar meios de transporte. Uma classe base
Transportedeve ter o método mover. As classes derivadas Carroe Bicicletadevem
Aviaosobrescrever esse método para exibir mensagens específicas sobre como se
mover.
Crie instâncias de cada classe, armazene-as em um array e utilize um loop para chamar o
método moverem cada instância, demonstrando polimorfismo*/

class Transporte {
    mover(){
        throw new Error('precisa ser sobrescrito')
    }
}
class Carro extends Transporte{
    mover(){
        console.log("o carro anda pela rodovia")
    }
}
class Bicicleta extends Transporte{
    mover(){
        console.log("a bicicleta anda pela ciclovia")
    }
}
class Aviao extends Transporte{
    mover(){
        console.log("o avião voa pelos ares");
    }
}
const transportation = [
    new Carro(),
    new Aviao(),
    new Bicicleta()
]
transportation.forEach((transport) => transport.mover())