document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 2.5)
});
var act72 = [
    ['<div class="row">' +
        '<div class="col-lg-6">Para medir ángulos se usan plantillas o el graduador.</div>' +
        '<div class="col-lg-6"><input type="text" id="vf1" class="text-uppercase" maxlength="1" name=""></div>' +
        '</div> '
    ],
    ['<div class="row">' +
        '<div class="col-lg-6">Una recta es una sucesión finita de puntos. </div>' +
        '<div class="col-lg-6"><input type="text" id="vf2" class="text-uppercase" maxlength="1" name=""></div>' +
        '</div> '
    ],
    ['<div class="row">' +
        '<div class="col-lg-6">Un ángulo cuya medida es 90° es un ángulo recto. </div>' +
        '<div class="col-lg-6"><input type="text" id="vf3" class="text-uppercase" maxlength="1" name=""></div>' +
        '</div> '
    ],
    ['<div class="row">' +
        '<div class="col-lg-6">Un lustro equivale a cinco años. </div>' +
        '<div class="col-lg-6"><input type="text" id="vf4" class="text-uppercase" maxlength="1" name=""></div>' +
        '</div> '
    ],
    ['<div class="row">' +
        '<div class="col-lg-6">El año 2018 pertenece al siglo 21. </div>' +
        '<div class="col-lg-6"><input type="text" id="vf5" class="text-uppercase" maxlength="1" name=""></div>' +
        '</div>'
    ],
];

var sumaNum = document.getElementsByClassName('sum');
act72.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html(act72[i][0]);

}

/*function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios("input");*/

$('.enc').click(function() {
    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')

    } else {
        $(this).addClass('subrayar')
    }
    if ($('#R1').hasClass('subrayar')) {
        $('#R2').removeClass('subrayar')
        $('#R3').removeClass('subrayar')
        $('#R4').removeClass('subrayar')


    }
    if ($('#R2').hasClass('subrayar')) {
        $('#R1').removeClass('subrayar')
        $('#R3').removeClass('subrayar')
        $('#R4').removeClass('subrayar')

    }
    if ($('#R3').hasClass('subrayar')) {
        $('#R1').removeClass('subrayar')
        $('#R4').removeClass('subrayar')
        $('#R2').removeClass('subrayar')

    }
    if ($('#R4').hasClass('subrayar')) {
        $('#R1').removeClass('subrayar')
        $('#R3').removeClass('subrayar')
        $('#R2').removeClass('subrayar')

    }
});


function actividad72_2() {

    var vf1 = document.getElementById('vf1').value.toUpperCase();
    var vf2 = document.getElementById('vf2').value.toUpperCase();
    var vf3 = document.getElementById('vf3').value.toUpperCase();
    var vf4 = document.getElementById('vf4').value.toUpperCase();
    var vf5 = document.getElementById('vf5').value.toUpperCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0;

    if (vf1 == "V") {
        $('#vf1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#vf1').css("background", "#ff6666");

    }

    if (vf2 == "F") {
        $('#vf2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#vf2').css("background", "#ff6666");

    }
    if (vf3 == "V") {
        $('#vf3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#vf3').css("background", "#ff6666");

    }

    if (vf4 == "V") {
        $('#vf4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#vf4').css("background", "#ff6666");

    }

    if (vf5 == "V") {
        $('#vf5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#vf5').css("background", "#ff6666");

    }

    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5);
    var total = (subtotal * 2.5) / 5;

    $('#nota2').val(parseFloat(total).toFixed(2));

}

function actividad72_3() {
    var nota1 = 0;
    if ($("#R1").hasClass("subrayar")) {
        $("#R1").css({ "background-color": "#FF5C5C" });
    }
    if ($("#R2").hasClass("subrayar")) {
        $("#R2").css({ "background-color": "#FF5C5C" });
    }
    if ($("#R4").hasClass("subrayar")) {
        $("#R4").css({ "background-color": "#FF5C5C" });
    }

    if ($("#R3").hasClass("subrayar")) {
        $("#R3").css({ "background-color": "#00FF00" });
        var nota1 = 2.5;
    }

    $('#nota3').val(parseFloat(nota1).toFixed(2));

}


function actividad72_4() {

    var med1 = document.getElementById('med1').value.toLowerCase();
    var med2 = document.getElementById('med2').value.toLowerCase();
    var med3 = document.getElementById('med3').value.toLowerCase();
    var med4 = document.getElementById('med4').value.toLowerCase();
    var med5 = document.getElementById('med5').value.toLowerCase();
    var med6 = document.getElementById('med6').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0;

    if ((med1 == "90°") || (med1 == "90")) {
        $('#med1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#med1').css("background", "#ff6666");

    }

    if ((med2 == "ángulo recto") || (med2 == "angulo recto")) {
        $('#med2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#med2').css("background", "#ff6666");

    }
    if ((med3 == "90°") || (med3 == "90")) {
        $('#med3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#med3').css("background", "#ff6666");

    }

    if ((med4 == "ángulo recto") || (med4 == "angulo recto")) {
        $('#med4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#med4').css("background", "#ff6666");

    }

    if ((med5 == "45°") || (med5 == "45")) {
        $('#med5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#med5').css("background", "#ff6666");

    }
    if ((med6 == "ángulo agudo") || (med6 == "angulo agudo")) {
        $('#med6').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#med6').css("background", "#ff6666");

    }


    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 2.5) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function actividad72() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    if (nota1 == "") {
        alert("Ingrese la calificación de la pregunta1");

    } else {
        actividad72_2();
        actividad72_3();
        actividad72_4();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;

        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);


        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }


}
