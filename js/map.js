/*grille = parseInt($('#plateau').css('height'));
for (let i = 0; i < grille; i+=60) {
    $('.grille').append('<span class="grille2"></span>')
    $('.grille2').css('width','62.5px').css('border-right', '1px  rgb(197, 197, 197) solid').css('border-bottom', '1px  rgb(197, 197, 197) solid').css('height','59px').css('display','inline-block').css('margin','-2px' )
}
$('.grille').css('border-left', '1px  rgb(197, 197, 197) solid');
$('#premier').css('border-top', '1px  rgb(197, 197, 197) solid');*/



var Map = {
    init : function(nbCaseX,nbCaseY){
        this.nbCaseX = nbCaseX;
        this.nbCaseY = nbCaseY;
        
        
        largeurPlateau = nbCaseY * 60
        $('#plateau').css('width', largeurPlateau)
        var idCase=0
        for (var i = 0; i < nbCaseX ; i++) {
            for (j = 1 ;j < nbCaseY ;j++) {
                $('#plateau').append('<div class = "case" id='+ idCase + ' ></div>')
                idCase++
            };
            $('#plateau').append('<div class = "case" id='+ idCase + '></div>')
            idCase++
        };
        //Ajout des case grisé sur le plateau
        for (var i = 0; i < 10; i++) {
            $('#'+ numCase()).css('background-color','grey');
        };
        //Ajout des armes sur le plateau.
        $('#'+ numCase()).append('<img src ="img/epee.png">');
        $('#'+ numCase()).append('<img src ="img/couteau.png">');
        $('#'+ numCase()).append('<img src ="img/machette.jpg">');
        $('#'+ numCase()).append('<img src ="img/hache.png">');
        




    }


}
map1 = Object.create(Map)
map1.init(10,10)
