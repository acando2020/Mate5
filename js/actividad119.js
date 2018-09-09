function pregunta1() {
    var act1num1 = document.getElementById('act1num1').value;
    var act1num2 = document.getElementById('act1num2').value;
    var nt1 = 0,
        nt2 = 0;

    if (act1num1 == "60") {
        nt1 = 0.5;
        $('#act1num1').addClass('correcto');

    } else {
        $('#act1num1').addClass('incorrecto');

    }

    if (act1num2 == "4500") {
        nt2 = 0.5;
        $('#act1num2').addClass('correcto');

    } else {
        $('#act1num2').addClass('incorrecto');

    }
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota1_1').val(parseFloat(total).toFixed(2));


}
//////////////////pregunta 2////////////////////////////////////////////////////
var act2 = [];
for (var i = 0; i < 6; i++) {
    act2[i] = Math.floor((Math.random() * 100) + 20);
}
$('#act2num1').html(act2[0]);
$('#act2num2').html(act2[1]);
$('#act2num3').html(act2[2]);
$('#act2num4').html(act2[3]);
$('#act2num5').html(act2[4]);
$('#act2num6').html(act2[5]);
var prod1 = parseInt(act2[0]) * parseInt(act2[1]);
var prod2 = parseInt(act2[2]) * parseInt(act2[3]);
var prod3 = parseInt(act2[4]) * parseInt(act2[5]);
var respact2 = [prod1, 'factor', 'factor', 'producto', prod2, 'factor', 'factor', 'producto', prod3, 'factor', 'factor', 'producto', ];

function pregunta2() {
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act2res' + [i] + '').val();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2res' + [i] + '').addClass('correcto');
        } else {
            $('#act2res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 12;
    $('#nota1_2').val(total.toFixed(2));
}
//////////////////pregunta 3////////////////////////////////////////////////////


act3_1 = [];
act3_2 = [];
for (var i = 0; i < 12; i++) {
    act3_1[i] = Math.floor((Math.random() * 800) + 10);
    act3_2[i] = Math.floor((Math.random() * 90) + 21);

}
var act3num1 = parseInt(act3_2[5]) * parseInt(100);
$('#act3num1').html(' ' + act3_2[5] + ' ×  100 = ' + act3num1 + '');

$('#act3num2').html(' ' + act3_2[7] + ' × 10 = ');
$('#act3num3').html(' ' + act3_2[9] + ' × 1 = ');
$('#act3num4').html(' ' + act3_2[11] + ' × 1000 = ');
$('#act3num5').html(' ' + act3_1[1] + ' × 10 = ');
$('#act3num6').html(' ' + act3_1[3] + ' × 100 = ');

function pregunta3() {
    var num2 = parseInt(act3_2[7]) * 10;
    var num3 = parseInt(act3_2[9]) * 1;
    var num4 = parseInt(act3_2[11]) * 1000;
    var num5 = parseInt(act3_1[1]) * 10;
    var num6 = parseInt(act3_1[3]) * 100;
    var cor = [num2, num3, num4, num5, num6];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act5res' + [i] + '').val();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act5res' + [i] + '').addClass('correcto');
        } else {
            $('#act5res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1_3').val(total.toFixed(2));
}
/////////////////////////////////pregunta 4///////////////////////
function pregunta4() {
    var cor = ['x2', 'x2', 'x2', 'x2', '8', '1', '16', '2', '32', '3', '64', '4', '128', '5', '128', 'cinco días'];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').addClass('correcto');
        } else {
            $('#act4num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 16;
    $('#nota1_4').val(total.toFixed(2));

}
/////////////////////////////////pregunta 5///////////////////////

var act5_1 = [];
for (var i = 0; i < 10; i++) {
    act5_1[i] = Math.floor((Math.random() * 100) + 20);

}

var act5_2 = [];
for (var i = 0; i < 10; i++) {
    act5_2[i] = Math.floor((Math.random() * 20) + 2);

}


$('#act5num11').html('' + act5_1[4] + ' × ' + act5_2[0] + ' × ' + act5_2[1] + ' =')
$('#act5num12').html('' + act5_1[5] + ' × ( ' + act5_1[6] + ' + ' + act5_2[1] + ') =')

function pregunta5() {

    var act5num3 = parseInt(act5_1[4]) * parseInt(act5_2[0]) * parseInt(act5_2[1]);
    var act5num4 = parseInt(act5_1[5]) * (parseInt(act5_1[6]) + parseInt(act5_2[1]));
    var act90_1 = document.getElementById('act90_1').value;
    var act90_2 = document.getElementById('act90_2').value;
    var act90_3 = document.getElementById('act90_3').value;
    var act90_4 = document.getElementById('act90_4').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;

    if (act90_1 == act5num3) {
        nt1 = 0.25;
        $('#act90_1').css("background", "#00e600");

    } else {
        $('#act90_1').css("background", "#ff6666");

    }

    if (act90_2 == act5num3) {
        nt2 = 0.25;
        $('#act90_2').css("background", "#00e600");

    } else {
        $('#act90_2').css("background", "#ff6666");

    }
    if (act90_3 == act5num4) {
        nt3 = 0.25;
        $('#act90_3').css("background", "#00e600");

    } else {
        $('#act90_3').css("background", "#ff6666");

    }
    if (act90_4 == act5num4) {
        nt4 = 0.25;
        $('#act90_4').css("background", "#00e600");

    } else {
        $('#act90_4').css("background", "#ff6666");

    }


    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);

    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#nota1_5').val(parseFloat(total).toFixed(2));

}
/////////////////////////////pregunta 6//////////////////////////////
function pregunta6() {
    var act6num1 = document.getElementById('act6num1').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;

    if (act6num1 == "25") {
        nt1 = 1;
        $('#act6num1').css("background", "#00e600");

    } else {
        $('#act6num1').css("background", "#ff6666");

    }
    $('#nota1_6').val(parseFloat(nt1).toFixed(2));
}
/////////////////////////////pregunta 7//////////////////////////////
var act7 = [
    ['<br><div class="col-lg-1" align="right">' +
        '<b style="color: #1D71B9"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-7" align="left">Todo triángulo tiene un ángulo recto.</div>' +
        '<div class="col-lg-4">' +
        '<input type="text" id="act7res0" name="" maxlength="1" class="saltos2 text-uppercase">' +
        '<br>' +
        '</div>'
    ],
    [' <br><div class="col-lg-1" align="right">' +
        '<b style="color: #1D71B9"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-7" align="left">Un triángulo escaleno tiene sus tres lados desiguales.</div>' +
        '<div class="col-lg-4">' +
        '<input type="text" id="act7res1" name="" maxlength="1" class="saltos2 text-uppercase">' +
        '<br>' +
        '</div>'
    ],
    ['<br><div class="col-lg-1" align="right">' +
        '<b style="color: #1D71B9"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-7" align="left">La suma de los ángulos internos de cualquier triángulo siempre es 120°.</div>' +
        '<div class="col-lg-4">' +
        '<input type="text" id="act7res2" name="" maxlength="1" class="saltos2 text-uppercase">' +
        '<br>' +
        '</div>'
    ],
    [' <br><div class="col-lg-1" align="right">' +
        '<b style="color: #1D71B9"><li></li></b>' +
        '</div>' +
        '<div class="col-lg-7" align="left">Un triángulo equilátero es a la vez acutángulo.</div>' +
        '<div class="col-lg-4">' +
        '<input type="text" id="act7res3" name="" maxlength="1" class="saltos2 text-uppercase">' +
        '<br>' +
        '</div>'
    ],
];
var act7num = document.getElementsByClassName('act7_1');
act7.sort(f_randomico);
for (i = 0; i < act7num.length; i++) {

    $('#' + act7num[i].id).html(act7[i]);

}
/////////////////////pregunta 7////////////////////////////////////
function pregunta7() {
    var cor = ['F', 'V', 'F', 'V', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act7res' + [i] + '').val().toUpperCase();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act7res' + [i] + '').addClass('correcto');
        } else {
            $('#act7res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 4;
    $('#nota1_7').val(total.toFixed(2));

}
/////////////////////pregunta 8////////////////////////////////////
document.getElementById('nota1_8').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_8'), 1)
});

