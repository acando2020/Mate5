var act13 = [
["<table><tr><td>hola1</td><td>hol1</td></tr></table>"],
["<table><tr><td>hola2</td><td>hol2</td></tr></table>"],
["<table><tr><td>hola3</td><td>hol3</td></tr></table>"],

];


var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}

