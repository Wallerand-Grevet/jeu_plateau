// nombre aleatoire comprise entre 1 et le nombre de case
function numCase (x, y){
    a = Math.ceil(Math.random()* x * y);
    return a
}

var Map = {
    init : function(nbCaseX,nbCaseY){
        this.nbCaseX = nbCaseX;
        this.nbCaseY = nbCaseY;
        //Determination de la largeur du plateau
        largeurPlateau = nbCaseY * 60;
        $('#plateau').css('max-width', largeurPlateau);
        $('#plateau').css('min-width', largeurPlateau);
        var idCase=1;
        for (var i = 1; i <= nbCaseX ; i++) {
            for (j = 1 ;j < nbCaseY ;j++) {
                $('#plateau').append('<div class = "case" id='+ idCase + ' ></div>');
                idCase++;
            };
            $('#plateau').append('<div class = "case" id='+ idCase + '></div>');
            idCase++;
        };

    }


}

