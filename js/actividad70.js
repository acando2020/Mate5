var act70 = [
    ['<td>Goma de mascar: año 1869.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
        '<td>Siglo <input id="num1" type="text" name=""></td>'
    ],
    ['<td>Llanta: año 1888.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
        '<td>Siglo <input id="num2" type="text" name=""></td>'
    ],
    ['<td>Primer videojuego: año 1972.&nbsp;</td>' +
        '<td>Siglo <input id="num3" type="text" name=""></td>'
    ],
    [' <td>Aeroplano: año 1903.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
        '<td>Siglo <input id="num4" type="text" name=""></td>'
    ],
    ['<td>Ascensor: año 1851. año 1880.&nbsp;</td>' +
        '<td> Siglo <input id="num5" type="text" name=""></td>'
    ],
];

var sumaNum = document.getElementsByClassName('sum');
act70.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html(act70[i][0]);

}
var act70 = [
    ['<td>6 lustros = <input id="nume1" type="text" name="">años</td>'],
    ['<td>5 décadas =<input id="nume2" type="text" name="">años</td>'],
    ['<td>7 milenios =<input id="nume3" type="text" name="">siglos</td>'],
    ['<td>8 décadas =<input id="nume4" type="text" name="">lustros</td>'],
    ['<td>30 siglos =<input id="nume5" type="text" name="">milenios</td>'],
    ['<td>20 décadas =<input id="nume6" type="text" name="">años</td>'],
];

var suma1Num = document.getElementsByClassName('sum1');
act70.sort(f_randomico);
for (i = 0; i < suma1Num.length; i++) {

    $('#' + suma1Num[i].id).html(act70[i][0]);

}

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios("input");




function actividad70_1() {

    var num1 = document.getElementById('num1').value.toLowerCase();
    var num2 = document.getElementById('num2').value.toLowerCase();
    var num3 = document.getElementById('num3').value.toLowerCase();
    var num4 = document.getElementById('num4').value.toLowerCase();
    var num5 = document.getElementById('num5').value.toLowerCase();
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

    if (num1 == "19") {
        $('#num1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#num1').css("background", "#ff6666");

    }

    if (num2 == "19") {
        $('#num2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "20") {
        $('#num3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#num3').css("background", "#ff6666");

    }

    if (num4 == "20") {
        $('#num4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#num4').css("background", "#ff6666");

    }

    if (num5 == "19") {
        $('#num5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#num5').css("background", "#ff6666");

    }

    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5);
    var total = (subtotal * 10) / 5;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function actividad70_2() {

    var nume1 = document.getElementById('nume1').value.toLowerCase();
    var nume2 = document.getElementById('nume2').value.toLowerCase();
    var nume3 = document.getElementById('nume3').value.toLowerCase();
    var nume4 = document.getElementById('nume4').value.toLowerCase();
    var nume5 = document.getElementById('nume5').value.toLowerCase();
    var nume6 = document.getElementById('nume6').value.toLowerCase();
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

    if (nume1 == "30") {
        $('#nume1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#nume1').css("background", "#ff6666");

    }

    if (nume2 == "50") {
        $('#nume2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#nume2').css("background", "#ff6666");

    }
    if (nume3 == "70") {
        $('#nume3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#nume3').css("background", "#ff6666");

    }

    if (nume4 == "16") {
        $('#nume4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#nume4').css("background", "#ff6666");

    }

    if (nume5 == "3") {
        $('#nume5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#nume5').css("background", "#ff6666");

    }

    if (nume6 == "200") {
        $('#nume6').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#nume6').css("background", "#ff6666");

    }

    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 10) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

//////////////////////////////////////////////////////////////////////

var titulos = 'aplico';

var resp_cor_len3_act13_p14 = [
    ["4 siglos y 84 años", "img/i1_p45_act70.png"],
    ["1 siglo, 9 décadas y 6 años", "img/i2_p45_act70.png"],
    ["4 siglos, 8 décadas y 4 años", "img/i3_p45_act70.png"],
    ["2 siglos, 8 décadas y 2 años", "img/i4_p45_act70.png"],
    ["2 siglos, 3 décadas y 1 lustro", "img/i5_p45_act70.png"],

]
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p45_act70.png', 'img/i2_p45_act70.png', 'img/i3_p45_act70.png', 'img/i4_p45_act70.png', 'img/i5_p45_act70.png'];
var loadTxt = ['4 siglos y 84 años', '1 siglo, 9 décadas y 6 años', '4 siglos, 8 décadas y 4 años', '2 siglos, 8 décadas y 2 años', '2 siglos, 3 décadas y 1 lustro'];
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
    document.getElementById('bt_comprobar').addEventListener('click', contarRespCorrectaDnD);

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
        5,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 10;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota;
        actividad70_1();
        actividad70_2();
        $('#nota3').val(calculo.toFixed(2) + ' ');
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var total = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;


        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
    //setTimeout('document.location.reload()',tiempoReload)

}
