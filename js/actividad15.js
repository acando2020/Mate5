var act13 = [];
for (var i = 0; i < 40; i++) {
    act13[i] = Math.floor(Math.random() * 9) + 1;

}

var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}

function actividad15() {
    //////////////primera suma///////////////////////////////
    var arr1 = [],
        arr2 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#suma1_1 td div span')).forEach(elemento => { arr1.push(elemento.textContent) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#suma1_2 td div span')).forEach(elemento => { arr2.push(elemento.textContent) });
    var num2 = parseInt(arr2.join(''));

    Array.from(document.querySelectorAll('#respuesta1 td input')).forEach(elemento => { arrtotal.push(elemento.value) });
    var Suma = parseInt(arrtotal.join(''));

    var sumaTotal = parseInt(num1) + parseInt(num2);
    var Rsuma1 = 0,
        Rsuma2 = 0,
        Rsuma3 = 0;
    if (Suma == sumaTotal) {
        Rsuma1 = 2.5;
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
    /* var Ract13 = 0;

     if (Suma == sumaTotal) {
         Ract13 = 10;
         $('#totalsum').css("background", "#00e600");
         $('#trnum2').css("background", "#00e600");
         $('#trnum3').css("background", "#00e600");
         $('#txtNota').html(Ract13.toFixed(2));
         document.getElementById('bt_comprobar').disabled = true;
         $('input').attr("disabled", true);
         $('#numR1').css("background", "#00e600");
         $('#numR2').css("background", "#00e600");
         $('#numR3').css("background", "#00e600");
         $('#numR4').css("background", "#00e600");
         $('#numR5').css("background", "#00e600");
         $('#numR6').css("background", "#00e600");


     } else {
         $('#totalsum').css("background", "#ff6666");
         $('#trnum2').css("background", "#ff6666");
         $('#trnum3').css("background", "#ff6666");
         $('#numR1').css("background", "#ff6666");
         $('#numR2').css("background", "#ff6666");
         $('#numR3').css("background", "#ff6666");
         $('#numR4').css("background", "#ff6666");
         $('#numR5').css("background", "#ff6666");
         $('#numR6').css("background", "#ff6666");
     }*/
    ////////////////////////segunda suma///////////////////
    var arr3 = [],
        arr4 = [],
        arrtotal2 = [];
    Array.from(document.querySelectorAll('#suma2_1 td div span')).forEach(elemento => { arr3.push(elemento.textContent) });
    var num3 = parseInt(arr3.join(''));

    Array.from(document.querySelectorAll('#suma2_2 td div span')).forEach(elemento => { arr4.push(elemento.textContent) });
    var num4 = parseInt(arr4.join(''));

    Array.from(document.querySelectorAll('#respuesta2 td input')).forEach(elemento => { arrtotal2.push(elemento.value) });
    var Suma2 = parseInt(arrtotal2.join(''));

    var sumaTotal2 = parseInt(num3) + parseInt(num4);


    if (Suma2 == sumaTotal2) {
        Rsuma2 = 2.5;
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
    Array.from(document.querySelectorAll('#suma3_1 td div span')).forEach(elemento => { arr5.push(elemento.textContent) });
    var num5 = parseInt(arr5.join(''));

    Array.from(document.querySelectorAll('#suma3_2 td div span')).forEach(elemento => { arr6.push(elemento.textContent) });
    var num6 = parseInt(arr6.join(''));

    Array.from(document.querySelectorAll('#respuesta3 td input')).forEach(elemento => { arrtotal3.push(elemento.value) });
    var Suma3 = parseInt(arrtotal3.join(''));

    var sumaTotal3 = parseInt(num5) + parseInt(num6);
    if (Suma3 == sumaTotal3) {
        Rsuma3 = 2.5;
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

    var txt1 = document.getElementById('txt1').value;
    var txt2 = document.getElementById('txt2').value;
    var txt3 = document.getElementById('txt3').value;
    if ((txt1 == "") || (txt2 == "") || (txt3 == "")) {
        alert("Complete los términos");
    } else {
        var ntxt1 = 0,
            ntxt2 = 0,
            ntxt3 = 0;
        if ((txt1 == "Sumando") || (txt1 == "sumando")) {
            var ntxt1 = 2.5;
            $('#txt1').css("background", "#00e600");
        } else {
            $('#txt1').css("background", "#ff6666");

        }
        if ((txt2 == "Sumando") || (txt2 == "sumando")) {
            var ntxt2 = 2.5;
            $('#txt2').css("background", "#00e600");
        } else {
            $('#txt2').css("background", "#ff6666");

        }
        if ((txt3 == "suma") || (txt3 == "total")) {
            var ntxt3 = 2.5;
            $('#txt3').css("background", "#00e600");
        } else {
            $('#txt3').css("background", "#ff6666");

        }
        var totaltxt = (parseFloat(ntxt1) + parseFloat(ntxt2) + parseFloat(ntxt3)) / 3;
    }


    var total = parseFloat(Rsuma1) + parseFloat(Rsuma2) + parseFloat(Rsuma3) + parseFloat(totaltxt);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
}
