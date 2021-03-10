function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let cantmaterias;
    let notaprom;
    let edad;
    let contotaldeest = 0;
    let contestf = 0;
    let contests = 0;
    let contestq = 0;
    let mejornotapromalumf = 0;
    let nombmejorpromf;
    let flag = 1;
    let alumnajoven;
    let nombrealumnajoven;
    let flag2 = 1;
    let estcursamasmaterias;
    let nomestcursamasmaterias;
    let edadestcursamasmaterias;
    let flag3= 1;

    for(i = 0; i < 500 ; i++){
        nombre = prompt("Ingrese el nombre del alumno: ");
        carrera = prompt("Ingrese la carrera Quimica , Fisica , Sistemas").toLowerCase();
        while(!(carrera == "quimica" || carrera == "sistemas" || carrera == "fisica")){
            carrera = prompt("Error. Ingrese la carrera Quimica , Fisica , Sistemas").toLowerCase();

        }
        sexo = prompt("ingrese sexo masculino - femenino -no binario").toLowerCase();
        while(!(sexo == "masculino" || sexo == "femenino" || sexo == "no binario")){
			sexo = prompt("Error. ingrese si es masculino o femenino no binario:").toLowerCase();
        }
        cantmaterias = parseInt(prompt("Ingrese la cantidad de materias: "));
        while(cantmaterias < 1 && cantmaterias > 5){

           cantmaterias = parseInt(prompt("Error.Ingrese la cantidad de materias: "));
        }
        notaprom = parseInt(prompt("ingrese la nota promedio: "));
        while(notaprom <0 || notaprom >10){
            notaprom = parseInt(prompt("Error.ingrese la nota promedio: "));

        }
        edad = parseInt(prompt("Ingrese la edad"));
        while(isNaN(edad)){
            edad = parseInt(prompt("Error. Ingrese la edad"));

        }
        switch(carrera){
               case"fisica":
                         contestf++;
                         contotaldeest++;
                   if(flag || notaprom > mejornotapromalumf){
                       mejornotapromalumf = notaprom;
                       nombmejorpromf = nombre;
                       flag = 0;
                   }

                 break;
                case"quimica":
                contotaldeest++;
                contestq++;
                  break;
                case "sistemas":
                    contotaldeest++;
                    contests++;
                    break;




        }
        if(sexo == "femenino" && (flag2 || edad < alumnajoven) ){
            
                alumnajoven = edad;
                nombrealumnajoven = nombre;
                flag2 = 0;
            
        }
        
        if(carrera == "fisica"|| carrera == "sistemas"){

            if(flag3 || cantmaterias > estcursamasmaterias){
                estcursamasmaterias = cantmaterias;
                nomestcursamasmaterias = nombre;
                edadestcursamasmaterias = edad;
                flag3 = 0;
            }else{
                estcursamasmaterias ="no existe";
                nomestcursamasmaterias ="no existe" ;
                edadestcursamasmaterias ="no existe" ;
            }
        }





    }
    
    
    console.log("El nombre de la mejor nota promedio es :" +nombmejorpromf);
    console.log("El nombre de la alumno mas joven es: "+nombrealumnajoven);
    console.log(" estudiante que cursa mas materias el nombre es: "+nomestcursamasmaterias+ " Y su edad "=edadestcursamasmaterias);
}
