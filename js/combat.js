
$('#combat').hide()
function combat() {
    if ((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX)) {
        $('#infosWawa').remove();
        $('#infosNinie').remove();
        $('#commande').remove();
        $('#boutonChangerPerso').remove();
        $('#ensemble').prepend('<div id="infosWawaCombat"><img src="img/wawacolere.png" alt="wawa>"><p> wawa a : <span id="wawaSante"> 100 </span> PV.</p></div>');
        $('#infosWawaCombat').css('background-color','#94bcfc');
        $('#infosWawaCombat').append('<p> armes detenu : ' + wawa.armeEnMain.nom + '</p>')
        $('#infosWawaCombat').append('<p> degats arme :  ' + wawa.armeEnMain.degats + '</p>')
        $('#infosWawaCombat').append('<p> bouclier : <span id="bouclierWawa">' + wawa.bouclier + '</span></p>')
        $('#ensemble').append('<div id="infosNinieCombat"><img src="img/niniecolere.png" alt="wawa>"><p> wawa a : <span id="ninieSante"> 100 </span> PV.</p></div>');
        $('#infosNinieCombat').append('<p> armes detenu : ' + ninie.armeEnMain.nom + '</p>')
        $('#infosNinieCombat').append('<p> degats arme : ' + ninie.armeEnMain.degats + '</p>')
        
        $('#infosNinieCombat').append('<p> bouclier : <span id="bouclierNinie">' + ninie.bouclier + '</span></p>')
        $('#combat').fadeIn("slow");
        $('#bouton').append('<a href="#" id="boutonAttaquer" >Attaquer</a>');
        $('#bouton').append('<a href="#" id="boutonDefendre" >Defendre</a>');
        var choixCombattant = 1 ; 
        var combattant;
        var prendDegat;
            $('#boutonAttaquer').click(function () {
                if (wawa.sante>0 && ninie.sante>0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie;
                        prendDegat = wawa;
                        $('#infosNinieCombat').css('background-color','white');
                        $('#infosWawaCombat').css('background-color','#94bcfc');
                    } else {
                        combattant = wawa;
                        prendDegat = ninie;
                        $('#infosNinieCombat').css('background-color','#94bcfc');
                        $('#infosWawaCombat').css('background-color','white');
                    }
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
                    $('#' +prendDegat.nom+ 'Sante').html(prendDegat.sante)
                    console.log(combattant.sante)
                }
            })
            $('#boutonDefendre').click(function () {
                if (wawa.sante>0 && ninie.sante>0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie;
                        
                    } else {
                        combattant = wawa;
                        
                    }
                    if (combattant === ninie) {
                        ninie.bouclier = wawa.armeEnMain.degats / 2;
                        $('#infosNinieCombat').css('background-color','white');
                        $('#infosWawaCombat').css('background-color','#94bcfc');
                        $('#bouclierNinie').html(ninie.bouclier);

                    } else {
                        wawa.bouclier = ninie.armeEnMain.degats / 2;
                        $('#infosNinieCombat').css('background-color','#94bcfc');
                        $('#infosWawaCombat').css('background-color','white');
                        $('#bouclierWawa').html(wawa.bouclier);
                    }
                    choixCombattant++
                }
            })

        
        
        
    }
}