document.getElementById('nota1_9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_9'), 1)
});

///////////////////////////// pregunta 10 //////////////////////////


var resp_cor_len3_act13_p14 = [
    ["Pentágono", "img/i4_p88_act119.jpg"],
    ["Triángulo equilátero", "img/i5_p88_act119.jpg"],
    ["Hexágono", "img/i6_p88_act119.jpg"],
    ["Cuadrado", "img/i7_p88_act119.jpg"],
    ["Decágono", "img/i8_p88_act119.jpg"],
    ["Heptágono", "img/i9_p88_act119.jpg"],
    ["Octógono", "img/i10_p88_act119.jpg"],
    ["Eneágono", "img/i11_p88_act119.jpg"],
];

var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i4_p88_act119.jpg', 'img/i5_p88_act119.jpg', 'img/i6_p88_act119.jpg', 'img/i7_p88_act119.jpg', 'img/i8_p88_act119.jpg', 'img/i9_p88_act119.jpg', 'img/i10_p88_act119.jpg', 'img/i11_p88_act119.jpg'];
var loadTxt = ['Pentágono', 'Triángulo equilátero', 'Hexágono', 'Cuadrado', 'Decágono', 'Heptágono', 'Octógono', 'Eneágono'];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt;
var indice;
var contador_nota = 0;



initElementos("imagen", loadImg);
initElementos("texto", loadTxt);
insertDraggable();
enviarEventosListener("caja_img1", "caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2", "caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3", "caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img4", "caja_txt4"); //caja1 img y texto
enviarEventosListener("caja_img5", "caja_txt5"); //caja1 img y texto
enviarEventosListener("caja_img6", "caja_txt6"); //caja1 img y texto
enviarEventosListener("caja_img7", "caja_txt7"); //caja1 img y texto
enviarEventosListener("caja_img8", "caja_txt8"); //caja1 img y texto

