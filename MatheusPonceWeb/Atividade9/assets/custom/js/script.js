/*
Criar um Input Text e  dois Input Checkbox.
1º CheckBox - transforma o conteúdo do Input Text em letras maiúsculas.
2º CheckBox - transforma o conteúdo do Input Text em letras minúsculas.

Dica:  Exemplo UsandoDOM2Nomes.html  mostra exemplos de como acessar os valores dos campos.
Disponibilizar como Atividade9 no GITHUB.
 Seuusuario/PWEB/Atividade9
*/
function mudaCase(elem) {
    var elems = document.forms['form1'].elements['chk'];
    
    for(var i = 0;i < elems.length;i++) {
        if(elem != elems[i]) {
            elems[i].checked = false;
        } else {
            var alvo = document.getElementById('resultado');
            var fonte = document.getElementById('fonte');
            if(elems[i].value == 'upperCase') {
                alvo.innerHTML = fonte.value.toUpperCase();
            } else {
                alvo.innerHTML = fonte.value.toLowerCase();
            }
        }

    }
}