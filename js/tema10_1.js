var titulos="aplico";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    Math.gcd = function() {
        if (arguments.length == 2) {
            if (arguments[1] == 0)
                return arguments[0];
            else
                return Math.gcd(arguments[1], arguments[0] % arguments[1]);
        } else if (arguments.length > 2) {
            var result = Math.gcd(arguments[0], arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                result = Math.gcd(result, arguments[i]);
            return result;
        }
    };



    function Preg1(){

            var nIF0 = Math.round(Math.random() * (20 - 2) + 2);
            var nIF1 = Math.round(Math.random() * (20 - 2) + 2);
            
            $('#nIF0').append(nIF0);
            $('#nIF1').append(nIF1);

        
    }





    function Preg2(){

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








        //////Preg3
        var nCTAB0 = Math.round(Math.random() * (200 - 100) + 100);
        var nCTAB1 = Math.round(Math.random() * (9 - 2) + 2);        
            
        $('#nCTAB0').append(nCTAB0);
        $('#nCTAB1').append(nCTAB1);
        $('#nCTAB2').append(nCTAB1);
    }   






//////////////////////////////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        var nIF0 = parseInt($('#nIF0').text()) * 6;
        var nIF1 = parseInt($('#nIF1').text()) * 5;

        var resp = ['hexágonoregular','6xl',nIF0,'pentágono','5xl',nIF1];


        for(var i=0; i<6; i++){

            if( ($('#rIF'+i).val()).toLowerCase().replace(/ /g, "") == resp[i]){
                $('#rIF'+i).css("background-color", "#5ED188");
                notaFinalP1++;
            }else{
                $('#rIF'+i).css("background-color", "#EF87A7");
            }


        }


    }



    
    



    var notaFinalP2 = 0;
    function Resp2(){


        var nCTF0 = parseInt($('#nCTF0').text()) * 4;
        var nCTF1 = parseInt($('#nCTF1').text()) * 6;
        var nCTF2 = parseInt($('#nCTF2').text()) * 3;

        var resp = ['cuadrado','4xl','hexágonoregular','6xl','triánguloequilátero','3xl',nCTF0,nCTF1,nCTF2];


        for( var i=0; i<9; i++ ){

            if( ($('#rCTF'+i).val()).toLowerCase().replace(/ /g, "") == resp[i]){
                $('#rCTF'+i).css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rCTF'+i).css("background-color", "#EF87A7");
            }

        }

    }








    var notaFinalP3 = 0;
    function Resp3(){
       // alert( parseFloat($('#rCTAB0').val()) +'=='+ ((parseInt($('#nCTAB0').text())) * 4) );
            if( parseFloat($('#rCTAB0').val()) == ((parseInt($('#nCTAB0').text())) * 4) ){
                $('#rCTAB0').css("background-color", "#5ED188");
                notaFinalP3++;
            }else{
                $('#rCTAB0').css("background-color", "#EF87A7");
            } 

             if( parseFloat($('#rCTAB1').val()) == ((parseInt($('#nCTAB0').text())) * 4) * parseInt($('#nCTAB1').text()) ){
                $('#rCTAB1').css("background-color", "#5ED188");
                notaFinalP3++;
            }else{
                $('#rCTAB1').css("background-color", "#EF87A7");
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

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();

        

        var nota1 = (notaFinalP1*3)/6;
        var nota2 = (notaFinalP2*4)/9;
        var nota3 = (notaFinalP3*3)/2;

       // alert (nota1+'+'+nota2+'+'+nota3+'+'+nota4+'+'+nota5);
        
        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
confirmar();
      /* if( $('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/
        
      });

  });
