var quad = function(a, b) {
    var btn = document.getElementById("calcular");
    btn.onclick = function() {
        var x = document.getElementById("ladoA").value;
        var y = document.getElementById("ladoB").value;
        document.getElementById("resultado").innerHTML += '' + parseFloat(x) * parseFloat(y) + '';
    }
}

var Conta = function() {
    this.nome = '',
    this.banco = '',
    this.agencia = '',
    this.numero = '',
    this.saldo = ''
}

var Corrente = new Conta();
var Poupanca = new Conta();

Corrente.saldoEspecial = '';
Poupanca.juros = '';
Poupanca.dtVencim = '';

var cc = Object.create(Corrente);
var cp = Object.create(Poupanca);

cc.tipo = 'Corrente';
cc.nome = 'Joao Robo';
cc.banco = 'Itau S/A';
cc.agencia = '51-931';
cc.numero = '726.512-21';
cc.saldo = '4812740.12';
cc.saldoEspecial = '' + (parseFloat(cc.saldo) * 0.33).toFixed(2) + '';

cp.tipo = 'Poupanca';
cp.nome = 'Yuzo Bonnati';
cp.banco = 'Santander S/A';
cp.agencia = '8123';
cp.numero = '881522';
cp.saldo = '980361.39';
cp.juros = '' + (parseFloat(cp.saldo) * 0.035).toFixed(2) + '';
cp.dtVencim = '03/12/2020';

function mostraConta(a, b) {
    var e = document.getElementById(b);
    console.log(e);
    for(var campo in a) {
        if(a[campo] != a.tipo) {
            var elem = document.createElement('div');
            elem.innerHTML = campo + ': ' + a[campo];
            e.appendChild(elem);
            console.log(typeof(a[campo]));
        } else {
            var elem = document.createElement('div');
            elem.id = campo.toString();
            elem.innerHTML = 'Tipo: ' + a[campo];
            e.appendChild(elem);
            
            
        }
    }
}

/**
Crie uma nova função tipo Conta, com as propriedades nome correntista, banco, numero da conta e saldo. 

Crie utilizando herança duas novas funções: 
- Corrente com Saldo Especial
- Poupanca com Juros, Data Vencimento. 

Receber os dados via get e set. 

Criar um objeto de cada uma: Corrente e Poupanca e mostrar os seus dados.

*/
