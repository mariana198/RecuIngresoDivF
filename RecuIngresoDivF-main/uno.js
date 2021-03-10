
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let seguir ;
	let promediosana = 0;
	let contsueldoa = 0;
	let acumsueldoa = 0;
	let promediosp = 0;
	let contsueldop = 0;
	let acumsueldop = 0;
	let promediosq= 0;
	let contsueldoq = 0;
	let acumsueldoq = 0;
	let flag = 1;
	let sexomayors;
	let mayorsueldo;
	let nombrfmassueldo;
	let mayorsueldof;
	let flag2 = 1;
	let contprogramanobi = 0;


	do{
		nombre = prompt("Ingrese el nombre del empleado:");

		edad = parseInt(prompt("Ingrese la edad de el empleado: "));
		while(isNaN(edad)){
         edad = parseInt(prompt("Error.Ingrese la edad de el empleado: "));
		}
       sexo = prompt("ingrese si es masculino o femenino no binario:").toLowerCase();
        while(!(sexo == "masculino" || sexo == "femenino" || sexo == "no binario")){
			sexo = prompt("Error. ingrese si es masculino o femenino no binario:").toLowerCase();

		}

        puesto = prompt("Ingrese su puesto :programador - analista - Qa ").toLowerCase();
		while(!(puesto == "programador"|| puesto == "analista" || puesto == "qa")){
			puesto = prompt(" Error. Ingrese su puesto :programador - analista - Qa ").toLowerCase();

		}


		sueldo = parseInt(prompt( "Ingrese su sueldo entre 15000 y 70000"));
		while(sueldo < 15000 || sueldo > 70000 ){

			sueldo = parseInt(prompt( "Error. Ingrese su sueldo entre 15000 y 70000"));
		}


         switch(puesto){
                       case "analista":
						   acumsueldoa += sueldo;
						   contsueldoa ++;
						   break;
					    case "programador":
							acumsueldop += sueldo;
							contsueldop ++;
							if(sexo == "no binario" && sueldo >= 20000 || sueldo <=55000){
								contprogramanobi++;

							}
						     break;
					    case "Qa":
							acumsueldoq +=sueldo;
							contsueldoq ++;
							break;



		 }

         if(flag || sueldo > mayorsueldo){

			mayorsueldo = sueldo;
			sexomayors = sexo;
			flag = 0;
		 }

         if(sexo == "femenino"){
			 if (flag2 || sueldo > mayorsueldof){
				 mayorsueldof = sueldo;
				 nombrfmassueldo = nombre;
				 flag2 = 0;
			 }else{
				mayorsueldof = "no existe";
				nombrfmassueldo = "no existe";
			 }


		 }

        






      seguir = prompt("Desea seguir ingresando empleados s/n:").toLowerCase();
	}while(seguir == 's');


	if(contsueldoa !=0){
		promediosana = acumsueldoa / contsueldoa;
	}else{
		promediosana = "no existe";
	}
	if(contsueldop !=0){
		promediosp = acumsueldop / contsueldop;
	}else{
		promediosp = "no existe";
	}
	if(contsueldoq !=0){
		promediosq = acumsueldoq / contsueldoq;
	}else{
		promediosq = "no existe";
	}

	console.log("EL promedio de sueldo para analistas es : "+promediosana+" para programador:  "+promediosp+"para Qa: "+promediosq);
	console.log("El sexo del que tiene mayor sueldo es: "+sexomayors);
	console.log("el nombre del empleado femenino con mas sueldo: "+nombrfmassueldo);
	console.log("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 " +contprogramanobi);
}
