function ajoutImageJoueur(joueur){
    if (joueur === wawa) {
        $('#'+ joueur.position).append('<img class="perso1" src ="img/wawa.png">');
    } else if (joueur === ninie) {
        $('#'+ joueur.position).append('<img class="perso2" src ="img/ninie.png">');
    }
}
function depotArme(joueur) {
    console.log(joueur.armeEnMain)
    if ($('#'+ (joueur.position)).hasClass('armes')) {
        if (joueur.armeEnMain === epee) {
            $('#'+ joueur.position ).append('<img class="arme" src ="img/epee.png">');
        } else if (joueur.armeEnMain === hache) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/hache.png">');
        } else if (joueur.armeEnMain === machette) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/machette.png">');
        } else if (joueur.armeEnMain === couteau) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/couteau.png">');
        } else if (joueur.armeEnMain === tournevis) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/tournevis.jpg">');
        }
    }
}
    
function nouvelleArme(joueur) {

    if (joueur.armeEnMain === epee) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petite_epee.png">');
    } else if (joueur.armeEnMain === hache) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petite_hache.png">');
    } else if (joueur.armeEnMain === machette) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petite_machette.png">');
    } else if (joueur.armeEnMain === couteau) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petit_couteau.png">');
    } else if (joueur.armeEnMain === tournevis) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petit_tournevis.jpg">');
    }
    
}


function changementArme(joueur) {
    if (joueur.position === epee.position) {
        //indication de l'arme du joueur
        joueur.armeEnMain = epee;
        
        // On raz la position de l'epee
        epee.position=''
        // on efface le contenu de la case du joueur et on enleve la classe epee de cette case
        $('#'+ joueur.position).empty().removeClass(joueur.armeEnMain)
         // on ajoute l'image du joueur
        
        
    }
    if (joueur.position === couteau.position){
        couteau.position=''
        joueur.armeEnMain = couteau;
        $('#'+ joueur.position).empty().removeClass(joueur.armeEnMain)
        
        
    }
    if (joueur.position === hache.position) {
        hache.position = ''
        
        $('#'+ joueur.position).empty().removeClass(joueur.armeEnMain)
        joueur.armeEnMain = hache;
    }
    if (joueur.position === machette.position) {
        machette.position = ''
        joueur.armeEnMain = machette;
        $('#'+ joueur.position).empty().removeClass(joueur.armeEnMain)
    }
    if (joueur.position === tournevis.position) {
        tournevis.position = ''
        joueur.armeEnMain = tournevis;
        $('#'+ joueur.position).empty().removeClass(joueur.armeEnMain)
    }
}

function mouvement(joueur,deplacement){
    
    positionVoulu = parseInt(joueur.position) + deplacement;
    if ($('#'+ positionVoulu).hasClass('interdit')) {
    } else{
        $('#'+ joueur.position).empty().removeClass('interdit'); // --> enleve les noeuds enfants de la position du joueur et la classe 'interdit'
        
        depotArme(joueur)
        joueur.position = joueur.position + deplacement;
        
        changementArme(joueur);
        ajoutImageJoueur(joueur);
        nouvelleArme(joueur);
        
        
    }
}


var a=0;
var b=0;


$('body').keypress(function (e) {
        //mouvement wawa
    if (a<3 || b>2) {

        var joueurChoisi = 'wawa';
        if (b>2) {
            a=0;          // On  initialise a et b apres que le joueur 2 a joué
            b=0;
        }
        if (e.which === 100) {
            positionVoulu = parseInt(wawa.position) + 1;
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                
                mouvement(wawa, 1);
                
                
                a++;
            }
        } else if (e.which === 113) {
            positionVoulu = parseInt(wawa.position) - 1;
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(wawa, -1);
                a++;
            }
        } else if (e.which === 115) {
            positionVoulu = parseInt(wawa.position) + map.nbCaseX;
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(wawa, map.nbCaseX);
                a++;
            }
        } else if (e.which === 122) {
            positionVoulu = parseInt(wawa.position) - map.nbCaseX;
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(wawa, -(map.nbCaseX));
                a++;
            }
        } 
        
    } else if (a>2) {
        var joueurChoisi='ninie';
        if (e.which === 100) {
            positionVoulu = parseInt(ninie.position) + 1
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(ninie, 1);
                b++;
            }
        } else if (e.which === 113) {
            positionVoulu = parseInt(ninie.position) - 1
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{

                mouvement(ninie, -1);
                b++;
            }
        } else if (e.which === 115) {
            positionVoulu = parseInt(ninie.position) + map.nbCaseX
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(ninie, map.nbCaseX);
                b++;
            }
        } else if (e.which === 122) {
            positionVoulu = parseInt(ninie.position) - map.nbCaseX;
            if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(ninie, -(map.nbCaseX));
                b++;
            }
        }
    }
    $('#boutonChangerPerso').click(function(){
        if (joueurChoisi === 'wawa') {
            a=3;
        } else if (joueurChoisi === 'ninie') {
            a=0;
            b=0;
        }
    });
});    









