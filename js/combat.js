
$('#combat').hide()
function combat() {
    if ((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX)) {
        $('#infosWawa').remove();
        $('#infosNinie').remove();
        $('#commande').remove();
        $('#boutonChangerPerso').remove();
        $('#ensemble').prepend('<div id="infosWawaCombat"><img src="img/wawacolere.png" alt="wawa>"><p> wawa a : <span id="wawaSante"> 100 </span> PV.</p></div>');
        $('#infosWawaCombat').css('background-color','#94bcfc')
        $('#ensemble').append('<div id="infosNinieCombat"><img src="img/niniecolere.png" alt="wawa>"><p> wawa a : <span id="ninieSante"> 100 </span> PV.</p></div>');
        $('#combat').fadeIn("slow");
        $('#bouton').append('<a href="#" id="boutonAttaquer" >Attaquer</a>');
        $('#bouton').append('<a href="#" id="boutonDefendre" >Defendre</a>');
        var choixCombattant = 1 ; 
        var combattant;
        var prendDegat;
            $('#boutonAttaquer').click(function () {
                if (wawa.sante>0 && ninie.sante>0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie
                        prendDegat = wawa
                        $('#infosNinieCombat').css('background-color','white')
                        $('#infosWawaCombat').css('background-color','#94bcfc')
                    } else {
                        combattant = wawa
                        prendDegat = ninie
                        $('#infosNinieCombat').css('background-color','#94bcfc')
                        $('#infosWawaCombat').css('background-color','white')
                    }
                    if (combattant === ninie) {
                        wawa.sante = wawa.sante - ninie.armeEnMain.degats + wawa.bouclier
                    } else {
                        ninie.sante = ninie.sante - wawa.armeEnMain.degats + ninie.bouclier
                    }
                    choixCombattant++
                    ninie.bouclier = 0;
                    wawa.bouclier =0;
                    $('#combat').hide()
                    $('#' +prendDegat.nom+ 'Sante').html(prendDegat.sante)
                    console.log(combattant.sante)
                }
            })
            $('#boutonDefendre').click(function () {
                if (wawa.sante>0 && ninie.sante>0) {
                    if (choixCombattant % 2 === 0) {
                        combattant = ninie
                        $('#infosNinieCombat').css('background-color','#94bcfc')
                        $('#infosWawaCombat').css('background-color','red')
                    } else {
                        combattant = wawa
                        $('#infosNinieCombat').css('background-color','#94bcfc')
                        $('#infosWawaCombat').css('background-color','white')
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
