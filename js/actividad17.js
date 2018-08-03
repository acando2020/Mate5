var act13 = [];
for (var i = 0; i < 40; i++) {
    act13[i] = Math.floor(Math.random() * 500000) + 10000;

}

var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}


var act17 = [
    [' <table>' +
        '<tr>' +
        '<td>700 + 40 + 5 +</td>' +
        '<td><input type="number" id="num2_1" name="" class="form-control"></td>' +
        '<td>= 5 745</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>3 + 900 +</td>' +
        '<td><input type="number" id="num2_2" name="" class="form-control"></td>' +
        '<td>+ 60 + 4 000 = 14 963</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>5 000 + 300 +</td>' +
        '<td><input type="number" id="num2_3" name="" class="form-control"></td>' +
        '<td>+ 20 000 + 7 = 25 317</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>9 + 40 000 + 10 +</td>' +
        '<td><input type="number" id="num2_4" name="" class="form-control"></td>' +
        '<td>+ 800 = 43 819</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        ' <tr>' +
        '<td><input type="number" id="num2_5" name="" class="form-control"></td>' +
        '<td>+ 40 + 6 + 200 + 8 000 = 38 246</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>4 000 + 10 +</td>' +
        '<td><input type="number" id="num2_6" name="" class="form-control"></td>' +
        '<td>+ 900 + 5 = 74 915</td>' +
        '</tr>' +
        '</table>'
    ],
];

var completar = document.getElementsByClassName('com');
act17.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html('<span width="50px">' + act17[i] + '</span> ');

}

function actividad17_1() {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];

    Array.from(document.querySelectorAll('#suma1 td div span')).forEach(elemento => { arr1.push(elemento.textContent) });
    Array.from(document.querySelectorAll('#suma2 td div span')).forEach(elemento => { arr2.push(elemento.textContent) });
    Array.from(document.querySelectorAll('#suma3 td div span')).forEach(elemento => { arr3.push(elemento.textContent) });

    var suma1 = parseInt(arr1[0]) + parseInt(arr1[1]);
    var suma2 = parseInt(arr2[0]) + parseInt(arr2[1]);
    var suma3 = parseInt(arr3[0]) + parseInt(arr3[1]);
    //////////////////////////////////////////////////////////
    var num17_1 = document.getElementById('num17_1').value;
    var num17_2 = document.getElementById('num17_2').value;
    var num17_3 = document.getElementById('num17_3').value;
    ///////////////////////////////////////////////////////////
    var respuesta1 = 0,
        respuesta2 = 0,
        respuesta3 = 0;
    if (suma1 == num17_1) {
        $('#num17_1').css("background", "#00e600");
        respuesta1 = 1;
        $('#num17_1').attr("disabled", true);

    } else {
        $('#num17_1').css("background", "#ff6666");
        $('#num17_1').attr("disabled", true);

    }
    if (suma2 == num17_2) {
        $('#num17_2').css("background", "#00e600");
        respuesta2 = 1;
        $('#num17_2').attr("disabled", true);

    } else {
        $('#num17_2').css("background", "#ff6666");
        $('#num17_2').attr("disabled", true);

    }
    if (suma3 == num17_3) {
        $('#num17_3').css("background", "#00e600");
        respuesta3 = 1;
        $('#num17_3').attr("disabled", true);

    } else {
        $('#num17_3').css("background", "#ff6666");
        $('#num17_3').attr("disabled", true);

    }

    var subtotal = parseInt(respuesta1) + parseInt(respuesta2) + parseInt(respuesta3);
    var total = (subtotal * 5) / 3;
    $('#R17_1').val(total.toFixed(2));



}

function actividad17_2() {
    var num2_1 = document.getElementById('num2_1').value;
    var num2_2 = document.getElementById('num2_2').value;
    var num2_3 = document.getElementById('num2_3').value;
    var num2_4 = document.getElementById('num2_4').value;
    var num2_5 = document.getElementById('num2_5').value;
    var num2_6 = document.getElementById('num2_6').value;

    var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0,
        r5 = 0,
        r6 = 0;
    if (num2_1 == "5000") {
        $('#num2_1').css("background", "#00e600");
        r1 = 1;

    } else {
        $('#num2_1').css("background", "#ff6666");

    }
    if (num2_2 == "10000") {
        $('#num2_2').css("background", "#00e600");
        r2 = 1;

    } else {
        $('#num2_2').css("background", "#ff6666");

    }
    if (num2_3 == "10") {
        $('#num2_3').css("background", "#00e600");
        r3 = 1;

    } else {
        $('#num2_3').css("background", "#ff6666");

    }
    if (num2_4 == "3000") {
        $('#num2_4').css("background", "#00e600");
        r4 = 1;

    } else {
        $('#num2_4').css("background", "#ff6666");

    }
    if (num2_5 == "30000") {
        $('#num2_5').css("background", "#00e600");
        r5 = 1;

    } else {
        $('#num2_5').css("background", "#ff6666");

    }
    if (num2_6 == "70000") {
        $('#num2_6').css("background", "#00e600");
        r6 = 1;

    } else {
        $('#num2_6').css("background", "#ff6666");

    }
    var subtotal = parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4) + parseInt(r5) + parseInt(r6);
    var total = (subtotal * 5) / 6;
    $('#R17_2').val(total.toFixed(2));



}


function actividad17() {
    actividad17_1();
    actividad17_2();
    R17_1 = document.getElementById('R17_1').value;
    R17_2 = document.getElementById('R17_2').value;

    total = parseFloat(R17_1) + parseFloat(R17_2);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
