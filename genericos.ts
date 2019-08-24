function randomElem(theArray: any[]): any {    
    let randomIndex = Math.floor(Math.random()*theArray.length);    
    return theArray[randomIndex]; 
}

 
let positions: number[] = [103, 458, 472, 458]; 
let randomPosition: number = randomElem(positions);
let colors: string[] = ['rojo', 'verde', 'amarillo', 'azul']; 
let randomColor: string = randomElem(colors);
console.log(randomPosition);
console.log(randomColor);