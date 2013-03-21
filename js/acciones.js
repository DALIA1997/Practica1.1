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
			   navigator.notification.alert("deslizo a la derecha",function(){},"practica 1","aceptar");
		   });
		   $('#izquierda').swipelef(function(){
			   navigator.notification.confirm("¿Qué desea hacer?",function(option));{ 
			   	switch(opcion){
		                      case 1:
		                           navigator.notification.beep(1);
		                      break;
		                       
		                      case 2:
		                           navigator.notification.vibrate(500);
			                   navigator.notification.vibrate(500);
		                       break;		   		   		   		   
		                             }	//switch		   		
		   } "Práctica 1", "beep, vibrate");
		   });//funcion swipe
   },false);
});
