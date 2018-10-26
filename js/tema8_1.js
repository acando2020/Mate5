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


    function mcm( num1, num2 ) {
        var mcm = 0;
        var a = Math.max(num1, num2);
        var b = Math.min(num1, num2);
        mcm = (a/Math.gcd(a, b))*b;
        return mcm;
    }




    function Preg1(){

        for(var i=0; i<4; i++){
            var nCD0E0 = Math.round(Math.random() * (9 - 2) + 2);
            
            $('#nCD0E'+i).append(nCD0E0);
            $('#nCD1E'+i).append(nCD0E0+1);
            $('#nC0D'+i).append(nCD0E0);
            $('#nC1D'+i).append(nCD0E0+1);

        }
        
    }





    function Preg2(){

        var n1;
        var n2;
        var n3;

        var div = '';

        var c=1;

        for(var i=1; i<13; i=i+3){

                    div =  '<div class="col-sm-3 table-responsive" style="border-right: 1px solid; border-right-color: #FF4606; border-right-style: dashed;">'+
                                '<table class="table table-borderless">'+
                                    '<tbody align="center">'+
                                        '<tr>'+
                                            '<td><input type="number" id="nDFP'+(i)+'" class="form-control respuestas" style="width: 45px;" readonly></td>'+
                                            '<td><img src="img/i2_p141_act2.png" class="img-responsive"></td>'+
                                            '<td><input type="number" id="nDFP'+(i+1)+'" class="form-control respuestas" style="width: 45px;" readonly></td>'+
                                            '<td><img src="img/i2_p141_act2.png" class="img-responsive"></td>'+
                                            '<td><input type="number" class="form-control respuestas" style="width: 45px;"></td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td><textarea class="form-control respuestas" style="width: 45px;" rows="6"></textarea></td>'+
                                            '<td><img src="img/i1_p141_act2.png" class="img-responsive"></td>'+
                                            '<td><textarea class="form-control respuestas" style="width: 45px;" rows="6"></textarea></td>'+
                                            '<td><img src="img/i1_p141_act2.png" class="img-responsive"></td>'+
                                            '<td><textarea class="form-control respuestas" style="width: 45px;" rows="6"></textarea></td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+

                                '<br>'+
                                '<div align="center">'+
                                    '<b style="color: #06CAFF;">MCM</b> &nbsp;&nbsp;=&nbsp;&nbsp;'+
                                    '<input type="text" id="rDFP'+(c)+'" class="form-control respuestas" style="width: 60px;">'+
                                '</div>'+
                            '</div>';

            $('#descomponer0').append(div);


            n1 = Math.round(Math.random() * (30 - 2) + 2)*2;
            n2 = Math.round(Math.random() * (30 - 2) + 2)*2;
            n3 = Math.round(Math.random() * (30 - 2) + 2)*2;

            $('#nDFP'+i).val(n1);
            $('#nDFP'+(i+1)).val(n2);
            $('#nDFP'+(i+2)).val(n3);

            c++;

        }

    }   




        function desordenar(numeros){
            var desordenado = []
            while(true){
                if(!numeros.length){break}
                var sacado = numeros.shift()
                var aleatorio=Math.floor(Math.random()*(desordenado.length+1))
                var inicio = desordenado.slice(0,aleatorio)
                var medio = sacado
                var fin = desordenado.slice(aleatorio,desordenado.length)
                desordenado = (inicio).concat(medio).concat(fin)
            }
            return desordenado
        }
        




//////////////////////////////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        var resp = [];
        var resp1 = [];
        var res = [];
        var repetidos = [];
        var temporal = [];
        var multiplos = 0;
        var multiplos1 = 0; 

        for(var j=0; j<2; j++){

                for(var k=0; k<10; k++){
                    multiplos = multiplos + parseInt($('#nCD0E'+j).text());
                    resp.push(multiplos);

                    multiplos1 = multiplos1 + parseInt($('#nCD1E'+j).text());
                    resp1.push(multiplos1);
                }
                
                    

                //alert( (($('#rCD0E'+j).val()).replace(/ /g, "")).split(',').slice(0, 10) +'=='+ resp);
                if( ((($('#rCD0E'+j).val()).replace(/ /g, "")).split(',').slice(0, 10)).toString() == resp){
                    notaFinalP1++;
                    $('#rCD0E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD0E'+j).css("background-color", "#EF87A7");
                }

            //////////////////////////////////////////////

               // alert( ((($('#rCD1E'+j).val()).replace(/ /g, "")).split(',').slice(0, 10) +'=='+ resp1));
                if( ((($('#rCD1E'+j).val()).replace(/ /g, "")).split(',').slice(0, 10)).toString() == resp1){
                    notaFinalP1++;
                    $('#rCD1E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD1E'+j).css("background-color", "#EF87A7");
                }


            ///////////////////////////////////////////
                res = resp.concat(resp1);
                res.forEach((value,index)=>{
                    temporal = Object.assign([],res); //Copiado de elemento
                    temporal.splice(index,1); //Se elimina el elemnto q se compara
                    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)      
                        repetidos.push(value);
                });
                //alert( ($('#rCD2E'+j).val()).replace(/ /g, "") +'=='+ repetidos );
                if( ($('#rCD2E'+j).val()).replace(/ /g, "") == repetidos ){
                    notaFinalP1++;
                    $('#rCD2E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD2E'+j).css("background-color", "#EF87A7");
                }
               
           
            /////////////////////////////////////////////////////
            var numMCM1 = repetidos[0];
            var numMCM2;
            if(repetidos[1] == null || repetidos[1] == ''){
                numMCM2 = 1;
            }else{
                numMCM2 = repetidos[1];
            }
            //alert( parseInt($('#rCD3E'+j).val()) +'=='+  mcm(numMCM1, numMCM2) );
                if( parseInt($('#rCD3E'+j).val()) ==  mcm(numMCM1, numMCM2) ){
                    notaFinalP1++;
                    $('#rCD3E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD3E'+j).css("background-color", "#EF87A7");
                }
               
     
                resp = []
                resp1 = []
                res = []
                multiplos1 = 0;
                multiplos = 0;

        }


    }



    
    
    
 


    var notaFinalP2 = 0;
    function Resp2(){

        var resp;
        var val0;
        var val1;
        var val2;
        var c = 1;

        for(var i=1; i<13; i=i+3){

            val0 = (parseInt($('#nDFP'+(i)).val()));
            val1 = (parseInt($('#nDFP'+(i+1)).val()));

            resp = mcm(val0, val1);

            if($('#rDFP'+c).val() == resp){
                $('#rDFP'+c).css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rDFP'+c).css("background-color", "#EF87A7");
            }

            c++;

        }


    }








    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
   
      Inicio();
      Preg1();
      Preg2();

      function confirmar() {
        Resp1();
        Resp2();

        

        var nota1 = (notaFinalP1*5)/8;
        var nota2 = (notaFinalP2*5)/4;

       // alert (nota1+'+'+nota2);
        
        var notaFinal = (nota1+nota2).toFixed(2);

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
