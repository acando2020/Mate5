var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0,
    numeroInt3 = 0;

var h = 1;
for (var h = 0; h <= 4; h++) {
    interesult.push(Math.floor(Math.random() * 900000) + 100000)

    /* numeroInt = parseInt(numeroInt) + parseInt(IntNum);
     interesult[h] = numeroInt;*/

}
/////////////////////////////////////////////////////

var completar = document.getElementsByClassName('com');
interesult.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html('<input type="text" value=' + interesult[i] + '>');

}
////////////////////////////////////////////////////////////////////////////////////////

for (var h = 0; h <= 4; h++) {
    interesult2.push(Math.floor(Math.random() * 90000) + 10000)

    /* numeroInt = parseInt(numeroInt) + parseInt(IntNum);
     interesult2[h] = numeroInt;*/

}
/////////////////////////////////////////////////////

var completa = document.getElementsByClassName('com1');
interesult2.sort(f_randomico);
for (i = 0; i < completa.length; i++) {

    $('#' + completa[i].id).html('<input type="text" value=' + interesult2[i] + '>');

}

function actividad42() {
    var arr1 = [],
        arr2 = [],
        arr3 = [],
        arr4 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#numero1 td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#numero2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));

    Array.from(document.querySelectorAll('#numero3 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));

    Array.from(document.querySelectorAll('#numero4 td input')).forEach(elemento => { arr4.push(elemento.value) });
    var num4 = parseInt(arr4.join(''));
    var respuesta1 = 0,respuesta2 = 0,respuesta3 = 0,respuesta4 = 0;

    if (num1 == interesult[0]) {
        for (var i = 0; i < 7; i++) {
            $('#num' + [i] + '').css("background", "#00e600");

        }
        respuesta1 = 2.5;

    } else {
        for (var i = 0; i < 7; i++) {
            $('#num' + [i] + '').css("background", "#ff6666");
        }

    }

    if (num2 == interesult[1]) {
        for (var i = 7; i < 13; i++) {
            $('#num' + [i] + '').css("background", "#00e600");

        }
        respuesta2 = 2.5;


    } else {
        for (var i = 7; i < 13; i++) {
            $('#num' + [i] + '').css("background", "#ff6666");
        }

    }

    if (num3 == interesult[2]) {
        for (var i = 13; i < 18; i++) {
            $('#num' + [i] + '').css("background", "#00e600");

        }
        respuesta3 = 2.5;


    } else {
        for (var i = 13; i < 19; i++) {
            $('#num' + [i] + '').css("background", "#ff6666");
        }

    }

    if (num4 == interesult[3]) {
        for (var i = 19; i < 25; i++) {
            $('#num' + [i] + '').css("background", "#00e600");

        }
        respuesta4 = 2.5;


    } else {
        for (var i = 19; i < 25; i++) {
            $('#num' + [i] + '').css("background", "#ff6666");
        }

    }

 var totalR18 = parseFloat(respuesta1) + parseFloat(respuesta2) + parseFloat(respuesta3) + parseFloat(respuesta4);
    $('#txtNota').html(totalR18.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
