document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 5)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 5, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 5)
});






function actividad63() {

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;

    if ((nota1 == "") || (nota2 == "")) {
        alert("Ingresar nota")
    } else {
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var total = parseFloat(nota1) + parseFloat(nota2);
        $('#nota1').css("background", "#00e600");
        $('#nota2').css("background", "#00e600");
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
