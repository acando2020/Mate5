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


    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;    
    function Preg1(){

        var destinosKg = [
        '<div class="col-sm-4"> <span class="num2"> 44 libras </span> <div class="r_imgKg i_imgKg1"></div> </div>',
        '<div class="col-sm-4"> <span class="num2"> 66 libras </span> <div class="r_imgKg i_imgKg2"></div> </div>',
        '<div class="col-sm-4"> <span class="num2"> 22 libras </span> <div class="r_imgKg i_imgKg3"></div> </div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p159_act1.png' class='imgKg1' id='imgKg1'>");
            imgKg.push("<img src='img/i2_p159_act1.png' class='imgKg2' id='imgKg2'>");
            imgKg.push("<img src='img/i3_p159_act1.png' class='imgKg3' id='imgKg3'>");
       
        imgKg.sort(f_randomico);
        $(".imgKg").append(imgKg);
        $(".imgKg img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#activity",
            scroll: false,
        });


        $(".r_imgKg").droppable({
        drop: function(e, ui) {
            if(ui.draggable.hasClass("imgKg1")){
                rImgKg1++;
            }else if(ui.draggable.hasClass("imgKg2")){
                rImgKg2++;
            }else {
                rImgKg3++;
            }

            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre eñ destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino

        }
    });

    }




    function Preg2(){

         var productos = [
        '<tr> <td><img src="img/i1_p159_act2.jpg" class="img-responsive"></td> <td><br><textarea class="form-control respuestas"></textarea></td> <td><br><textarea class="form-control respuestas"></textarea></td> </tr>',
        '<tr> <td><img src="img/i2_p159_act2.jpg" class="img-responsive"></td> <td><br><textarea class="form-control respuestas"></textarea></td> <td><br><textarea class="form-control respuestas"></textarea></td> </tr>',
        '<tr> <td><img src="img/i3_p159_act2.jpg" class="img-responsive"></td> <td><br><textarea class="form-control respuestas"></textarea></td> <td><br><textarea class="form-control respuestas"></textarea></td> </tr>',
        ]; 
        productos.sort(f_randomico);
        $("#productos").append(productos);

    }





    function Preg3(){

        var masas0 = [
        '<div class="col-sm-4" style="border-right: 1px solid; border-right-style: dashed; border-right-color: #E73C00;"> <img src="img/i1_p159_act3.jpg" class="img-responsive"><br> <span class="num1 rEVC1" id="rEVC1" style="cursor: pointer">8 libras</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="num1 rEVC2" id="rEVC2" style="cursor: pointer">7 kilogramos</span><br><br> </div>',
        '<div class="col-sm-4" style="border-right: 1px solid; border-right-style: dashed; border-right-color: #E73C00;"> <img src="img/i2_p159_act3.jpg" class="img-responsive"><br> <span class="num1 rEVC4" id="rEVC4" style="cursor: pointer">25 libras</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="num1 rEVC3" id="rEVC3" style="cursor: pointer">48 kg</span><br><br> </div>',
        '<div class="col-sm-4" style="border-right: 1px solid; border-right-style: dashed; border-right-color: #E73C00;"> <img src="img/i3_p159_act3.jpg" class="img-responsive"><br> <span class="num1 rEVC6" id="rEVC6" style="cursor: pointer">60 libras</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="num1 rEVC5" id="rEVC5" style="cursor: pointer">15 kilogramos</span><br><br> </div>',
        ]; 
        masas0.sort(f_randomico);
        $("#masas0").append(masas0);


        var masas1 = [
        '<div class="col-sm-4" style="border-right: 1px solid; border-right-style: dashed; border-right-color: #E73C00;"> <img src="img/i4_p159_act3.jpg" class="img-responsive"><br> <span class="num1 rEVC7" id="rEVC7" style="cursor: pointer">2000 gramos</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="num1 rEVC8" id="rEVC8" style="cursor: pointer">20 kg</span><br><br> </div>',
        '<div class="col-sm-4" style="border-right: 1px solid; border-right-style: dashed; border-right-color: #E73C00;"> <img src="img/i5_p159_act3.jpg" class="img-responsive"><br> <span class="num1 rEVC10" id="rEVC10" style="cursor: pointer">30 libras</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="num1 rEVC9" id="rEVC9" style="cursor: pointer">35000 g</span><br><br> </div>',
        '<div class="col-sm-4" style="border-right: 1px solid; border-right-style: dashed; border-right-color: #E73C00;"> <img src="img/i6_p159_act3.jpg" class="img-responsive"><br> <span class="num1 rEVC11" id="rEVC11" style="cursor: pointer">6 kg</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="num1 rEVC12" id="rEVC12" style="cursor: pointer">1000 g</span><br><br> </div>',
        ]; 
        masas1.sort(f_randomico);
        $("#masas1").append(masas1);
    }





    function Preg4(){

        var nVK0 = Math.round(Math.random() * (300 - 180) + 180);
        var nVK1 = Math.round(Math.random() * (80 - 20) + 20);

        $('#nVK0').append(nVK0);
        $('#nVK1').append(nVK1);

    }





//////////////////////////////////////////////////////////////////





    var notaFinalP1 = 0;
    function Resp1(){
        var temp;
        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<4; i++){

            temp = $(".i_imgKg"+i);
            $(".i_imgKg"+i+" img").each(function(){
              if($(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#5ED188");
                    notaFinalP1++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#EF87A7");
                }
            });

        }

    }





    var notaFinalP3 = 0;
    function Resp3(){

        for(var i=1; i<13; i=i+2){

            if( $('.rEVC'+(i) +'.pinta').text() ){
                notaFinalP3++;
                 $('.rEVC'+i).css("background-color", "#5ED188");
                if( $('.rEVC'+(i+1) +'.pinta1').text() ){
                    notaFinalP3--;
                     $('.rEVC'+(i+1)).css("background-color", "#EF87A7");
                }
            }

        }
        

    }





    var notaFinalP4 = 0;
    function Resp4(){
        
        var resp = ((parseInt($('#nVK0').text()) + parseInt($('#nVK1').text())) * 0.4536).toFixed();

            if( parseFloat($('#rVK0').val()).toFixed() == resp ){ 
                $('#rVK0').css("background-color", "#5ED188");
                notaFinalP4++;
            }else{
                $('#rVK0').css("background-color", "#EF87A7");
            }
        

    }





//////////////////////////////////


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
      ///encerrar Preg3
      for(var i=1; i<12; i=i+2){

            $('.rEVC'+(i)).click(function(){
                if($(this).hasClass('pinta')) {
                    $(this).removeClass('pinta')
                }else{
                    $(this).addClass('pinta')
                }
            });
        }

        for(var j=2; j<13; j=j+2){

            $('.rEVC'+(j)).click(function(){
                if($(this).hasClass('pinta1')) {
                    $(this).removeClass('pinta1')
                }else{
                    $(this).addClass('pinta1') 
                }
            });

        }////////////////




      function confirmar() {
        Resp1();
        Resp3();
        Resp4();


        var nota1 = (notaFinalP1);
        var nota2 = parseFloat($('#calificacion0').val());
        var nota3 = (notaFinalP3*2)/6;
        var nota4 = (notaFinalP4*2);
        
        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

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
