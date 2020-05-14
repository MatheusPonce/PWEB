var ptHumano = 0;
var ptComputador = 0;

function rng() {

    return Math.random();

}

function escolhaComputador() {

    var f = rng().toFixed(3);

    if (f > 0.666)
        return "tesoura";
    else if (f > 0.333)
        return "papel";
    else
        return "pedra";
}

function comparaEscolhas(Humano, Computador) {

    if ((Humano === "papel" && Computador === "pedra") || (Humano === "pedra" && Computador === "tesoura") || (Humano === "tesoura" && Computador === "papel")) {

        ptHumano = ptHumano + 1;
        return "Você venceu!";

    } else if ((Computador === "papel" && Humano === "pedra") || (Computador === "pedra" && Humano === "tesoura") || (Computador === "tesoura" && Humano === "papel")) {

        ptComputador = ptComputador + 1;
        return "Computador venceu!";

    } else {

        return "Empate!";

    }

}

function pedraPapelTesoura() {

    var continuar = true;
    var s = 'sim';

    while (continuar) {

        var Humano = '';
        var Computador = '';
        while (!(Humano.toLowerCase() === 'pedra' || Humano.toLowerCase() === 'papel' || Humano.toLowerCase() === 'tesoura')) {

            Humano = prompt(
                "Você escolhe: Pedra, Papel ou Tesoura?"
            );

        }

        Computador = escolhaComputador();

        alert(
            "Você escolheu: " + Humano + '\n' +
            "Computador escolheu: " + Computador + '\n' +
            comparaEscolhas(Humano.toLowerCase(), Computador) + '\n' +
            "\nPontuação\n" +
            "Humano " + ptHumano + " x " + ptComputador + " Computador"
        );

        continuar = confirm("Deseja continuar?");
    }
}
