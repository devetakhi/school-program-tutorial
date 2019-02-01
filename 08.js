function wypiszNaKonsole(x){
  console.log(x);
}
  
          class Student {

            constructor(imie, nazwisko, liczbaJedynek, liczbaSzostek, liczbaPiatek, id) {
                this.imie = imie;
                this.nazwisko = nazwisko;
                this.id = id;
                this.liczbaJedynek = liczbaJedynek;
                this.liczbaSzostek = liczbaSzostek;
                this.liczbaPiatek = liczbaPiatek;
            }
            

            obliczSrednia() {
                return (this.liczbaJedynek * 1 + this.liczbaSzostek * 6 + this.liczbaPiatek * 5) / (this.liczbaJedynek + this.liczbaSzostek + this.liczbaPiatek);
            }


            pokazSzczegoly() {
                wypiszNaKonsole("Student Id: " + this.id);
                wypiszNaKonsole("Nazwisko: " + this.nazwisko + " " + this.imie);
                wypiszNaKonsole("Średnia: " + this.obliczSrednia());

            }
        }

        let st1 = new Student("John", "Smith", 15, 85, 79, 6666);
        let st2 = new Student("Hannah", "Turner", 23, 75, 80, 7777);
        let st3 = new Student("Kevin", "White", 4, 93, 89, 8888);
        let st4 = new Student("Rose", "Taylor", 11, 55, 63, 9999);

        st1.pokazSzczegoly();
        st2.pokazSzczegoly();
        st3.pokazSzczegoly();
        st4.pokazSzczegoly();
