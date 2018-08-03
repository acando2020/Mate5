var act13 = [];
for (var i = 0; i < 40; i++) {
    act13[i] = Math.floor(Math.random() * 9) + 1;

}

var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}


function actividad18() {
    // body...

    var arr1_1 = [];
    var arr1_2 = [];
    var arr1_3 = [];
    var arr1_4 = [];
    var arr1_5 = [];
    var arr1_6 = [];
    var arr1_7 = [];
    var arr1_8 = [];
    var rspA18_1 = 0,
        rspA18_2 = 0,
        rspA18_3 = 0,
        rspA18_4 = 0,
        rspA18_5 = 0,
        rspA18_6 = 0,
        rspA18_7 = 0,
        rspA18_8 = 0,
        rspA18_9 = 0,
        rspA18_10 = 0;

    Array.from(document.querySelectorAll('#suma1_1 td div span')).forEach(elemento => { arr1_1.push(elemento.textContent) });
    var fsuma1_1 = parseInt(arr1_1.join(''));
    Array.from(document.querySelectorAll('#suma1_2 td div span')).forEach(elemento => { arr1_2.push(elemento.textContent) });
    var fsuma1_2 = parseInt(arr1_2.join(''));
    Array.from(document.querySelectorAll('#suma1_3 td div span')).forEach(elemento => { arr1_3.push(elemento.textContent) });
    var fsuma1_3 = parseInt(arr1_3.join(''));
    Array.from(document.querySelectorAll('#respuesta1 td input')).forEach(elemento => { arr1_4.push(elemento.value) });
    var Rsuma1 = parseInt(arr1_4.join(''));

    var Tsuma1 = parseInt(fsuma1_1) + parseInt(fsuma1_2) + parseInt(fsuma1_3);


    if (Tsuma1 == Rsuma1) {

        for (var i = 0; i < 7; i++) {
            $('#R' + [i] + '').css("background", "#00e600");

        }
        rspA18_1 = 1;


    } else {
        for (var i = 0; i < 7; i++) {
            $('#R' + [i] + '').css("background", "#ff6666");
        }

    }
    var a = [fsuma1_1, fsuma1_2, fsuma1_3]
    a.sort(function(a, b) { return b - a; });


    Array.from(document.querySelectorAll('#respuesta1_1 td input')).forEach(elemento => { arr1_5.push(elemento.value) });
    var fsuma1_4 = parseInt(arr1_5.join(''));
    Array.from(document.querySelectorAll('#respuesta1_2 td input')).forEach(elemento => { arr1_6.push(elemento.value) });
    var fsuma1_5 = parseInt(arr1_6.join(''));
    Array.from(document.querySelectorAll('#respuesta1_3 td input')).forEach(elemento => { arr1_7.push(elemento.value) });
    var fsuma1_6 = parseInt(arr1_7.join(''));
    Array.from(document.querySelectorAll('#respuesta1_4 td input')).forEach(elemento => { arr1_8.push(elemento.value) });
    var Rsuma2 = parseInt(arr1_8.join(''));
    if (a[0] == fsuma1_4) {
        rspA18_2 = 1;
        for (var i = 1; i < 8; i++) {
            $('#T' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 1; i < 8; i++) {
            $('#T' + [i] + '').css("background", "#ff6666");

        }

    }
    if (a[1] == fsuma1_5) {
        rspA18_3 = 1;
        for (var i = 8; i < 15; i++) {
            $('#T' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 8; i < 15; i++) {
            $('#T' + [i] + '').css("background", "#ff6666");

        }

    }
    if (a[2] == fsuma1_6) {
        rspA18_4 = 1;
        for (var i = 15; i < 22; i++) {
            $('#T' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 15; i < 22; i++) {
            $('#T' + [i] + '').css("background", "#ff6666");

        }

    }
    if (Tsuma1 == Rsuma2) {
        rspA18_5 = 1;
        for (var i = 21; i < 30; i++) {
            $('#T' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 21; i < 30; i++) {
            $('#T' + [i] + '').css("background", "#ff6666");

        }

    }
    ////////////////////////////////////////////////////////////////////////////////

    var arr2_1 = [];
    var arr2_2 = [];
    var arr2_3 = [];
    var arr2_4 = [];
    var arr2_5 = [];
    var arr2_6 = [];
    var arr2_7 = [];
    var arr2_8 = [];

    Array.from(document.querySelectorAll('#suma2_1 td div span')).forEach(elemento => { arr2_1.push(elemento.textContent) });
    var fsuma2_1 = parseInt(arr2_1.join(''));
    Array.from(document.querySelectorAll('#suma2_2 td div span')).forEach(elemento => { arr2_2.push(elemento.textContent) });
    var fsuma2_2 = parseInt(arr2_2.join(''));
    Array.from(document.querySelectorAll('#suma2_3 td div span')).forEach(elemento => { arr2_3.push(elemento.textContent) });
    var fsuma2_3 = parseInt(arr2_3.join(''));
    Array.from(document.querySelectorAll('#respuesta2 td input')).forEach(elemento => { arr2_4.push(elemento.value) });
    var Rsuma2 = parseInt(arr2_4.join(''));

    var Tsuma2 = parseInt(fsuma2_1) + parseInt(fsuma2_2) + parseInt(fsuma2_3);


    if (Tsuma2 == Rsuma2) {
        rspA18_6 = 1;

        for (var i = 1; i < 8; i++) {
            $('#V' + [i] + '').css("background", "#00e600");

        }


    } else {
        for (var i = 1; i < 8; i++) {
            $('#V' + [i] + '').css("background", "#ff6666");
        }

    }
    var b = [fsuma2_1, fsuma2_2, fsuma2_3]
    b.sort(function(a, b) { return b - a; });


    Array.from(document.querySelectorAll('#respuesta2_1 td input')).forEach(elemento => { arr2_5.push(elemento.value) });
    var fsuma2_4 = parseInt(arr2_5.join(''));
    Array.from(document.querySelectorAll('#respuesta2_2 td input')).forEach(elemento => { arr2_6.push(elemento.value) });
    var fsuma2_5 = parseInt(arr2_6.join(''));
    Array.from(document.querySelectorAll('#respuesta2_3 td input')).forEach(elemento => { arr2_7.push(elemento.value) });
    var fsuma2_6 = parseInt(arr2_7.join(''));
    Array.from(document.querySelectorAll('#respuesta2_4 td input')).forEach(elemento => { arr2_8.push(elemento.value) });
    var Rsuma2 = parseInt(arr2_8.join(''));
    if (b[0] == fsuma2_4) {
        rspA18_7 = 1;
        for (var i = 1; i < 8; i++) {
            $('#W' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 1; i < 8; i++) {
            $('#W' + [i] + '').css("background", "#ff6666");

        }
    }
    if (b[1] == fsuma2_5) {
        rspA18_8 = 1;
        for (var i = 8; i < 15; i++) {
            $('#W' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 8; i < 15; i++) {
            $('#W' + [i] + '').css("background", "#ff6666");

        }

    }
    if (b[2] == fsuma2_6) {
        rspA18_9 = 1;
        for (var i = 15; i < 22; i++) {
            $('#W' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 15; i < 22; i++) {
            $('#W' + [i] + '').css("background", "#ff6666");

        }

    }
    if (Tsuma2 == Rsuma2) {
        rspA18_10 = 1;
        for (var i = 21; i < 30; i++) {
            $('#W' + [i] + '').css("background", "#00e600");

        }
    } else {
        for (var i = 21; i < 30; i++) {
            $('#W' + [i] + '').css("background", "#ff6666");

        }

    }

    var totalR18 = parseInt(rspA18_1) + parseInt(rspA18_2) + parseInt(rspA18_3) + parseInt(rspA18_4) + parseInt(rspA18_5) + parseInt(rspA18_6) + parseInt(rspA18_7) + parseInt(rspA18_8) + parseInt(rspA18_9) + parseInt(rspA18_10);
    $('#txtNota').html(totalR18.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
