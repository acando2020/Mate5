var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0,
    numeroInt3 = 0;

var h = 1;
for (var h = 0; h <= 13; h++) {
    interesult.push(Math.floor(Math.random() * 90000) + 500)

    /* numeroInt = parseInt(numeroInt) + parseInt(IntNum);
     interesult[h] = numeroInt;*/

}
/////////////////////////////////////////////////////

var completar = document.getElementsByClassName('com');
interesult.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html(interesult[i]);

}


function actividad44() {
    var num1 = $( "#completar1").text();
    var signo = $( "#select1").val();
    var num2 = $( "#completar2").text();
    /////////////////////////////////////////////////////
    var num3 = $( "#completar3").text();
    var signo2 = $( "#select2").val();
    var num4 = $( "#completar4").text();
    /////////////////////////////////////////////////////
    var num5 = $( "#completar5").text();
    var signo3 = $( "#select3").val();
    var num6 = $( "#completar6").text();
    /////////////////////////////////////////////////////
    var num7 = $( "#completar7").text();
    var signo4 = $( "#select4").val();
    var num8 = $( "#completar8").text();
    /////////////////////////////////////////////////////
    var num9 = $( "#completar9").text();
    var signo5 = $( "#select5").val();
    var num10 = $( "#completar10").text();
    /////////////////////////////////////////////////////
    var num11 = $( "#completar11").text();
    var signo6 = $( "#select6").val();
    var num12 = $( "#completar12").text();
    var nt = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0;

    if (signo == "") {
        $('#select1').css("background", "#ff6666");
    } else {
        if (signo == "=") {
            if (num1 == num2) {
                nt = 1;
                $('#select1').css("background", "#00e600");

            } else {
                $('#select1').css("background", "#ff6666");

            }
        } else if (signo == ">") {
            if (num1 >= num2) {
                nt = 1;
                $('#select1').css("background", "#00e600");
            } else {
                $('#select1').css("background", "#ff6666");

            }


        } else if (signo == "<") {
            if (num1 <= num2) {
                nt = 1;
                $('#select1').css("background", "#00e600");

            } else {
                $('#select1').css("background", "#ff6666");

            }
        }
    }


    ///////////////////////2//////////////////////////////
    if (signo2 == "") {
        $('#select2').css("background", "#ff6666");

    } else {
        if (signo2 == "=") {
            if (num3 == num4) {
                nt2 = 1;
                $('#select2').css("background", "#00e600");

            } else {
                $('#select2').css("background", "#ff6666");

            }
        } else if (signo2 == ">") {
            if (num3 >= num4) {
                nt2 = 1;
                $('#select2').css("background", "#00e600");
            } else {
                $('#select2').css("background", "#ff6666");

            }


        } else if (signo2 == "<") {
            if (num3 <= num4) {
                nt2 = 1;
                $('#select2').css("background", "#00e600");

            } else {
                $('#select2').css("background", "#ff6666");
            }
        }
    }

    //////////////////////3//////////////////////////
    if (signo3 == "") {
        $('#select3').css("background", "#ff6666");
    } else {
        if (signo3 == "=") {
            if (num5 == num6) {
                nt3 = 1;
                $('#select3').css("background", "#00e600");

            } else {
                $('#select3').css("background", "#ff6666");

            }
        } else if (signo3 == ">") {
            if (num5 >= num6) {
                nt3 = 1;
                $('#select3').css("background", "#00e600");
            } else {
                $('#select3').css("background", "#ff6666");

            }


        } else if (signo3 == "<") {
            if (num5 <= num6) {
                nt3 = 1;
                $('#select3').css("background", "#00e600");

            } else {
                $('#select3').css("background", "#ff6666");

            }
        }
    }

    ////////////////////4/////////////////////////////
    if (signo4 == "") {
        $('#select4').css("background", "#ff6666");

    } else {
        if (signo4 == "=") {
            if (num7 == num8) {
                nt4 = 1;
                $('#select4').css("background", "#00e600");

            } else {
                $('#select4').css("background", "#ff6666");

            }
        } else if (signo4 == ">") {
            if (num7 > num8) {
                nt4 = 1;
                $('#select4').css("background", "#00e600");
            } else {
                $('#select4').css("background", "#ff6666");

            }


        } else if (signo4 == "<") {
            if (num7 < num8) {
                nt4 = 1;
                $('#select4').css("background", "#00e600");

            } else {
                $('#select4').css("background", "#ff6666");

            }
        }

    }

    ////////////////////5////////////////////////
    if (signo5 == "") {
        $('#select5').css("background", "#ff6666");
    } else {
        if (signo5 == "=") {
            if (num9 == num10) {
                nt5 = 1;
                $('#select5').css("background", "#00e600");

            } else {
                $('#select5').css("background", "#ff6666");

            }
        } else if (signo5 == ">") {
            if (num9 > num10) {
                nt5 = 1;
                $('#select5').css("background", "#00e600");
            } else {
                $('#select5').css("background", "#ff6666");

            }


        } else if (signo5 == "<") {
            if (num9 < num10) {
                nt5 = 1;
                $('#select5').css("background", "#00e600");

            } else {
                $('#select5').css("background", "#ff6666");

            }
        }
    }

    /////////////////////////////////////////////////
    if (signo6 == "") {
        $('#select6').css("background", "#ff6666");

    } else {

    }
    if (signo6 == "=") {
        if (num11 == num12) {
            nt6 = 1;
            $('#select6').css("background", "#00e600");

        } else {
            $('#select6').css("background", "#ff6666");

        }
    } else if (signo6 == ">") {
        if (num11 > num12) {
            nt6 = 1;
            $('#select6').css("background", "#00e600");
        } else {
            $('#select6').css("background", "#ff6666");

        }


    } else if (signo6 == "<") {
        if (num11 < num12) {
            nt6 = 1;
            $('#select6').css("background", "#00e600");

        } else {
            $('#select6').css("background", "#ff6666");
        }
    }
    var suma = parseInt(nt) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var ResPre4 = (suma * 10) / 6;
    $('#txtNota').html(ResPre4.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);

    $('#txtAlumno').attr("disabled", false);


}

