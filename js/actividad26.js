 var resp2_1 = 0,
     resp2_2 = 0,
     resp2_3 = 0,
     resp2_4 = 0,
     resp2_5 = 0,
     resp2_6 = 0,
     resp2_7 = 0,
     resp2_8 = 0,
     resp2_9 = 0,
     resp2_10 = 0,
     resp2_11 = 0,
     resp2_12 = 0,
     resp2_13 = 0,
     resp2_14 = 0,
     resp2_15 = 0,
     resp2_16 = 0,
     resp2_17 = 0,
     resp2_18 = 0;

 function actividad26_1() {
     var act1 = document.getElementById('act1').value;
     var act4 = document.getElementById('act4').value;
     if (act1 == "13879") {
         resp2_1 = 1;
         $('#act1').css("background", "#00e600");

     } else {
         $('#act1').css("background", "#ff6666");

     }

     if (act4 == "44") {
         resp2_2 = 1;
         $('#act4').css("background", "#00e600");

     } else {
         $('#act4').css("background", "#ff6666");

     }
     var total = parseInt(resp2_1) + parseInt(resp2_2);
     $('#nt1').val(total);


 }

 function actividad26_2() {
     var act2_1 = document.getElementById('act2_1').value;
     var act2_2 = document.getElementById('act2_2').value;
     var act2_3 = document.getElementById('act2_3').value;
     var act2_4 = document.getElementById('act2_4').value;
     if ((act2_1 == "42 + 18 + 26") || (act2_1 == "42+18+26")) {
         resp2_3 = 0.5;
         $('#act2_1').css("background", "#00e600");

     } else {
         $('#act2_1').css("background", "#ff6666");

     }

     if (act2_2 == "86") {
         resp2_4 = 0.5;
         $('#act2_2').css("background", "#00e600");

     } else {
         $('#act2_2').css("background", "#ff6666");

     }

     if (act2_3 == "86") {
         resp2_5 = 0.5;
         $('#act2_3').css("background", "#00e600");

     } else {
         $('#act2_3').css("background", "#ff6666");

     }

     if ((act2_4 == "La suma es correcta.") || (act2_4 == "la suma es correcta") || (act2_4 == "suma es correcta") || (act2_4 == "La suma es correcta")) {
         resp2_6 = 0.5;
         $('#act2_4').css("background", "#00e600");

     } else {
         $('#act2_4').css("background", "#ff6666");

     }
     var total = parseFloat(resp2_3) + parseFloat(resp2_4) + parseFloat(resp2_5) + parseFloat(resp2_6);
     $('#nt2').val(parseFloat(total).toFixed(2));


 }

 function actividad26_3() {
     var act5_1 = document.getElementById('act5_1').value;
     var act5_2 = document.getElementById('act5_2').value;
     var act5_3 = document.getElementById('act5_3').value;
     if ((act5_1 == "1 150") || (act5_1 == "1150")) {
         resp2_7 = 1;
         $('#act5_1').css("background", "#00e600");

     } else {
         $('#act5_1').css("background", "#ff6666");

     }

     if ((act5_2 == "720 + 280 + 150 =") || (act5_2 == "720+280+150=")) {
         resp2_8 = 0.5;
         $('#act5_2').css("background", "#00e600");

     } else {
         $('#act5_2').css("background", "#ff6666");

     }

     if ((act5_3 == "700 + 300 + 150 = 1 000 + 150 = 1 150") || (act5_3 == "700+300+150=1000+150=1150")) {
         resp2_9 = 0.5;
         $('#act5_3').css("background", "#00e600");

     } else {
         $('#act5_3').css("background", "#ff6666");

     }


     var total = parseFloat(resp2_7) + parseFloat(resp2_8) + parseFloat(resp2_9);
     $('#nt3').val(parseFloat(total).toFixed(2));


 }

 function actividad26_4() {
     var act3_1 = document.getElementById('act3_1').value;
     var act3_2 = document.getElementById('act3_2').value;
     var act3_3 = document.getElementById('act3_3').value;
     var act3_4 = document.getElementById('act3_4').value;
     if ((act3_1 == "40 000 + 2 000 + 900 + 20 + 4") || (act3_1 == "40000+2000+900+20+4")) {
         resp2_11 = 0.5;
         $('#act3_1').css("background", "#00e600");

     } else {
         $('#act3_1').css("background", "#ff6666");

     }

     if ((act3_2 == "300 000 + 60 000 + 8 000 + 10 + 3") || (act3_2 == "300000+60000+8000+10+3")) {
         resp2_12 = 0.5;
         $('#act3_2').css("background", "#00e600");

     } else {
         $('#act3_2').css("background", "#ff6666");

     }

     if ((act3_3 == "300 000 + 100 000 + 10 000 + 900 + 30 + 7 = 410 937") || (act3_3 == "300000+100000+10000+900+30+7=410937")) {
         resp2_13 = 0.5;
         $('#act3_3').css("background", "#00e600");

     } else {
         $('#act3_3').css("background", "#ff6666");

     }

     if ((act3_4 == "410 937 habitantes") || (act3_4 == "410937 habitantes") || (act3_4 == "410937") || (act3_4 == "410 937")) {
         resp2_14 = 0.5;
         $('#act3_4').css("background", "#00e600");

     } else {
         $('#act3_4').css("background", "#ff6666");

     }


     var total = parseFloat(resp2_11) + parseFloat(resp2_12) + parseFloat(resp2_13) + parseFloat(resp2_14);
     $('#nt4').val(parseFloat(total).toFixed(2));


 }

 function actividad26_5() {
     var act6_1 = document.getElementById('act6_1').value;
     var act6_2 = document.getElementById('act6_2').value;
     var act6_3 = document.getElementById('act6_3').value;
     var act6_4 = document.getElementById('act6_4').value;

     if ((act6_1 == "2 250 + 2 750 + 2 400 + 2 370 =") || (act6_1 == "2250+2750+2400+2370=") || (act6_1 == "2250+2750+2400+2370")) {
         resp2_15 = 0.5;
         $('#act6_1').css("background", "#00e600");

     } else {
         $('#act6_1').css("background", "#ff6666");

     }

     if ((act6_2 == "(2 250 + 2 750) + (2 400 + 2 370) =") || (act6_2 == "(2250+2750)+(2400+2370)=") || (act6_2 == "(2250+2750)+(2400+2370)")) {
         resp2_16 = 0.5;
         $('#act6_2').css("background", "#00e600");

     } else {
         $('#act6_2').css("background", "#ff6666");

     }

     if ((act6_3 == "5 000 + 4 770 = 9 770") || (act6_3 == "5000+4770=9770") || (act6_3 == "5000 + 4770 = 9770")) {
         resp2_17 = 0.5;
         $('#act6_3').css("background", "#00e600");

     } else {
         $('#act6_3').css("background", "#ff6666");

     }

     if ((act6_4 == "9 770 metros") || (act6_4 == "9770 metros") || (act6_4 == "9770") || (act6_4 == "9 770")) {
         resp2_18 = 0.5;
         $('#act6_4').css("background", "#00e600");

     } else {
         $('#act6_4').css("background", "#ff6666");

     }


     var total = parseFloat(resp2_15) + parseFloat(resp2_16) + parseFloat(resp2_17) + parseFloat(resp2_18);
     $('#nt5').val(parseFloat(total).toFixed(2));


 }

 function actividad26() {
     actividad26_1();
     actividad26_2();
     actividad26_4();
     actividad26_3();
     actividad26_5();
     var nt1 = document.getElementById('nt1').value;
     var nt2 = document.getElementById('nt2').value;
     var nt3 = document.getElementById('nt3').value;
     var nt4 = document.getElementById('nt4').value;
     var nt5 = document.getElementById('nt5').value;

     var total26 = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
     $('#txtNota').html(total26.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);

 }
