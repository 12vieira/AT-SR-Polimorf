/*Enunciado:
Crie uma classificação de classes para representar dispositivos eletrônicos. Uma classe
base Dispositivodeve ter o método ligar. As classes derivadas Celulare
Tabletdevem Notebooksobrescrever esse método para exibir mensagens específicas
sobre como cada dispositivo está conectado.
Crie instâncias de cada classe, armazene-as em um array e utilize um loop para
demonstrar polimorfismo ao chamar o método ligar.*/

class Dispositivo {
    ligar(){
        throw new Error('deve ser subscrito')
    }
}

class Celular extends Dispositivo{
    ligar(){
        console.log("o Celular faz chamadas de voz sem internet")
    }
}
class Tablet extends Dispositivo{
    ligar(){
        console.log("o tablet faz chamadas de voz com ou sem internet")
    }
}
class Notebook extends Dispositivo{
    ligar(){
        console.log("o Notebook faz chamadas de video com internet");
    }
}
const device = [
    new Celular(),
    new Notebook(),
    new Tablet()
]
device.forEach((tool) => tool.ligar())
