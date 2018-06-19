var debut = '<h1>Le Combat commence </h1>'
$('#combat').append(debut)
$('#combat').hide()
function combat() {
    if ((wawa.position) === (ninie.position - 1) || (wawa.position) === (ninie.position +1) || (wawa.position) === (ninie.position + map.nbCaseX) || (wawa.position) === (ninie.position - map.nbCaseX)) {
        $('#combat').fadeIn("slow");
        $('#combat').append('<p> wawa a : <span id="wawaSante">' + wawa.sante + '</span> PV.<br><p>' );
        $('#combat').append('<p> ninie a : <span id="ninieSante">' + ninie.sante + '</span> PV.<br><p>');
        $('#combat').append('<input type="button" id="boutonAttaquer" value="Attaque">');
        $('#combat').append('<input type="button" id="boutonDefendre" value="Défense">');
       

    }
}
