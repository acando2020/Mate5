function actividad28() {
    var arr1 = [],
        arr2 = [],
        arr3 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#totalsum td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));
    var rsco = 0,
        tx = 0;




    if (num1 == "6962") {
        rsco = 7.5;

        $('#num1').css("background", "#00e600");
        $('#num2').css("background", "#00e600");
        $('#num3').css("background", "#00e600");
        $('#num4').css("background", "#00e600");



    } else {


        $('#num1').css("background", "#ff6666");
        $('#num2').css("background", "#ff6666");
        $('#num3').css("background", "#ff6666");
        $('#num4').css("background", "#ff6666");



    }

    var txt = document.getElementById('txt').value;
    if ((txt == "Minuendo") || (txt == "minuendo")) {
        tx = 2.5;
         $('#txt').css("background", "#00e600");
    } else {
        tx = 0;
        $('#txt').css("background", "#ff6666");

    }

    var total = parseFloat(rsco) + parseFloat(tx);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);




}
