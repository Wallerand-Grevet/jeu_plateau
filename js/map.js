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
        caseInterdite = [];
        //Ajout des case grisé sur le plateau
        for (var i = 0; i < 10; i++) {
            caseGrise = $('#'+ numCase());
            caseInterdite.push(caseGrise);
            caseGrise.css('background-color','grey');
        };
        console.log(caseInterdite);
        //Ajout des armes sur le plateau.
        
        $('#'+ numCase()).append('<img src ="img/epee.png">');
        $('#'+ numCase()).append('<img src ="img/couteau.png">');
        $('#'+ numCase()).append('<img src ="img/machette.jpg">');
        $('#'+ numCase()).append('<img src ="img/hache.png">');
    }


}
map1 = Object.create(Map);
map1.init(10,10);
