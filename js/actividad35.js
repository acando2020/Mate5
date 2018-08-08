var tablas = [
    [' <table>' +
        '<tr>' +
        '<td>1 250 + 3 98 – 586 =</td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="txt1" class="form-control"></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>(40 690 + 9 456) – 27 409 =</td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="txt2" class="form-control"></td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>34 670 – (18 206 + 10 435) =</td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="txt3" class="form-control"></td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>[87 730 – (30 000 + 15 000)]</td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="txt4" class="form-control"></td>' +
        '</tr>' +
        '</table>'
    ],
]

var completar = document.getElementsByClassName('com');
tablas.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html('<span width="50px">' + tablas[i] + '</span> ');

}

function actividad35() {
    var txt1 = document.getElementById('txt1').value;
    var txt2 = document.getElementById('txt2').value;
    var txt3 = document.getElementById('txt3').value;
    var txt4 = document.getElementById('txt4').value;


    var resp2_1 = 0,
        resp2_2 = 0,
        resp2_3 = 0,
        resp2_4 = 0,
        resp2_5 = 0,
        resp2_6 = 0,
        resp2_7 = 0,
        resp2_8 = 0,
        resp2_9 = 0,
        resp2_10 = 0,
        resp2_11 = 0,
        resp2_12 = 0,
        resp2_13 = 0,
        resp2_14 = 0,
        resp2_15 = 0,
        resp2_16 = 0,
        resp2_17 = 0,
        resp2_18 = 0;
    ///////////////////////////////////////////////////////////////
    if ((txt1 == "1 648 – 586 = 1 062") || (txt1 == "1648 – 586 = 1062") || (txt1 == "1648–586=1062")) {
        resp2_1 = 2.5;
        $('#txt1').css("background", "#00e600");


    } else {
        $('#txt1').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////////
    if ((txt2 == "50 146 – 27 409 = 22 737") || (txt2 == "50146 – 27409 = 22737") || (txt2 == "50146–27409=22737")) {
        resp2_2 = 2.5;
        $('#txt2').css("background", "#00e600");


    } else {
        $('#txt2').css("background", "#ff6666");

    }


    ///////////////////////////////////////////////////////////////
    if ((txt3 == "34 670 – 28 641 = 6 029") || (txt3 == "34670 – 28641 = 6029") || (txt3 == "34670–28641=6029")) {
        resp2_3 = 2.5;
        $('#txt3').css("background", "#00e600");


    } else {
        $('#txt3').css("background", "#ff6666");

    }


    ////////////////////////////////////////////////////////
    if ((txt4 == "84 730 – 45 000 = 42 730") || (txt4 == "84730 – 45000 = 42730") || (txt4 == "84730–45000=42730")) {
        resp2_4 = 2.5;
        $('#txt4').css("background", "#00e600");


    } else {
        $('#txt4').css("background", "#ff6666");

    }






    var total = parseFloat(resp2_1) + parseFloat(resp2_2) + parseFloat(resp2_3) + parseFloat(resp2_4);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
