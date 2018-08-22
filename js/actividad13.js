document.getElementById('num12_1').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('num12_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('num12_1'), 2.5)
});
document.getElementById('num12_2').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('num12_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('num12_2'), 2.5)
});


function suma() {
    var arr1 = [],
        arr2 = [],
        arr3 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#trnum1 td span')).forEach(elemento => { arr1.push(elemento.textContent) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#trnum2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));

    Array.from(document.querySelectorAll('#trnum3 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));

    Array.from(document.querySelectorAll('#totalsum td input')).forEach(elemento => { arrtotal.push(elemento.value) });
    var Suma = parseInt(arrtotal.join(''));

    var sumaTotal = parseInt(num1) + parseInt(num2) + parseInt(num3);

    if (sumaTotal == Suma) {
        var rsco = 5;
        $('#num12_3').val(parseFloat(rsco));
        $('#totalsum').css("background", "#00e600");
        $('#trnum2').css("background", "#00e600");
        $('#trnum3').css("background", "#00e600");
        $('#numT').val(Suma);
        $('#numT').css("background", "#00e600");

    } else {
        $('#totalsum').css("background", "#ff6666");
        var rsco = 0;
        $('#num12_3').val(parseFloat(rsco));
        $('#trnum2').css("background", "#ff6666");
        $('#trnum3').css("background", "#ff6666");
        $('#numT').val(Suma);
        $('#numT').css("background", "#ff6666");

    }



}

function actividad12() {
    suma();
    var num1 = document.getElementById('num12_1').value;
    var num2 = document.getElementById('num12_2').value;
    var num3 = document.getElementById('num12_3').value;
    if ((num1 == "") || (num2 == "")) {
        alert("Ingrese la nota")

    } else {
        var total = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
