interface enemigo {    
    readonly size: number,    
    salud: number,    
    range: number,    
    readonly daño: number 
}
 
let tank: enemigo = {    
    size: 50,    
    salud: 100,    
    range: 60,    
    daño: 12 
}

tank.salud=95;

interface enemigoHit {    
    (name: enemigo, dañoDone: number): number; }
 
let tankHit: enemigoHit = function(tankName: enemigo, dañoDone: number) {    
    tankName.salud -= dañoDone;    
    return tankName.salud; }
