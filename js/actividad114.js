function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

///////////////////////////solo numeros////////////////
function validarN(inputs) {

    $(inputs).on('keypress', function(e) {
        tecla = document.all ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /[,124536978qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".VF");



var resp_cor_len3_act13_p14 = [
    ["Escaleno", "img/i1_p82_act114.jpg"],
    ["Isósceles", "img/i2_p82_act114.jpg"],
    ["Acutángulo", "img/i3_p82_act114.jpg"],
    ["Obtusángulo", "img/i4_p82_act114.jpg"],
    ["Equilátero", "img/i5_p82_act114.jpg"],
    ["Rectángulo", "img/i6_p82_act114.jpg"],

]
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p82_act114.jpg', 'img/i2_p82_act114.jpg', 'img/i3_p82_act114.jpg', 'img/i4_p82_act114.jpg', 'img/i5_p82_act114.jpg', 'img/i6_p82_act114.jpg'];
var loadTxt = ['Escaleno', 'Isósceles', 'Acutángulo', 'Obtusángulo', 'Equilátero', 'Rectángulo'];
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
        6,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 5;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta');
        var nt = 0;
        $('#nota1').val(nt.toFixed(2) + ' ');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota
        $('#nota1').val(calculo.toFixed(2) + ' ');
    }
    document.getElementById('bt_comprobar').disabled = true;
    //setTimeout('document.location.reload()',tiempoReload)

}

function actividad114_3() {
    var correc = ['centro', 'radio', 'diámetro', 'arco', 'cuerda', ];


    var cont = 0;

    for (var i = 0; i < 5; i++) {

        var num = $('#act114_2txt' + [i] + '').val().toLowerCase();
        if (correc[i] == num) {
            cont = cont + 1;
            $('#act114_2txt' + [i] + '').css("background-color", "#00e600");
        } else {
            $('#act114_2txt' + [i] + '').css("background-color", "#ff6666");

        }

    }
    var total = (cont * 2.5) / 5;
    $('#nota3').val(total.toFixed(2));


}

function actividad114_4() {
    var correc = ['4', '3', 'regular', 'regular', 'misma', '4', 'irregular', 'irregular', '4', 'irregular', 'irregular', 'todos sus lados tienen diferente medida'];


    var cont = 0;

    for (var i = 0; i < 12; i++) {

        var num = $('#act114_4txt' + [i] + '').val().toLowerCase();
        if (correc[i] == num) {
            cont = cont + 1;
            $('#act114_4txt' + [i] + '').css("background-color", "#00e600");
        } else {
            $('#act114_4txt' + [i] + '').css("background-color", "#ff6666");

        }

    }
    var total = (cont * 2.5) / 12;
    $('#nota4').val(total.toFixed(2));


}

function actividad114() {
    contarRespCorrectaDnD();
    actividad114_3();
    actividad114_4();
    var nota1 = document.getElementById('nota1').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var total = parseFloat(nota1) + parseFloat(nota3) + parseFloat(nota4);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
