var testimg = [
    ["1", "368340", "368 340"],
    ["2", "742048", "742 048"], //respuesta correcta
    ["3", "45120", "45 120"],
    ["4", "960315", "960 315"],
    ["5", "53815", "53 815"],
    ["6", "756820", "756 820"],


]
finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<table><tr><td><input class="form-control" alt="' + testimg[i][2] + '" id="I' + testimg[i][0] + '" value="' + testimg[i][1] + '" disabled></td><td><input id="R' + testimg[i][0] + '" class="form-control" type="text" name=""></td></tr></table>');
    }

}

var text = [
    ["1", "Setecientos cuarenta y un mil trescientos cincuenta y nueve", "741 359"],
    ["2", "Doscientos catorce mil ciento veintiocho", "214 128"], //respuesta correcta
    ["3", "Novecientos cincuenta mil setecientos sesenta y cuatro", "950 764"],
]
finitimg2();


function finitimg2() {
    var caja_txt = document.getElementsByClassName('texto');
    text.sort(f_randomico);
    for (i = 0; i < caja_txt.length; i++) {
        $('#' + caja_txt[i].id).html('<table class="table"><tr><td><input class="form-control" alt="' + text[i][2] + '" id="T' + text[i][0] + '" value="' + text[i][1] + '" disabled></td><td><input id="V' + text[i][0] + '" type="text" name="" class="form-control"></td></tr></table>');
    }

}


var txt = [
    ["1", "237 111", "Doscientos treinta y siete mil ciento once"],
    ["2", "856 703", "Ochocientos cincuenta y seis mil setecientos tres"], //respuesta correcta
    ["3", "175 258", "Ciento setenta y cinco mil doscientos cincuenta y ocho"],
]
finitimg3();

function finitimg3() {
    var caja_text = document.getElementsByClassName('texto3');
    txt.sort(f_randomico);
    for (i = 0; i < caja_text.length; i++) {
        $('#' + caja_text[i].id).html('<table class="table"><tr><td><input class="form-control" alt="' + txt[i][2] + '" id="P' + txt[i][0] + '" value="' + txt[i][1] + '" disabled></td><td><input id="W' + txt[i][0] + '" type="text" name="" class="form-control"></td></tr></table>');
    }

}

function actividad7_1() {
    var r1 = document.getElementById("R1").value;
    var i1 = $("#I1")[0].alt;
    var r2 = document.getElementById("R2").value;
    var i2 = $("#I2")[0].alt;
    var r3 = document.getElementById("R3").value;
    var i3 = $("#I3")[0].alt;
    var r4 = document.getElementById("R4").value;
    var i4 = $("#I4")[0].alt;
    var r5 = document.getElementById("R5").value;
    var i5 = $("#I5")[0].alt;
    var r6 = document.getElementById("R6").value;
    var i6 = $("#I6")[0].alt;
    var res1, res2, res3, res4, res5, res6;



    if (r1 == i1) {
        res1 = 10;
        document.getElementById("R1").style.backgroundColor = "#6DFF6F";
    } else {
        res1 = 0;
        document.getElementById("R1").style.backgroundColor = "#F95858";
    }

    if (r2 == i2) {
        res2 = 10;
        document.getElementById("R2").style.backgroundColor = "#6DFF6F";
    } else {
        res2 = 0;
        document.getElementById("R2").style.backgroundColor = "#F95858";
    }

    if (r3 == i3) {
        res3 = 10;
        document.getElementById("R3").style.backgroundColor = "#6DFF6F";
    } else {
        res3 = 0;
        document.getElementById("R3").style.backgroundColor = "#F95858";
    }

    if (r4 == i4) {
        res4 = 10;
        document.getElementById("R4").style.backgroundColor = "#6DFF6F";
    } else {
        res4 = 0;
        document.getElementById("R4").style.backgroundColor = "#F95858";
    }
    if (r5 == i5) {
        res5 = 10;
        document.getElementById("R5").style.backgroundColor = "#6DFF6F";
    } else {
        res5 = 0;
        document.getElementById("R5").style.backgroundColor = "#F95858";
    }
    if (r6 == i6) {
        res6 = 10;
        document.getElementById("R6").style.backgroundColor = "#6DFF6F";
    } else {
        res6 = 0;
        document.getElementById("R6").style.backgroundColor = "#F95858";
    }

    var result = parseInt(res1) + parseInt(res2) + parseInt(res3) + parseInt(res4) + parseInt(res5) + parseInt(res6);
    var total = result / 6;
    $('#num7_1').val(parseFloat(total).toFixed(2));

}

