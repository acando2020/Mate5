var act13 = [];
for (var i = 0; i < 26; i++) {
    act13[i] = Math.floor(Math.random() * 5) + 5;

}

var sumaNum = document.getElementsByClassName('sut');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}

var act29 = [];
for (var i = 0; i < 26; i++) {
    act29[i] = Math.floor(Math.random() * 5) + 1;

}

var sumaNum = document.getElementsByClassName('dif');
act29.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act29[i] + '</span> ');

}


function pregunta1() {
    //////////////primera suma///////////////////////////////
    var arr1 = [],
        arr2 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#resta1_1 td div span')).forEach(elemento => { arr1.push(elemento.textContent) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#resta1_2 td div span')).forEach(elemento => { arr2.push(elemento.textContent) });
    var num2 = parseInt(arr2.join(''));

    Array.from(document.querySelectorAll('#respuesta1 td input')).forEach(elemento => { arrtotal.push(elemento.value) });
    var resta = parseInt(arrtotal.join(''));

    var restaTotal = parseInt(num1) - parseInt(num2);
    var Rresta1 = 0,
        Rresta2 = 0,
        Rresta3 = 0,
        Rresta4 = 0;
    if (resta == restaTotal) {
        Rresta1 = 2.5;
        $('#R1').css("background", "#00e600");
        $('#R2').css("background", "#00e600");
        $('#R3').css("background", "#00e600");
        $('#R4').css("background", "#00e600");
        $('#R5').css("background", "#00e600");
        $('#R6').css("background", "#00e600");
        $('#R7').css("background", "#00e600");
    } else {
        $('#R1').css("background", "#ff6666");
        $('#R2').css("background", "#ff6666");
        $('#R3').css("background", "#ff6666");
        $('#R4').css("background", "#ff6666");
        $('#R5').css("background", "#ff6666");
        $('#R6').css("background", "#ff6666");
        $('#R7').css("background", "#ff6666");

    }

    ////////////////////////segunda suma///////////////////
    var arr3 = [],
        arr4 = [],
        arrtotal2 = [];
    Array.from(document.querySelectorAll('#resta2_1 td div span')).forEach(elemento => { arr3.push(elemento.textContent) });
    var num3 = parseInt(arr3.join(''));

    Array.from(document.querySelectorAll('#resta2_2 td div span')).forEach(elemento => { arr4.push(elemento.textContent) });
    var num4 = parseInt(arr4.join(''));

    Array.from(document.querySelectorAll('#respuesta2 td input')).forEach(elemento => { arrtotal2.push(elemento.value) });
    var resta2 = parseInt(arrtotal2.join(''));

    var restaTotal2 = parseInt(num3) + parseInt(num4);


    if (resta2 == restaTotal2) {
        Rresta2 = 2.5;
        $('#T1').css("background", "#00e600");
        $('#T2').css("background", "#00e600");
        $('#T3').css("background", "#00e600");
        $('#T4').css("background", "#00e600");
        $('#T5').css("background", "#00e600");
        $('#T6').css("background", "#00e600");
        $('#T7').css("background", "#00e600");
        $('#T8').css("background", "#00e600");
    } else {
        $('#T1').css("background", "#ff6666");
        $('#T2').css("background", "#ff6666");
        $('#T3').css("background", "#ff6666");
        $('#T4').css("background", "#ff6666");
        $('#T5').css("background", "#ff6666");
        $('#T6').css("background", "#ff6666");
        $('#T7').css("background", "#ff6666");
        $('#T8').css("background", "#ff6666");


    }
    /////////////////tercera suma//////////////////////////

    var arr5 = [],
        arr6 = [],
        arrtotal3 = [];
    Array.from(document.querySelectorAll('#resta3_1 td div span')).forEach(elemento => { arr5.push(elemento.textContent) });
    var num5 = parseInt(arr5.join(''));

    Array.from(document.querySelectorAll('#resta3_2 td div span')).forEach(elemento => { arr6.push(elemento.textContent) });
    var num6 = parseInt(arr6.join(''));

    Array.from(document.querySelectorAll('#respuesta3 td input')).forEach(elemento => { arrtotal3.push(elemento.value) });
    var resta3 = parseInt(arrtotal3.join(''));

    var restaTotal3 = parseInt(num5) - parseInt(num6);
    if (resta3 == restaTotal3) {
        Rresta3 = 2.5;
        $('#V1').css("background", "#00e600");
        $('#V2').css("background", "#00e600");
        $('#V3').css("background", "#00e600");
        $('#V4').css("background", "#00e600");
        $('#V5').css("background", "#00e600");
        $('#V6').css("background", "#00e600");
        $('#V7').css("background", "#00e600");
    } else {
        $('#V1').css("background", "#ff6666");
        $('#V2').css("background", "#ff6666");
        $('#V3').css("background", "#ff6666");
        $('#V4').css("background", "#ff6666");
        $('#V5').css("background", "#ff6666");
        $('#V6').css("background", "#ff6666");
        $('#V7').css("background", "#ff6666");
    }

    ////////////////////////////////////resta 4//////////////////////////////////
    var arr7 = [],
        arr8 = [],
        arrtotal4 = [];
    Array.from(document.querySelectorAll('#resta4_1 td div span')).forEach(elemento => { arr7.push(elemento.textContent) });
    var num7 = parseInt(arr7.join(''));

    Array.from(document.querySelectorAll('#resta4_2 td div span')).forEach(elemento => { arr8.push(elemento.textContent) });
    var num8 = parseInt(arr8.join(''));

    Array.from(document.querySelectorAll('#respuesta4 td input')).forEach(elemento => { arrtotal4.push(elemento.value) });
    var resta4 = parseInt(arrtotal4.join(''));

    var restaTotal4 = parseInt(num7) + parseInt(num8);
    if (resta4 == restaTotal4) {
        Rresta4 = 2.5;
        $('#W1').css("background", "#00e600");
        $('#W2').css("background", "#00e600");
        $('#W3').css("background", "#00e600");
        $('#W4').css("background", "#00e600");
        $('#W5').css("background", "#00e600");
        $('#W6').css("background", "#00e600");
        $('#W7').css("background", "#00e600");
    } else {
        $('#W1').css("background", "#ff6666");
        $('#W2').css("background", "#ff6666");
        $('#W3').css("background", "#ff6666");
        $('#W4').css("background", "#ff6666");
        $('#W5').css("background", "#ff6666");
        $('#W6').css("background", "#ff6666");
        $('#W7').css("background", "#ff6666");
    }



    var total = parseFloat(Rresta1) + parseFloat(Rresta2) + parseFloat(Rresta3) + parseFloat(Rresta4);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
////////////////////////pregunta 3////////////////////////////////////////////////
var act74 = [];
for (var i = 0; i < 4; i++) {
    act74[i] = Math.floor(Math.random() * 5) + 1;

}

var sumaNum = document.getElementsByClassName('prg3');
act74.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act74[i] + '</span> ');

}
