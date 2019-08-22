var shape = {
    name: "rectangulo",
    popup: function () {
        var _this = this;
        console.log('Esto es un popup():' + this.name);
        setTimeout(function () {
            console.log('Esto es dentro del Timeout():' + _this.name);
            console.log("yo soy " + _this.name + "!");
        }, 3000);
    }
};
shape.popup();
