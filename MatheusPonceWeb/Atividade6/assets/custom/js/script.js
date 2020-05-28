var Aluno1 = new Object();
Aluno1.RA = '0030481723044';
Aluno1.Nome = 'Matheus Pònce';

var Aluno2 = {
    RA: '0030481723064',
    Nome: 'Lancelot Silva'
}

var Aluno3 = new Object();
Aluno3['RA'] = '0030481723054'
Aluno3['Nome'] = 'Beckhan Miester'



function mostraObjetos(obj) {
    for(var n in obj) {
document.write('<div>');
document.write('    <div>' + n + '</div><div>' + obj[n] + '</div>');
document.write('</div>');
    }
}