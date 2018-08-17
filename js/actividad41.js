var act40 = [
    ['<div class="col-lg-1" style="">13 745</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="num1" class="form-control text-lowercase"></input>' +
        '</div> <br>'
    ],
    ['<div class="col-lg-1" style="">248 927</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="num2" class="form-control text-lowercase"></input>' +
        '</div> <br>'
    ],
    ['<div class="col-lg-1" style="">566 318</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="num3" class="form-control text-lowercase"></input>' +
        '</div> <br>'
    ],
    ['<div class="col-lg-1" style="">799 246</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="num4" class="form-control text-lowercase"></input>' +
        '</div> <br>'
    ],

];

var completar = document.getElementsByClassName('com');
act40.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html(act40[i]);

}

/*function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question input");*/

function actividad41() {
    var num1 = document.getElementById('num1').value.toLowerCase();
    var num2 = document.getElementById('num2').value.toLowerCase();
    var num3 = document.getElementById('num3').value.toLowerCase();
    var num4 = document.getElementById('num4').value.toLowerCase();


    var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0,
        r5 = 0,
        r6 = 0,
        r7 = 0,
        r8 = 0,
        r9 = 0,
        r10 = 0,
        r11 = 0,
        r12 = 0;
    if (num1 == "trece mil setecientos cuarenta y cinco") {
        $('#num1').css("background", "#00e600");
        r1 = 1;

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "doscientos cuarenta y ocho mil novecientos veintisiete") {
        $('#num2').css("background", "#00e600");
        r2 = 1;

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "quinientos sesenta y seis mil trescientos dieciocho") {
        $('#num3').css("background", "#00e600");
        r3 = 1;

    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "setecientos noventa y nueve mil doscientos cuarenta y seis") {
        $('#num4').css("background", "#00e600");
        r4 = 1;

    } else {
        $('#num4').css("background", "#ff6666");

    }

    var subtotal = parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4);
    var total = (subtotal * 10) / 4;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
