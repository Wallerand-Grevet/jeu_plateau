
$combat.hide();
$infosWawaCombatDiv.hide();
$infosNinieCombatDiv.hide();
/**
 * Gestion de la partie combat du jeu
 */
function combat() {
    // Declenchement du combat lors de la rencontre des joueurs sur une case adjacentes
    if ((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX)) {
        // On ne declenche pas le combat lorsque ninie ou wawa sont sur la premiere colonne ou la derniere colonne (derniere case ligne et premiere case ligne suivante ont des numeros qui se suivent )
        if (  !((ninie.position%10 === 0) && (wawa.position%10 === 1)) && !((wawa.position%10 === 0) &&(ninie.position%10 === 1))) {
           
            $infosWawaElement.remove();
            $infosNinieElement.remove();
            $infosCommandeElement.remove();
            $boutonPlateauElement.remove();
            $infosWawaCombatDiv.fadeIn("slow");
            appendP($infosWawaCombatDiv, infosWawaCombat)
            prependH2($infosWawaCombatDiv, wawaJoueContenu);
            $infosWawaCombatDiv.css('background-color','#94bcfc');
            appendP($infosWawaCombatDiv, armesDetenu + wawa.armeEnMain.nom);
            appendP($infosWawaCombatDiv, armesDegats + wawa.armeEnMain.degats );
            appendP($infosWawaCombatDiv,bouclierWawa);
            $infosNinieCombatDiv.fadeIn("slow");
            appendP($infosNinieCombatDiv, infosNinieCombat)
            appendP($infosNinieCombatDiv, armesDetenu + ninie.armeEnMain.nom);
            appendP($infosNinieCombatDiv, armesDegats + ninie.armeEnMain.degats);
            appendP($infosNinieCombatDiv,bouclierNinie);
            $combat.fadeIn("slow");
            appendA($boutonCombat,"boutonAttaquer","Attaquer");
            appendA($boutonCombat,"boutonDefendre","Defendre");
            // On designe wawa en 1er combattant 
            var choixCombattant = 1 ; 
            var combattant;
            var prendDegat;
            var $boutonAttaquer = $('#boutonAttaquer');
            var $boutonDefendre = $('#boutonDefendre');

            // gestion du click sur bouton attaquer
            $boutonAttaquer.click(function () {
                if (wawa.sante > 0 && ninie.sante > 0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie;
                        prendDegat = wawa;
                        $('#infosNinieCombat h2').remove();
                        prependH2($infosWawaCombatDiv, wawaJoueContenu);
                        $infosNinieCombatDiv.css('background-color', 'white');
                        $infosWawaCombatDiv.css('background-color', '#94bcfc');
                    } else {
                        combattant = wawa;
                        prendDegat = ninie;
                        $('#infosWawaCombat h2').remove();
                        prependH2($infosNinieCombatDiv,ninieJoueContenu)
                        $infosNinieCombatDiv.css('background-color', '#94bcfc');
                        $infosWawaCombatDiv.css('background-color', 'white');

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
                    $combat.hide()
                    $('#' + prendDegat.nom + 'Sante').html(prendDegat.sante);
                    if (wawa.sante <= 0) {
                        $ensemble.empty();
                        appendP($ensemble,imageNinieWin);
                        $ensemble.css('display', 'initial');
                        appendP($ensemble,boutonRejouer);
                        $('#bouton').remove();
                    } else if (ninie.sante <= 0) {
                        $ensemble.empty();
                        appendP($ensemble,imageWawaWin);
                        $ensemble.css('display', 'initial');
                        $('#bouton').remove();
                        appendP($ensemble,boutonRejouer);
                    }
                }
            });
            // ajout d'un bouclier lors de l'appuie du bouton defendre
            $boutonDefendre.click(function () {
                if (wawa.sante > 0 && ninie.sante > 0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie;
                    } else {
                        combattant = wawa;
                    }
                    if (combattant === ninie) {
                        ninie.bouclier = wawa.armeEnMain.degats / 2;
                        $('#infosNinieCombat h2').remove();
                        prependH2($infosWawaCombatDiv, wawaJoueContenu);
                        $infosNinieCombatDiv.css('background-color', 'white');
                        $infosWawaCombatDiv.css('background-color', '#94bcfc');
                        $('#bouclierNinie').html(ninie.bouclier);

                    } else {
                        wawa.bouclier = ninie.armeEnMain.degats / 2;
                        $('#infosWawaCombat h2').remove();
                        prependH2($infosNinieCombatDiv, ninieJoueContenu);
                        $infosNinieCombatDiv.css('background-color', '#94bcfc');
                        $infosWawaCombatDiv.css('background-color', 'white');
                        $('#bouclierWawa').html(wawa.bouclier);
                    }
                    choixCombattant++;
                }
            });
        }
    }
}
