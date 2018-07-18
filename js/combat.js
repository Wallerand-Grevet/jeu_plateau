
$('#combat').hide()
/**
 * Gestion de la partie combat du jeu
 */
function combat() {
    // Declenchement du combat lors de la rencontre des joueurs sur une case adjacentes
    if ((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX)) {
        // On ne declenche pas le combat lorsque ninie ou wawa sont sur la premiere colonne ou la derniere colonne (derniere case ligne et premiere case ligne suivante ont des numeros qui se suivent )
        if (  !((ninie.position%10 === 0) && (wawa.position%10 === 1)) && !((wawa.position%10 === 0) &&(ninie.position%10 === 1))) {
            $('#infosWawa').remove();
            $('#infosNinie').remove();
            $('#commande').remove();
            $('#boutonPlateau').remove();
            $('#ensemble').prepend('<div id="infosWawaCombat"><img src="img/wawacolere.png" alt="wawa>"><p> wawa a : <span id="wawaSante"> 100 </span> PV.</p></div>');
            $('#infosWawaCombat').prepend('<h2> A wawa de jouer<h2>');
            $('#infosWawaCombat').css('background-color','#94bcfc');
            $('#infosWawaCombat').append('<p> armes detenu : ' + wawa.armeEnMain.nom + '</p>');
            $('#infosWawaCombat').append('<p> degats arme :  ' + wawa.armeEnMain.degats + '</p>');
            $('#infosWawaCombat').append('<p> bouclier : <span id="bouclierWawa">' + wawa.bouclier + '</span></p>');
            $('#ensemble').append('<div id="infosNinieCombat"><img src="img/niniecolere.png" alt="nine>"><p> ninie a : <span id="ninieSante"> 100 </span> PV.</p></div>');
            $('#infosNinieCombat').append('<p> armes detenu : ' + ninie.armeEnMain.nom + '</p>');
            $('#infosNinieCombat').append('<p> degats arme : ' + ninie.armeEnMain.degats + '</p>');
            $('#infosNinieCombat').append('<p> bouclier : <span id="bouclierNinie">' + ninie.bouclier + '</span></p>');
            $('#combat').fadeIn("slow");
            $('#boutonCombat').append('<a href="#" id="boutonAttaquer" >Attaquer</a>');
            $('#boutonCombat').append('<a href="#" id="boutonDefendre" >Defendre</a>');
            // On designe wawa en 1er combattant 
            var choixCombattant = 1 ; 
            var combattant;
            var prendDegat;
            // gestion du click sur bouton attaquer
            $('#boutonAttaquer').click(function () {
                if (wawa.sante > 0 && ninie.sante > 0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie;
                        prendDegat = wawa;
                        $('#infosNinieCombat h2').remove();
                        $('#infosWawaCombat').prepend('<h2> A wawa de jouer<h2>');
                        $('#infosNinieCombat').css('background-color', 'white');
                        $('#infosWawaCombat').css('background-color', '#94bcfc');
                    } else {
                        combattant = wawa;
                        prendDegat = ninie;
                        $('#infosWawaCombat h2').remove();
                        $('#infosNinieCombat').prepend('<h2> A ninie de jouer<h2>');
                        $('#infosNinieCombat').css('background-color', '#94bcfc');
                        $('#infosWawaCombat').css('background-color', 'white');

                    }

                    // gestion du combat selon le joueur en train de joueur
                    if (combattant === ninie) {
                        wawa.sante = wawa.sante - ninie.armeEnMain.degats + wawa.bouclier;
                        wawa.bouclier = 0;
                        $('#bouclierWawa').html(wawa.bouclier);
                    } else {
                        ninie.sante = ninie.sante - wawa.armeEnMain.degats + ninie.bouclier;
                        ninie.bouclier = 0;
                        $('#bouclierNinie').html(ninie.bouclier);

                    }
                    choixCombattant++
                    $('#combat').hide()
                    $('#' + prendDegat.nom + 'Sante').html(prendDegat.sante);
                    if (wawa.sante <= 0) {
                        $('#ensemble').empty();
                        $('#ensemble').append('<img src="img/niniewin.png" id="niniewin" alt="niniewin">');
                        $('#ensemble').css('display', 'initial');
                        $('#ensemble').append('<div id="boutonRejouer"><a href="index.html" id="rejouer" > Nouvelle partie</a></div>');
                        $('#bouton').remove();
                    } else if (ninie.sante <= 0) {
                        $('#ensemble').empty();
                        $('#ensemble').append('<img src="img/wawawin.png" id="wawawin" alt="wawawin"><br>');
                        $('#ensemble').css('display', 'initial');
                        $('#bouton').remove();
                        $('#ensemble').append('<div id="boutonRejouer"><a href="index.html" id="rejouer" > Nouvelle partie</a></div>');
                    }
                }
            });
            // ajout d'un bouclier lors de l'appuie du bouton defendre
            $('#boutonDefendre').click(function () {
                if (wawa.sante > 0 && ninie.sante > 0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie;
                    } else {
                        combattant = wawa;
                    }
                    if (combattant === ninie) {
                        ninie.bouclier = wawa.armeEnMain.degats / 2;
                        $('#infosNinieCombat h2').remove();
                        $('#infosWawaCombat').prepend('<h2> A wawa de jouer<h2>');
                        $('#infosNinieCombat').css('background-color', 'white');
                        $('#infosWawaCombat').css('background-color', '#94bcfc');
                        $('#bouclierNinie').html(ninie.bouclier);

                    } else {
                        wawa.bouclier = ninie.armeEnMain.degats / 2;
                        $('#infosWawaCombat h2').remove();
                        $('#infosNinieCombat').prepend('<h2> A ninie de jouer<h2>');
                        $('#infosNinieCombat').css('background-color', '#94bcfc');
                        $('#infosWawaCombat').css('background-color', 'white');
                        $('#bouclierWawa').html(wawa.bouclier);
                    }
                    choixCombattant++;
                }
            });
        }
    }
}
