function pyramid(number){
    console.log("Salut combien veux-tu d'étage à ta pyramide?")
    number = prompt("donne ton nombre ici")
    for (let i = 1; i <= number; i++) {
        let str = "";
        //Ajoute un espace vide à partir de la gauche 
        for (let j = 1; j <= number - i; j++) {
        str += " ";
        }
        //Ajoute une brique pour chaque étage
        for (let k = 1; k <= i; k++) {
        str += "#";
        }
        //Retourne en console le résultat pour chaque étage
        console.log(str);
    }
}

console.log(pyramid())