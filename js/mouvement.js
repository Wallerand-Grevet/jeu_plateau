function ajoutImageJoueur(joueur){
    if (joueur === wawa) {
        $('#'+ joueur.position).append('<img class="perso1" src ="img/wawa.png">');
    } else if (joueur === ninie) {
        $('#'+ joueur.position).append('<img class="perso2" src ="img/ninie.png">');
    }
}
function depotArme(joueur) {
    
    if ($('#'+ (joueur.position)).hasClass('armes')) {
        if (joueur.ancienneArme === epee) {
            $('#'+ joueur.position ).append('<img class="arme" src ="img/epee.png">');
            $('#'+ joueur.position).addClass('epee').addClass('armes');
            epee.position=joueur.position
            joueur.ancienneArme = joueur.armeEnMain
        } else if (joueur.ancienneArme === hache) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/hache.png">');
            $('#'+ joueur.position).addClass('hache').addClass('armes');
            hache.position=joueur.position
            joueur.ancienneArme = joueur.armeEnMain
        } else if (joueur.ancienneArme === machette) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/machette.png">');
            $('#'+ joueur.position).addClass('machette').addClass('armes');
            machette.position=joueur.position
            joueur.ancienneArme = joueur.armeEnMain
        } else if (joueur.ancienneArme === couteau) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/couteau.png">');
            $('#'+ joueur.position).addClass('couteau').addClass('armes');
            couteau.position=joueur.position
            joueur.ancienneArme = joueur.armeEnMain
        } else if (joueur.ancienneArme === tournevisWawa) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/tournevis.jpg">');
            $('#'+ joueur.position).addClass('tournevisWawa').addClass('armes');
            tournevisWawa.position=joueur.position
            joueur.ancienneArme = joueur.armeEnMain
        } else if (joueur.ancienneArme === tournevisNinie) {
            $('#'+ joueur.position).append('<img class="arme" src ="img/tournevis.jpg">');
            $('#'+ joueur.position).addClass('tournevisNinie').addClass('armes');
            tournevisNinie.position=joueur.position
            joueur.ancienneArme = joueur.armeEnMain
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
    } else if (joueur.armeEnMain === tournevisWawa) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petit_tournevis.jpg">');
    } else if (joueur.armeEnMain === tournevisNinie) {
        $('#'+ joueur.position).append('<img class="armePetite" src ="img/petit_tournevis.jpg">');
    }
    console.log(joueur.armeEnMain)
}


function changementArme(joueur) {
    if (joueur.position === epee.position) {
        //indication de l'arme du joueur
        joueur.armeEnMain = epee;
        // On raz la position de l'epee
        epee.position=''
        // on efface le contenu de la case du joueur et on enleve la classe epee de cette case
        $('#'+ joueur.position).empty().removeClass('epee')
    }
    if (joueur.position === couteau.position){
        couteau.position=''
        joueur.armeEnMain = couteau;
        $('#'+ joueur.position).empty().removeClass('couteau')
    }
    if (joueur.position === hache.position) {
        hache.position = ''
        $('#'+ joueur.position).empty().removeClass('hache')
        joueur.armeEnMain = hache;
    }
    if (joueur.position === machette.position) {
        machette.position = ''
        joueur.armeEnMain = machette;
        $('#'+ joueur.position).empty().removeClass('machette')
    }
    if (joueur.position === tournevisWawa.position) {
        tournevisWawa.position = ''
        joueur.armeEnMain = tournevisWawa;
        $('#'+ joueur.position).empty().removeClass('tournevisWawa')
    } 
    if (joueur.position === tournevisNinie.position) {
        tournevisNinie.position = ''
        joueur.armeEnMain = tournevisNinie;
        $('#'+ joueur.position).empty().removeClass('tournevisNinie')
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

wawa.armeEnMain = tournevisWawa
wawa.ancienneArme = tournevisWawa
ninie.armeEnMain = tournevisNinie
ninie.ancienneArme = tournevisNinie
var a=0;
var b=0;

$('body').keypress(function (e) {
        //mouvement wawa
    if (a<3 || b>2) {

        var joueurChoisi = wawa;
        if (b>2) {
            a=0;          // On  initialise a et b apres que le joueur 2 a joué
            b=0;
        }
        if (e.which === 100) {
            if (!(wawa.position % 10 === 0)) {
                positionVoulu = parseInt(wawa.position) + 1;
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                mouvement(wawa, 1);
                a++;
                }
            }
            
        } else if (e.which === 113) {
            if (!(wawa.position % 10 === 1)) {
                positionVoulu = parseInt(wawa.position) - 1;
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    mouvement(wawa, -1);
                    a++;
                }
            }   
        } else if (e.which === 115) {
            if (!((wawa.position >= (map.nbCaseX*map.nbCaseY) - (map.nbCaseX-1) ) &&  (wawa.position<= map.nbCaseX*map.nbCaseY))) {
                positionVoulu = parseInt(wawa.position) + map.nbCaseX;
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    mouvement(wawa, map.nbCaseX);
                    a++;
                }
            }
        } else if (e.which === 122) {
            if (!((wawa.position >=1) &&  (wawa.position<=10))) {
                positionVoulu = parseInt(wawa.position) - map.nbCaseX;
                if ($('#'+ positionVoulu).hasClass('interdit')) {
            } else{
                mouvement(wawa, -(map.nbCaseX));
                a++;
                }
            }
        } 
        
    } else if (a>2) {
        var joueurChoisi=ninie;
        if (e.which === 100) {
            if (!(ninie.position % 10 === 0)) {
                positionVoulu = parseInt(ninie.position) + 1
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    mouvement(ninie, 1);
                    b++;
                }
            }
        } else if (e.which === 113) {
            if (!(ninie.position % 10 === 1)) {
                positionVoulu = parseInt(ninie.position) - 1
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    mouvement(ninie, -1);
                    b++;
                }
            }
        } else if (e.which === 115) {
            if (!((ninie.position >= (map.nbCaseX*map.nbCaseY) - (map.nbCaseX-1) ) &&  (ninie.position<= map.nbCaseX*map.nbCaseY))) {
                positionVoulu = parseInt(ninie.position) + map.nbCaseX
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    mouvement(ninie, map.nbCaseX);
                    b++;
                }
            }
        } else if (e.which === 122) {
            if (!((ninie.position >=1) &&  (ninie.position<=10))) {
                positionVoulu = parseInt(ninie.position) - map.nbCaseX;
                if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    mouvement(ninie, -(map.nbCaseX));
                    b++;
                }
            }
        }
    }
    $('#boutonChangerPerso').click(function(){
        if (joueurChoisi === wawa) {
            a=3;
        } else if (joueurChoisi === ninie) {
            a=0;
            b=0;
        }
    });
});    









