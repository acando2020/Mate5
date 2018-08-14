document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 2.5)
});

var act13 = [
    [' <td>c y d son:</td>' +
        '<td><input type="text" class="text-lowercase" id="txto1" name=""></td>'
    ],
    ['<td>e y b son:</td>' +
        '<td><input type="text" class="text-lowercase" id="txto2" name=""></td>'
    ],
    ['  <td>c y f son:</td>' +
        '<td><input type="text" class="text-lowercase" id="txto3" name=""></td>'
    ],
    ['  <td>b y d son:</td>' +
        '<td><input type="text" class="text-lowercase" id="txto4" name=""></td>'
    ],
    ['  <td>e y a son:</td>' +
        '<td><input type="text" class="text-lowercase" id="txto5" name=""></td>'
    ],
    ['<td>a y b son:</td>' +
        '<td><input type="text" class="text-lowercase" id="txto6" name=""></td>'
    ],
]

var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html(act13[i][0]);

}

function actividad61_2() {
    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;

    if ((txt3 == "ángulos rectos") || (txt3 == "angulos rectos")) {
        RsA2_1 = 2.5;
        $('#txt3').css("background", "#00e600");

    } else {
        $('#txt3').css("background", "#ff6666");

    }
    $('#nota2').val(parseFloat(RsA2_1).toFixed(2));


}



function actividad61_3() {
    var txto1 = document.getElementById('txto1').value.toLowerCase();
    var txto2 = document.getElementById('txto2').value.toLowerCase();
    var txto3 = document.getElementById('txto3').value.toLowerCase();
    var txto4 = document.getElementById('txto4').value.toLowerCase();
    var txto5 = document.getElementById('txto5').value.toLowerCase();
    var txto6 = document.getElementById('txto6').value.toLowerCase();


    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if (txto1 == "paralelas") {
        RsA2_1 = 1;
        $('#txto1').css("background", "#00e600");

    } else {
        $('#txto1').css("background", "#ff6666");

    }
    if (txto2 == "secantes oblicuas") {
        RsA2_2 = 1;
        $('#txto2').css("background", "#00e600");

    } else {
        $('#txto2').css("background", "#ff6666");

    }
    if (txto3 == "secantes perpendiculares") {
        RsA2_3 = 1;

        $('#txto3').css("background", "#00e600");


    } else {
        $('#txto3').css("background", "#ff6666");

    }

    if (txto4 == "secantes perpendiculares") {
        RsA2_4 = 1;
        $('#txto4').css("background", "#00e600");

    } else {
        $('#txto4').css("background", "#ff6666");

    }
    if (txto5 == "secantes oblicuas") {
        RsA2_5 = 1;
        $('#txto5').css("background", "#00e600");

    } else {
        $('#txto5').css("background", "#ff6666");

    }
    if (txto6 == "paralelas") {
        RsA2_6 = 1;

        $('#txto6').css("background", "#00e600");


    } else {
        $('#txto6').css("background", "#ff6666");

    }

    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5) + parseFloat(RsA2_6);
    var total = (subtotal * 5) / 6;
    $('#nota3').val(total.toFixed(2));
}


function actividad61() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    if (nota1 == "") {
        alert("Ingresar nota")
    } else {
        actividad61_2();
        actividad61_3();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
