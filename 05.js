
        let age = prompt("Podaj swój wiek");

        if (age >= 18)
            wypiszNaKonsole("Jesteś dorosły!");

        if (age < 18)
            wypiszNaKonsole("Nie jesteś dorosły!");


        let hours = new Date().getHours();

        if (hours < 12)
            wypiszNaKonsole("Good Morning!");
        else
            wypiszNaKonsole("Good Afternoon!");


        let one = prompt("Podaj pierwszą liczbę");
        let two = prompt("Podaj drugą liczbę");
        one = parseInt(one);
        two = parseInt(two);

        if (one == two)
            wypiszNaKonsole(one + " jest równe " + two + ".");
        else if (one < two)
            wypiszNaKonsole(one + " jest mniejsze niż " + two + ".");
        else
            wypiszNaKonsole(one + " jest większe niż " + two + ".");
                           
function wypiszNaKonsole(x){
    console.log(x);
}
