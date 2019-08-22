function area(forma: string, ancho: number, altura: number){
    var area = ancho * altura;
    return "yo soy un "+forma+" con un area de "+area+ " cm cuadrados.";
}
document.body.innerHTML = area("rectangulo",30,15);