function mostrar()
{ 
	let seguir;
	let nombre;
	let marca;
	let precio;
	let preciototal;
	let acumdecant = 0 ;
	let descuentototal;


	do{

       nombre = prompt("Ingrese el nombre del cliente");
	   cantidad = parseInt(prompt("ingrese la cantidad de lamparas"));
	   while(isNaN(lamparas)){
		cantidad = parseInt(prompt("Error. ingrese la cantidad de lamparas"));

	   }

       marca = prompt("ingrese la marca FelipeLamparas - ArgentinaLuz -Illuminatis ").toLowerCase();
	   while(!(marca == "felipelamparas" || marca == "argentinaluz"|| marca == "illuminatis")){
		marca = prompt("ingrese la marca FelipeLamparas - ArgentinaLuz -Illuminatis ").toLowerCase();

	   }
	   precio = parseFloat(prompt("ingrese el precio :"));
	   while(isNaN(precio)){
		precio = parseFloat(prompt("Error.ingrese el precio :"));

        }
		if (cantidad !0){

			acumdecant+= cantidad;
		}

		
	

        

      seguir= prompt("desea seguir comprando s/n:").toLowerCase();
	}while(seguir == 's');

	if(marca== "felipelamparas" && cantidad > 5){
		descuento = 10;
	}else if marca == "argentinaluz" && cantidad >3{
		descuento = 5;
	}else{
		descuento = 0;
	}
	if(acumdecant!=0){
		preciototal = precio * acumdecant;
	}
	if (descuento! 0){
		descuentototal = preciototal - descuento / 100
	}else {
		descuentototal= "no hay descuento";
	}
   console.log ("el total de las ventas es:"+ preciototal);
   console.log("El descuento total es de "+descuentototal);
}
