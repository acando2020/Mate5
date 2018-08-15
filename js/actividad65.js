function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question input");
var imgn = [
    ['<img src="img/i6_p41_act65.jpg" class="img-responsive"></img><input type="text" id="imgn1" class="form-control text-lowercase"></input>'],
    ['<img src="img/i7_p41_act65.jpg" class="img-responsive"></img><input type="text" id="imgn2" class="form-control text-lowercase"></input>'],
    ['<img src="img/i8_p41_act65.jpg" class="img-responsive"></img><input type="text" id="imgn3" class="form-control text-lowercase"></input>'],
    ['<img src="img/i9_p41_act65.jpg" class="img-responsive"></img><input type="text" id="imgn4" class="form-control text-lowercase"></input>'],
]

var sumaNum = document.getElementsByClassName('sum');
imgn.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html(imgn[i][0]);

}





function actividad65_1() {

    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value.toLowerCase();
    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var txt4 = document.getElementById('txt4').value.toLowerCase();
    var txt5 = document.getElementById('txt5').value.toLowerCase();
    var grados1 = document.getElementById('grados1').value.toLowerCase();
    var grados2 = document.getElementById('grados2').value.toLowerCase();
    var grados3 = document.getElementById('grados3').value.toLowerCase();
    var grados4 = document.getElementById('grados4').value.toLowerCase();
    var grados5 = document.getElementById('grados5').value.toLowerCase();
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

    if (txt1 == "obtuso") {
        $('#txt1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#txt1').css("background", "#ff6666");

    }

    if (txt2 == "recto") {
        $('#txt2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if (txt3 == "obtuso") {
        $('#txt3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#txt3').css("background", "#ff6666");

    }

    if (txt4 == "agudo") {
        $('#txt4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#txt4').css("background", "#ff6666");

    }

    if (txt5 == "obtuso") {
        $('#txt5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#txt5').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////
    if ((grados1 == "100°") || (grados1 == "100")) {
        $('#grados1').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#grados1').css("background", "#ff6666");

    }

    if ((grados2 == "90°") || (grados2 == "90")) {
        $('#grados2').css("background", "#00e600");
        nt7 = 1;

    } else {
        $('#grados2').css("background", "#ff6666");

    }
    if ((grados3 == "105°") || (grados3 == "105")) {
        $('#grados3').css("background", "#00e600");
        nt8 = 1;

    } else {
        $('#grados3').css("background", "#ff6666");

    }

    if ((grados4 == "72°") || (grados4 == "72")) {
        $('#grados4').css("background", "#00e600");
        nt9 = 1;

    } else {
        $('#grados4').css("background", "#ff6666");

    }

    if ((grados5 == "160°") || (grados5 == "160")) {
        $('#grados5').css("background", "#00e600");
        nt10 = 1;

    } else {
        $('#grados5').css("background", "#ff6666");

    }
    var total = (parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9) + parseInt(nt10)) / 2;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function actividad65_2() {
    imgn1

    var imgn1 = document.getElementById('imgn1').value.toLowerCase();
    var imgn2 = document.getElementById('imgn2').value.toLowerCase();
    var imgn3 = document.getElementById('imgn3').value.toLowerCase();
    var imgn4 = document.getElementById('imgn4').value.toLowerCase();

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

    if (imgn1 == "agudo") {
        $('#imgn1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#imgn1').css("background", "#ff6666");

    }

    if (imgn2 == "obtuso") {
        $('#imgn2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#imgn2').css("background", "#ff6666");

    }
    if (imgn3 == "recto") {
        $('#imgn3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#imgn3').css("background", "#ff6666");

    }

    if (imgn4 == "llano") {
        $('#imgn4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#imgn4').css("background", "#ff6666");

    }


    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4);
    var total = (subtotal * 5) / 4;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

function actividad65() {
    actividad65_1();
    actividad65_2();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
