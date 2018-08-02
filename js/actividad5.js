document.getElementById('num5_1').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('num5_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('num5_1'), 2.5)
});
document.getElementById('num5_2').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('num5_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('num5_2'), 2.5)
});
document.getElementById('num5_3').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('num5_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('num5_3'), 2.5)
});
document.getElementById('num5_4').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('num5_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('num5_4'), 2.5)
});

function actividad5() {
    var num1 = document.getElementById('num5_1').value;
    var num2 = document.getElementById('num5_2').value;
    var num3 = document.getElementById('num5_3').value;
    var num4 = document.getElementById('num5_4').value;
    if ((num1 == "") || (num2 == "") || (num3 == "") || (num4 == "")) {
        alert("Debe ingresar la calificación")
    } else {
        var Total = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4);
        $('#txtNota').html(Total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#num5_1').css("background", "#00e600");
        $('#num5_2').css("background", "#00e600");
        $('#num5_3').css("background", "#00e600");
        $('#num5_4').css("background", "#00e600");

    }

}
