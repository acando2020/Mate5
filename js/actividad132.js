/*random1 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>1 665 ÷ 1 =</td> <td><input id="act1num0" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>27 000 ÷ 1 000 =</td> <td><input id="act1num10" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>3 973 ÷ 1 =</td> <td><input id="act1num1" class="inputfraccciones" style="width: 70px;"></input></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>470 ÷ 10 =</td> <td><input id="act1num2" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>2 850 ÷ 10 =</td> <td><input id="act1num3" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>4 100 ÷ 10 =</td> <td><input id="act1num4" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>600 ÷ 100 =</td> <td><input id="act1num5" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>1200 ÷ 100 =</td> <td><input id="act1num6" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>2 300 ÷ 100 =</td> <td><input id="act1num7" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>2 000 ÷ 1 000 =</td> <td><input id="act1num8" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>15 000 ÷ 1 000 =</td> <td><input id="act1num9" class="inputfraccciones" style="width: 70px;"></input></td>'],

];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}*/
function pregunta1() {
    var respact2 = ['73200', '7320', '732', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));

}


function pregunta2() {
    var nt1 = 0;
    var act2num0 = document.getElementById('act2num0').value;
    if (act2num0 == 15) {
        nt1 = 5;
        $('#act2num0').css("background", "#00e600");
    } else {
        $('#act2num0').css("background", "#ff6666");

    }

    $('#nota2').val(parseFloat(nt1).toFixed(2));

}
//////////////////////////

function NotaFinal() {
    pregunta1();
    pregunta2();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;



    var total = parseFloat(nota1) + parseFloat(nota2);


    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
