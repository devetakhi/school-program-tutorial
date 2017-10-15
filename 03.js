
        let students = new Array("Jacek", "Agatka", "Staszek", "Ala", "Marcin");

        wypiszNaKonsole("Tablica uczniów");
        wypiszNaKonsole(students);
        
        wypiszNaKonsole("Liczba uczniów w tablicy: " + students.length);
        wypiszNaKonsole("Posortowana tablica");
        
        students.sort();
        wypiszNaKonsole(students);

        wypiszNaKonsole("Odwrócona tablica");

        students.reverse();
        wypiszNaKonsole(students);

        wypiszNaKonsole("Uczniowie w tabeli po usunięciu ostatniego elementu");

        students.pop();
        wypiszNaKonsole(students);

function wypiszNaKonsole(x){
    console.log(x);
}

function wypiszNaHtml(x){
    document.write(x + "<br/>");
}
