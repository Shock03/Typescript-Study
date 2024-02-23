/* EXEMPLO 1:
--> Indicando explicitamente o tipo de dado do parametro, tipando os parametros da função.
function mostrarNome (name: string){
    alert(name)
}

--> Caso fosse passado um number, iria indicar um erro, pois o parametro está tipado como STRING.
mostrarNome('Breno')
*/


/* EXEMPLO 2:
--> Indicando explicitamente o tipo de dado dessa minha variável.
let idade: number = 26

--> Reatribuindo o valor da variável sem problemas, pois foi indicado que ela é do tipo NUMBER.
idade = 30
*/






/* TIPOS DE DADOS:
--> STRING
const nome: string = 'Breno'

--> BOOLEAN
const nome: boolean = true

--> NUMBER
const nome: number = 26

--> ARRAY de numbers - (outra maneira de tipar um array de number) Array<number>
const nome: number[] = [2,2,2,2,2]

--> ARRAY de strings - (outra maneira de tipar um array de string) Array<string>
const nome: string[] = ['Breno','Arlete','Emma','Cavi']

--> TUPLE (utilizado quando temos arrays de tipos diferentes e já sabemos a qtde de itens dentro dele)
const nome: [string, number, boolean] = ['Breno', 26, true]

--> NULL e UNDEFINED (Mesma coisa do Javascript)

--> OBJECT (Tipar objetos)
-> Utilizamos o type para ficar mais organizado nosso código (tipo pessoa)
type pessoa = {
    nome: string,
    idade: number,
    cidade: string
}

let pessoa: pessoa = {
    nome: "Breno",
    idade: 26,
    cidade: 'Belém'
}

--> ENUM (utilizado para n ter risco de escrevermos um certo valor de maneira errada, evitar erros de escrita)
enum cores {
    WHITE = '#FFF',
    BLACK = '#000',
    GRAY = 'F2F2F2'
}
cores.BLACK

--> ANY (Vai ignorar toda a tipagem de um dado específico) - Não aconselhável
let nome: any = 'Breno'
nome = 26
-> Não vai apresentar erro pois o ANY vai anular qualquer tipagem, ou seja, aquela váriavel pode ser de qualquer tipo.


--> VOID (utilizado para tipar funções que n tem retorno/return)
*/






/* INTERFACES: (Nada mais é que outra forma de tipar objetos)

interface endereco {
    cidade: string,
    estado: string
}

interface pessoa {
    nome: string,
    idade: number,
    endereco: endereco
}

let pessoa: pessoa = {
    nome: "Breno",
    idade: 26,
    endereco: {
        cidade: 'Belem',
        estado: 'PA'
    }

}
*/






/* UNION & ALIASES:
--> UNION: (serve p/ indicar que um determinado dado pode ser de um tipo ou de outro tipo. Utiliza o sinal | ).

interface ocupacao {
    trabalho: string,
    local: string
}

interface pessoa {
    name: string,
    idade: number,
    cidade: string
}

-> O objeto pessoa pode ter 2 tipos de interfaces nesse caso, pessoa ou ocupacao.
const pessoa: pessoa | ocupacao = {
    name: 'Breno',
    idade: 26,
    cidade: 'Belem'
}

-> Serve tbm para coisas mais simples.
const qualquer: number | string | boolean = true


--> ALIASES: (Serve para unir dois tipos ou mais de dados diferentes).
interface ocupacao {
    trabalho: string,
    local?: string      --> Sinal de interrogação para dizer que ele é opcional, pode ou não existir dentro do objeto.
}

interface pessoa {
    name: string,
    idade: number,
    cidade: string
}

-> Está unindo as interfaces ocupacao e pessoa. Utiliza-se o sinal &.
type dados = ocupacao & pessoa

const pessoa: dados = {
    name: 'Breno',
    idade: 26,
    cidade: 'Belem',
    trabalho: 'Programador',
    local: 'Remoto'
}
*/



