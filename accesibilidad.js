var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "un robot";
    }
    ;
    Shape.prototype.shoutout = function () {
        return "yo soy " + this.color + " " + this.name + " con un area de " + this.area + " cm cuadrados.";
    };
    return Shape;
}());
var cuadrado = new Shape("cuadrado", 30, 30);
console.log(cuadrado.shoutout());
console.log('Area de figura: ' + cuadrado.area);
console.log('Name de figura: ' + cuadrado.name);
console.log('Color de figura: ' + cuadrado.color);
console.log('Ancho de figura: ' + cuadrado.width);
console.log('Alto de figura: ' + cuadrado.height);
