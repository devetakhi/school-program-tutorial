
        function mojaFunkcja() {
            wypiszNaKonsole("Moja pierwsza funkcja.");
        }

        mojaFunkcja();

        /////////////////////////////

        let count = 0;

        function policzSamogloski(name) {

            for (let i = 0; i < name.length; i++) {
                if (name[i] == "a"
                    || name[i] == "e"
                    || name[i] == "i"
                    || name[i] == "o"
                    || name[i] == "u"
                    || name[i] == "y"
                    || name[i] == "ę"
                    || name[i] == "ą"
                    || name[i] == "ó")
                    count = count + 1;
            }
            wypiszNaKonsole("Cześć " + name + "!!! Twoje imię ma " + count + " samogłosek.");
        }

        let myName = prompt("Podaj imię:");

        policzSamogloski(myName);
        
        /////////////////////////////

        function iloczyn(pierwszaLiczba, drugaLiczba) {
            let iloczyn = pierwszaLiczba * drugaLiczba;
            return iloczyn;
        }

        let firstNo = 78;
        let secondNo = 22;
        wypiszNaKonsole(firstNo + " * " + secondNo + " = " + iloczyn(firstNo, secondNo));

function wypiszNaKonsole(x){
    console.log(x);
}
