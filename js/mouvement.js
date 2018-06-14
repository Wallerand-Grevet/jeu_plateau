function mouvementJ1(joueur,deplacement){
    positionInitial = parseInt(joueur.position) + deplacement
    if ($('#'+ positionInitial).hasClass('interdit')) {
    } else{
        $('#'+ joueur.position).empty().removeClass('interdit'); // --> enleve les noeuds enfants de la position du joueur et la classe 'interdit'
        joueur.position = parseInt(joueur.position) + deplacement
        console.log(joueur.position)
        $('#'+ joueur.position).append('<img class="perso1" src ="img/wawa.png">');
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/tournevis.jpg">');

    }
}
function mouvementJ2(joueur,deplacement){
    positionInitial = parseInt(joueur.position) + deplacement
    if ($('#'+ positionInitial).hasClass('interdit')) {
    } else{
        $('#'+ joueur.position).empty().removeClass('interdit'); // --> enleve les noeuds enfants de la position du joueur
        joueur.position = parseInt(joueur.position) + deplacement
        console.log(joueur.position)
        $('#'+ joueur.position).append('<img class="perso2" src ="img/ninie.png">');
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/tournevis.jpg">');

    }
    
}


$('body').keypress(function (e) {
    //mouvement wawa
    if (e.which === 100) {
        mouvementJ1(wawa, 1)
    } else if (e.which === 113) {
        mouvementJ1(wawa, -1)
    } else if (e.which === 115) {
        mouvementJ1(wawa, map.nbCaseX)
    } else if (e.which === 122) {
        mouvementJ1(wawa, -(map.nbCaseX))
    }

    //mouvement ninie
    if (e.which === 100) {
        mouvementJ2(ninie, 1)
    } else if (e.which === 113) {
        mouvementJ2(ninie, -1)
    } else if (e.which === 115) {
        mouvementJ2(ninie, map.nbCaseX)
    } else if (e.which === 122) {
        mouvementJ2(ninie, -(map.nbCaseX))
    }
    
})


