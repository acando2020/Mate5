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

        for(var i=0; i<4; i++){
            var nCD0E0 = Math.round(Math.random() * (30 - 4) + 4);
            var nCD1E0 = Math.round(Math.random() * (30 - 4) + 4);
            
            $('#nCD0E'+i).append(nCD0E0);
            $('#nCD1E'+i).append(nCD1E0);
            $('#nC0D'+i).append(nCD0E0);
            $('#nC1D'+i).append(nCD1E0);

        }
        
    }





    function Preg2(){

    	var div = [
    	'<div class="col-sm-4" align="center"> <li> <img src="img/i1_p151_act2.jpg" class="img-responsive"><br> <span class="np2">P = <input type="number" id="rCTT0" class="form-control respuestas" style="width: 60px;"> cm.<br><br></span> </li> </div>',
    	'<div class="col-sm-4" align="center"> <li> <img src="img/i2_p151_act2.jpg" class="img-responsive"><br> <span class="np2">P = <input type="number" id="rCTT1" class="form-control respuestas" style="width: 60px;"> cm.<br><br></span> </li> </div>',
    	'<div class="col-sm-4" align="center"> <li> <img src="img/i3_p151_act2.jpg" class="img-responsive"><br> <span class="np2">P = <input type="number" id="rCTT2" class="form-control respuestas" style="width: 60px;"> cm.<br><br></span> </li> </div>', 
    	];

        var contenidos1 = div;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#completarT").append( item );
        });

    }   






//////////////////////////////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){


            if( parseFloat($('#rCPT0').val()) == 105){
                $('#rCPT0').css("background-color", "#5ED188");
                notaFinalP1++;
            }else{
                $('#rCPT0').css("background-color", "#EF87A7");
            }
            if( parseFloat($('#rCPT1').val()) == 10.5){
                $('#rCPT1').css("background-color", "#5ED188");
                notaFinalP1++;
            }else{
                $('#rCPT1').css("background-color", "#EF87A7");
            }

    }



    
    



    var notaFinalP2 = 0;
    function Resp2(){

        if( parseFloat($('#rCTT0').val()) == 9){
                $('#rCTT0').css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rCTT0').css("background-color", "#EF87A7");
            }
            if( parseFloat($('#rCTT1').val()) == 8){
                $('#rCTT1').css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rCTT1').css("background-color", "#EF87A7");
            }
            if( parseFloat($('#rCTT2').val()) == 45){
                $('#rCTT2').css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rCTT2').css("background-color", "#EF87A7");
            }


    }








    var notaFinalP3 = 0;
    function Resp3(){

            if( parseFloat($('#rTTCH').val()) == 47){
                $('#rTTCH').css("background-color", "#5ED188");
                notaFinalP3++;
            }else{
                $('#rTTCH').css("background-color", "#EF87A7");
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

        

        var nota1 = (notaFinalP1*3)/2;
        var nota2 = (notaFinalP2*4)/3;
        var nota3 = (notaFinalP3*3);

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
