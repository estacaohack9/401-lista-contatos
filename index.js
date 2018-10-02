const fs = require('fs');

const nome = process.argv[2];
const sobrenome = process.argv[3];
const email = process.argv[4];

let cabecalho = 'nome,sobrenome,email\n';
let linha = `${nome},${sobrenome},${email}\n`;

fs.readFile('dados.csv', {encoding: 'utf8'}, function(erro, dados){
    let csv;

    if(erro){
        csv = cabecalho + linha;
    }else{
        csv = linha;
    }

    fs.writeFile('dados.csv', csv, {flag: 'a'}, function salvar(erro){
        if(erro){
            console.log(erro);
            return;
        }
    
        console.log('Arquivo salvo');
    });
});

console.log('oi');