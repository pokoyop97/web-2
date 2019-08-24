function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomElem(positions);
var colors = ['rojo', 'verde', 'amarillo', 'azul'];
var randomColor = randomElem(colors);
console.log(randomPosition);
console.log(randomColor);
