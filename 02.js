
        let jeden = 22;
        let dwa = 3;
        let dodaj = jeden + dwa;
        let odejmij = jeden - dwa;
        let pomnoz = jeden * dwa;
        let podziel = jeden / dwa;

wypiszNaKonsole("Pierwszy numer: = " + jeden + "Drugi numer: = " + dwa);
wypiszNaKonsole(jeden + " + " + dwa + " = " + dodaj);
wypiszNaKonsole(jeden + " - " + dwa + " = " + odejmij);
wypiszNaKonsole(jeden + " * " + dwa + " = " + pomnoz);
wypiszNaKonsole(jeden + " / " + dwa + " = " + podziel);

function wypiszNaKonsole(x){
    console.log(x);
}

function wypiszNaHtml(x){
    document.write(x + "<br/>");
}
