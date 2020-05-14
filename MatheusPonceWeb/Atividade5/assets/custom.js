function comparaMaior(a, b, c) {
    function compara(x, y) {
        if(x > y)
            return x;
        else
            return y;
    }
    
    return compara(compara(a, b), compara(b, c));
}



function jogo() {
    alert('Forneça três números distintos!');
    var a = prompt('Primeiro dígito:');
    var b = prompt('Segundo dígito:');
    var c = prompt('Terceiro dígito:');
    
    alert(
        'O número maior é ' + 
        comparaMaior(
            parseInt(a), 
            parseInt(b), 
            parseInt(c)
	)
    );
}
