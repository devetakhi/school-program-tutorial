
        let twojWiek = prompt("Podaj swój wiek");

        if (twojWiek >= 18)
            wypiszNaKonsole("Jesteś dorosły!");

        if (twojWiek < 18)
            wypiszNaKonsole("Nie jesteś dorosły!");


        let godziny = new Date().getHours();

        if (godziny < 12)
            wypiszNaKonsole("Good Morning!");
        else
            wypiszNaKonsole("Good Afternoon!");


        let jeden = prompt("Podaj pierwszą liczbę");
        let dwa = prompt("Podaj drugą liczbę");
        jeden = parseInt(jeden);
        dwa = parseInt(dwa);

        if (jeden == dwa)
            wypiszNaKonsole(jeden + " jest równe " + dwa + ".");
        else if (jeden < dwa)
            wypiszNaKonsole(jeden + " jest mniejsze niż " + dwa + ".");
        else
            wypiszNaKonsole(jeden + " jest większe niż " + dwa + ".");
                           
function wypiszNaKonsole(x){
    console.log(x);
}
