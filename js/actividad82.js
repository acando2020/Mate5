function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

function validarN(inputs) {

    $(inputs).on('keypress', function(e) {
        tecla = document.all ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /[,qwertyuiopñlkvjhfgdsazcxbnmQWERTYFVUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".inputMult");


act82 = [];

for (var i = 0; i < 6; i++) {
    act82[i] = Math.floor((Math.random() * 700) + 100);

}
$('#mul1').html('' + act82[0] + ' x ' + act82[1] + '=')
$('#mul2').html('' + act82[2] + ' x ' + act82[3] + '=')
$('#mul3').html('' + act82[4] + ' x ' + act82[5] + '=')



function actividad82_1() {
    var act82_1 = document.getElementById('act82_1').value;
    var act82_2 = document.getElementById('act82_2').value;
    var act82_3 = document.getElementById('act82_3').value;
    /* var rsSuma4 = document.getElementById('rsSuma4').value;
     var rsSuma5 = document.getElementById('rsSuma5').value;
     var rsSuma6 = document.getElementById('rsSuma6').value;*/

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0;

    var multi1 = parseInt(act82[0]) * parseInt(act82[1]);
    var multi2 = parseInt(act82[2]) * parseInt(act82[3]);
    var multi3 = parseInt(act82[4]) * parseInt(act82[5]);


    if (act82_1 == multi1) {
        nt1 = 1;
        $('#act82_1').css("background", "#00e600");

    } else {
        $('#act82_1').css("background", "#ff6666");

    }



    if (act82_2 == multi2) {
        nt2 = 1;
        $('#act82_2').css("background", "#00e600");

    } else {
        $('#act82_2').css("background", "#ff6666");

    }


    if (act82_3 == multi3) {
        nt3 = 1;
        $('#act82_3').css("background", "#00e600");

    } else {
        $('#act82_3').css("background", "#ff6666");

    }


    /*
        if (rsSuma4 == "8") {
            nt4 = 1;
            $('#rsSuma4').css("background", "#00e600");

        } else {
            $('#rsSuma4').css("background", "#ff6666");

        }

        if (rsSuma5 == "1") {
            nt5 = 1;
            $('#rsSuma5').css("background", "#00e600");

        } else {
            $('#rsSuma5').css("background", "#ff6666");

        }
        if (rsSuma6 == "36981") {
            nt6 = 1;
            $('#rsSuma6').css("background", "#00e600");

        } else {
            $('#rsSuma6').css("background", "#ff6666");

        }*/
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) /*+ parseInt(nt4) + parseInt(nt5) + parseInt(nt6)*/ ;
    var total = (subtotal * 3) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
var tablas = [
    [' <table style="text-align: center;" class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="7" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="4" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="6" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '<tr style="border-top: 2px solid #393939;" id="fila1">' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="4" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila1_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila1_2" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="4" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="5" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="2" readonly="readonly" name="">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr id="fila2">' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="7" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila2_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr style="border-top: 2px solid #393939;" id="fila3">' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila3_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila3_2" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="3" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila3_3" size="5" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '</table><br>'
    ],
    ['<table style="text-align: center;" class="table-bordered">' +
        '<tr id="fila4">' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="5" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila4_1" size="5" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        ' <td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="2" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="7" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        ' <tr style="border-top: 2px solid #393939;" id="fila5">' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="4" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila5_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '<tr id="fila6">' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila6_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="3" readonly="readonly" name="">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr id="fila7">' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila7_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="6" readonly="readonly" name="">' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr style="border-top: 2px solid #393939;" id="fila8">' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila8_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila8_2" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila8_3" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila8_4" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '</table><br>'
    ],
    [' <table style="text-align: center;" class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" value="3" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="9" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="6" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '<tr id="fila9">' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila9_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="2" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '<tr style="border-top: 2px solid #393939;" id="fila10">' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila10_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="6" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila10_2" size="5" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr id="fila11">' +
        '<td>' +
        '<input style="" class="inputMult" type="text" size="5" maxlength="1" readonly="readonly">' +
        '</td>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="7" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila11_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="2" readonly="readonly" name="">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr id="fila12">' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila12_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila12_2" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr style="border-top: 2px solid #393939;" id="fila13">' +
        '<td>' +
        '<input type="text" class="inputMult" value="1" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="2" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila13_1" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '<td>' +
        '<input style="" class="inputMult" type="text" placeholder="0" id="fila13_2" size="5" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="inputMult" value="8" readonly="readonly" name="">' +
        '</td>' +
        '</tr>' +
        '</table><br>'
    ],
];

var tbl = document.getElementsByClassName('act82');
tablas.sort(f_randomico);
for (i = 0; i < tbl.length; i++) {

    $('#' + tbl[i].id).html(tablas[i]);

}

function actividad82_2() {
    var fl1 = [];
    var fl2 = [];
    var fl3 = [];
    var fl4 = [];
    var fl5 = [];
    var fl6 = [];
    var fl7 = [];
    var fl8 = [];
    var fl9 = [];
    var fl10 = [];
    var fl11 = [];
    var fl12 = [];
    var fl13 = [];

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0,
        nt12 = 0,
        nt13 = 0;

    Array.from(document.querySelectorAll('#fila1 td input')).forEach(elemento => { fl1.push(elemento.value) });
    var num1 = parseInt(fl1.join(''));
    Array.from(document.querySelectorAll('#fila2 td input')).forEach(elemento => { fl2.push(elemento.value) });
    var num2 = parseInt(fl2.join(''));
    Array.from(document.querySelectorAll('#fila3 td input')).forEach(elemento => { fl3.push(elemento.value) });
    var num3 = parseInt(fl3.join(''));
    Array.from(document.querySelectorAll('#fila4 td input')).forEach(elemento => { fl4.push(elemento.value) });
    var num4 = parseInt(fl4.join(''));
    Array.from(document.querySelectorAll('#fila5 td input')).forEach(elemento => { fl5.push(elemento.value) });
    var num5 = parseInt(fl5.join(''));
    Array.from(document.querySelectorAll('#fila6 td input')).forEach(elemento => { fl6.push(elemento.value) });
    var num6 = parseInt(fl6.join(''));
    Array.from(document.querySelectorAll('#fila7 td input')).forEach(elemento => { fl7.push(elemento.value) });
    var num7 = parseInt(fl7.join(''));
    Array.from(document.querySelectorAll('#fila8 td input')).forEach(elemento => { fl8.push(elemento.value) });
    var num8 = parseInt(fl8.join(''));
    Array.from(document.querySelectorAll('#fila9 td input')).forEach(elemento => { fl9.push(elemento.value) });
    var num9 = parseInt(fl9.join(''));
    Array.from(document.querySelectorAll('#fila10 td input')).forEach(elemento => { fl10.push(elemento.value) });
    var num10 = parseInt(fl10.join(''));
    Array.from(document.querySelectorAll('#fila11 td input')).forEach(elemento => { fl11.push(elemento.value) });
    var num11 = parseInt(fl11.join(''));
    Array.from(document.querySelectorAll('#fila12 td input')).forEach(elemento => { fl12.push(elemento.value) });
    var num12 = parseInt(fl12.join(''));
    Array.from(document.querySelectorAll('#fila13 td input')).forEach(elemento => { fl13.push(elemento.value) });
    var num13 = parseInt(fl13.join(''));

    if (num1 == "4494") {
        nt1 = 1;
        $('#fila1_1').css("background", "#00e600");
        $('#fila1_2').css("background", "#00e600");
    } else {
        $('#fila1_1').css("background", "#ff6666");
        $('#fila1_2').css("background", "#ff6666");
    }

    if (num2 == "749") {
        nt2 = 1;
        $('#fila2_1').css("background", "#00e600");

    } else {
        $('#fila2_1').css("background", "#ff6666");
    }

    if (num3 == "139314") {
        nt3 = 1;
        $('#fila3_1').css("background", "#00e600");
        $('#fila3_2').css("background", "#00e600");
        $('#fila3_3').css("background", "#00e600");
    } else {
        $('#fila3_1').css("background", "#ff6666");
        $('#fila3_2').css("background", "#ff6666");
        $('#fila3_3').css("background", "#ff6666");
    }
    if (num4 == "593") {
        nt4 = 1;
        $('#fila4_1').css("background", "#00e600");

    } else {
        $('#fila4_1').css("background", "#ff6666");
    }

    if (num5 == "4151") {
        nt5 = 1;
        $('#fila5_1').css("background", "#00e600");

    } else {
        $('#fila5_1').css("background", "#ff6666");
    }

    if (num6 == "593") {
        nt6 = 1;
        $('#fila6_1').css("background", "#00e600");

    } else {
        $('#fila6_1').css("background", "#ff6666");
    }
    if (num7 == "1186") {
        nt7 = 1;
        $('#fila7_1').css("background", "#00e600");

    } else {
        $('#fila7_1').css("background", "#ff6666");
    }

    if (num8 == "128681") {
        nt8 = 1;
        $('#fila8_1').css("background", "#00e600");
        $('#fila8_2').css("background", "#00e600");
        $('#fila8_3').css("background", "#00e600");
        $('#fila8_4').css("background", "#00e600");
    } else {
        $('#fila8_1').css("background", "#ff6666");
        $('#fila8_2').css("background", "#ff6666");
        $('#fila8_3').css("background", "#ff6666");
        $('#fila8_4').css("background", "#ff6666");
    }



    if (num9 == "328") {
        nt9 = 1;
        $('#fila9_1').css("background", "#00e600");

    } else {
        $('#fila9_1').css("background", "#ff6666");
    }


    if (num10 == "3168") {
        nt10 = 1;
        $('#fila10_1').css("background", "#00e600");
        $('#fila10_2').css("background", "#00e600");

    } else {
        $('#fila10_1').css("background", "#ff6666");
        $('#fila10_2').css("background", "#ff6666");
    }


    if (num11 == "792") {
        nt11 = 1;
        $('#fila11_1').css("background", "#00e600");


    } else {
        $('#fila11_1').css("background", "#ff6666");
    }


    if (num12 == "1188") {
        nt12 = 1;
        $('#fila12_1').css("background", "#00e600");
        $('#fila12_2').css("background", "#00e600");

    } else {
        $('#fila12_1').css("background", "#ff6666");
        $('#fila12_2').css("background", "#ff6666");
    }


    if (num13 == "129888") {
        nt13 = 1;
        $('#fila13_1').css("background", "#00e600");
        $('#fila13_2').css("background", "#00e600");

    } else {
        $('#fila13_1').css("background", "#ff6666");
        $('#fila13_2').css("background", "#ff6666");
    }

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9) + parseInt(nt10) + parseInt(nt11) + parseInt(nt12) + parseInt(nt13);
    var total = (subtotal * 5) / 13;
    $('#nota2').val(parseFloat(total).toFixed(2));


}

function actividad82_3() {
    var act3_1 = document.getElementById('act3_1').value;
    var act3_2 = document.getElementById('act3_2').value;
    var act3_3 = document.getElementById('act3_3').value;
    var act3_4 = document.getElementById('act3_4').value;
    var act3_5 = document.getElementById('act3_5').value;

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0;




    if (act3_1 == "64") {
        nt1 = 1;
        $('#act3_1').css("background", "#00e600");

    } else {
        $('#act3_1').css("background", "#ff6666");

    }



    if (act3_2 == "1248") {
        nt2 = 1;
        $('#act3_2').css("background", "#00e600");

    } else {
        $('#act3_2').css("background", "#ff6666");

    }


    if (act3_3 == "1248") {
        nt3 = 1;
        $('#act3_3').css("background", "#00e600");

    } else {
        $('#act3_3').css("background", "#ff6666");

    }



    if (act3_4 == "2625") {
        nt4 = 1;
        $('#act3_4').css("background", "#00e600");

    } else {
        $('#act3_4').css("background", "#ff6666");

    }

    if (act3_5 == "300") {
        nt5 = 1;
        $('#act3_5').css("background", "#00e600");

    } else {
        $('#act3_5').css("background", "#ff6666");

    }

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 2) / 5;
    $('#nota3').val(total.toFixed(2));

    /*$('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);*/

}

function actividad82() {
    actividad82_1();
    actividad82_2();
    actividad82_3();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
