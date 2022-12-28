class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`Mí nombre es ${this.nombre}`);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza} Velocidad: ${this.velocidad}`);
    }

    drinkSake(){
        return(this.salud +=10);
    }
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        super.salud = 200;
        super.fuerza = 10;
        super.velocidad = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats()