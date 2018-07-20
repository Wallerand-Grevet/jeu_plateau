// nombre aleatoire comprise entre 0 et le nombre de case -1
function numCase (x, y){
    a = Math.floor(Math.random()* x * y);
    return a
}

function ajoutMurs (nbCaseX,nbCaseY){
    // Ajout des murs
    
    for (var i = 0; i < nbCaseX; i++) {
        var ajoutMur = 1;
        while (ajoutMur === 1){
            var numMur = numCase(nbCaseX,nbCaseY);
            console.log(numMur)
            var caseInterdite = map.cellules[numMur];
            console.log(caseInterdite)
            if (caseInterdite.accessible===true) {
                $('#'+ numMur).append(imageMur);
                $('#'+ numMur).addClass('interdit');
                caseInterdite.accessible = false;
                ajoutMur = 0;
            } else {
                ajoutMur = 1;
            };
        };
    };
}

function ajoutArmes(nbCaseX,nbCaseY,image,arme) {
    // Ajout d'une arme sur la map en évitant les case interdites
    var ajoutArme = 1;
    while (ajoutArme === 1){
        var numCaseArme = numCase(nbCaseX,nbCaseY);
        console.log(numCaseArme)
        var caseArme = map.cellules[numCaseArme]
        console.log(caseArme)
        if ((caseArme.accessible === true) && (caseArme.arme === false)) {
            $('#'+ numCaseArme).append(image);
            caseArme.accessible = false
            caseArme.arme === true
            console.log(caseArme)
            $('#'+ numCaseArme).addClass(arme).addClass('armes');
            ajoutArme = 0;
        } else {
            ajoutArme = 1;
        };
    };
}

function ajoutPersos (nbCaseX,nbCaseY,imagePerso,nom) {
    // Ajout d'un perso sur la map en évitant les cases interdites
    var ajoutPerso = 1;
    while (ajoutPerso === 1){
        var numPerso = numCase(nbCaseX,nbCaseY);
        var casePerso = map.cellules[numPerso];
        console.log(casePerso)
         // Empecher les persos d'etre cote a cote
        if (numPerso>=0 && numPerso<99) {
            var persoCoteDroit = map.cellules[numPerso + 1];
        } else{
            var persoCoteDroit = casePerso
        }
        if (numPerso>0 && numPerso<=99) {
            var persoCoteGauche = map.cellules[numPerso - 1];
        }else{
            var persoCoteDroit = casePerso
        }
        if (numPerso>=0 && numPerso<90) {
            var persoDessous = map.cellules[numPerso + nbCaseX];
        }else{
            var persoDessous = casePerso
        }
        if (numPerso>10 && numPerso<=99) {
            var persoDessus = map.cellules[numPerso - nbCaseX];
        }else{
            var persoDessus = casePerso
        }
        if ((persoCoteGauche.joueur===true) || (persoCoteDroit.joueur===true) || (persoDessus.joueur===true) || (persoDessous.joueur===true)){
            ajoutPerso = 1;
        }else {
            if ( (casePerso.accessible === true) && (casePerso.arme === false)) {
                $('#'+ numPerso).append(imagePerso);
                $('#'+ numPerso).append(imagePetitTournevis);
                casePerso.accessible = false;;
                casePerso.joueur = true;
                $('#'+ numPerso).addClass('interdit').addClass(nom).addClass('personnage');
                ajoutPerso = 0;
            } else {
            ajoutPerso = 1;
            };
        }
        
    };

}


var Map = {

    init : function(nbCaseX,nbCaseY){
        var tableau = [];
        this.cellules = tableau;
        this.nbCaseX = nbCaseX;
        this.nbCaseY = nbCaseY;
        //Determination de la largeur du plateau
        
        largeurPlateau = nbCaseY * 60;
        $('#plateau').css('max-width', largeurPlateau);
        $('#plateau').css('min-width', largeurPlateau);
        var idCase=1;
        for (var i = 1; i <= nbCaseX ; i++) {
            for (j = 1 ;j < nbCaseY ;j++) {

                var cellule = new ElementGrille(idCase - 1);
                tableau.push(cellule)
                $('#plateau').append('<div class = "case" id='+ idCase + ' ></div>');
                idCase++;
            };
            var cellule = new ElementGrille(idCase - 1);
            tableau.push(cellule)
            $('#plateau').append('<div class = "case" id='+ idCase + '></div>');
            idCase++;
            
        };
        ajoutMurs(nbCaseX,nbCaseY);
        ajoutArmes(nbCaseX,nbCaseY,imageEpee,'epee');
        ajoutArmes(nbCaseX,nbCaseY,imageCouteau,'couteau');
        ajoutArmes(nbCaseX,nbCaseY,imageMachette,'machette');
        ajoutArmes(nbCaseX,nbCaseY,imageHache,'hache');
        ajoutPersos(nbCaseX,nbCaseY,imageWawa,'wawa');
        ajoutPersos(nbCaseX,nbCaseY,imageNinie,'ninie');
        

    }
    



}

