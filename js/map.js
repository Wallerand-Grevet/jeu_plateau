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
        
        //Ajout des case grisé sur le plateau
        for (var i = 0; i < 10; i++) {
            caseInterdite = $('#'+ numCase());
            caseInterdite.append('<img src ="img/mur.png">');
            caseInterdite.addClass('interdit')
        };

        // Ajout de l'épée sur la map en évitant les case grise
        var ajoutEpee = 1
        while (ajoutEpee === 1){
            var numEpee = numCase()
            console.log(numEpee)
            if (!($('#' + numEpee).hasClass('interdit'))) {
                $('#'+ numEpee).append('<img src ="img/epee.png">');
                ajoutEpee = 0
            } else {
                ajoutEpee = 1
            };
        };
        
        // Ajout du couteau sur la map en évitant les case grise
        var ajoutCouteau = 1
        while (ajoutCouteau === 1){
            var numCouteau = numCase()
            console.log(numCouteau)
            if (!($('#' + numCouteau).hasClass('interdit'))) {
                $('#'+ numCouteau).append('<img src ="img/couteau.png">');
                ajoutCouteau = 0
            } else {
                ajoutCouteau = 1
            };
        };
    
        // Ajout de la machette sur la map en évitant les case grise
        var ajoutMachette = 1
        while (ajoutMachette === 1){
            var numMachette = numCase()
            console.log(numMachette)
            if (!($('#' + numMachette).hasClass('interdit'))) {
                $('#'+ numMachette).append('<img src ="img/machette.jpg">');
                ajoutMachette = 0
            } else {
                ajoutMachette = 1
            };
        };

        // Ajout dez la hache sur la map en évitant les case grise
        var ajoutHache = 1
        while (ajoutHache === 1){
            var numHache = numCase()
            console.log(numHache)
            if (!($('#' + numHache).hasClass('interdit'))) {
                $('#'+ numHache).append('<img src ="img/hache.png">');
                ajoutHache = 0
            } else {
                ajoutHache = 1
            };
        };
    }


}

