var debut = '<h1>Le Combat commence </h1>'
$('#combat').append(debut)
$('#combat').hide()
function combat() {
    if ((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX)) {
        $('#infos').remove()
        $('#combat').fadeIn("slow");
        
        // tant que 
        $('#combat').append('<p> wawa a : <span id="wawaSante">' + wawa.sante + '</span> PV.<br><p>' );
        $('#combat').append('<p> ninie a : <span id="ninieSante">' + ninie.sante + '</span> PV.<br><p>');
        $('#bouton').append('<input type="button" id="boutonAttaquer" value="Attaque">');
        $('#bouton').append('<input type="button" id="boutonDefendre" value="Défense">');
        var choixCombattant = 1 ; 
        var combattant;
            $('#boutonAttaquer').click(function () {
                if (wawa.sante>0 && ninie.sante>0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie
                    } else {
                        combattant = wawa
                    }
                    if (combattant === ninie) {
                        wawa.sante = wawa.sante - ninie.armeEnMain.degats + wawa.bouclier
                    } else {
                        ninie.sante = ninie.sante - wawa.armeEnMain.degats + ninie.bouclier
                    }
                    choixCombattant++
                    ninie.bouclier = 0;
                    wawa.bouclier =0;
                    $('#combat').empty()
                    $('#combat').append('<p> wawa a : <span id="wawaSante">' + wawa.sante + '</span> PV.<br><p>' );
                    $('#combat').append('<p> ninie a : <span id="ninieSante">' + ninie.sante + '</span> PV.<br><p>');
                    
                }
            })
            $('#boutonDefendre').click(function () {
                if (wawa.sante>0 && ninie.sante>0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie
                    } else {
                        combattant = wawa
                    }
                    if (combattant === ninie) {
                        ninie.bouclier = wawa.armeEnMain.degats / 2
                    } else {
                        wawa.bouclier = ninie.armeEnMain.degats / 2
                    }
                    choixCombattant++
                }
            })

        
        
        
    }
}
