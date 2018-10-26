$('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


/////////////////////////pregunta2//////////////////////////////////////
var random1 = [
    '<tr>' +
    '<td><b style="color: #005ca4"><li></li></b></td>' +
    '<td><span style="border-radius: 10px 0px 10px 0px;background: #ffecb8;padding: 5px;">Patrón:</span>÷<input class="inputfraccciones sinEspacios" id="act1num0"></input></td>' +
    '<td></td>' +
    '<td colspan="2"></td>' +
    '<td colspan="2"><input type="text" class="form-control"></td>' +
    '<td colspan="2"><input class="form-control"></input></td> </tr> <tr>' +
    '<td></td> <td><span style="border-radius: 10px 0px 10px 0px;background: #b5dfee;padding: 5px;">Sucesión:</span></td>' +
    '<td>1458, &nbsp;&nbsp;&nbsp;</td>' +
    '<td> &nbsp; &nbsp;486,</td>' +
    '<td><input class="inputfraccciones sinEspacios" id="act1num1"></input>,</td>' +
    '<td> &nbsp; &nbsp;54,</td>' +
    '<td> &nbsp; &nbsp;18,</td>' +
    '<td><input class="inputfraccciones sinEspacios" id="act1num2"></input>,</td>' +
    '<td><input class="inputfraccciones sinEspacios" id="act1num3"></input>,</td>' +
    '</tr>',
    ' <tr>' +
    '<td><b style="color: #005ca4"><li></li></b></td>' +
    '<td><span style="border-radius: 10px 0px 10px 0px;background: #f7c7cd;padding: 5px;">Patrón:</span>x<input class="inputfraccciones sinEspacios" id="act1num4"></input></td>' +
    '<td></td>' +
    '<td colspan="2"></td>' +
    '<td colspan="2"><input type="text" class="form-control"></td>' +
    '<td colspan="2"><input class="form-control"></input></td> </tr> <tr>' +
    '<td></td>' +
    '<td><span style="border-radius: 10px 0px 10px 0px;background: #b5dfee;padding: 5px;">Sucesión:</span></td>' +
    '<td>16,</td>' +
    '<td>&nbsp;&nbsp;&nbsp;32,</td>' +
    '<td><input class="inputfraccciones sinEspacios" id="act1num5"></input>,</td>' +
    '<td>128,</td>' +
    '<td>256,</td>' +
    '<td><input class="inputfraccciones sinEspacios" id="act1num6"></input>,</td>' +
    '<td><input class="inputfraccciones sinEspacios" id="act1num7"></input>,</td>' +
    '</tr>',

];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['3', '162', '6', '2', '2', '64', '512', '1024',];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

/////////////////////////pregunta2//////////////////////////////////////
var random2 = [
    ['<td style="background: #e8f4fb;">6</td> <td>M<sub>6</sub> = 6, <input id="act2num0" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;"></td> <td>D<sub>6</sub> =  {1,<input id="act2num1" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;">}</td>'],
    ['<td style="background: #e8f4fb;">9</td> <td>M<sub>9</sub> = 9, <input id="act2num2" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;"></td> <td>D<sub>9</sub> =  {<input id="act2num3" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;">}</td>'],
    ['<td style="background: #e8f4fb;">21</td> <td>M<sub>21</sub> = 21, <input id="act2num4" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;"></td> <td>D<sub>21</sub> =  {<input id="act2num5" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;">}</td>'],
    ['<td style="background: #e8f4fb;">24</td> <td>M<sub>24</sub> = 24, <input id="act2num6" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;"></td> <td>D<sub>24</sub> =  {<input id="act2num7" type="" class="sinEspacios" name="" style="border:0; border-bottom: 1px solid #000000;">}</td>'],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


function pregunta2() {
    var respact2 = ['12,18,24,30', '2,3,6', '18,27,36,45', '1,3,9', '42,63,84,105', '1,3,7,21', '48,72,96,120', '1,2,3,4,6,8,12,24', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 8;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}


////////////pregunta3/////////////////////////////////////


function pregunta3() {
    var respact2 = ['30,42,78,102,138', '45,99,117,135,189', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}


//////////////////pregunta4/////////////////////////
var random4 = [
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>17</sub> = {1, 17}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act4num0" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>26</sub> = {1, 2, 13, 26}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act4num1" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>11</sub> = {<input class="sinEspacios" id="act4num2" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;">}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act4num3" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    [' <tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>3</sub> = {<input class="sinEspacios" id="act4num4" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;">}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act4num5" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>9</sub> = {<input class="sinEspacios" id="act4num6" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;">}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act4num7" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>33</sub> = {1, 3, 11, 33}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act4num8" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['primo', 'compuesto', '1,11', 'primo', '1,3', 'primo', '1,3,9', 'compuesto', 'compuesto', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota4').val(parseFloat(total).toFixed(2));

}
///////////////////////pregunta5///////////////////////////
var random5 = [
    [' <table style="text-align: center;">' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td style="border-right: 1px solid #000000;">45</td>' +
        '<td><input id="act5num0" class="inputfraccciones sinEspacios" value="3" readonly></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num1" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num2" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num3" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num4" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num5" class="inputfraccciones sinEspacios"></input></td>' +
        '<td></td> </tr> </table>' +
        '45 = 3x <input id="act5num6" type="text" style="border:0; border-bottom: 1px solid #000000;width: 60px;" class="sinEspacios"> <br><br>'
    ],
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td style="border-right: 1px solid #000000;">28</td>' +
        '<td><input id="act5num7" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num8" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num9" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num10" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num11" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num12" class="inputfraccciones sinEspacios"></input></td>' +
        '<td></td> </tr> </table>' +
        '28 = <input id="act5num13" type="text" style="border:0; border-bottom: 1px solid #000000;width: 60px;" class="sinEspacios"> <br><br>'
    ],
    ['<table style="text-align: center;">' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td style="border-right: 1px solid #000000;">16</td>' +
        '<td><input id="act5num14" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num15" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num16" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num17" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num18" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num19" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num20" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num21" class="inputfraccciones sinEspacios"></input></td>' +
        '<td></td> </tr> </table>' +
        '16 = <input id="act5num22" type="text" style="border:0; border-bottom: 1px solid #000000;width: 60px;" class="sinEspacios"> <br><br>'
    ],
    [' <table style="text-align: center;">' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td style="border-right: 1px solid #000000;">63</td>' +
        '<td><input id="act5num23" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num24" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num25" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num26" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num27" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> </table>' +
        '63 = <input id="act5num28" type="text" style="border:0; border-bottom: 1px solid #000000;width: 60px;" class="sinEspacios"> <br><br>'
    ],
    [' <table style="text-align: center;">' +
        '<tr> <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td style="border-right: 1px solid #000000;">50</td>' +
        '<td><input id="act5num29" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num30" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num31" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num32" class="inputfraccciones sinEspacios"></input></td>' +
        '<td><input id="act5num33" class="inputfraccciones sinEspacios"></input></td>' +
        '</tr> <tr> <td></td>' +
        '<td style="border-right: 1px solid #000000;"><input id="act5num34" class="inputfraccciones sinEspacios"></input></td>' +
        '<td></td> </tr> </table>' +
        '50 = <input id="act5num35" type="text" style="border:0; border-bottom: 1px solid #000000;width: 60px;" class="sinEspacios"> <br><br>'
    ],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

function pregunta5() {
    var respact2 = ['3', '15', '3', '5', '5', '1', '3x5', '2', '14', '2', '7', '7', '1', '2x2x7', '2', '8', '2', '4', '2', '2', '2', '1', '2x2x2x2', '3', '21', '3', '7', '7', '3x3x7', '2', '25', '5', '5', '5', '1', '2x5x5', ];
    var cont = 0;
    for (var i = 0; i < 36; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 36;
    $('#nota5').val(parseFloat(total).toFixed(2));
}
//////////////pregunta6/////////////////////////////

function pregunta6() {
    var respact2 = ['8', '5', '2', '4', '5', '2', '2', '5', '2', '1', '5', '5', '1', '40', ];
    var cont = 0;
    for (var i = 0; i < 14; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 14;
    $('#nota6').val(parseFloat(total).toFixed(2));
}
//////////////pregunta7/////////////////////////////

function pregunta7() {
    var respact2 = ['24', '18', '2', '12', '9', '3', '4', '3', '2', '6', '4', '3', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota7').val(parseFloat(total).toFixed(2));
}
////////////////pregunta8////////////////////////////////////
function pregunta8() {
    var nt1 = 0;
    var act8num0 = document.getElementById('act8num0').value;
    if (act8num0 == 48) {
        nt1 = 1;
        $('#act8num0').css("background", "#00e600");
    } else {
        $('#act8num0').css("background", "#ff6666");
    }
    $('#nota8').val(parseFloat(nt1).toFixed(2));
}

////////////////pregunta9////////////////////////////////////
function pregunta9() {
    var nt1 = 0;
    var act9num0 = document.getElementById('act9num0').value;
    if (act9num0 == 500) {
        nt1 = 1;
        $('#act9num0').css("background", "#00e600");
    } else {
        $('#act9num0').css("background", "#ff6666");
    }
    $('#nota9').val(parseFloat(nt1).toFixed(2));
}


function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        pregunta8();
        pregunta9();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    //}
}
