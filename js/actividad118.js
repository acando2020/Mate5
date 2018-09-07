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
////////////////pregunta 1////////////////////////

var act1num1 = Math.floor(Math.random() * 30) + 5;
var act1num2 = Math.floor(Math.random() * 4) + 3;
var act1num3 = Math.floor(Math.random() * 4) + 2;

document.getElementById('num1_1').value = parseInt(act1num1);
document.getElementById('num1_2').value = parseInt(act1num1) * parseInt(act1num2);
var num1_2 = document.getElementById('num1_2').value;
document.getElementById('num1_3').value = parseInt(num1_2) * parseInt(act1num3);
var num1_3 = document.getElementById('num1_3').value;
document.getElementById('num1_4').value = parseInt(num1_3) * parseInt(act1num2);
var num1_4 = document.getElementById('num1_4').value;
document.getElementById('num1_5').value = parseInt(num1_4) * parseInt(act1num3);

var num1_5 = document.getElementById('num1_5').value;
document.getElementById('num1_6').value = parseInt(num1_5) * parseInt(act1num2);

var num1_6 = document.getElementById('num1_6').value;
document.getElementById('num1_7').value = parseInt(num1_6) * parseInt(act1num3);

function pregunta1() {
    var num1_6 = document.getElementById('num1_6').value;
    var num1_7 = document.getElementById('num1_7').value;

    var res1_6 = document.getElementById('res1_6').value;
    var res1_7 = document.getElementById('res1_7').value;
    var patron1 = document.getElementById('patron1').value;
    var patron2 = document.getElementById('patron2').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (num1_6 == res1_6) {
        nt1 = 0.25;
        $('#res1_6').css("background-color", "#00e600");

    } else {
        $('#res1_6').css("background-color", "#ff6666");

    }

    if (num1_7 == res1_7) {
        nt2 = 0.25;
        $('#res1_7').css("background-color", "#00e600");

    } else {
        $('#res1_7').css("background-color", "#ff6666");

    }


    if (act1num2 == patron1) {
        nt3 = 0.25;
        $('#patron1').css("background-color", "#00e600");

    } else {
        $('#patron1').css("background-color", "#ff6666");

    }

    if (act1num3 == patron2) {
        nt4 = 0.25;
        $('#patron2').css("background-color", "#00e600");

    } else {
        $('#patron2').css("background-color", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota1_1').val(parseFloat(total).toFixed(2));
}
/////////////////////pregunta 2///////////////////////////////////////////////////////

function validarN(inputs) {

    $(inputs).on('keypress', function(e) {
        tecla = document.all ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /[,qwertyuiopñlkvjhfgdsazcxbnmQWERTYFVUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".inputMult");



var act2 = [];
for (var i = 0; i < 28; i++) {
    act2[i] = Math.floor((Math.random() * 9) + 1);

}
for (var i = 1; i < 26; i++) {
    $('#num' + [i] + '').val(act2[i]);


}

///////////////////////tabla 1//////////////////////////////////////
var multiplicando = [act2[1], act2[2], act2[3]]
var multi = parseInt(multiplicando.join(''));
var multiplicador = [act2[4], act2[5]]
var multipli = parseInt(multiplicador.join(''));
var producto1_1 = multi * parseInt(act2[5]);
var producto1_2 = multi * parseInt(act2[4]);
var total1 = parseInt(multi) * parseInt(multipli);
///////////////////////tabla 2//////////////////////////////////////
var multiplicando2 = [act2[6], act2[7], act2[8], act2[9]]
var multi2 = parseInt(multiplicando2.join(''));
var multiplicador2 = [act2[10], act2[11]]
var multipli2 = parseInt(multiplicador2.join(''));
var producto2_1 = multi2 * parseInt(act2[11]);
var producto2_2 = multi2 * parseInt(act2[10]);
var total2 = parseInt(multi2) * parseInt(multipli2);
///////////////////////tabla 3//////////////////////////////////////
var multiplicando3 = [act2[12], act2[13], act2[14], act2[15]]
var multi3 = parseInt(multiplicando3.join(''));
var multiplicador3 = [act2[16], act2[17]]
var multipli3 = parseInt(multiplicador3.join(''));
var producto3_1 = multi3 * parseInt(act2[17]);
var producto3_2 = multi3 * parseInt(act2[16]);
var total3 = parseInt(multi3) * parseInt(multipli3);
///////////////////////tabla 4//////////////////////////////////////
var multiplicando4 = [act2[18], act2[19], act2[20], act2[21]]
var multi4 = parseInt(multiplicando4.join(''));
var multiplicador4 = [act2[22], act2[23]]
var multipli4 = parseInt(multiplicador4.join(''));
var producto4_1 = multi4 * parseInt(act2[23]);
var producto4_2 = multi4 * parseInt(act2[22]);
var total4 = parseInt(multi4) * parseInt(multipli4);


function pregunta2() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0,
        nt12 = 0;
    var arr1 = [],
        arr2 = [],
        arrRespuesta = [];

    Array.from(document.querySelectorAll('#producto1 td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));
    Array.from(document.querySelectorAll('#producto2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));
    Array.from(document.querySelectorAll('#resultado1 td input')).forEach(elemento => { arrRespuesta.push(elemento.value) });
    var Res1 = parseInt(arrRespuesta.join(''));
    if (num1 == producto1_1) {
        nt1 = 1;
        $('#producto1 input').addClass('correcto');

    } else {
        $('#producto1 input').addClass('incorrecto');

    }

    if (num2 == producto1_2) {
        nt2 = 1;
        $('#producto2 input').addClass('correcto');

    } else {
        $('#producto2 input').addClass('incorrecto');

    }

    if (Res1 == total1) {
        nt3 = 1;
        $('#resultado1 input').addClass('correcto');

    } else {
        $('#resultado1 input').addClass('incorrecto');

    }
    /////////////////////////////////////////tabla 2//////////////////////////////////
    var arr3 = [],
        arr4 = [],
        arrRespuesta2 = [];

    Array.from(document.querySelectorAll('#producto2_1 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));
    Array.from(document.querySelectorAll('#producto2_2 td input')).forEach(elemento => { arr4.push(elemento.value) });
    var num4 = parseInt(arr4.join(''));
    Array.from(document.querySelectorAll('#resultado2 td input')).forEach(elemento => { arrRespuesta2.push(elemento.value) });
    var Res2 = parseInt(arrRespuesta2.join(''));
    if (num3 == producto2_1) {
        nt4 = 1;
        $('#producto2_1 input').addClass('correcto');

    } else {
        $('#producto2_1 input').addClass('incorrecto');

    }

    if (num4 == producto2_2) {
        nt5 = 1;

        $('#producto2_2 input').addClass('correcto');

    } else {
        $('#producto2_2 input').addClass('incorrecto');

    }

    if (Res2 == total2) {
        nt6 = 1;
        $('#resultado2 input').addClass('correcto');

    } else {
        $('#resultado2 input').addClass('incorrecto');

    }

    /////////////////////////////////////////tabla 3//////////////////////////////////
    var arr5 = [],
        arr6 = [],
        arrRespuesta3 = [];

    Array.from(document.querySelectorAll('#producto3_1 td input')).forEach(elemento => { arr5.push(elemento.value) });
    var num5 = parseInt(arr5.join(''));
    Array.from(document.querySelectorAll('#producto3_2 td input')).forEach(elemento => { arr6.push(elemento.value) });
    var num6 = parseInt(arr6.join(''));
    Array.from(document.querySelectorAll('#resultado3 td input')).forEach(elemento => { arrRespuesta3.push(elemento.value) });
    var Res3 = parseInt(arrRespuesta3.join(''));
    if (num5 == producto3_1) {
        nt7 = 1;
        $('#producto3_1 input').addClass('correcto');

    } else {
        $('#producto3_1 input').addClass('incorrecto');

    }

    if (num6 == producto3_2) {
        nt8 = 1;
        $('#producto3_2 input').addClass('correcto');

    } else {
        $('#producto3_2 input').addClass('incorrecto');

    }

    if (Res3 == total3) {
        nt9 = 1;
        $('#resultado3 input').addClass('correcto');

    } else {
        $('#resultado3 input').addClass('incorrecto');

    }

    /////////////////////////////////////////tabla 4//////////////////////////////////
    var arr7 = [],
        arr8 = [],
        arrRespuesta4 = [];

    Array.from(document.querySelectorAll('#producto4_1 td input')).forEach(elemento => { arr7.push(elemento.value) });
    var num7 = parseInt(arr7.join(''));
    Array.from(document.querySelectorAll('#producto4_2 td input')).forEach(elemento => { arr8.push(elemento.value) });
    var num8 = parseInt(arr8.join(''));
    Array.from(document.querySelectorAll('#resultado4 td input')).forEach(elemento => { arrRespuesta4.push(elemento.value) });
    var Res4 = parseInt(arrRespuesta4.join(''));
    if (num7 == producto4_1) {
        nt10 = 1;
        $('#producto4_1 input').addClass('correcto');

    } else {
        $('#producto4_1 input').addClass('incorrecto');

    }

    if (num8 == producto4_2) {
        nt11 = 1;
        $('#producto4_2 input').addClass('correcto');

    } else {
        $('#producto4_2 input').addClass('incorrecto');

    }

    if (Res4 == total4) {
        nt12 = 1;
        $('#resultado4 input').addClass('correcto');

    } else {
        $('#resultado4 input').addClass('incorrecto');

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9) + parseInt(nt10) + parseInt(nt11) + parseInt(nt12);
    var total = (subtotal * 1) / 12;
    $('#nota1_2').val(parseFloat(total).toFixed(2));

}
//////////////////////////////////pregunta 3///////////////////////


var act2 = [];
for (var i = 0; i < 10; i++) {
    act2[i] = Math.floor((Math.random() * 20) + 11);

}

var act2_1 = [];
for (var i = 0; i < 10; i++) {
    act2_1[i] = Math.floor((Math.random() * 9) + 2);

}
$('#act3num1').html('' + act2_1[0] + ' × (' + act2[1] + ' × ' + act2[2] + ')')
$('#act3num2').html('(' + act2_1[0] + ' × ' + act2[1] + ') × ' + act2[2] + '')
$('#act3num3').html('' + act2[6] + ' × (' + act2_1[7] + ' × ' + act2_1[8] + ')')


function pregunta3() {
    var num1 = parseInt(act2_1[0]) * parseInt(act2[1]) * parseInt(act2[2]);
    var num2 = parseInt(act2[6]) * parseInt(act2_1[7]) * parseInt(act2_1[8]);
    var act86_1 = document.getElementById('act86_1').value;
    var act86_2 = document.getElementById('act86_2').value;
    var act86_3 = document.getElementById('act86_3').value;
    var act86_4 = document.getElementById('act86_4').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (act86_1 == num1) {
        nt1 = 0.25;
        $('#act86_1').css("background", "#00e600");

    } else {
        $('#act86_1').css("background", "#ff6666");

    }
    if (act86_2 == num1) {
        nt2 = 0.25;
        $('#act86_2').css("background", "#00e600");

    } else {
        $('#act86_2').css("background", "#ff6666");

    }

    if (act86_3 == num2) {
        nt3 = 0.25;
        $('#act86_3').css("background", "#00e600");

    } else {
        $('#act86_3').css("background", "#ff6666");

    }

    if (act86_4 == num2) {
        nt4 = 0.25;
        $('#act86_4').css("background", "#00e600");

    } else {
        $('#act86_4').css("background", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota1_3').val(parseFloat(total).toFixed(2));
}
/////////////////////pregunta 4 /////////////////////


var act4_1 = [];
for (var i = 0; i < 10; i++) {
    act4_1[i] = Math.floor((Math.random() * 100) + 20);

}

var act4_2 = [];
for (var i = 0; i < 10; i++) {
    act4_2[i] = Math.floor((Math.random() * 20) + 2);

}


$('#act4num11').html('' + act4_1[4] + ' × ( ' + act4_2[0] + ' + ' + act4_2[1] + ') =')
$('#act4num12').html('' + act4_1[5] + ' × ( ' + act4_1[6] + ' - ' + act4_2[1] + ') =')

function pregunta4() {

    var act4num3 = parseInt(act4_1[4]) * (parseInt(act4_2[0]) + parseInt(act4_2[1]));
    var act4num4 = parseInt(act4_1[5]) * (parseInt(act4_1[6]) - parseInt(act4_2[1]));
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

    if (act90_1 == act4num3) {
        nt1 = 0.25;
        $('#act90_1').css("background", "#00e600");

    } else {
        $('#act90_1').css("background", "#ff6666");

    }

    if (act90_2 == act4num3) {
        nt2 = 0.25;
        $('#act90_2').css("background", "#00e600");

    } else {
        $('#act90_2').css("background", "#ff6666");

    }
    if (act90_3 == act4num4) {
        nt3 = 0.25;
        $('#act90_3').css("background", "#00e600");

    } else {
        $('#act90_3').css("background", "#ff6666");

    }
    if (act90_4 == act4num4) {
        nt4 = 0.25;
        $('#act90_4').css("background", "#00e600");

    } else {
        $('#act90_4').css("background", "#ff6666");

    }


    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);

    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#nota1_4').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta 5//////////////////////////////////

act3_1 = [];
act3_2 = [];
for (var i = 0; i < 12; i++) {
    act3_1[i] = Math.floor((Math.random() * 800) + 10);
    act3_2[i] = Math.floor((Math.random() * 90) + 21);

}
var act5num1 = parseInt(act3_2[5]) * parseInt(100);
$('#act5num1').html(' ' + act3_2[5] + ' ×  100 = ' + act5num1 + '');

$('#act5num2').html(' ' + act3_2[7] + ' × 10 = ');
$('#act5num3').html(' ' + act3_2[9] + ' × 1 = ');
$('#act5num4').html(' ' + act3_2[11] + ' × 1000 = ');
$('#act5num5').html(' ' + act3_1[1] + ' × 10 = ');
$('#act5num6').html(' ' + act3_1[3] + ' × 100 = ');

function pregunta5() {
    var num2 = parseInt(act3_2[7]) * 10;
    var num3 = parseInt(act3_2[9]) * 1;
    var num4 = parseInt(act3_2[11]) * 1000;
    var num5 = parseInt(act3_1[1]) * 10;
    var num6 = parseInt(act3_1[3]) * 100;
    var cor = [num2, num3, num4, num5, num6];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act4num' + [i] + '').val();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').addClass('correcto');
        } else {
            $('#act4num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1_5').val(total.toFixed(2));
}

/////////////////pregunta 6/////////////////////
function pregunta6() {
    var act6 = document.getElementById('act6').value;
    var nt1 = 0;
    if (act6 == "5750") {
        nt1 = 1;
        $('#act6').addClass('correcto');

    } else {
        $('#act6').addClass('incorrecto');

    }
    $('#nota1_6').val(nt1.toFixed(2));
}
/////////////////pregunta 7 /////////////////////////////////////


var resp_cor_len3_act13_p14 = [
    ["Rectángulo", "img/i2_p86_act118.jpg"],
    ["Acutángulo", "img/i3_p86_act118.jpg"],
    ["Obtusángulo", "img/i4_p86_act118.jpg"],
]
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i2_p86_act118.jpg', 'img/i3_p86_act118.jpg', 'img/i4_p86_act118.jpg', ];
var loadTxt = ['Rectángulo', 'Acutángulo', 'Obtusángulo', ];
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
    //document.getElementById('bt_comprobar').addEventListener('click', contarRespCorrectaDnD);

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
        3,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');
        var nt = 0;
        $('#nota1_7').val(nt.toFixed(2) + ' ');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#nota1_7').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}
////////////////////////////////////////////pregunta 10//////////////////////////////

var act10 = [
    ['<img class="img-responsive" src="img/i7_p87_act118.jpg"></img><input id="act10txt1" type="text" class="form-control text-lowercase sinEspacios"></input>'],
    ['<img class="img-responsive" src="img/i8_p87_act118.jpg"></img><input id="act10txt2" type="text" class="form-control text-lowercase sinEspacios"></input>'],
    ['<img class="img-responsive" src="img/i9_p87_act118.jpg"></img><input id="act10txt3" type="text" class="form-control text-lowercase sinEspacios"></input>'],
];
var act10Txt = document.getElementsByClassName('act10txt');

act10.sort(f_randomico);
for (i = 0; i < act10Txt.length; i++) {

    $('#' + act10Txt[i].id).html(act10[i]);


}

function pregunta10() {
    var act10txt1 = document.getElementById('act10txt1').value.toLowerCase();
    var act10txt2 = document.getElementById('act10txt2').value.toLowerCase();
    var act10txt3 = document.getElementById('act10txt3').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if (act10txt1 == "regular") {
        nt1 = 1;
        $('#act10txt1').addClass('correcto');

    } else {
        $('#act10txt1').addClass('incorrecto');

    }
    if (act10txt2 == "irregular") {
        nt2 = 1;
        $('#act10txt2').addClass('correcto');

    } else {
        $('#act10txt2').addClass('incorrecto');

    }
    if (act10txt3 == "regular") {
        nt3 = 1;
        $('#act10txt3').addClass('correcto');

    } else {
        $('#act10txt3').addClass('incorrecto');

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1_10').val(parseFloat(total).toFixed(2));
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
        contarRespCorrectaDnD();
        pregunta10();
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

//////////////////////dibujar canvas/////////////////////////////
