var act13 = [
    [' <table class="borderTable2 table-bordered">' +
        '<tr id="tb1num1">' +
        '<td><input type="text" name="" disabled value="6"></td>' +
        '<td><input type="text" name="" disabled value="0"></td>' +
        '<td><input type="text" name="" id="tb1" value=""></td>' +
        '<td><input type="text" name="" disabled value="8"></td>' +
        '<td><input type="text" name="" disabled value="4"></td>' +
        '<td><input type="text" name="" disabled value="0"></td>' +
        '</tr>' +
        '<tr id="tb1num2">' +
        '<td><input type="text" name="" id="tb2" value=""></td>' +
        '<td><input type="text" name="" disabled value="8"></td>' +
        '<td><input type="text" name="" disabled value="2"></td>' +
        '<td><input type="text" name="" disabled value="7"></td>' +
        '<td><input type="text" name="" id="tb3" value=""></td>' +
        '<td><input type="text" name="" disabled value="1"></td>' +
        '</tr>' +
        '<tr id="tb1res1">' +
        '<td><input type="text" name="" class="respuesta"  disabled value="7"></td>' +
        '<td><input type="text" name="" class="respuesta" id="tb4" value=""></td>' +
        '<td><input type="text" name="" class="respuesta" disabled value="8"></td>' +
        '<td><input type="text" name="" class="respuesta" id="tb5" value=""></td>' +
        '<td><input type="text" name="" class="respuesta" disabled value="4"></td>' +
        '<td><input type="text" name="" class="respuesta" id="tb6" value=""></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table class="borderTable2 table-bordered">' +
        '<tr id="tb2num1">' +
        '<td><input type="text" name="" disabled value="2"></td>' +
        '<td><input type="text" name="" disabled value="3"></td>' +
        '<td><input type="text" name=""  id="tb2_1" value=""></td>' +
        '<td><input type="text" name="" disabled value="4"></td>' +
        '<td><input type="text" name="" id="tb2_2" value=""></td>' +
        '<td><input type="text" name="" disabled value="9"></td>' +
        '</tr>' +
        '<tr id="tb2num2">' +
        '<td><input type="text" name="" id="tb2_3" value=""></td>' +
        '<td><input type="text" name="" disabled value="0"></td>' +
        '<td><input type="text" name="" disabled value="2"></td>' +
        '<td><input type="text" name="" id="tb2_4" value=""></td>' +
        '<td><input type="text" name="" disabled value="8"></td>' +
        '<td><input type="text" name="" disabled value="6"></td>' +
        '</tr>' +
        '<tr id="tb2res2">' +
        '<td><input type="text" name="" class="respuesta"  disabled value="9"></td>' +
        '<td><input type="text" name="" class="respuesta"  id="tb2_5" value=""></td>' +
        '<td><input type="text" name="" class="respuesta"  disabled value="8"></td>' +
        '<td><input type="text" name="" class="respuesta"  disabled value="3"></td>' +
        '<td><input type="text" name="" class="respuesta"  disabled value="2"></td>' +
        '<td><input type="text" name="" class="respuesta"  id="tb2_6" value=""></td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table class="borderTable2 table-bordered">' +
        '<tr id="tb3num1">' +
        '<td><input type="text" name="" disabled value="4"></td>' +
        '<td><input type="text" name=""  id="tb3_1" value=""></td>' +
        '<td><input type="text" name="" disabled value="5"></td>' +
        '<td><input type="text" name="" disabled value="2"></td>' +
        '<td><input type="text" name=""disabled value="4"></td>' +
        '<td><input type="text" name=""  id="tb3_2" value=""></td>' +
        '</tr>' +
        '<tr id="tb3num2">' +
        '<td><input type="text" name=""disabled value="3"></td>' +
        '<td><input type="text" name="" disabled value="8"></td>' +
        '<td><input type="text" name=""  id="tb3_3" value=""></td>' +
        '<td><input type="text" name="" id="tb3_4" value=""></td>' +
        '<td><input type="text" name="" disabled value="6"></td>' +
        '<td><input type="text" name="" disabled value="1"></td>' +
        '</tr>' +
        '<tr id="tb3res3">' +
        '<td><input type="text" name="" class="respuesta"   id="tb3_5" value=""></td>' +
        '<td><input type="text" name="" class="respuesta"  disabled value="2"></td>' +
        '<td><input type="text" name="" class="respuesta"  disabled value="4"></td>' +
        '<td><input type="text" name="" class="respuesta"  disabled value="3"></td>' +
        '<td><input type="text" name="" class="respuesta"   id="tb3_6" value=""></td>' +
        '<td><input type="text" name="" class="respuesta" disabled value="0"></td>' +
        '</tr>' +
        '</table>'
    ],

];


var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}

function actividad16(argument) {
    var arr1 = [];
    var arr2 = [];
    var res1 = [];

    Array.from(document.querySelectorAll('#tb1num1 td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));
    Array.from(document.querySelectorAll('#tb1num2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));
    Array.from(document.querySelectorAll('#tb1res1 td input')).forEach(elemento => { res1.push(elemento.value) });
    var resp = parseInt(res1.join(''));
    var respuesta1 = 0,
        respuesta2 = 0,
        respuesta3 = 0,
        respuesta4 = 0,
        respuesta5 = 0,
        respuesta6 = 0,
        respuesta7 = 0,
        respuesta8 = 0,
        respuesta9 = 0;

    if (num1 == "605840") {
        $('#tb1').css("background", "#00e600");
        respuesta1 = 1;


    } else {
        $('#tb1').css("background", "#ff6666");


    }

    if (num2 == "182701") {
        $('#tb2').css("background", "#00e600");
        $('#tb3').css("background", "#00e600");
        respuesta2 = 1;

    } else {
        $('#tb2').css("background", "#ff6666");
        $('#tb3').css("background", "#ff6666");

    }
    if (resp == "788541") {
        $('#tb4').css("background", "#00e600");
        $('#tb5').css("background", "#00e600");
        $('#tb6').css("background", "#00e600");
        respuesta3 = 1;

    } else {
        $('#tb4').css("background", "#ff6666");
        $('#tb5').css("background", "#ff6666");
        $('#tb6').css("background", "#ff6666");

    }


    /////////////////////////////////////////////////////////
    var arr3 = [];
    var arr4 = [];
    var res2 = [];

    Array.from(document.querySelectorAll('#tb2num1 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));
    Array.from(document.querySelectorAll('#tb2num2 td input')).forEach(elemento => { arr4.push(elemento.value) });
    var num4 = parseInt(arr4.join(''));
    Array.from(document.querySelectorAll('#tb2res2 td input')).forEach(elemento => { res2.push(elemento.value) });
    var resp2 = parseInt(res2.join(''));


    if (num3 == "235439") {
        $('#tb2_1').css("background", "#00e600");
        $('#tb2_2').css("background", "#00e600");
        respuesta4 = 1;

    } else {
        $('#tb2_1').css("background", "#FF6666");
        $('#tb2_2').css("background", "#ff6666");


    }

    if (num4 == "702886") {
        $('#tb2_3').css("background", "#00e600");
        $('#tb2_4').css("background", "#00e600");
        respuesta5 = 1;

    } else {
        $('#tb2_3').css("background", "#ff6666");
        $('#tb2_4').css("background", "#ff6666");

    }
    if (resp2 == "938325") {
        $('#tb2_5').css("background", "#00e600");
        $('#tb2_6').css("background", "#00e600");
        respuesta6 = 1;

    } else {
        $('#tb2_5').css("background", "#ff6666");
        $('#tb2_6').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////
    var arr5 = [];
    var arr6 = [];
    var res3 = [];

    Array.from(document.querySelectorAll('#tb3num1 td input')).forEach(elemento => { arr5.push(elemento.value) });
    var num5 = parseInt(arr5.join(''));
    Array.from(document.querySelectorAll('#tb3num2 td input')).forEach(elemento => { arr6.push(elemento.value) });
    var num6 = parseInt(arr6.join(''));
    Array.from(document.querySelectorAll('#tb3res3 td input')).forEach(elemento => { res3.push(elemento.value) });
    var resp3 = parseInt(res3.join(''));

    if (num5 == "435249") {
        $('#tb3_1').css("background", "#00e600");
        $('#tb3_2').css("background", "#00e600");
        respuesta7 = 1;

    } else {
        $('#tb3_1').css("background", "#FF6666");
        $('#tb3_2').css("background", "#ff6666");


    }

    if (num6 == "389061") {
        $('#tb3_3').css("background", "#00e600");
        $('#tb3_4').css("background", "#00e600");
        respuesta8 = 1;

    } else {
        $('#tb3_3').css("background", "#FF6666");
        $('#tb3_4').css("background", "#ff6666");


    }
    if (resp3 == "824310") {
        $('#tb3_5').css("background", "#00e600");
        $('#tb3_6').css("background", "#00e600");
        respuesta9 = 1;

    } else {
        $('#tb3_5').css("background", "#FF6666");
        $('#tb3_6').css("background", "#ff6666");


    }

    var subtotal = parseInt(respuesta1) + parseInt(respuesta2) + parseInt(respuesta3) + parseInt(respuesta4) + parseInt(respuesta5) + parseInt(respuesta6) + parseInt(respuesta7) + parseInt(respuesta8) + parseInt(respuesta9);
    var total = (subtotal * 10) / 9;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);

$('#txtAlumno').attr("disabled", false);
}
