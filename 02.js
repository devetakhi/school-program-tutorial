
        let one = 22;
        let two = 3;
        let add = one + two;
        let minus = one - two;
        let multiply = one * two;
        let divide = one / two;

wypiszNaKonsole("First No: = " + one + "Second No: = " + two);
wypiszNaKonsole(one + " + " + two + " = " + add);
wypiszNaKonsole(one + " - " + two + " = " + minus);
wypiszNaKonsole(one + " * " + two + " = " + multiply);
wypiszNaKonsole(one + " / " + two + " = " + divide);

function wypiszNaKonsole(x){
    console.log(x);
}

function wypiszNaHtml(x){
    document.write(x + "<br/>");
}
