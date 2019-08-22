function area(forma, ancho, altura) {
    var area = ancho * altura;
    return "yo soy un" + forma + " con un area de " + area + " cm cuadrados.";
}
document.body.innerHTML = area("rectangulo", 30, 15);