function actividad7_2() {
    var t1 = document.getElementById("V1").value;
    var v1 = $("#T1")[0].alt;
    var t2 = document.getElementById("V2").value;
    var v2 = $("#T2")[0].alt;
    var t3 = document.getElementById("V3").value;
    var v3 = $("#T3")[0].alt;

    var res1 = 0,
        res2 = 0,
        res3 = 0,
        res4 = 0,
        res5 = 0,
        res6 = 0;



    if (t1 == v1) {
        res1 = 1;
        document.getElementById("V1").style.backgroundColor = "#6DFF6F";
    } else {
        res1 = 0;
        document.getElementById("V1").style.backgroundColor = "#F95858";
    }

    if (t2 == v2) {
        res2 = 1;
        document.getElementById("V2").style.backgroundColor = "#6DFF6F";
    } else {
        res2 = 0;
        document.getElementById("V2").style.backgroundColor = "#F95858";
    }

    if (t3 == v3) {
        res3 = 1;
        document.getElementById("V3").style.backgroundColor = "#6DFF6F";
    } else {
        res3 = 0;
        document.getElementById("V3").style.backgroundColor = "#F95858";
    }



    var result = parseInt(res1) + parseInt(res2) + parseInt(res3);
    var total = (result * 10) / 3;
    $('#num7_2').val(parseFloat(total).toFixed(2));
}

function actividad7_3() {
    var t1 = document.getElementById("W1").value;
    var v1 = $("#P1")[0].alt;
    var t2 = document.getElementById("W2").value;
    var v2 = $("#P2")[0].alt;
    var t3 = document.getElementById("W3").value;
    var v3 = $("#P3")[0].alt;

    var res1 = 0,
        res2 = 0,
        res3 = 0,
        res4 = 0,
        res5 = 0,
        res6 = 0;



    if (t1 == v1) {
        res1 = 1;
        document.getElementById("W1").style.backgroundColor = "#6DFF6F";
    } else {
        res1 = 0;
        document.getElementById("W1").style.backgroundColor = "#F95858";
    }

    if (t2 == v2) {
        res2 = 1;
        document.getElementById("W2").style.backgroundColor = "#6DFF6F";
    } else {
        res2 = 0;
        document.getElementById("W2").style.backgroundColor = "#F95858";
    }

    if (t3 == v3) {
        res3 = 1;
        document.getElementById("W3").style.backgroundColor = "#6DFF6F";
    } else {
        res3 = 0;
        document.getElementById("W3").style.backgroundColor = "#F95858";
    }



    var result = parseInt(res1) + parseInt(res2) + parseInt(res3);
    var total = (result * 10) / 3;
    $('#num7_3').val(parseFloat(total).toFixed(2));

    $('#txtNota').html(total.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
}

function actividad7() {
    actividad7_1();
    actividad7_2();
    actividad7_3();
    var num1 = document.getElementById('num7_1').value;
    var num2 = document.getElementById('num7_2').value;
    var num3 = document.getElementById('num7_3').value;
    var total = (parseInt(num1)+parseInt(num2)+parseInt(num3))/3;


    $('#txtNota').html(total.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);

}
/*function actividad6() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;
    var num13 = document.getElementById('txtnum').value;


    var RsA3_1 = 0,
        RsA3_2 = 0,
        RsA3_3 = 0,
        RsA3_4 = 0,
        RsA3_5 = 0,
        RsA3_6 = 0,
        RsA3_7 = 0,
        RsA3_8 = 0,
        RsA3_9 = 0,
        RsA3_10 = 0,
        RsA3_11 = 0,
        RsA3_12 = 0,
        RsA3_13 = 0;

    if (num1 == "") {
        RsA3_1 = 1;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "4") {
        RsA3_2 = 1;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "6") {
        RsA3_3 = 1;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "2") {
        RsA3_4 = 1;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    if (num5 == "8") {
        RsA3_5 = 1;

        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    if (num6 == "7") {
        RsA3_6 = 1;

        $('#num6').css("background", "#00e600");


    } else {
        $('#num6').css("background", "#ff6666");

    }
    if (num7 == "9") {
        RsA3_7 = 1;

        $('#num7').css("background", "#00e600");


    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "7") {
        RsA3_8 = 1;

        $('#num8').css("background", "#00e600");


    } else {
        $('#num8').css("background", "#ff6666");

    }
    if (num9 == "5") {
        RsA3_9 = 1;

        $('#num9').css("background", "#00e600");


    } else {
        $('#num9').css("background", "#ff6666");

    }
    if (num10 == "2") {
        RsA3_10 = 1;

        $('#num10').css("background", "#00e600");


    } else {
        $('#num10').css("background", "#ff6666");

    }
    if (num11 == "0") {
        RsA3_11 = 1;

        $('#num11').css("background", "#00e600");


    } else {
        $('#num11').css("background", "#ff6666");

    }
    if (num12 == "8") {
        RsA3_12 = 1;

        $('#num12').css("background", "#00e600");


    } else {
        $('#num12').css("background", "#ff6666");

    }

    if (num13 == "doscientos ocho") {
        RsA3_13 = 1;

        $('#txtnum').css("background", "#00e600");


    } else {
        $('#txtnum').css("background", "#ff6666");

    }
    var subtotal = parseFloat(RsA3_1) + parseFloat(RsA3_2) + parseFloat(RsA3_3) + parseFloat(RsA3_4) + parseFloat(RsA3_5) + parseFloat(RsA3_6) + parseFloat(RsA3_7) + parseFloat(RsA3_8) + parseFloat(RsA3_9) + parseFloat(RsA3_10) + parseFloat(RsA3_11)+ parseFloat(RsA3_12);
    var total = (subtotal*10)/12;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
}*/
