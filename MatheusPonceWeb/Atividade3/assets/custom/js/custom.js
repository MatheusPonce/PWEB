function Denilce() {
    n1 = parseFloat(
        prompt(
            'Informe a primeiro valor: '
        ).replace(/\,/i,'.')
    );

    n2 = parseFloat(
        prompt(
            'Informe o segundo valor: ')
        .replace(/\,/i,'.')
    );

    media = (n1 + n2) / 2;

    subt = n1 - n2;

    produto = n1 * n2;

    divisao = n1 / n2;

    resto = n1 % n2;

    alert(
        'Média: ' + media.toFixed(2) + '\n' + 
        'Subtração primeiro pelo segundo: ' + subt.toFixed(2) + '\n' +
        'Produto: ' + produto.toFixed(2) + '\n' +
        'Divisão: ' + divisao.toFixed(2) + '\n' +
        'Resto da div: ' + resto.toFixed(2)
    );
};

Denilce();