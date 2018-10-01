# Exercício NodeJS - Lista de Contatos

### 1) Crie um script que recebe três parâmetros na linha de comando: nome, sobrenome e email. Ao receber esses parâmetros, ele deve gerar um arquivo CSV com as mesmas colunas e inserir os dados do terminal nesse arquivo.

Comando:

`node index.js Jack Bauer jack@mastertech.tech`

Arquivo:

```
nome,sobrenome,email
Jack,Bauer,jack@mastertech.tech
```

### 2) Toda vez que o script for executado, deve-se acumular as informações do arquivo CSV.

Comandos:

`node index.js Jack Bauer jack@mastertech.tech`

`node index.js Chuck Norris chuck@mastertech.tech`

Arquivo:

```
nome,sobrenome,email
Jack,Bauer,jack@mastertech.tech
Chuck,Norris,chuck@mastertech.tech
```

### 3) Manter o arquivo ordenado alfabeticamente.

Comandos:

`node index.js Jack Bauer jack@mastertech.tech`

`node index.js Chuck Norris chuck@mastertech.tech`

`node index.js Charles Bronson charles@mastertech.tech`

Arquivo:

```
nome,sobrenome,email
Charles,Bronson,charles@mastertech.tech
Chuck,Norris,chuck@mastertech.tech
Jack,Bauer,jack@mastertech.tech
```
