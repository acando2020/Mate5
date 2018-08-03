var act13 = [];
for (var i = 0; i < 2; i++) {
    act13[i] = Math.floor(Math.random() * 300000) + 100000;

}

var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}

function actividad13() {
    var arr1 = [],
        arr2 = [],
        arr3 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#trnum1 td span')).forEach(elemento => { arr1.push(elemento.textContent) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#trnum2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));

    Array.from(document.querySelectorAll('#trnum3 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));

    Array.from(document.querySelectorAll('#totalsum td input')).forEach(elemento => { arrtotal.push(elemento.value) });
    var Suma = parseInt(arrtotal.join(''));

    var sumaTotal = parseInt(num1) + parseInt(num2) + parseInt(num3);
    var Ract13 = 0;

    if (Suma == sumaTotal) {
        Ract13 = 10;
        $('#totalsum').css("background", "#00e600");
        $('#trnum2').css("background", "#00e600");
        $('#trnum3').css("background", "#00e600");
        $('#txtNota').html(Ract13.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);

        $('#txtAlumno').attr("disabled", false);
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
    }
}
