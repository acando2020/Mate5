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
                                            '<td><input type="number" id="nDFP'+(i+2)+'" class="form-control respuestas" style="width: 45px;" readonly></td>'+
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
                                    '<b style="color: #06CAFF;">MCD</b> &nbsp;&nbsp;=&nbsp;&nbsp;'+
                                    '<input type="text" id="rDFP'+(c)+'" class="form-control respuestas" style="width: 50px;">'+
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
        

    function Preg3(){

        var nEs0;
        var nEs1;
        var oEs1;
        var inter;
        var lit = 'a)';

        for(var i=1; i<13; i=i+3){
            if(i>3){lit='b)';}
            if(i>6){lit='c)';}
            if(i>9){lit='d)';}

            var opcionesEs = [
            ['<p id="cOEs'+(i)+'" class="col-sm-4" style="border-radius: 20px;"><input class="checkmark" type="radio" id="sR'+(i)+'" name="sR0'+(i)+'" value="1"><span id="oEs'+(i)+'"></span><br><br></p>'],
            ['<p class="col-sm-4"><input class="checkmark" type="radio" name="sR0'+(i)+'" value=""><span id="oEs'+(i+1)+'"></span><br><br></p>'],
            ['<p class="col-sm-4"><input class="checkmark" type="radio" name="sR0'+(i)+'" value=""><span id="oEs'+(i+2)+'"></span><br><br></p>'],
            ];

            var d = [lit+'&nbsp;&nbsp;&nbsp;<span class="num2"><span id="nEs'+(i)+'"></span> y <span id="nEs'+(i+1)+'"></span></span><br>'];

            $( "#opcionesEs0" ).append( d.concat(desordenar(opcionesEs)) );
            

            inter = Math.round(Math.random() * (9 - 2) + 2);
            nEs0 = Math.round(Math.random() * (9 - 2) + 2)*inter;
            nEs1 = Math.round(Math.random() * (9 - 2) + 2)*inter;

            $('#nEs'+i).append(nEs0);
            $('#nEs'+(i+1)).append(nEs1);

            oEs1 = Math.gcd(nEs0, nEs1);
            $('#oEs'+(i)).append(oEs1);

            oEs2 = Math.round(Math.random() * (20 - 2) + 2);
            oEs3 = Math.round(Math.random() * (20 - 2) + 2);
            while( oEs2 == oEs1 || oEs3 == oEs1 ){
                oEs2 = Math.round(Math.random() * (20 - 2) + 2);
                oEs3 = Math.round(Math.random() * (20 - 2) + 2);
            }
            $('#oEs'+(i+1)).append(oEs2);
            $('#oEs'+(i+2)).append(oEs3);



        }





                ////Preg 4
            var inT = (Math.round(Math.random() * (9 - 2) + 2));
            var nPFR = (Math.round(Math.random() * (9 - 2) + 2))*inT;
            var nPFR1 = (Math.round(Math.random() * (9 - 2) + 2))*inT;
            $('#nPFR0').append(nPFR);
            $('#nPFR1').append(nPFR1);




    }




//////////////////////////////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        var resp = [];
        var resp1 = [];
        var res = [];
        var repetidos = [];
        var temporal = [];

        for(var j=0; j<2; j++){


                for(var i=1; i<30; i++){
                    if(parseInt($('#nCD0E'+j).text()) % i == 0){
                        resp.push(i);
                    }
                }
                //alert( ($('#rCD0E'+j).val()).replace(/ /g, "") +'=='+ resp);
                if( ($('#rCD0E'+j).val()).replace(/ /g, "") == resp){
                    notaFinalP1++;
                    $('#rCD0E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD0E'+j).css("background-color", "#EF87A7");
                }

            //////////////////////////////////////////////

                for(var k=1; k<30; k++){
                    if(parseInt($('#nCD1E'+j).text()) % k == 0){
                        resp1.push(k);
                    }
                }

                if( ($('#rCD1E'+j).val()).replace(/ /g, "") == resp1){
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

                if( ($('#rCD2E'+j).val()).replace(/ /g, "") == repetidos ){
                    notaFinalP1++;
                    $('#rCD2E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD2E'+j).css("background-color", "#EF87A7");
                }
               
           
            /////////////////////////////////////////////////////
                if( parseInt($('#rCD3E'+j).val()) ==  Math.max.apply(null,repetidos) ){
                    notaFinalP1++;
                    $('#rCD3E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD3E'+j).css("background-color", "#EF87A7");
                }
               
     
                resp = []
                resp1 = []
                res = []

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
            val2 = (parseInt($('#nDFP'+(i+2)).val()));

            resp = Math.gcd(val0, val1, val2);

            if($('#rDFP'+c).val() == resp){
                $('#rDFP'+c).css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rDFP'+c).css("background-color", "#EF87A7");
            }

            c++;

        }


    }








    var notaFinalP3 = 0;
    function Resp3(){

            for(var i=1; i<13; i=i+3){
              if(document.getElementById('sR'+i).checked){
               notaFinalP3++     
               $('#cOEs'+i).css("background-color", '#5ED188');
            }else{
               $('#cOEs'+i).css("background-color", '#EF87A7');
            }
            }    

    }









    var notaFinalP4 = 0;
    function Resp4(){

        resp = Math.gcd((parseInt($('#nPFR0').text())),(parseInt($('#nPFR1').text())));

            if($('#rPFR0').val() == resp){
                $('#rPFR0').css("background-color", "#5ED188");
                notaFinalP4++;
            }else{
                $('#rPFR0').css("background-color", "#EF87A7");
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
        Resp4();

        

        var nota1 = (notaFinalP1*3)/8;
        var nota2 = (notaFinalP2*3)/4;
        var nota3 = (notaFinalP3*2)/4;
        var nota4 = (notaFinalP4*2);

       // alert (nota1+'+'+nota2+'+'+nota3+'+'+nota4+'+'+nota5);
        
        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

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
