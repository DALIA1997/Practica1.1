// JavaScript Document

$(document).ready(function(e) {
  //alert("Listo")
    document.addEventListener("deviceready",function(){
	   $('.btn').click(function(){
		   var boton=(($(this).attr('class')).split(' '))[1];
		   //alert(boton)
		   switch(boton)
		   {
		   case 'b1':
		    navigator.notification.beep(1);
		   break;
		   case 'b2':
		    navigator.notification.beep(2);
		   break;
		   case 'b3':
		    navigator.notification.beep(5);
		   break;
		   case 'v1':
		    navigator.notification.vibrate(500);
		   break;
		   case 'v2':
		    navigator.notification.vibrate(500);
			navigator.notification.vibrate(500);
		   break;		   		   		   		   
		   }
		   }); 
		   
		   $('#derecha').swiperight(function(){
			   navigator.notification.alert("deslizo a la derecha",function(){},"Práctica 1","aceptar");
			});   
			   
	      $('#izquierda').swipeleft(function(){
			   navigator.notification.confirm("¿Qué desea hacer?",function(opcion){
				   switch(opcion){ 
				           case 1:
		                           navigator.notification.beep(1);
		                      break;

		                      case 2:
		                           navigator.notification.vibrate(500);
			                       navigator.notification.vibrate(500);
		                       break;		   		   		   		   
		                             }	//switch		   		
		   }, "Práctica 1", "beep, vibrar, cancelar");
		   });//funcion swipe
   },false);
   
   		   $('table td').eq(1).text(device.name);
   		   $('table td').eq(3).text(device.cordova);
   		   $('table td').eq(5).text(device.platform);
   		   $('table td').eq(7).text(device.version);		   
   		   $('table td').eq(9).text(device.UUID);		   
		   
});