

var Map = {
    init : function(nbCaseX,nbCaseY){
        this.nbCaseX = nbCaseX;
        this.nbCaseY = nbCaseY;
        
        largeurPlateau = nbCaseY * 60;
        $('#plateau').css('width', largeurPlateau);
        var idCase=0;
        for (var i = 0; i < nbCaseX ; i++) {
            for (j = 1 ;j < nbCaseY ;j++) {
                $('#plateau').append('<div class = "case" id='+ idCase + ' ></div>');
                idCase++
            };
            $('#plateau').append('<div class = "case" id='+ idCase + '></div>');
            idCase++;
        };
        
        //Ajout des cases grisé sur le plateau
        var caseInterdite = $('#'+ numCase(nbCaseX,nbCaseY));
        caseInterdite.append('<img src ="img/mur.png">');
        caseInterdite.addClass('interdit');
        for (var i = 0; i < nbCaseX; i++) {
            var ajoutMur = 1
            while (ajoutMur === 1){
                numMur = numCase(nbCaseX,nbCaseY);
                if (!($('#' + numMur).hasClass('interdit'))) {
                    $('#'+ numMur).append('<img src ="img/mur.png">');
                    $('#'+ numMur).addClass('interdit');
                    ajoutMur = 0
                } else {
                    ajoutMur = 1
                };
            };
        };

        // Ajout de l'épée sur la map en évitant les case interdites
        var ajoutEpee = 1
        while (ajoutEpee === 1){
            var numEpee = numCase(nbCaseX,nbCaseY);
            if (!($('#' + numEpee).hasClass('interdit'))) {
                $('#'+ numEpee).append('<img class="arme" src ="img/epee.png">');
                $('#'+ numEpee).addClass('epee').addClass('armes');
                ajoutEpee = 0
            } else {
                ajoutEpee = 1
            };
        };
        
        // Ajout du couteau sur la map en évitant les cases interdites
        var ajoutCouteau = 1
        while (ajoutCouteau === 1){
            var numCouteau = numCase(nbCaseX,nbCaseY);
            if ( !($('#' + numCouteau).hasClass('interdit')) && !($('#' + numCouteau).hasClass('armes'))) {
                $('#'+ numCouteau).append('<img class="arme" src ="img/couteau.png">');
                $('#'+ numCouteau).addClass('couteau').addClass('armes');
                ajoutCouteau = 0
            } else {
                ajoutCouteau = 1
            };
        };
    
        // Ajout de la machette sur la map en évitant les case interdites
        var ajoutMachette = 1
        while (ajoutMachette === 1){
            var numMachette = numCase(nbCaseX,nbCaseY);
            if ( !($('#' + numMachette).hasClass('interdit')) && !($('#' + numMachette).hasClass('armes'))) {
                $('#'+ numMachette).append('<img class="arme" src ="img/machette.png">');
                $('#'+ numMachette).addClass('machette').addClass('armes');
                ajoutMachette = 0
            } else {
                ajoutMachette = 1
            };
        };

        // Ajout dez la hache sur la map en évitant les cases interdites
        var ajoutHache = 1
        
        while (ajoutHache === 1){
            var numHache = numCase(nbCaseX,nbCaseY);
            if ( !($('#' + numHache).hasClass('interdit')) && !($('#' + numHache).hasClass('armes'))) {
                $('#'+ numHache).append('<img class="arme" src ="img/hache.png">');
                $('#'+ numHache).addClass('hache').addClass('armes')
                ajoutHache = 0
            } else {
                ajoutHache = 1
            };
        };

        // Ajout du perso 1 sur la map en évitant les cases interdites
        var ajoutPerso1 = 1
        while (ajoutPerso1 === 1){
            var numPerso1 = numCase(nbCaseX,nbCaseY);
            if ( !($('#' + numPerso1).hasClass('interdit')) && !($('#' + numPerso1).hasClass('armes'))) {
                $('#'+ numPerso1).append('<img class="perso1" src ="img/wawa.png">');
                $('#'+ numPerso1).append('<img class = "armePetite" src ="img/tournevis.jpg">');
                $('#'+ numPerso1).addClass('interdit').addClass('wawa');
                ajoutPerso1 = 0
            } else {
                ajoutPerso1 = 1
            };
        };

        // Ajout du perso 2 avec arme de depart sur la map en évitant les cases interdites
        var ajoutPerso2 = 1
        while (ajoutPerso2 === 1){
            var numPerso2 = numCase(nbCaseX,nbCaseY);
            // Empecher le perso2 de se positionner a coté du perso 1.
            if (((numPerso1 + nbCaseX) === numPerso2) || ((numPerso1 - nbCaseX) === numPerso2) || ((numPerso1 + 1) === numPerso2) || ((numPerso1 - 1) === numPerso2)) {
                ajoutPerso2 = 1
            }else {
                if ( !($('#' + numPerso2).hasClass('interdit')) && !($('#' + numPerso2).hasClass('armes'))) {
                    $('#'+ numPerso2).append('<img class="perso2" src ="img/ninie.png">');
                    $('#'+ numPerso2).append('<img class="armePetite" src ="img/tournevis.jpg">')
                    $('#'+ numPerso2).addClass('interdit').addClass('ninie');
                    ajoutPerso2 = 0
                } else {
                    ajoutPerso2 = 1
                };
            }
        };

    }


}

