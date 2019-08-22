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
 
var square = new Shape("cuadrado", 30, 30);
 
console.log( square.shoutout() );
console.log( 'Area de figura: ' + square.area );
console.log( 'Name de figura: ' + square.name );
console.log( 'Color de figura: ' + square.color );
console.log( 'Ancho de figura: ' + square.width );
console.log( 'Alto de figura: ' + square.height );