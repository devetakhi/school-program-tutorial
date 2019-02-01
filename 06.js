
        function mojaFunkcja() {
            wypiszNaKonsole("Moja pierwsza funkcja.");
        }

        mojaFunkcja();

        /////////////////////////////

        let licznik = 0;

        function policzSamogloski(imie) {

            for (let i = 0; i < imie.length; i++) {
                if (imie[i] == "a"
                    || imie[i] == "e"
                    || imie[i] == "i"
                    || imie[i] == "o"
                    || imie[i] == "u"
                    || imie[i] == "y"
                    || imie[i] == "ę"
                    || imie[i] == "ą"
                    || imie[i] == "ó")
                    licznik = licznik + 1;
            }
            wypiszNaKonsole("Cześć " + imie + "!!! Twoje imię ma " + licznik + " samogłosek.");
        }

        let mojeImie = prompt("Podaj imię:");

        policzSamogloski(mojeImie);
        
        /////////////////////////////

        function iloczyn(pierwszyArgument, drugiArgument) {
            let iloczyn = pierwszyArgument * drugiArgument;
            return iloczyn;
        }

        let pierwszyParametr = 78;
        let drugiParametr = 22;
        wypiszNaKonsole(pierwszyParametr + " * " + drugiParametr + " = " + iloczyn(pierwszyParametr, drugiParametr));

function wypiszNaKonsole(x){
    console.log(x);
}
