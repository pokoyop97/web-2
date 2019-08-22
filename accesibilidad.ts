class Shape {
 
    area: number;
    private color: string;
 
    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "rosa";
    };
 
    shoutout() {
        return "yo soy " + this.color + " " + this.name +  " con un area de " + this.area + " cm cuadrados.";
    }
}
class Shape3D extends Shape{
    volume: number;
    constructor (public name: string, ancho: number, alto: number, largo: number){
        super(name,ancho,alto);
        this.volume = largo *this.area;
    };
    shoutout() {        return "yo soy " + this.name +  " con un volumen de " + this.volume + " cm cubicos.";    }
 
    superShout() {        return super.shoutout();    } 
}
 
var cuadrado = new Shape("cuadrado", 30, 30);
var cube = new Shape3D("cube", 30, 30, 30); 
 
console.log( cuadrado.shoutout() );
console.log( 'Area de figura: ' + cuadrado.area );
console.log( 'Name de figura: ' + cuadrado.name );
console.log( 'Color de figura: ' + cuadrado.color );
console.log( 'Ancho de figura: ' + cuadrado.width );
console.log( 'Alto de figura: ' + cuadrado.height );
console.log( cube.shoutout() ); 
console.log( cube.superShout() );