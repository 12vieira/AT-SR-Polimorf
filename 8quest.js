/*Enunciado:
Crie uma classificação de classes para representar notificações. Uma classe base
Notificacaodeve ter o método enviar. As classes derivadas Email, SMSe Pushdevem
sobrescrever o método para exibir mensagens específicas sobre como cada notificação
é enviada.
Crie instâncias de cada classe, armazene-as em um array e demonstre o polimorfismo ao
chamar o método enviarem cada instância.*/

class Notificacao {
    enviar(){
        throw new Error('deve ser subscrito')
    }
}

class Email extends Notificacao{
    enviar(){
        console.log("o Email se acessa pelo pc ou celular")
    }
}
class SMS extends Notificacao{
    enviar(){
        console.log("o SMS é enviado com o celular")
    }
}
class Push extends Notificacao{
    enviar(){
        console.log("o Push age com pop-ups");
    }
}
const device = [
    new Email(),
    new Push(),
    new SMS()
]
device.forEach((tool) => tool.enviar())