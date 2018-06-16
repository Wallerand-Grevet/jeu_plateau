function mouvementJ1(joueur,deplacement){
    positionVoulu = parseInt(joueur.position) + deplacement
    if ($('#'+ positionVoulu).hasClass('interdit')) {
    } else{
        $('#'+ joueur.position).empty().removeClass('interdit'); // --> enleve les noeuds enfants de la position du joueur et la classe 'interdit'
        joueur.position = parseInt(joueur.position) + deplacement
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
        $('#'+ joueur.position).append('<img class="perso2" src ="img/ninie.png">');
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/tournevis.jpg">');
    }
}

var a=0;
var b=0;


$('body').keypress(function (e) {
        //mouvement wawa
    if (a<3 || b>2) {

        var joueurChoisi = 'wawa'
        if (b>2) {
            a=0            // On  initialise a et b apres que le joueur 2 a joué
            b=0
        }
        if (e.which === 100) {
            positionVoulu = parseInt(wawa.position) + 1
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ1(wawa, 1)
                a++
            }
        } else if (e.which === 113) {
            positionVoulu = parseInt(wawa.position) - 1
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ1(wawa, -1)
                a++
            }
        } else if (e.which === 115) {
            positionVoulu = parseInt(wawa.position) + map.nbCaseX
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ1(wawa, map.nbCaseX)
                a++
            }
        } else if (e.which === 122) {
            positionVoulu = parseInt(wawa.position) - map.nbCaseX
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ1(wawa, -(map.nbCaseX))
                a++
            }
        } 
        
    } else if (a>2) {
        var joueurChoisi='ninie'
        if (e.which === 100) {
            positionVoulu = parseInt(ninie.position) + 1
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ2(ninie, 1)
                b++
            }
        } else if (e.which === 113) {
            positionVoulu = parseInt(ninie.position) - 1
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ2(ninie, -1)
                b++
            }
        } else if (e.which === 115) {
            positionVoulu = parseInt(ninie.position) + map.nbCaseX
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ2(ninie, map.nbCaseX)
                b++
            }
        } else if (e.which === 122) {
            positionVoulu = parseInt(ninie.position) - map.nbCaseX
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvementJ2(ninie, -(map.nbCaseX))
                b++
            }
        }
    }
    console.log(joueurChoisi)
    $('#boutonChangerPerso').click(function(){
        if (joueurChoisi === 'wawa') {
            a=3
        } else if (joueurChoisi === 'ninie') {
            a=0
            b=0
        }
    })
    console.log(a)
});    









