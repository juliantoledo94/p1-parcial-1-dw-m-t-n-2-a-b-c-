let lista_discos = [];
let disco;
let pista;

class Disco {
    #nombre;
    #autor;
    #codigo;
    #pistas;

    constructor(nombre, autor, codigo) {

        this.#nombre = nombre;
        this.#autor = autor;
        this.#codigo = codigo;
        this.#pistas = [];

    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    set setAutor(autor) {
        this.#autor = autor;

    }

    set setCodigo(codigo) {
        this.#codigo = codigo;
    }

    get getNombre(){
        return this.#nombre;
    }

    get getAutor(){
        return this.#autor;
    }


    get getCodigo(){
        return this.#codigo;
    }

    get getPistas(){
        return this.#pistas;
    }

    agregarPista(pista) {
        this.#pistas.push(pista);
    }

    listarPistas() {

        let listaPistas = [];

        for (pista of this.#pistas) {
            listaNombres.push(pista);
        }

        return listaPistas;


    }



}

class Pista {
    #nombre;
    #duracion;

    constructor(nombre, duracion) {
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    set setNombrePista(nombre) {
        this.#nombre = nombre;

    }

    set setDuracion(duracion) {
        this.#duracion = duracion;
    }

    get getNombrePista(){
        return this.#nombre;
    }

    get getDuracion(){
        return this.#duracion;
    }


}




function validarStrings(mensaje) {

    let flag = false;
    do {


        if (isNaN(mensaje)) {
            flag = true;
            return mensaje;
        } else {
            alert("No esta ingresando un string");
            mensaje = prompt("ingrese nuevamente un string")
            flag = false;

        }
    } while (flag == false) {}

}

function validarNumeros(mensaje){

    let flag = false;
    do {


        if (!isNaN(mensaje)) {
            flag = true;
            return mensaje;
        } else {
            alert("No esta ingresando un numero");
            mensaje = parseInt(prompt("ingrese nuevamente un entero"));
            flag = false;

        }
    } while (flag == false) {}

}

function Cargar() {

    disco = new Disco();

    disco.setNombre = validarStrings(prompt("ingrese nombre del disco:"));
    disco.setAutor = validarStrings(prompt("ingrese autor"));
    

    do {

        disco.setCodigo = validarNumeros(parseInt(prompt("ingrese codigo")));
    
        while(!(disco.getCodigo >= 1 && disco.getCodigo <= 999)){
          disco.setCodigo = prompt("Ingresa el codigo numérico único del disco (1-999)");
        }
    
        var check = chequearCodigoUnico(disco.getCodigo);

        
    
      } while (check);

    

    CrearPistas();

    lista_discos.push(disco);

    return lista_discos;

}


function Mostrar() {

    let info="";

    
        
        for(let datoObjeto of lista_discos){
            
            info+=`<p> Nombre del disco: ${datoObjeto.getNombre}</p>`;
            info+="<ul>";
            info+=`<li>Nombre del autor o banda: ${datoObjeto.getAutor}</li>`;
            info+=`<li>Codigo: ${datoObjeto.getCodigo}</li>`;
            for(pista of datoObjeto.getPistas){
                if(pista.getDuracion>180){
                    
                    info+=`<li>Nombre de la pista: ${pista.getNombrePista} .</li>`;
                    info+=`<li style="color: red;"> Duracion : ${pista.getDuracion}  segundos</li>;`
                }
                else{
                    info+=`<li>Nombre de la pista: ${pista.getNombrePista}</li>`;
                    info+=`<li>Duracion : ${pista.getDuracion} segundos</li>;`
                }
                
                
            }
            
            info+="</ul>";          

        }
        
        document.getElementById("info").innerHTML =info;
    }
    



function CrearPistas() {


    do{
        pista = new Pista();
        pista.setNombrePista = validarStrings(prompt("ingrese nombre de la pista: "));
        
        pista.setDuracion = validarNumerosPista(parseInt(prompt("ingrese duracion en segundos")));
        disco.agregarPista(pista);
    }while(confirm("¿Queres agregar una nueva pista?"));


}




function chequearCodigoUnico(codigo){
    let flag;
    
    for (let i = 0; i < lista_discos.length; i++) {
        
        if (lista_discos[i].getCodigo == codigo) {
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      return flag;
}


function validarNumerosPista(mensaje){

    let flag = false;
    do {


        if (!isNaN(mensaje) && (mensaje>=0) && (mensaje<=7200)) {
            flag = true;
            return mensaje;
        } else {
            alert("No esta ingresando un numero o no esta ingresando un numero dentro de 0 y 7200");
            mensaje = parseInt(prompt("ingrese nuevamente la pista en segundos "));
            flag = false;

        }
    } while (flag == false) {}

}