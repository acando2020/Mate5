document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 1)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1)
});

function actividad33_1() {
    var arr1 = [],
        arr2 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#suma td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#resta td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));
    var numf = document.getElementById('numf').value;

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

    if (num1 == "976") {
        for (var i = 1; i < 4; i++) {
            $('#num' + [i] + '').css("background", "#00e600");

        }
        $('#suma').css("background", "#00e600");
        nt1 = 3;

    } else {
        for (var i = 1; i < 4; i++) {
            $('#num' + [i] + '').css("background", "#ff6666");
        }
        $('#suma').css("background", "#ff6666");


    }
    if (num2 == "494") {
        for (var i = 4; i < 8; i++) {
            $('#num' + [i] + '').css("background", "#00e600");

        }
        $('#resta').css("background", "#00e600");
        nt2 = 3;


    } else {
        for (var i = 4; i < 8; i++) {
            $('#num' + [i] + '').css("background", "#ff6666");
        }
        $('#resta').css("background", "#ff6666");



    }
    if ((numf == "$ 494") || (numf == "494") || (numf == "$494")) {
        $('#numf').css("background", "#00e600");
        nt3 = 2;

    } else {
        $('#numf').css("background", "#ff6666");


    }

    var totalR18 = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    $('#nota3').val(totalR18.toFixed(2));

}

function actividad33() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;

    if ((nota1 == "") || (nota2 == "")) {
        alert("Debe calificar")
    } else {
        actividad33_1();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }

}
