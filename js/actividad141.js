function pregunta1() {
    var respact2 = ['15', '6', 'azules', 'verdes', '4', '6', '15', '5', '15', '4', '15', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
///////////////pregunta2///////////////////////////////////
var random2 = [
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="background: #ceeaf4;">Los sucesos aleatorios son hechos que se pueden predecir.</td>' +
        '<td><input id="act2num0" maxlength="1" class="form-control text-uppercase"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="background: #d3eae3;">Al escoger entre los números del 1 al 10, la probabilidad de escoger un número par es <div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div> o' +
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '</td>' +
        '<td><input id="act2num1" maxlength="1" class="form-control text-uppercase"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td style="background: #ceeaf4;">La probabilidad se expresa como una multiplicación.</td> <td><input id="act2num2" maxlength="1" class="form-control text-uppercase"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="background: #d3eae3;">Al lanzar un dado, la probabilidad de que salga un número impar es <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</td>' +
        '<td><input id="act2num3" maxlength="1" class="form-control text-uppercase"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="background: #ceeaf4;">Al lanzar una moneda, la probabilidad de que resulte cara es <div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>.</td>' +
        '<td><input id="act2num4" maxlength="1" class="form-control text-uppercase"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td style="background: #d3eae3;">En una funda hay 37 caramelos de coco y 25 de menta; la probabilidad de sacar un caramelo de menta es <div class="fraction">' +
        '<span class="fup">25</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">62</span>' +
        '</div>.</td>' +
        '<td><input id="act2num5" maxlength="1" class="form-control text-uppercase"></input></td>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['F', 'V', 'F', 'F', 'V', 'V', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta3////////////
function pregunta3() {
    var respact2 = ['15', '2', '15', '2', '15', '1', '15', '1', '15'];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta4//////////////////////////////////////////
random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><span id="act4num0" class="enc">Jugar a la ruleta.</span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><span id="act4num1" class="enc">Desayunar todos los días.</span></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td><td><span id="act4num6" class="enc">Mojarse al bañarse.</span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><span id="act4num2" class="enc">Sacar un as de una baraja.</span></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td><td><span id="act4num7" class="enc">Ganarse la lotería.</span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><span id="act4num3" class="enc">Sentir hambre si no se come.</span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td><td><span id="act4num8" class="enc">Sudar al trotar.</span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><span id="act4num4" class="enc">Respirar.</span></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td><td><span id="act4num9" class="enc">Ganar un sorteo.</span></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td><span id="act4num5" class="enc">Parpadear.</span></td>'],
]
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}
$('.enc').click(function() {

    if ($(this).hasClass('encerrar')) {
        $(this).removeClass('encerrar')
    } else {
        $(this).addClass('encerrar')
    }
});

function pregunta4() {
    var respr1 = 0,
        respr2 = 0;

    for (var i = 0; i < 10; i++) {
        var caja = $('span[id=act4num' + [i] + ']').text();
        if ($('#act4num' + [i] + '').hasClass("encerrar")) {

            if ((caja == "Jugar a la ruleta.") || (caja == "Sacar un as de una baraja.") || (caja == "Ganarse la lotería.") || (caja == "Ganar un sorteo.")) {
                respr1 = respr1 + 1;

                $('#act4num' + [i] + '').addClass('correcto')
            } else {
                respr2 = respr2 + 1;

                $('#act4num' + [i] + '').removeClass('correcto')
                $('#act4num' + [i] + '').addClass('incorrecto')
            }
        } else {

        }
    }
    var buenas = (respr1 * 1) / 4;
    var malas = (respr2 * 1) / 6;

    var total = parseFloat(buenas) - parseFloat(malas);
    $(".enc").off("click");
    if (total < 0) {
        total = 0;
        $('#nota4').val(parseFloat(total).toFixed(2));
    } else {
        $('#nota4').val(parseFloat(total).toFixed(2));
    }

}
//////////////////////////////pregunta5//////////////////////////////////////////

var resp_cor_len3_act13_p14 = [
    ["2/3 que sea café", "img/i3_p115_act141.jpg"],
    ["3/3 que sea canguil", "img/i4_p115_act141.jpg"],
    ["1/3 que sea helado", "img/i5_p115_act141.jpg"],


]
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i3_p115_act141.jpg', 'img/i4_p115_act141.jpg', 'img/i5_p115_act141.jpg', ];
var loadTxt = ['1/3 que sea helado', '2/3 que sea café', '3/3 que sea canguil', ];
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
}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];
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
        3,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);
}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 10;
    if (op_seleccionadas < total_nota) {
        var nt1 = 0;
        $('#nota5').val(nt1.toFixed(2) + ' ');
    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#nota5').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)
}
//////////////////////pregunta6////////////////////
function pregunta6() {
    var respact2 = ['12', '2', '2', '12', '1', '6', '6', '12', '1', '2', '6', '12', '1', '2', '0', '15', '0', ];
    var cont = 0;
    for (var i = 0; i < 17; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 17;
    $('#nota6').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {


    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    contarRespCorrectaDnD();
    pregunta6();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
    var total = (subtotal * 10) / 6;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
