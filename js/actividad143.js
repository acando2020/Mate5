document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 5)
});
f_iniciar();

function f_iniciar() {

    $(".drag").draggable({
        rever: "invalid",
        helper: "clone"
    });
    $(".drop").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop").draggable({ disabled: true });
            str = (ui.draggable.attr("id")); //capturamos los IDS

        }
    });
}

function pregunta1() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0;
    if (($('#manpap').find('img.manzana').length == 1) && ($('#manpap').find('img.papaya').length == 1)) {
        $('#manpap').css("background", "#00e600");
        nt1 = 1;
    } else {
        $('#manpap').css("background", "#ff6666");
    }
    if (($('#mansan').find('img.manzana').length == 1) && ($('#mansan').find('img.sandia').length == 1)) {
        $('#mansan').css("background", "#00e600");
        nt2 = 1;
    } else {
        $('#mansan').css("background", "#ff6666");
    }
    if (($('#manmor').find('img.manzana').length == 1) && ($('#manmor').find('img.mora').length == 1)) {
        $('#manmor').css("background", "#00e600");
        nt3 = 1;
    } else {
        $('#manmor').css("background", "#ff6666");
    }
    /////////////////////////////////////////////////////////
    if (($('#perpap').find('img.pera').length == 1) && ($('#perpap').find('img.papaya').length == 1)) {
        $('#perpap').css("background", "#00e600");
        nt4 = 1;
    } else {
        $('#perpap').css("background", "#ff6666");
    }
    if (($('#persan').find('img.pera').length == 1) && ($('#persan').find('img.sandia').length == 1)) {
        $('#persan').css("background", "#00e600");
        nt5 = 1;
    } else {
        $('#persan').css("background", "#ff6666");
    }
    if (($('#permor').find('img.pera').length == 1) && ($('#permor').find('img.mora').length == 1)) {
        $('#permor').css("background", "#00e600");
        nt6 = 1;
    } else {
        $('#permor').css("background", "#ff6666");
    }
    /////////////////////////////////////////////////////////
    if (($('#frupap').find('img.frutilla').length == 1) && ($('#frupap').find('img.papaya').length == 1)) {
        $('#frupap').css("background", "#00e600");
        nt7 = 1;
    } else {
        $('#frupap').css("background", "#ff6666");
    }
    if (($('#frusan').find('img.frutilla').length == 1) && ($('#frusan').find('img.sandia').length == 1)) {
        $('#frusan').css("background", "#00e600");
        nt8 = 1;
    } else {
        $('#frusan').css("background", "#ff6666");
    }
    if (($('#frumor').find('img.frutilla').length == 1) && ($('#frumor').find('img.mora').length == 1)) {
        $('#frumor').css("background", "#00e600");
        nt9 = 1;
    } else {
        $('#frumor').css("background", "#ff6666");
    }
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6) + parseFloat(nt7) + parseFloat(nt8) + parseFloat(nt9);
    var total = (subtotal * 5) / 9;
    $('#nota1').val(parseFloat(total).toFixed(2));
    $(".drag").draggable({ disabled: true });
}


function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    if (nota2 == "") {
        alert("Debe ingresar la nota de la pregunta 2")
    } else {
        pregunta1();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var total = parseFloat(nota1) + parseFloat(nota2);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }



}
