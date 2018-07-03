var map = Object.create(Map);
map.init(10,10);

// creation tournevis wawa
var tournevisWawa = Object.create(Arme);
tournevisWawa.init('tournevisWawa',10);

// creation tournevis ninie
var tournevisNinie = Object.create(Arme);
tournevisNinie.init('tournevisNinie',10);

// creation couteau
var couteau = Object.create(Arme);
couteau.init('couteau',15);

// creation machette
var machette = Object.create(Arme);
machette.init('machette',20);

// creation hache
var hache = Object.create(Arme);
hache.init('hache',25);

// creation epee
var epee = Object.create(Arme);
epee.init('epee',30);

// creation perso wawa
var wawa = Object.create(Personnage);
wawa.init('wawa');

// creation perso ninie
var ninie = Object.create(Personnage);
ninie.init('ninie');

// creation arme tenue en main wawa
wawa.armeEnMain = tournevisWawa

// creation ancienne arme de wawa pour gerer la depose de l'ancienne arme sur le plateau
wawa.ancienneArme = tournevisWawa

// creation arme tenue en main ninie
ninie.armeEnMain = tournevisNinie

// creation ancienne arme ninie pour gerer la depose de l'ancienne arme sur le plateau 
ninie.ancienneArme = tournevisNinie

var a=0; // sert a gerer le changement de joueur lorsque wawa est choisi.
var b=0; // sert a gerer le changement de joueur lorsque ninie est choisi.

// Init affichage joueur qui doit jouer et nombre de deplacement restant.
var joueurChoisi= wawa;
var resteDeplacement = 3; // variable qui sert a afficher le nombre de déplacement des joueurs dans les infos sur le jeu
$('#joueur').append('<h2> A ' + joueurChoisi.nom + ' de jouer<br></h2>')
$('#joueur').append('<h3> Il vous reste ' + resteDeplacement + ' deplacement</h3>')


