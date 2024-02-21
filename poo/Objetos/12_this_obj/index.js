let ninja = {
    classe: "profissional",
    arma: "metralhadora",
    atirarArma: function () {
        console.log("Atirou a " + this.arma);
    },
    atirarDuasVezes(){
        for (let i = 2; i > 0; i--){
            this.atirarArma();
        }

    }
}

ninja.atirarArma();
ninja.atirarDuasVezes();