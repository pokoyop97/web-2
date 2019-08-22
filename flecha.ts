var shape = {
    name: "rectangulo",
    popup: function(){
        console.log('Esto es un popup():'+this.name);
        setTimeout(function(){
            console.log('Esto es dentro del Timeout():'+this.name);
            console.log("yo soy "+this.name+"!");
        },3000);
    }
};