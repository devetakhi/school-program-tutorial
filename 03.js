
        let studenci = new Array("Jacek", "Agatka", "Staszek", "Ala", "Marcin");

        wypiszNaKonsole("Tablica uczniów");
        wypiszNaKonsole(studenci);
        
        wypiszNaKonsole("Liczba uczniów w tablicy: " + studenci.length);
        wypiszNaKonsole("Posortowana tablica");
        
        studenci.sort();
        wypiszNaKonsole(studenci);

        wypiszNaKonsole("Odwrócona tablica");

        studenci.reverse();
        wypiszNaKonsole(studenci);

        wypiszNaKonsole("Uczniowie w tabeli po usunięciu ostatniego elementu");

        studenci.pop();
        wypiszNaKonsole(studenci);

function wypiszNaKonsole(x){
    console.log(x);
}

function wypiszNaHtml(x){
    document.write(x + "<br/>");
}
