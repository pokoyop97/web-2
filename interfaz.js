function area(shape) {
    var area = shape.width * shape.height;
    return " yo soy " + shape.name + " con un area " + area + " centimetros cuadrados";
}
console.log(area({ name: "rectangulo", width: 30, height: 15 }));
console.log(area({ name: "cuadrado", width: 30, height: 30 }));
