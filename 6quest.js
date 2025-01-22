/*Enunciado:
Crie uma classificação de classes para representar ferramentas. Uma classe base
Ferramenta deve ter o método usar. As classes derivadas Martelo e
ChaveDeFenda devem Serrote sobrescrever o método para exibir mensagens
específicas sobre como são usadas.
Crie instâncias de cada classe, armazene-as em um array e itere chamando o método
usarem cada instância para demonstrar polimorfismo.*/

class Ferramenta {
    usar(){
        throw new Error('deve ser subscrito')
    }
}

class Martelo extends Ferramenta{
    mover(){
        console.log("o Martelo é usado para pregar pregos")
    }
}
class ChaveDeFenda extends Ferramenta{
    mover(){
        console.log("a Chave De Fenda usada para apertar ou folgar parafusos")
    }
}
class Serrote extends Ferramenta{
    mover(){
        console.log("o serrote serra madeira");
    }
}
const tools = [
    new Martelo(),
    new Serrote(),
    new ChaveDeFenda()
]
tools.forEach((tool) => tool.mover())