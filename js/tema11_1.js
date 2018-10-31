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

        var nBD = Math.round(Math.random() * (50 - 10) + 10);
        for(var i=0; i<16; i++){

            if(i==4){nBD = Math.round(Math.random() * (50 - 10) + 10);}
            if(i==8){nBD = Math.round(Math.random() * (50 - 10) + 10);}
            if(i==12){nBD = Math.round(Math.random() * (50 - 10) + 10);}
            
            $('#nBD'+i).append(nBD);


        }

    }





    function Preg2(){

        var nPCC0 = Math.round(Math.random() * (50 - 20) + 20);
        var nPCC1 = Math.round(Math.random() * (9 - 2) + 2);        
        var nPCC2 = Math.round(Math.random() * (9 - 2) + 2);        
            
        $('#nPCC0').append(nPCC0);
        $('#nPCC1').append(nPCC1);
        $('#nPCC2').append(nPCC2);



        /////Preg3
        var nCLM0 = Math.round(Math.random() * (20 - 5) + 5) * 8;
        $('#nCLM0').append(nCLM0);




        ///Preg5
        var nELP1 = Math.round(Math.random() * (30 - 10) + 10);
        var nELP0 = Math.round(Math.random() * (50 - 20) + 20)*(nELP1*5);
        $('#nELP0').append(nELP0);
        $('#nELP1').append(nELP1);

       ///Preg6
        var nBVB0 = Math.round(Math.random() * (20 - 2) + 2);
        $('#nBVB0').append(nBVB0);


        ///Preg7
        var nPPH0 = Math.round(Math.random() * (30 - 2) + 2);
        var nPPH1 = Math.round(Math.random() * (20 - 2) + 2);
        $('#nPPH0').append(nPPH0);
        $('#nPPH1').append(nPPH1);

        
        ///Preg8
        var nPCN0 = Math.round(Math.random() * (20 - 2) + 2);
        $('#nPCN0').append(nPCN0);


        ///Preg9
        var nHFC0 = Math.round(Math.random() * (90 - 20) + 20);
        $('#nHFC0').append(nHFC0);


        ///Preg10
        var nEMI0 = Math.round(Math.random() * (20 - 5) + 5);
        $('#nEMI0').append(nEMI0);
        var nEMI1 = Math.round(Math.random() * (50 - 20) + 20) * (nEMI0 * 8);
        $('#nEMI1').append(nEMI1);


        ///Preg12
        var nPCCNN0 = Math.round(Math.random() * (9 - 2) + 2);
        $('#nPCCNN0').append(nPCCNN0);


    }   



    var rImgCartel1 = 0;
    var rImgCartel2 = 0;
    var rImgCartel3 = 0;
    var rImgCartel4 = 0;
    var rImgCartel5 = 0;
    var rImgCartel6 = 0;    
    function Preg13(){

        var destinosCartel = [
        '<div class="col-sm-2"> <span class="num1"> P = 32 cm </span> <div class="r_imgCartel i_imgCartel1"></div> </div>',
        '<div class="col-sm-2"> <span class="num1"> P = 48 cm </span> <div class="r_imgCartel i_imgCartel2"></div> </div>',
        '<div class="col-sm-2"> <span class="num1"> P = 8 cm </span> <div class="r_imgCartel i_imgCartel3"></div> </div>',
        '<div class="col-sm-2"> <span class="num1"> P = 7 cm </span> <div class="r_imgCartel i_imgCartel4"></div> </div>',
        '<div class="col-sm-2"> <span class="num1"> P = 276 cm </span> <div class="r_imgCartel i_imgCartel5"></div> </div>',
        '<div class="col-sm-2"> <span class="num1"> P = 112 cm </span> <div class="r_imgCartel i_imgCartel6"></div> </div>',
        ]; 
        destinosCartel.sort(f_randomico);
        $("#destinosCartel").append(destinosCartel);


        var imgCartel=[];
            imgCartel.push("<img src='img/i1_p157_act13.png' class='imgCartel1' id='imgCartel1'>");
            imgCartel.push("<img src='img/i2_p157_act13.png' class='imgCartel2' id='imgCartel2'>");
            imgCartel.push("<img src='img/i3_p157_act13.png' class='imgCartel3' id='imgCartel3'>");
            imgCartel.push("<img src='img/i4_p157_act13.png' class='imgCartel4' id='imgCartel4'>");
            imgCartel.push("<img src='img/i5_p157_act13.png' class='imgCartel5' id='imgCartel5'>");
            imgCartel.push("<img src='img/i6_p157_act13.png' class='imgCartel6' id='imgCartel6'>");
       
        imgCartel.sort(f_randomico);
        $(".imgCartel").append(imgCartel);
        $(".imgCartel img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#activity",
            scroll: false,
        });


        $(".r_imgCartel").droppable({
        drop: function(e, ui) {
            if(ui.draggable.hasClass("imgCartel1")){
                rImgCartel1++;
            }else if(ui.draggable.hasClass("imgCartel2")){
                rImgCartel2++;
            }else if(ui.draggable.hasClass("imgCartel3")){
                rImgCartel3++;
            }else if(ui.draggable.hasClass("imgCartel4")){
                rImgCartel4++;
            }else if(ui.draggable.hasClass("imgCartel5")){
                rImgCartel5++;
            }else {
                rImgCartel6++;
            }

            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre eñ destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino

        }
    });

    }


