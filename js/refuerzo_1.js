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
       var pregunta = [];
          var val0 = Math.round(Math.random() * (1000 - 100) + 100);
          var sig = Math.round(Math.random() * (4 - 1) + 1);
          var patron0 = Math.round(Math.random() * (20 - 10) + 10);
          var patron1 = Math.round(Math.random() * (20 - 10) + 10);     

          var contenidos = [];
          contenidos[0] = '<span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron0" class="form-control" style="width: 70px;">,&nbsp;&nbsp;&nbsp;&nbsp; ' +
          '<select class="form-control" id="selMul0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0PatronMul0" class="form-control" style="width: 70px;"><br><br> ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p0T0">'+(val0+(patron0))+'</span>, &nbsp;&nbsp; ' +
          '<span class="n0" id="p0T0_0">'+(val0+(patron0*2))+'</span>, &nbsp;&nbsp; ' +
          '<span class="n0" id="p0T0_1">'+((val0+(patron0*2))*(patron1))+
          ', &nbsp;&nbsp;'+(((val0+(patron0*2))*(patron1))+(patron0))+
          ', &nbsp;&nbsp;'+((((val0+(patron0*2))*(patron1))+(patron0))*(patron1))+
          ', &nbsp;&nbsp;<span class="n0" id="p0T0_fin">'+(((((val0+(patron0*2))*(patron1))+(patron0))*(patron1))+(patron0))+'</span>, </span>' +
          '<input type="number" id="sucMulP1" class="form-control" style="width: 120px;">, ' +
          '<input type="number" id="sucSumP1" class="form-control" style="width: 120px;"><br>';         


          $('#sucesion0').append(contenidos[0]);

    }




     function Preg2(){            
          var pregunta = [];          
          var val0 = (Math.round(Math.random() * (100) + 10));
   
          pregunta[0] = '<span>a) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat0" style="width: 90px;"> &nbsp;&nbsp; ' +
          'Sucesión: &nbsp;&nbsp;<span class="n2" id="val0">'+val0+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_0_Suc0" value="'+val0+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_0_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc5" style="width: 90px;">; <br><br>';

          $("#pregunta1_0").append(pregunta[0]);
      }





      function Preg3(){

        var div = '';
        var nCD0E0;
        for(var i=0; i<6; i++){

            div = '<div class="col-sm-4"><li>'+
                        '<span class="col-sm-11">'+
                        '<span class="col-sm-3 np1">M<sub id="nCD0E'+i+'"></sub></span> &nbsp;&nbsp;=&nbsp;&nbsp;'+
                        '<input type="text" id="rCD0E'+i+'" style="border-top-left-radius:15px; border-bottom-right-radius:15px; border-color: #15D7D1; width: 150px;" class="form-control respuestas" placeholder="Ej: 1,2,3"><br><br>'+ '</span></li></div';

            $('#multiplos0').append(div);


            nCD0E0= Math.round(Math.random() * (25 - 2) + 2);
            $('#nCD0E'+i).append(nCD0E0);

        }

      }
        


        function dame_color_aleatorio(){ 
           hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
           color_aleatorio = "#"; 
           for (i=0;i<6;i++){ 
              posarray = aleatorio(0,hexadecimal.length) 
              color_aleatorio += hexadecimal[posarray] 
           } 
           return color_aleatorio 
        }


      function Preg4(){


        var nMC0= Math.round(Math.random() * (9 - 2) + 2);
        var nMC1= Math.round(Math.random() * (9 - 2) + 2);
        if(nMC0 == nMC1){
            nMC1++;
        }
        $('#nMC0').append(nMC0);
        $('#nMC1').append(nMC1);

        
        var op = '';
        var vMC;
        for(var i=0; i<10; i++){
            vMC = Math.round(Math.random() * (90 - 10) + 10);
            op = '<span id="opcMC'+i+'" style="font-size: 19px; background-color: '+dame_color_aleatorio()+'; border-top-left-radius:10px; border-bottom-right-radius:10px;">&nbsp;&nbsp;&nbsp;'+vMC+'&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

            $('#multiplos1').append(op);
        }
      }





      function Preg5(){

        var div = '';
        var nCDE;
        for(var i=0; i<6; i++){

            div = '<div class="col-sm-4 table-responsive"><li> <span class="col-sm-2 np0">D<sub id="nCDE'+i+'"></sub></span> &nbsp;&nbsp;=&nbsp;&nbsp;<span style="font-size: 30px;"> {<input type="text" id="rCDE'+i+'" class="form-control respuestas" style="width: 150px;" placeholder="Ej: 1,2,3">}</span> <br><br></li> </div>';
            $('#divisores0').append(div);

            nCDE = Math.round(Math.random() * (90 - 2) + 2);
            $('#nCDE'+i).append(nCDE);

        }

      }





    function Preg6(){

        for(var i=0; i<4; i++){
            var nED0C0 = Math.round(Math.random() * (30 - 4) + 4);
            var nED1C0 = Math.round(Math.random() * (30 - 4) + 4);
            
            $('#nED0C'+i).append(nED0C0);
            $('#nED1C'+i).append(nED1C0);
            $('#nEDC0_'+i).append(nED0C0);
            $('#nEDC1_'+i).append(nED1C0);

        }
        
    }







    function Preg7(){


        var escribeVF = [
        '<div class="col-sm-6"> <li> <span style="background-color: #90C5D3; padding: 7px;">El número 7 es divisor de 10.&nbsp;&nbsp;</span> <span class="glyphicon glyphicon-triangle-right" style="font-size: 30px; color: #28B9E0; top: 9px;"></span> <select class="form-control respuestas" id="rEVF0" style="position: relative; "> <option></option> <option>V</option> <option>F</option> </select> </li> </div>',
        '<div class="col-sm-6"> <li> <span style="background-color: #90D3B0; padding: 7px;">El número 14 es divisor de 28.</span> <span class="glyphicon glyphicon-triangle-right" style="font-size: 30px; color: #29C072; top: 9px;"></span> <select class="form-control respuestas" id="rEVF1" style="position: relative; "> <option></option> <option>V</option> <option>F</option> </select> </li> </div>',
        '<div class="col-sm-6"> <li> <span style="background-color: #90C5D3; padding: 7px;">El número 3 es divisor de 30.&nbsp;&nbsp;</span> <span class="glyphicon glyphicon-triangle-right" style="font-size: 30px; color: #28B9E0; top: 9px;"></span> <select class="form-control respuestas" id="rEVF2" style="position: relative; "> <option></option> <option>V</option> <option>F</option> </select> </li> </div>',
        '<div class="col-sm-6"> <li> <span style="background-color: #90D3B0; padding: 7px;">El número 6 es divisor de 42.&nbsp;&nbsp;</span> <span class="glyphicon glyphicon-triangle-right" style="font-size: 30px; color: #29C072; top: 9px;"></span> <select class="form-control respuestas" id="rEVF3" style="position: relative; "> <option></option> <option>V</option> <option>F</option> </select> </li> </div>',
        '<div class="col-sm-6"> <li> <span style="background-color: #90C5D3; padding: 7px;">El número 8 es divisor de 27.&nbsp;&nbsp;</span> <span class="glyphicon glyphicon-triangle-right" style="font-size: 30px; color: #28B9E0; top: 9px;"></span> <select class="form-control respuestas" id="rEVF4" style="position: relative; "> <option></option> <option>V</option> <option>F</option> </select> </li> </div>',
        '<div class="col-sm-6"> <li> <span style="background-color: #90D3B0; padding: 7px;">El número 21 es divisor de 63.</span> <span class="glyphicon glyphicon-triangle-right" style="font-size: 30px; color: #29C072; top: 9px;"></span> <select class="form-control respuestas" id="rEVF5" style="position: relative; "> <option></option> <option>V</option> <option>F</option> </select> </li> </div>',
        ];


         var contenidos1 = escribeVF;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#escribeVF").append( item );
        });

    }





    function Preg8(){

        var div = '';
        var nCDg;
        var nCDg1;
        var nCDg2;
        for(var i=0; i<6; i++){

            div = '<div class="col-sm-4"> <li> &nbsp;&nbsp;<span id="nCDg'+i+'" class="np0"></span>&nbsp;&nbsp; <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp; <input type="number" id="rCDg'+i+'" class="form-control respuestas" style="width: 100px;"> </li><br></div>';
            $('#cambiosDg0').append(div);

            nCDg = Math.round(Math.random() * (99 - 10) + 10);
            nCDg1 = Math.round(Math.random() * (24 - 3) + 3)*4;
            nCDg2 = Math.round(Math.random() * (9 - 1) + 1);
            $('#nCDg'+i).append(nCDg);
            $('#nCDg'+i).append(nCDg1);
            $('#nCDg'+i).append(nCDg2);

        }

    }





    var r9 = 0;
    function Preg9(){

        var nUCD;
        var divisibles = [2,3,4,5,6,9,10];
        var c = 0;

        for(var i=0; i<5; i++){
            nUCD = Math.round(Math.random() * (99999 - 100) + 100);
            $('#nUCD'+i).append(nUCD);
                for(var j=0; j<7; j++){
                    if( nUCD % divisibles[j] == 0 ){
                        $('#rUCD'+c).val('si');
                        r9++;
                    }
                    c++;
                }
        }

    }





    function Preg10(){

          var p0;
          var primos;

          for(var i=0; i<6; i++){

            p = (Math.round(Math.random() * (25) + 2));
            primos = '<div class="col-sm-4"> <li> <span class="col-sm-12"> <span class="n0 col-sm-4">&nbsp;D<sub id="nPC'+i+'">' + p + '</sub>&nbsp;=</span> <span class="col-sm-8"> ' + '{<input type="text" id="rDPC'+i+'" class="form-control respuestas" style="width: 150px;" placeholder="Ej: 1,2,3">} </span> </span> <span class="col-sm-12"> <span class="col-sm-4"> <br> Número: </span> <span class="col-sm-8"> <br> <select class="form-control respuestas" id="rPC'+i+'"> <option value="v"></option> <option value="0">compuesto</option> <option value="1">primo</option> </select> </span> </span> </li> <br><br><br><br><br></div>';
          $("#divisoresPC").append(primos);

          }
         

      }



      function Preg11(){

        var nEFP;
        var dEFP;

        for(var i=1; i<17; i=i+4){

            nEFP = Math.round(Math.random() * (6 - 2) + 2);
            dEFP = Math.round(Math.random() * (3 - 2) + 2);

            $('#nEFP'+i).val(Math.pow(dEFP, nEFP));
            $('#nEFP'+(i+1)).val(dEFP);
            $('#nEFP'+(i+2)).val(Math.pow(dEFP, nEFP)/dEFP);
            $('#nEFP'+(i+3)).append(Math.pow(dEFP, nEFP));

        }
        
    }


    function Preg12(){

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




///////Preg13
        nPGr0I = Math.round(Math.random() * (9 - 2) + 2); 
        nPGr0 = Math.round(Math.random() * (10 - 2) + 2)*nPGr0I;
        nPGr1 = Math.round(Math.random() * (10 - 2) + 2)*nPGr0I;

        $('#nPGr0').append(nPGr0);
        $('#nPGr1').append(nPGr1);





//////////////////////////////////////////////////////////////////


   var notaFinalP1 = 0;
  function Resp1(){
      var operacionSum = 0;
      var operacionMul = 0;

    for(var i=0; i<1; i++){

        operacionSum = (parseInt($('#p0T'+(i)+'_'+(i)).text())) - ((parseInt($('#p0T'+(i)).text())));//suma

        operacionMul = (parseInt($('#p0T'+(i)+'_1').text())) / ((parseInt($('#p0T'+(i)+'_'+(i)).text())));//multiplicacion
  

        if(operacionSum == $('#p0Patron'+i).val()) {
          notaFinalP1++;
          $('#p0Patron'+i).css("background-color", "#5ED188");
          if($('#sel'+i).val() == '+') {
            notaFinalP1++;
            $('#sel'+i).css("background-color", "#5ED188");
          }else{
            $('#sel'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p0Patron'+i).css("background-color", "#EF87A7");
          $('#sel'+i).css("background-color", "#EF87A7");
        }

        if($('#sucSumP1').val() == (operacionSum + ($('#p0T0_fin').text() * operacionMul))) {
           notaFinalP1++;
          $('#sucSumP1').css("background-color", "#5ED188");
        }else{
            $('#sucSumP1').css("background-color", "#EF87A7");
        }

        if(operacionMul == $('#p0PatronMul'+i).val()) {
          notaFinalP1++;
          $('#p0PatronMul'+i).css("background-color", "#5ED188");
          if($('#selMul'+i).val() == 'x') {
            notaFinalP1++;
            $('#selMul'+i).css("background-color", "#5ED188");
          }else{
            $('#selMul'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p0PatronMul'+i).css("background-color", "#EF87A7");
          $('#selMul'+i).css("background-color", "#EF87A7");
        }

        if($('#sucMulP1').val() == (operacionMul * ($('#p0T0_fin').text()))) {
           notaFinalP1++;
          $('#sucMulP1').css("background-color", "#5ED188");
        }else{
          $('#sucMulP1').css("background-color", "#EF87A7");
        }

      }   


    }



    
    
    
 


    var notaFinalP2 = 0;
    function Resp2(){
      var operacion = 0;
      var signo = '';
      
    for(var i=0; i<4; i++){
      signo = $('#p1Sel'+i).val();
      if(signo != ''){
        if(signo == '+'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) + (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == '-'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) - (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == 'x'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) * (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == '÷'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) / (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }
      }else{
        for(var j=0; j<12; j++){             
          $('#p1_'+i+'_Suc'+j).css("background-color", "#EF87A7");           
        }

      }  
      }
    }





    var notaFinalP3 = 0;
    function Resp3(){

        var resp = [];
        var multiplos = 0;

        for(var j=0; j<6; j++){

                for(var k=0; k<5; k++){
                    multiplos = multiplos + parseInt($('#nCD0E'+j).text());
                    resp.push(multiplos);
                }

                //alert( (($('#rCD0E'+j).val()).replace(/ /g, "")).split(',').slice(0, 5) +'=='+ resp);
                if( ((($('#rCD0E'+j).val()).replace(/ /g, "")).split(',').slice(0, 5)).toString() == resp){
                    notaFinalP3++;
                    $('#rCD0E'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCD0E'+j).css("background-color", "#EF87A7");
                }

                resp = [];
                multiplos = 0;
        }

    }







    var notaFinalP4 = 0;
    function Resp4(){


        var resp = [];
            for(var j=0; j<10; j++){
                if( (parseInt($('#opcMC'+j).text()) % (parseInt($('#nMC0').text())))  == 0  && ((parseInt($('#opcMC'+j).text())) % parseInt($('#nMC1').text()) ) == 0 ){
                    resp.push(parseInt($('#opcMC'+j).text()));
                }
            }

           // alert(( (((($('#rMC0').val())).replace(/ /g, "")).split(',').sort() +'=='+ resp.sort() )));
            if( ((($('#rMC0').val())).replace(/ /g, "")).split(',').sort().toString() == resp.sort() ){
                notaFinalP4++;
                $('#rMC0').css("background-color", "#5ED188");
            }else{
                $('#rMC0').css("background-color", "#EF87A7");
            }

    }






    var notaFinalP5 = 0;
    function Resp5(){


        var resp = [];
        var nCDE;

        for(var j=0; j<6; j++){

            nCDE = parseInt($('#nCDE'+j).text());
                for(var i=0; i<=nCDE; i++){
                    if( nCDE % i == 0){
                        resp.push(i);
                    }
                }
               // alert(( ($('#rCDE'+j).val()).replace(/ /g, "") +'=='+ resp));
                if( ($('#rCDE'+j).val()).replace(/ /g, "") == resp){
                    notaFinalP5++;
                    $('#rCDE'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCDE'+j).css("background-color", "#EF87A7");
                }

                resp = [];
        }

    }







    var notaFinalP6 = 0;
    function Resp6(){

        var resp = [];
        var resp1 = [];
        var res = [];
        var repetidos = [];
        var temporal = [];

        var tam1;
        var tam2;

        for(var j=0; j<2; j++){

                tam1 = parseInt($('#nED0C'+j).text());
                tam2 = parseInt($('#nED1C'+j).text());

                for(var i=1; i<=tam1; i++){
                    if(tam1 % i == 0){
                        resp.push(i);
                    }
                }
                //alert( ($('#rED0C'+j).val()).replace(/ /g, "") +'=='+ resp);
                if( ($('#rED0C'+j).val()).replace(/ /g, "") == resp){
                    notaFinalP6++;
                    $('#rED0C'+j).css("background-color", "#5ED188");
                }else{
                    $('#rED0C'+j).css("background-color", "#EF87A7");
                }

            //////////////////////////////////////////////

                for(var k=1; k<=tam2; k++){
                    if(tam2 % k == 0){
                        resp1.push(k);
                    }
                }

                if( ($('#rED1C'+j).val()).replace(/ /g, "") == resp1){
                    notaFinalP6++;
                    $('#rED1C'+j).css("background-color", "#5ED188");
                }else{
                    $('#rED1C'+j).css("background-color", "#EF87A7");
                }


            ///////////////////////////////////////////
                res = resp.concat(resp1);
                res.forEach((value,index)=>{
                    temporal = Object.assign([],res); //Copiado de elemento
                    temporal.splice(index,1); //Se elimina el elemnto q se compara
                    if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)      
                        repetidos.push(value);
                });                
                if( ($('#rED2C'+j).val()).replace(/ /g, "") == repetidos ){
                    notaFinalP6++;
                    $('#rED2C'+j).css("background-color", "#5ED188");
                }else{
                    $('#rED2C'+j).css("background-color", "#EF87A7");
                }
               
               
     
                resp = []
                resp1 = []
                res = []

        }


    }








    var notaFinalP7 = 0;
    function Resp7(){

        var resp = ['F','V','V','V','F','V'];

        for(var i=0; i<6; i++){

            if( $('#rEVF'+i).val() == resp[i] ){
                notaFinalP7++;
                $('#rEVF'+i).css("background-color", "#5ED188");
            }else{
                $('#rEVF'+i).css("background-color", "#EF87A7");
            }
        }

    }




    var notaFinalP8 = 0;
    function Resp8(){

        var resp;
        for(var i=0; i<6; i++){
            //alert( (($('#rCDg'+i).val()).split('').sort() +'=='+ ($('#nCDg'+i).text()).split('').sort()) +'&&'+  parseInt($('#rCDg'+i).val()) % 4 +'=='+ 0 );
            if( (($('#rCDg'+i).val()).split('').sort().toString() == ($('#nCDg'+i).text()).split('').sort()) &&  parseInt($('#rCDg'+i).val()) % 4 == 0 ){
                notaFinalP8++;
                $('#rCDg'+i).css("background-color", "#5ED188");
            }else{
                $('#rCDg'+i).css("background-color", "#EF87A7");
            }
        }

    }





    var notaFinalP9 = 0;
    function Resp9(){

        var resp = 0;
        for(var i=0; i<35; i++){

            if( (document.getElementById('rUCD'+i).checked) ){
                if( $('#rUCD'+i).val() == 'si' ){
                    notaFinalP9++;
                    $('#cUCD'+i).css("background-color", "#5ED188");
                }else{
                    $('#cUCD'+i).css("background-color", "#EF87A7");
                }
            }
        }
           

    }







    var notaFinalP10 = 0;
    function Resp10(){


        var resp = [];
        var nPC;

        for(var j=0; j<6; j++){

            nPC = parseInt($('#nPC'+j).text());
                for(var i=0; i<=nPC; i++){
                    if( nPC % i == 0){
                        resp.push(i);
                    }
                }
               // alert(( ($('#rDPC'+j).val()).replace(/ /g, "") +'=='+ resp));
                if( ($('#rDPC'+j).val()).replace(/ /g, "") == resp){
                    notaFinalP5++;
                    $('#rDPC'+j).css("background-color", "#5ED188");
                }else{
                    $('#rDPC'+j).css("background-color", "#EF87A7");
                }

                resp = [];
        }




            ///////////////////////
            var d=0;
            var k=1;

            for (j=0;j<9;j++) { 
                while(k <= (parseInt($('#nPC'+j).text()))) {
                  if ((parseInt($('#nPC'+j).text())) % k == 0){
                      d++;  
                  }
                  k++;
                }
                if(d==2){
                if($('#rPC'+j).val() == 1) {
                notaFinalP10++;
                $('#rPC'+j).css("background-color", "#75D685");
                }else{
                $('#rPC'+j).css("background-color", "#EF87A7");
                }
              }else{
                if($('#rPC'+j).val() == 0) {
                $('#rPC'+j).css("background-color", "#75D685");
                notaFinalP10++;
                }else{
                $('#rPC'+j).css("background-color", "#EF87A7");
                }
              }
              k=0;
              d=0;
            } 

    }






     var notaFinalP11 = 0;
    function Resp11(){

         var res = [];
         var val = 1;
         var ac = 1;
         var validar = false;

            for(var i=0; i<4; i++){   

                res = (($('#rEFP'+i).val()).toLowerCase().replace(/ |,|(|) /g, "")).split("x");

                for(var j=0; j< res.length; j++){
                    val = val * res[j];

                    //validar que sean numeros primos
                    var d=0;
                    var k=1;

                    for (l=0;l<res.length;l++) { 
                        while(k <= res[l] ) {
                          if ( res[l] % k == 0){
                              d++;  
                          }                
                          k++;
                        }
                        if(d!=2){
                            if($('#rEFP'+i).val() != ''){
                                $('#rEFP'+i).css("background-color", "#EF87A7");
                                validar = true;
                                document.getElementById('rEFP'+i).value += "No son primos";
                            }
                            
                        }
                        k=0;
                        d=0; 
                    }

                }

                //alert((($('#rEFP'+i).val()).toLowerCase().replace(/ |,|(|) /g, "")) +'___'+val +' == '+ $('#nEFP'+ac).val() );

                if( val == $('#nEFP'+ac).val() && validar == false){
                    notaFinalP11++;
                    $('#rEFP'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEFP'+i).css("background-color", "#EF87A7");
                }

                ac = ac + 4;
                val = 1;

            }
    }




    


    var notaFinalP12 = 0;
    function Resp12(){

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
                notaFinalP12++;
            }else{
                $('#rDFP'+c).css("background-color", "#EF87A7");
            }

            c++;

        }
    }






    var notaFinalP13 = 0;
    function Resp13(){

        var mcd = Math.gcd(nPGr0, nPGr1);

            if( $('#rGPr0').val() == mcd ){
                $('#rGPr0').css("background-color", "#5ED188");
                notaFinalP13++;
            }else{
                $('#rGPr0').css("background-color", "#EF87A7");
            }

            if( $('#rGPr1').val() == ((parseInt($('#nPGr0').text()))/mcd)  ){
                $('#rGPr1').css("background-color", "#5ED188");
                notaFinalP13++;
            }else{
                $('#rGPr1').css("background-color", "#EF87A7");
            }

            if( $('#rGPr2').val() == ((parseInt($('#nPGr1').text()))/mcd) ){
                $('#rGPr2').css("background-color", "#5ED188");
                notaFinalP13++;
            }else{
                $('#rGPr2').css("background-color", "#EF87A7");
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
      Preg4();
      Preg5();
      Preg6();
      Preg7();
      Preg8();
      Preg9();
      Preg10();
      Preg11();
      Preg12();


      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();
        Resp6();
        Resp7();
        Resp8();
        Resp9();
        Resp10();
        Resp11();
        Resp12();
        Resp13();

        

        var nota1 = (notaFinalP1*0.5)/6;
        var nota2 = (notaFinalP2*0.5)/5;
        var nota3 = (notaFinalP3*1)/6;
        var nota4 = (notaFinalP4*0.25);
        var nota5 = (notaFinalP5*1)/6;
        var nota6 = (notaFinalP6*0.5)/6;
        var nota6_1 = parseFloat($('#calificacion0').val());
        var nota7 = (notaFinalP7*0.5)/6;
        var nota8 = (notaFinalP8*0.75)/6;
        var nota9 = (notaFinalP9*1.5)/r9;
        var nota10 = (notaFinalP10*1)/12;
        var nota11 = (notaFinalP11*0.5)/4;
        var nota12 = (notaFinalP12*0.75)/4;
        var nota13 = (notaFinalP13*0.5)/3;

        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota6_1+nota7+nota8+nota9+nota10+nota11+nota12+nota13).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      if( $('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
        
      });

  });
