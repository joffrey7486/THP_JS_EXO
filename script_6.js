let getProtein = function(arn){
    // Découper la chaine de caratères
    var arnArray = arn.split('')
    var codons = []
    // Trier par 3 charactères
    while(arnArray.length !== 0){
        let codon = arnArray.splice(0,3).join("")
        codons.push(codon)
    }
    console.log(codons)
    var proteins = []
    // Pour chaque Codon faire la comparaisons et pousser dans le tableau l'acide aminé correspondant 
    codons.forEach(function(codon){
        switch (codon) {
            case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" : 
                proteins.push("Sérine"); 
                break;
            case "CCU": case "CCC": case "CCA": case "CCG" :
                proteins.push("Proline"); 
                break;
            case "UUA": case "UUG" : 
                proteins.push("Leucine"); 
                break;
            case "UUU": case "UUC" : 
                proteins.push("Phénylalanine"); 
                break;
            case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" : 
                proteins.push("Arginine");
                 break;
            case "UAU": case "UAC" : 
            proteins.push("Tyrosine"); 
            break;
        }
    })
    return proteins.join('-')
}

console.log(getProtein("CCGUCGUUGCGCUACAGC"))

console.log(getProtein("CCUCGCCGGUACUUCUCG"))

