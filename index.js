const fs = require('fs');

const nome = process.argv[2];
const sobrenome = process.argv[3];
const email = process.argv[4];

let cabecalho = 'nome,sobrenome,email';
let novaLinha = `${nome},${sobrenome},${email}`;

fs.readFile('dados.csv', {encoding: 'utf8'}, function(erro, dados){
    let linhas;
    
    if(!dados){
        linhas = [cabecalho, novaLinha];
    }else{
        linhas = dados.split('\n');

        for(let i = 1; i < linhas.length; i++){
            let linha = linhas[i];
    
            if(novaLinha < linha){
                linhas.splice(i, 0, novaLinha);
                inserido = true;
                break;
            }

            if(i == linhas.length - 1){
                linhas.push(novaLinha);
                break;
            }
        }
        
    }

    let csv = linhas.join('\n');

    fs.writeFile('dados.csv', csv, {flag: 'w'}, function(erro){
        if(erro){
            console.log(erro);
            return;
        }
    
        console.log('Arquivo salvo');
    });
});

console.log('oi');