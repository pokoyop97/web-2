var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "rosa";
    }
    ;
    Shape.prototype.shoutout = function () {
        return "yo soy " + this.color + " " + this.name + " con un area de " + this.area + " cm cuadrados.";
    };
    return Shape;
}());
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, ancho, alto, largo) {
        var _this = _super.call(this, name, ancho, alto) || this;
        _this.name = name;
        _this.volume = largo * _this.area;
        return _this;
    }
    ;
    Shape3D.prototype.shoutout = function () { return "yo soy " + this.name + " con un volumen de " + this.volume + " cm cubicos."; };
    Shape3D.prototype.superShout = function () { return _super.prototype.shoutout.call(this); };
    return Shape3D;
}(Shape));
var cuadrado = new Shape("cuadrado", 30, 30);
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cuadrado.shoutout());
console.log('Area de figura: ' + cuadrado.area);
console.log('Name de figura: ' + cuadrado.name);
console.log('Color de figura: ' + cuadrado.color);
console.log('Ancho de figura: ' + cuadrado.width);
console.log('Alto de figura: ' + cuadrado.height);
console.log(cube.shoutout());
console.log(cube.superShout());
