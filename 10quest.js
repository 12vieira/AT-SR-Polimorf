/*Enunciado:
Implemente uma hierarquia de classes para representar dispositivos eletrônicos. A
classe base Eletronico deve ter o método ligar. Crie classes derivadas como Smartphone
e Notebook, sobrescrevendo esse método. Armazene objetos dessas classes em um
array e itere chamando o método ligar.*/

class Eletronico {
    ligar(){
        throw new Error('deve ser subscrito')
    }
}

class Smartphone extends Eletronico{
    ligar(){
        console.log("smartphone está descarregando")
    }
}
class Notebook extends Eletronico{
    ligar(){
        console.log("smartphone está carregado")
    }
}

const device = [
    new Smartphone(),
    new Notebook(),
    new Smartphone(),
    new Notebook()
]
device.forEach((tool) => tool.ligar())
