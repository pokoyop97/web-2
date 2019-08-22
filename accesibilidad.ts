class Shape {
 
    area: number;
    private color: string;
 
    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "un robot";
    };
 
    shoutout() {
        return "yo soy " + this.color + " " + this.name +  " con un area de " + this.area + " cm cuadrados.";
    }
}
 
var cuadrado = new Shape("cuadrado", 30, 30);
 
console.log( cuadrado.shoutout() );
console.log( 'Area de figura: ' + cuadrado.area );
console.log( 'Name de figura: ' + cuadrado.name );
console.log( 'Color de figura: ' + cuadrado.color );
console.log( 'Ancho de figura: ' + cuadrado.width );
console.log( 'Alto de figura: ' + cuadrado.height );