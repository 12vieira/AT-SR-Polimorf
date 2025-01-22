//Enunciado:
//Crie uma ordem de aulas para representar animais. Uma classe base Animal deve ter o
//método emitirSom. As classes derivadas Cachorro e Gato devem Passaro sobrescrever
//esse método para selecionar sons específicos.
//Instancie objetos de cada classe, armazene-os em um array e itere chame o método
//emitirSom para demonstrar polimorfismo.

class Animal{
    emitirSom(){
        throw new Error('deve ser reescrito');
    }
}
class Cachorro extends Animal{
    emitirSom(){
        console.log("o cachorro late")
    }
}
class Gato extends Animal{
    emitirSom(){
        console.log("o gato mia")
    }
}class Passaro extends Animal{
    emitirSom(){
        console.log("o passaro pia")
    }
}
const pets = [
    new Cachorro(),
    new Gato(),
    new Passaro(),
    new Gato(),
    new Cachorro(),
    new Passaro(),
    new Cachorro()
];
pets.forEach((animals) => animals.emitirSom())