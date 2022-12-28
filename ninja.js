class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`Nombre: ${this.nombre}`);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza} Velocidad: ${this.velocidad}`);
    }

    drinkSake(){
        return(this.salud +=10);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();