function genIdRandom() {
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a * b;
}

function enviarEventosListener(id, id2) {
    document.getElementById(id).addEventListener('dragstart', function() {
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop', function() {
        onDrop(id2, divsImg);
    });
    document.getElementById(id).addEventListener('drop', function() {
        onDropReturn(id);
    });
    ///document.getElementById('bt_comprobar').addEventListener('click', contarRespCorrectaDnD);

}

function onDropReturn(id) {
    divsImg = $('#' + id).find("img")[0].alt;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign({}, cont_resp_cor);

    for (i = 0; i < objetoLength; i++) {

        if (Object.values(objComparar)[i].indexOf(divsImg) != -1) {

            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];

        }

    }

}

function dragStart(id) {
    divsImg = $('#' + id).find("img")[0].alt;

}

function insertaParOnDrop(id) {
    divsTxt = $('#' + id).find("span").text();

    var prop = Object.keys(cont_resp_cor);

    cont_resp_cor[genIdRandom()] = [divsTxt, divsImg];

}

function onDrop(id, divsImg) {
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador = 0;
    if (objetoLength == 0) {
        insertaParOnDrop(id);
    } else {
        for (i = 0; i < objetoLength; i++) {
            if (Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1) {
                contador = contador + 1;

            }

        }
        if (contador == 0) {
            insertaParOnDrop(id);
        }
    }
}

function initElementos(classDiv, arrayElement) { //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if (classDiv == "imagen") {
            $('#' + cajas[i].id).html('<img class="center"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
        } else if (classDiv == "texto") {
            $('#' + cajas[i].id).html('<span class= "cajas-cuentos"  id="' + arrayElement[i] + '">' + arrayElement[i] + '</span>');
        }

    }
}

function insertDraggable() {


    for (i = 0; i < divs.length; i++) {
        $('#' + divs[i].id).attr({
            "ondrop": "drop(event)",
            "ondragover": "allowDrop(event)"
        });
    }
    for (i = 0; i < divs.find("img").length; i++) {
        $('#img' + i).attr({
            "draggable": "true",
            "ondragstart": "drag(event)"
        });

    }
    /*     for(i=0; i< divs.find("span").length; i++){
            $('#'+divs.find("span")[i].id).attr({
                "draggable" : "true",
                "ondragstart" : "drag(event)"
            });

        } */





}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];

    //i=respcorrectas j= a comprobar
    for (var i = 0; i < Object.values(resp_cor_len3_act13_p14).length; i++) {
        for (j = 0; j < Object.values(cont_resp_cor).length; j++) {
            if (JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])) {
                contador_nota = contador_nota + 1;
                arrayCorrestarColorear.push(Object.values(cont_resp_cor)[j][0]);
            } else {
                $('.texto').addClass('incorrecto')
            }
        }
    }
    for (i = 0; i < arrayCorrestarColorear.length; i++) {
        var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
        document.getElementById(id).style.background = '#65CE6D';


    }
    calcularNotaGeneral(
        8,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#nota1_10').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}



function calcularTotal() {
    var nota11_1 = document.getElementById('nota1_1').value;
    var nota11_2 = document.getElementById('nota1_2').value;
    var nota11_3 = document.getElementById('nota1_3').value;
    var nota11_4 = document.getElementById('nota1_4').value;
    var nota11_5 = document.getElementById('nota1_5').value;
    var nota11_6 = document.getElementById('nota1_6').value;
    var nota11_7 = document.getElementById('nota1_7').value;
    var nota11_8 = document.getElementById('nota1_8').value;
    var nota11_9 = document.getElementById('nota1_9').value;
    var nota11_10 = document.getElementById('nota1_10').value;
    if ((nota11_8 == "") || (nota11_9 == "")) {
        alert("Debe ingresar la nota en la actividad 8 ó 9")
    } else {

        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        contarRespCorrectaDnD();     
        var nota11_1 = document.getElementById('nota1_1').value;
        var nota11_2 = document.getElementById('nota1_2').value;
        var nota11_3 = document.getElementById('nota1_3').value;
        var nota11_4 = document.getElementById('nota1_4').value;
        var nota11_5 = document.getElementById('nota1_5').value;
        var nota11_6 = document.getElementById('nota1_6').value;
        var nota11_7 = document.getElementById('nota1_7').value;
        var nota11_8 = document.getElementById('nota1_8').value;
        var nota11_9 = document.getElementById('nota1_9').value;
        var nota11_10 = document.getElementById('nota1_10').value;
        var SuperTotal = parseFloat(nota11_1) + parseFloat(nota11_2) + parseFloat(nota11_3) + parseFloat(nota11_4) + parseFloat(nota11_5) + parseFloat(nota11_6) + parseFloat(nota11_7) + parseFloat(nota11_8) + parseFloat(nota11_9) + parseFloat(nota11_10);

        $('#txtNota').html(SuperTotal.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }


}
