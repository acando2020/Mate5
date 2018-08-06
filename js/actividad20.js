document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 3)
});

function actividad20_1() {
    var resp1 = 0;
    var n1_1 = document.getElementById('n1_1').value;
    if (n1_1 == "76") {
        resp1 = 1;
        $('#n1_1').css("background", "#00e600");


    } else {
        $('#n1_1').css("background", "#ff6666");

    }
    $('#nota1').val(resp1);
}

function actividad20_2() {
    var n2_1 = document.getElementById('n2_1').value;
    var n2_2 = document.getElementById('n2_2').value;
    var n2_3 = document.getElementById('n2_3').value;
    var n2_4 = document.getElementById('n2_4').value;
    var n2_5 = document.getElementById('n2_5').value;
    var n2_6 = document.getElementById('n2_6').value;
    var resp2_1 = 0,
        resp2_2 = 0,
        resp2_3 = 0,
        resp2_4 = 0,
        resp2_5 = 0,
        resp2_6 = 0;
    if (n2_1 == "76") {
        resp2_1 = 1;
        $('#n2_1').css("background", "#00e600");


    } else {
        $('#n2_1').css("background", "#ff6666");

    }
    if (n2_2 == "76") {
        resp2_2 = 1;
        $('#n2_2').css("background", "#00e600");


    } else {
        $('#n2_2').css("background", "#ff6666");

    }
    if (n2_3 == "56") {
        resp2_3 = 1;
        $('#n2_3').css("background", "#00e600");


    } else {
        $('#n2_3').css("background", "#ff6666");

    }
    if (n2_4 == "76") {
        resp2_4 = 1;
        $('#n2_4').css("background", "#00e600");


    } else {
        $('#n2_4').css("background", "#ff6666");

    }
    if (n2_5 == "16") {
        resp2_5 = 1;
        $('#n2_5').css("background", "#00e600");


    } else {
        $('#n2_5').css("background", "#ff6666");

    }
    if (n2_6 == "76") {
        resp2_6 = 1;
        $('#n2_6').css("background", "#00e600");


    } else {
        $('#n2_6').css("background", "#ff6666");

    }
    var subtotal = parseInt(resp2_1) + parseInt(resp2_2) + parseInt(resp2_3) + parseInt(resp2_4) + parseInt(resp2_5) + parseInt(resp2_6);
    var total = (subtotal * 5) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));


}


function actividad20_3() {
    var resp2 = 0;
    var n3_1 = document.getElementById('n3_1').value;
    if (n3_1 == "76") {
        resp2 = 1;
        $('#n3_1').css("background", "#00e600");


    } else {
        $('#n3_1').css("background", "#ff6666");

    }
    $('#nota3').val(resp2);
}


function actividad20() {
    var nota4 = document.getElementById('nota4').value;



    if (nota4 == "") {
        alert("Ingresar todas las notas")
    } else {
        actividad20_1();
        actividad20_2();
        actividad20_3();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;

        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }



}