$('body').keypress(function (e) {
    // On declenche les mouvements lorsque ninie et wawa ne sont pas cote a cote ou que ninie ou wawa sont sur la premiere et derniere colonne (derniere case ligne et premiere case ligne suivante ont des numeros qui se suivent )
    if ((!((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX))) || ((wawa.position % 10 === 0) && (ninie.position % 10 === 1)) || ((wawa.position % 10 === 1) && (ninie.position % 10 === 0))){

        //mouvement wawa
        if (a<3 || b>2) {

            joueurChoisi = wawa;

            if (b>2) {
                a=0;          // On raz a et b apres que le joueur 2 a joué
                b=0;
            }
            if (a===0) {
                resteDeplacement=3; // initialisation du nombre de déplacement pour affichage sur le jeu
            }
            if (e.which === 100) {
                if (!(wawa.position % 10 === 0)) {
                    positionVoulu = parseInt(wawa.position) + 1;
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                    wawa.mouvement(1);
                    combat();
                    a++; // incrementation de a pour gerer le changement de joueur apres 3 deplacements.
                    resteDeplacement-- // enleve un deplacment pour mettre a jour l'affichage du nombre de déplacement des joueurs dans les infos sur le jeu
                    }
                }
                
            } else if (e.which === 113) {
                if (!(wawa.position % 10 === 1)) {
                    positionVoulu = parseInt(wawa.position) - 1;
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                        wawa.mouvement(-1);
                        combat();
                        a++;
                        resteDeplacement--
                    }
                }   
            } else if (e.which === 115) {
                if (!((wawa.position >= (map.nbCaseX*map.nbCaseY) - (map.nbCaseX-1) ) &&  (wawa.position<= map.nbCaseX*map.nbCaseY))) {
                    positionVoulu = parseInt(wawa.position) + map.nbCaseX;
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                        wawa.mouvement(map.nbCaseX);
                        combat();
                        a++;
                        resteDeplacement--
                    }
                }
            } else if (e.which === 122) {
                if (!((wawa.position >=1) &&  (wawa.position<=10))) {
                    positionVoulu = parseInt(wawa.position) - map.nbCaseX;
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                } else{
                    wawa.mouvement(-(map.nbCaseX));
                    combat();
                    a++;
                    resteDeplacement--
                    }
                }
            } 
            
        } else if (a>2) {
            
            joueurChoisi=ninie;
            if (a===3) {
                resteDeplacement = 3;
            }
            if (e.which === 100) {
                if (!(ninie.position % 10 === 0)) {
                    positionVoulu = parseInt(ninie.position) + 1
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                        ninie.mouvement(1);
                        combat();
                        a++;
                        b++;
                        resteDeplacement--;
                       
                    }
                }
            } else if (e.which === 113) {
                if (!(ninie.position % 10 === 1)) {
                    positionVoulu = parseInt(ninie.position) - 1
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                        ninie.mouvement(-1);
                        combat();
                        b++;
                        a++;
                        resteDeplacement--;
                    }
                }
            } else if (e.which === 115) {
                if (!((ninie.position >= (map.nbCaseX*map.nbCaseY) - (map.nbCaseX-1) ) &&  (ninie.position<= map.nbCaseX*map.nbCaseY))) {
                    positionVoulu = parseInt(ninie.position) + map.nbCaseX
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                        ninie.mouvement(map.nbCaseX);
                        combat();
                        b++;
                        a++;
                        resteDeplacement--;
                    }
                }
            } else if (e.which === 122) {
                if (!((ninie.position >=1) &&  (ninie.position<=10))) {
                    positionVoulu = parseInt(ninie.position) - map.nbCaseX;
                    if ($('#'+ positionVoulu).hasClass('interdit')) {
                    } else{
                        ninie.mouvement(-(map.nbCaseX));
                        combat();
                        b++;
                        a++;
                        resteDeplacement--;
                    }
                }
            }
            
        }
        

        // Gestion affichage joueur qui doit jouer et nombre de deplacement restant
        if (joueurChoisi === wawa) {
            $('#infoJoueur1').empty()
            $('#infoJoueur2').empty()
            $('#infoJoueur1').append('<h2> A wawa de jouer</h2>')
            $('#infoJoueur1').append('<h3> Il vous reste ' + resteDeplacement + ' deplacement</h3>')
            $('#infosWawa').css('background-color', 'mediumspringgreen')
            if (resteDeplacement === 0) {
                joueurChoisi=ninie;
                $('#infosWawa').css('background-color', 'white')
                $('#infoJoueur1').empty()
                $('#infoJoueur2').append('<h2> A ninie de jouer</h2>')
                $('#infoJoueur2').append('<h3> Il vous reste 3 deplacement</h3>')
                $('#infosNinie').css('background-color', 'mediumspringgreen')
            }
        } else  if (joueurChoisi === ninie) {
            $('#infoJoueur1').empty()
            $('#infoJoueur2').empty()
            $('#infoJoueur2').append('<h2> A ninie de jouer</h2>')
            $('#infoJoueur2').append('<h3> Il vous reste ' + resteDeplacement + ' deplacement</h3>')
            $('#infosNinie').css('background-color', 'mediumspringgreen')
            if (resteDeplacement === 0) {
                joueurChoisi=wawa;
                $('#infosNinie').css('background-color', 'white')
                $('#infoJoueur2').empty()
                $('#infoJoueur1').append('<h2> A wawa de jouer</h2>')
                $('#infoJoueur1').append('<h3> Il vous reste 3 deplacement</h3>')
                $('#infosWawa').css('background-color', 'mediumspringgreen')
            }
        }
    }
});    





 // Gestion du changement manuel du tour
 $('#boutonChangerPerso').click(function(){
     console.log(joueurChoisi)
    if (joueurChoisi === wawa) {
        a=3;
        b=0;
        $('#infoJoueur1').empty()
        $('#infoJoueur2').empty()
        joueurChoisi=ninie;
        $('#infosNinie').css('background-color', 'mediumspringgreen');
        $('#infosWawa').css('background-color', 'white');
        $('#infoJoueur2').append('<h2> A ninie de jouer</h2>')
        $('#infoJoueur2').append('<h3> Il vous reste 3 deplacement</h3>')
        
    } else if (joueurChoisi === ninie) {
        a=0;
        b=0;
        $('#infoJoueur2').empty()
        $('#infoJoueur1').empty()
        joueurChoisi=wawa;
        $('#infosWawa').css('background-color', 'mediumspringgreen');
        $('#infosNinie').css('background-color', 'white')
        $('#infoJoueur1').append('<h2> A wawa de jouer</h2>')
        $('#infoJoueur1').append('<h3> Il vous reste 3 deplacement</h3>')
    }
    console.log(joueurChoisi)
    console.log(a)
    
});