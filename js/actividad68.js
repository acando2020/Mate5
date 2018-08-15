function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios("");

document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 5)
});


function actividad68_1() {


    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var txt4 = document.getElementById('txt4').value.toLowerCase();
    var txt5 = document.getElementById('txt5').value.toLowerCase();

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


    if (txt3 == "siglo") {
        $('#txt3').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#txt3').css("background", "#ff6666");

    }

    if (txt4 == "8") {
        $('#txt4').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#txt4').css("background", "#ff6666");

    }
    if (txt5 == "2") {
        $('#txt5').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#txt5').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 5) / 3;
    $('#nota2').val(parseFloat(total).toFixed(2));

}





function actividad68() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;

    if (nota1 == "") {
        alert("Ingrese la calificación de la pregunta 1")
    } else {
        actividad68_1();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;


        var total = parseFloat(nota1) + parseFloat(nota2);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
