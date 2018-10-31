var titulos="refuerzo";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);


      


  }

    
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

    	var div = [
    	'<tr><td style="background-color: #FEEEEE;"><span id="nCTF0" class="np2"></span>cm<img src="img/i1_p153_act2.jpg" class="img-responsive"></td> <td><br><br><input type="text" id="rCTF0" class="form-control respuestas" style="width: 180px;"></td> <td><br><br>P = <input type="text" id="rCTF1" class="form-control respuestas" style="width: 90px;"></td> <td><br><br>P = <input type="number" id="rCTF6" class="form-control respuestas" style="width: 70px;"> cm</td> </tr>',
    	'<tr><td style="background-color: #FEEEEE;"><span id="nCTF1" class="np2"></span>cm<img src="img/i2_p153_act2.jpg" class="img-responsive"></td> <td><br><br><input type="text" id="rCTF2" class="form-control respuestas" style="width: 180px;"></td> <td><br><br>P = <input type="text" id="rCTF3" class="form-control respuestas" style="width: 90px;"></td> <td><br><br>P = <input type="number" id="rCTF7" class="form-control respuestas" style="width: 70px;"> cm</td> </tr>',
    	'<tr><td style="background-color: #FEEEEE;"><span id="nCTF2" class="np2"></span>cm<img src="img/i3_p153_act2.jpg" class="img-responsive"></td> <td><br><br><input type="text" id="rCTF4" class="form-control respuestas" style="width: 180px;"></td> <td><br><br>P = <input type="text" id="rCTF5" class="form-control respuestas" style="width: 90px;"></td> <td><br><br>P = <input type="number" id="rCTF8" class="form-control respuestas" style="width: 70px;"> cm</td> </tr>', 
    	];

        var contenidos1 = div;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#completarT0").append( item );
        });


        var nCTF0 = Math.round(Math.random() * (20 - 2) + 2);
        var nCTF1 = Math.round(Math.random() * (20 - 2) + 2);
        var nCTF2 = Math.round(Math.random() * (20 - 2) + 2);
            
        $('#nCTF0').append(nCTF0);
        $('#nCTF1').append(nCTF1);
        $('#nCTF2').append(nCTF2);

    }




    function Preg2(){

    	var nACC0 = Math.round(Math.random() * (15 - 5) + 5);
        $('#nACC0').append(nACC0);

    }





    function Preg3(){

       var nCVM0 = Math.round(Math.random() * (99 - 50) + 50);
       $('#nCVM0').append(nCVM0);
       var nCVM1 = Math.round(Math.random() * (50 - 20) + 20);
       $('#nCVM1').append(nCVM1);
       var nCVM2 = Math.round(Math.random() * (50 - 20) + 20)*1000;
       $('#nCVM2').append(nCVM2);
       var nCVM3 = Math.round(Math.random() * (90 - 20) + 20);
       $('#nCVM3').append(nCVM3);


    }









//////////////////////////////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){


        var nCTF0 = parseInt($('#nCTF0').text()) * 4;
        var nCTF1 = parseInt($('#nCTF1').text()) * 6;
        var nCTF2 = parseInt($('#nCTF2').text()) * 3;

        var resp = ['cuadrado','4xl','hexágonoregular','6xl','triánguloequilátero','3xl',nCTF0,nCTF1,nCTF2];


        for( var i=0; i<9; i++ ){

            if( ($('#rCTF'+i).val()).toLowerCase().replace(/ /g, "") == resp[i]){
                $('#rCTF'+i).css("background-color", "#5ED188");
                notaFinalP1++;
            }else{
                $('#rCTF'+i).css("background-color", "#EF87A7");
            }

        }

    }





    var notaFinalP2 = 0;
    function Resp2(){

    	
    		if( ($('#rACC0').val()) == 'Triángulo equilátero' ){
                $('#rACC0').css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rACC0').css("background-color", "#EF87A7");
            }


            if( ($('#rACC1').val()) == (parseInt($('#nACC0').text())*3) ){
                $('#rACC1').css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rACC1').css("background-color", "#EF87A7");
            }

    }






    var notaFinalP3 = 0;
    function Resp3(){

    	var resp = [parseInt((parseInt($('#nCVM0').text())*10)/22), parseInt((parseInt($('#nCVM1').text())*1000)), parseInt((parseInt($('#nCVM2').text())/1000)), parseInt(((parseInt($('#nCVM3').text()))/10)*22)];

    	for(var i=0; i<4; i++){

    		if( parseInt($('#rCVM'+i).val()) == resp[i] ){
                $('#rCVM'+i).css("background-color", "#5ED188");
                notaFinalP3++;
            }else{
                $('#rCVM'+i).css("background-color", "#EF87A7");
            }
    	}


    }







    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
        

    $(".panel-collapse").removeClass('in');
      Inicio();
      Preg1();
      Preg2();
      Preg3();
    




      function confirmar() {
        Resp1();
        Resp2();
        Resp3();



        var nota1 = (notaFinalP1*3)/9;
        var nota2 = (notaFinalP2*3)/2;
        var nota3 = (notaFinalP3);
        
        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
      /*if( $('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/
        
      });

  });