//////////////////////////////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        var nBD0 = parseInt($('#nBD0').text())*4;
        var nBD4 = parseInt($('#nBD4').text())*4;
        var nBD8 = parseInt($('#nBD8').text())*4;
        var nBD12 = parseInt($('#nBD12').text())*4;
        var resp = nBD0 + nBD4 + nBD8 + nBD12;


            if( ($('#rEMC0').val())== resp){
                $('#rEMC0').css("background-color", "#5ED188");
                notaFinalP1++;
            }else{
                $('#rEMC0').css("background-color", "#EF87A7");
            }



    }



    
    



    var notaFinalP2 = 0;
    function Resp2(){


        var rCLM0 = parseInt($('#nCLM0').text()) / 8;


            if( ($('#rCLM0').val())== rCLM0){
                $('#rCLM0').css("background-color", "#5ED188");
                notaFinalP2++;
            }else{
                $('#rCLM0').css("background-color", "#EF87A7");
            }

    }








    var notaFinalP3 = 0;
    function Resp3(){
        
        var nPCC2 = parseInt($('#nPCC2').text()) * parseInt($('#nPCC0').text()) * 7;
        var resp = nPCC1 + nPCC2;


            if( ($('#rPCC0').val())== resp){
                $('#rPCC0').css("background-color", "#5ED188");
                notaFinalP3++;
            }else{
                $('#rPCC0').css("background-color", "#EF87A7");
            }

    }





    var notaFinalP4 = 0;
    function Resp4(){
        
        var resp = [126,96,36];

        for( var i=0; i<3; i++){
            if( ($('#rDMF'+i).val())== resp[i]){
                $('#rDMF'+i).css("background-color", "#5ED188");
                notaFinalP4++;
            }else{
                $('#rDMF'+i).css("background-color", "#EF87A7");
            }
        }            

    }





    var notaFinalP5 = 0;
    function Resp5(){
        
        var resp = parseInt($('#nELP0').text()) / (parseInt($('#nELP1').text()) * 5 );
            if( ($('#rELP0').val()) == resp){
                $('#rELP0').css("background-color", "#5ED188");
                notaFinalP5++;
            }else{
                $('#rELP0').css("background-color", "#EF87A7");
            }            

    }



    var notaFinalP6 = 0;
    function Resp6(){
        
        var resp = (parseInt($('#nBVB0').text())* 3);
            if( ($('#rBVB0').val()) == resp){
                $('#rBVB0').css("background-color", "#5ED188");
                notaFinalP6++;
            }else{
                $('#rBVB0').css("background-color", "#EF87A7");
            }            

    }




    var notaFinalP7 = 0;
    function Resp7(){
    
        var resp = ((parseInt($('#nPPH0').text()) * (parseInt($('#nPPH1').text()))) * 2);

            if( ($('#rPPH0').val()) == resp){
                $('#rPPH0').css("background-color", "#5ED188");
                notaFinalP7++;
            }else{
                $('#rPPH0').css("background-color", "#EF87A7");
            }            

    }





    var notaFinalP8 = 0;
    function Resp8(){
    
        var resp = ((parseInt($('#nPCN0').text()) * 4));

            if( ($('#rPCN0').val()) == resp){
                $('#rPCN0').css("background-color", "#5ED188");
                notaFinalP8++;
            }else{
                $('#rPCN0').css("background-color", "#EF87A7");
            }            

    }





    var notaFinalP9 = 0;
    function Resp9(){
    
        var resp = ((parseInt($('#nHFC0').text()) * 4 * 2));

            if( ($('#rHFC0').val()) == resp){
                $('#rHFC0').css("background-color", "#5ED188");
                notaFinalP9++;
            }else{
                $('#rHFC0').css("background-color", "#EF87A7");
            }            

    }




    var notaFinalP10 = 0;
    function Resp10(){
    
        var resp = (parseInt($('#nEMI1').text())/(parseInt($('#nEMI0').text()) * 8));

            if( ($('#rEMI0').val()) == resp){
                $('#rEMI0').css("background-color", "#5ED188");
                notaFinalP10++;
            }else{
                $('#rEMI0').css("background-color", "#EF87A7");
            }            
    }




    var notaFinalP11 = 0;
    function Resp11(){
    
        var resp = 300;

            if( ($('#rCBM0').val()) == resp){
                $('#rCBM0').css("background-color", "#5ED188");
                notaFinalP11++;
            }else{
                $('#rCBM0').css("background-color", "#EF87A7");
            }            
    }





    var notaFinalP12 = 0;
    function Resp12(){
    
        var resp = (parseInt($('#nPCCNN0').text()) * 6 * 24);

            if( ($('#rPCCNN0').val()) == resp){
                $('#rPCCNN0').css("background-color", "#5ED188");
                notaFinalP12++;
            }else{
                $('#rPCCNN0').css("background-color", "#EF87A7");
            }            
    }




    var notaFinalP13 = 0;
    function Resp13(){
        var temp;
        var cant = [rImgCartel1,rImgCartel2,rImgCartel3,rImgCartel4,rImgCartel5,rImgCartel6];
        for(var i=1; i<7; i++){

            temp = $(".i_imgCartel"+i);
            $(".i_imgCartel"+i+" img").each(function(){
              if($(this).hasClass("imgCartel"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgCartel'+i).css("background-color", "#5ED188");
                    notaFinalP13++;
                }else{
                    $('.i_imgCartel'+i).css("background-color", "#EF87A7");
                }
            });

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
      Preg13();

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

        

        var nota1 = (notaFinalP1*0.75);
        var nota2 = (notaFinalP2*0.75);
        var nota3 = (notaFinalP3*0.75);
        var nota4 = (notaFinalP4*0.75)/3;
        var nota5 = (notaFinalP5*0.75);
        var nota6 = (notaFinalP6*0.75);
        var nota7 = (notaFinalP7*0.75);
        var nota8 = (notaFinalP8*0.75);
        var nota9 = (notaFinalP9*0.75);
        var nota10 = (notaFinalP10*0.75);
        var nota11 = (notaFinalP11*0.75);
        var nota12 = (notaFinalP12*0.75);
        var nota13 = (notaFinalP13)/6;

       // alert (nota1+'+'+nota2+'+'+nota3+'+'+nota4+'+'+nota5);
        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10+nota11+nota12+nota13).toFixed(2);

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
