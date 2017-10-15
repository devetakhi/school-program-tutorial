

        let students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");

        wypiszNaKonsole("Tablica uczniów");
        for (let i1 = 0; i1 < students.length; i1++) {
            wypiszNaKonsole(students[i1]);
        }

        wypiszNaKonsole("Ciąg Fibonacciego do liczby 40");
        let i2 = 0;
        let j = 1;
        let k;
        while (i2 < 40) {

           wypiszNaKonsole(i2);

            k = i2 + j;
            i2 = j;
            j = k;

        }

        wypiszNaKonsole("Liczby parzyste mniejsze od 20");
        let i3 = 2;
        do {

            wypiszNaKonsole(i3);
            i3 = i3 + 2;

        } while (i3 < 20)


        let oceny = [1,1,1,2,5,6,4,4,4,5,5,6,6,3,3];
        let srednia = 0;
        for (let x in oceny){
            srednia = srednia + oceny[x];
        }
        srednia = srednia / oceny.length;

        wypiszNaKonsole("Średnia ocen "+ oceny + " = " + srednia);

function wypiszNaKonsole(x){
    console.log(x);
}
