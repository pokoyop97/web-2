var tank = {
    size: 50,
    salud: 100,
    range: 60,
    daño: 12
};
tank.salud = 95;
var tankHit = function (tankName, dañoDone) {
    tankName.salud -= dañoDone;
    return tankName.salud;
};
