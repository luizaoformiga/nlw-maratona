// EXEMPLO DE 'TIPAGEM' DO TYPESCRIPT

interface diceFromPostEmail {
    id: Number,
    forEmail: String,
    converseInformation: String,
    textInformation: String 
}

function postEmail({ id, forEmail, converseInformation, textInformation }: diceFromPostEmail) {
    console.log(
        id,
        forEmail,
        converseInformation,
        textInformation
    );
}

class postEmailForUser {
 send() {
    postEmail({
        id: 8009,
        forEmail: "gina543@hotbailw.com",
        converseInformation: "Hello, how are you?",
        textInformation: "You need to ckeck in New York!" 
    });
 }
}



// COMO PODEMOS VER, ELE AJUDA MUITO NO CLEAN CODE, E DE COMO ORGANIZAR MELHOR O NOSSO CÓDIGO, NOS FAZENDO ENTENDER MELHOR O QUE ACONTECE POR DEBAIXO DOS PANOS.