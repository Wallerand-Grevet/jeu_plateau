// nombre aleatoire comprise entre 1 et le nombre de case
function numCase (x, y){
    a = Math.ceil(Math.random()* x * y);
    return a
}


var ElementDeGrille = {
    ajoutMurs : function(nbCaseX,nbCaseY){
        // Ajout des murs
        var caseInterdite = $('#'+ numCase(nbCaseX,nbCaseY));
        caseInterdite.append(imageMur);
        caseInterdite.addClass('interdit');
        for (var i = 0; i < nbCaseX; i++) {
            var ajoutMur = 1;
            while (ajoutMur === 1){
                numMur = numCase(nbCaseX,nbCaseY);
                if (!($('#' + numMur).hasClass('interdit'))) {
                    $('#'+ numMur).append(imageMur);
                    $('#'+ numMur).addClass('interdit');
                    ajoutMur = 0;
                } else {
                    ajoutMur = 1;
                };
            };
        };
    },
    ajoutArmes : function (nbCaseX,nbCaseY,image,arme) {
        // Ajout d'une arme sur la map en évitant les case interdites
        var ajoutArme = 1;
        while (ajoutArme === 1){
            var numCaseArme = numCase(nbCaseX,nbCaseY);
            if (!($('#' + numCaseArme).hasClass('interdit')) && !($('#' + numCaseArme).hasClass('armes'))) {
                $('#'+ numCaseArme).append(image);
                $('#'+ numCaseArme).addClass(arme).addClass('armes');
                ajoutArme = 0;
            } else {
                ajoutArme = 1;
            };
        };
    },
    ajoutPersos : function (nbCaseX,nbCaseY,imagePerso,nom) {
        // Ajout d'un perso sur la map en évitant les cases interdites
        var ajoutPerso = 1;
        while (ajoutPerso === 1){
            var numPerso = numCase(nbCaseX,nbCaseY);
             // Empecher les persos d'etre cote a cote
            if ((($('#' + (numPerso + nbCaseX))).hasClass('personnage')) || (($('#' + (numPerso - nbCaseX))).hasClass('personnage')) || (($('#' + (numPerso + 1))).hasClass('personnage')) || (($('#' + (numPerso - 1))).hasClass('personnage'))) {
                ajoutPerso = 1;
            }else {
                if ( !($('#' + numPerso).hasClass('interdit')) && !($('#' + numPerso).hasClass('armes'))) {
                    $('#'+ numPerso).append(imagePerso);
                    $('#'+ numPerso).append(imagePetitTournevis);
                    $('#'+ numPerso).addClass('interdit').addClass(nom).addClass('personnage');
                    ajoutPerso = 0;
                } else {
                ajoutPerso = 1;
                };
            }
        };

    }




}