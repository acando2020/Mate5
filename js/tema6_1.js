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






    function Preg1(){

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


    function Preg2(){

        var nDFP;
        var dDFP;

        for(var i=1; i<13; i=i+3){

            nDFP = Math.round(Math.random() * (3 - 2) + 2);
            dDFP = Math.round(Math.random() * (9 - 2) + 2);

            $('#nDFP'+i).val(Math.pow(dDFP, nDFP));
            $('#nDFP'+(i+1)).val(dDFP);
            $('#nDFP'+(i+2)).append(Math.pow(dDFP, nDFP));

        }

    }   





    function Preg3(){

        var nEPFP;
        var dDFP;

        for(var i=0; i<6; i++){

            nEPFP = Math.round(Math.random() * (3 - 2) + 2);
            dDFP = Math.round(Math.random() * (12 - 2) + 2);

            $('#nEPFP'+(i)).append(Math.pow(dDFP, nEPFP));

        }


    }



        function primo(numero) {
          for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
              return false;
            }
          }
          return numero !== 1;
        }




    function Preg4(){

        var nENC;
        var sig = ' x ';
        var r = Math.round(Math.random() * (6 - 4) + 4);
        var n;


        var c = 100;
        var j = 2;
        var numerosPrimos = [];
        for (j; j < c; j++) {
          if (primo(j)) {
            numerosPrimos.push(j);
          }
        
        }


        for(var i=0; i<6; i++){
            n = Math.round(Math.random() * (6 - 0) + 0);
            for(var j=0; j<r; j++){
                nENC = numerosPrimos[n];
                if(j==(r-1)){sig=''}
                if(j==(r-2)){n = Math.round(Math.random() * (6 - 0) + 0);}
                if(j>=(r-2)){nENC = numerosPrimos[n];}
                $('#nENC'+i).append(nENC+sig);
            }
            sig = ' x ';
            
        }





        ////Preg 5
        var nPCL = (Math.round(Math.random() * (9 - 2) + 2))*8;
        $('#nPCL0').append(nPCL);
        $('#nPCL1').append(nPCL);
    }   




//////////////////////////////////////////////////////////////////




    var notaFinalP1 = 0;
    function Resp1(){

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
                    notaFinalP1++;
                    $('#rEFP'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEFP'+i).css("background-color", "#EF87A7");
                }

                ac = ac + 4;
                val = 1;

            }
    }




    


    var notaFinalP2 = 0;
    function Resp2(){

         var res = [];
         var val = 1;
         var ac = 1;
         var validar = false;

            for(var i=0; i<4; i++){   

                res = (($('#rDFP'+i).val()).toLowerCase().replace(/ |,|(|) /g, "")).split("x");

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
                            if($('#rDFP'+i).val() != ''){
                                $('#rDFP'+i).css("background-color", "#EF87A7");
                                validar = true;
                                document.getElementById('rDFP'+i).value += "No son primos";
                            }
                        }
                        k=0;
                        d=0;
                    }

                }

                //alert((($('#rEFP'+i).val()).toLowerCase().replace(/ |,|(|) /g, "")) +'___'+val +' == '+ $('#nEFP'+ac).val() );

                if( val == $('#nDFP'+ac).val() && validar == false){
                    notaFinalP2++;
                    $('#rDFP'+i).css("background-color", "#5ED188");
                }else{
                    $('#rDFP'+i).css("background-color", "#EF87A7");
                }

                ac = ac + 3;
                val = 1;

            }
    }








    var notaFinalP3 = 0;
    function Resp3(){

         var res = [];
         var val = 1;
         var validar = false;

            for(var i=0; i<6; i++){   

                res = (($('#rEPFP'+i).val()).toLowerCase().replace(/ |,|(|) /g, "")).split("x");

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
                            if($('#rEPFP'+i).val() != ''){
                                $('#rEPFP'+i).css("background-color", "#EF87A7");
                                validar = true;
                                document.getElementById('rEPFP'+i).value += "No son primos";
                            }
                        }
                        k=0;
                        d=0;
                    }

                }


                if( val == parseInt($('#nEPFP'+i).text()) && validar == false ){
                    notaFinalP3++;
                    $('#rEPFP'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEPFP'+i).css("background-color", "#EF87A7");
                }
                val = 1;

            }
    }









    var notaFinalP4 = 0;
    function Resp4(){

         var resp = [];
         var val = 1;

            for(var i=0; i<6; i++){   

                resp = (($('#nENC'+i).text()).replace(/ /g, "")).split("x");

                for(var j=0; j< resp.length; j++){
                    val = val * resp[j];
                }

                if( val == parseInt($('#rENC'+i).val()) ){
                    notaFinalP4++;
                    $('#rENC'+i).css("background-color", "#5ED188");
                }else{
                    $('#rENC'+i).css("background-color", "#EF87A7");
                }
                val = 1;

            }
    }







    var notaFinalP5 = 0;
    function Resp5(){


        var cn = 2;
        var resp = (parseInt($('#nPCL0').text()));

                for(var i=0; i < 4; i++){
                    if(i==3){cn = 8;}
                    val = resp/cn;
                    if( parseInt($('#rPCL'+i).val()) == val ){
                        notaFinalP5++;
                        $('#rPCL'+i).css("background-color", "#5ED188");
                    }else{
                        $('#rPCL'+i).css("background-color", "#EF87A7");
                    }

                    cn=cn*2;
                    
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

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();

        

        var nota1 = (notaFinalP1*2)/4;
        var nota2 = (notaFinalP2*2)/4;
        var nota3 = (notaFinalP3*2)/6;
        var nota4 = (notaFinalP4*2)/6;
        var nota5 = (notaFinalP5*2)/4;

       // alert (nota1+'+'+nota2+'+'+nota3+'+'+nota4+'+'+nota5);
        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

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
