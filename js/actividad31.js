var act13 = [];
for (var i = 0; i < 2; i++) {
    act13[i] = Math.round(Math.random() * 10000) * 500;

}

var sumaNum = document.getElementsByClassName('sut');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}


var act4_1 = [];
for (var i = 0; i < 5; i++) {
    act4_1[i] = Math.floor(Math.random() * 50) + 50;

}

var su = document.getElementsByClassName('sutr');
act4_1.sort(f_randomico);
for (i = 0; i < su.length; i++) {

    $('#' + su[i].id).html('<span width="50px">' + act4_1[i] + '</span> ');

}

var act4_2 = [];
for (var i = 0; i < 5; i++) {
    act4_2[i] = Math.floor(Math.random() * 50) + 1;

}

var di = document.getElementsByClassName('dif');
act4_2.sort(f_randomico);
for (i = 0; i < di.length; i++) {

    $('#' + di[i].id).html('<span width="50px">' + act4_2[i] + '</span> ');

}

function actividad31_1() {
    var num1 = act13[0] - 500;
    var num2 = act13[0] - 1000;
    var num3 = act13[0] - 10300;
    var num4 = act13[0] - 40000;
    var num5 = act13[0] - 100000;
    var num1_1 = document.getElementById('num1_1').value;
    var num1_2 = document.getElementById('num1_2').value;
    var num1_3 = document.getElementById('num1_3').value;
    var num1_4 = document.getElementById('num1_4').value;
    var num1_5 = document.getElementById('num1_5').value;
    var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0,
        r5 = 0,
        r6 = 0,
        r7 = 0,
        r8 = 0,
        r9 = 0,
        r10 = 0;
    if (num1 == num1_1) {
        r1 = 1;
        $('#num1_1').css("background", "#00e600");

    } else {
        $('#num1_1').css("background", "#ff6666");

    }
    if (num2 == num1_2) {
        r2 = 1;
        $('#num1_2').css("background", "#00e600");

    } else {
        $('#num1_2').css("background", "#ff6666");

    }
    if (num3 == num1_3) {
        r3 = 1;
        $('#num1_3').css("background", "#00e600");

    } else {
        $('#num1_3').css("background", "#ff6666");

    }
    if (num4 == num1_4) {
        r4 = 1;
        $('#num1_4').css("background", "#00e600");

    } else {
        $('#num1_4').css("background", "#ff6666");

    }
    if (num5 == num1_5) {
        r5 = 1;
        $('#num1_5').css("background", "#00e600");

    } else {
        $('#num1_5').css("background", "#ff6666");

    }

    ////////////////////////////////////////////////////////////////////////
    var num6 = act13[1] - 500;
    var num7 = act13[1] - 1000;
    var num8 = act13[1] - 10300;
    var num9 = act13[1] - 40000;
    var num10 = act13[1] - 100000;
    var num2_1 = document.getElementById('num2_1').value;
    var num2_2 = document.getElementById('num2_2').value;
    var num2_3 = document.getElementById('num2_3').value;
    var num2_4 = document.getElementById('num2_4').value;
    var num2_5 = document.getElementById('num2_5').value;

    if (num6 == num2_1) {
        r6 = 1;
        $('#num2_1').css("background", "#00e600");

    } else {
        $('#num2_1').css("background", "#ff6666");

    }
    if (num7 == num2_2) {
        r7 = 1;
        $('#num2_2').css("background", "#00e600");

    } else {
        $('#num2_2').css("background", "#ff6666");

    }
    if (num8 == num2_3) {
        r8 = 1;
        $('#num2_3').css("background", "#00e600");

    } else {
        $('#num2_3').css("background", "#ff6666");

    }
    if (num9 == num2_4) {
        r9 = 1;
        $('#num2_4').css("background", "#00e600");

    } else {
        $('#num2_4').css("background", "#ff6666");

    }
    if (num10 == num2_5) {
        r10 = 1;
        $('#num2_5').css("background", "#00e600");

    } else {
        $('#num2_5').css("background", "#ff6666");

    }


    var total = parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4) + parseInt(r5) + parseInt(r6) + parseInt(r7) + parseInt(r8) + parseInt(r9) + parseInt(r10);
    $('#nota1').val(total.toFixed(2));



}

function actividad31_2() {
    var t4_1 = document.getElementById('t4_1').value;
    var t4_2 = document.getElementById('t4_2').value;
    var t4_3 = document.getElementById('t4_3').value;
    var t4_4 = document.getElementById('t4_4').value;
    var num4_1 = act4_1[0] - act4_2[0];
    var num4_2 = act4_1[1] - act4_2[1];
    var num4_3 = act4_1[2] - act4_2[2];
    var num4_4 = act4_1[3] - act4_2[3];
    var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0;

    if (num4_1 == t4_1) {
        r1 = 2.5;
        $('#t4_1').css("background", "#00e600");

    } else {
        $('#t4_1').css("background", "#ff6666");

    }
    if (num4_2 == t4_2) {
        r2 = 2.5;
        $('#t4_2').css("background", "#00e600");

    } else {
        $('#t4_2').css("background", "#ff6666");

    }
    if (num4_3 == t4_3) {
        r3 = 2.5;
        $('#t4_3').css("background", "#00e600");

    } else {
        $('#t4_3').css("background", "#ff6666");

    }
    if (num4_4 == t4_4) {
        r4 = 2.5;
        $('#t4_4').css("background", "#00e600");

    } else {
        $('#t4_4').css("background", "#ff6666");

    }


    var total = parseFloat(r1) + parseFloat(r2) + parseFloat(r3) + parseFloat(r4);
    $('#nota2').val(total.toFixed(2));







}
function actividad31() {
    actividad31_1();
    actividad31_2();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var total = (parseFloat(nota1)+parseFloat(nota2))/2;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}

