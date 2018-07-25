
// variable general
var $ensemble = $('#ensemble');
var $combat = $('#combat');
var $boutonCombat = $('#boutonCombat');
var $plateau = $('#plateau');
var $infosWawaElement = $('#infosWawa');
var $infosWawaCombatDiv = $('#infosWawaCombat');
var wawaJoueContenu = 'A wawa de jouer';
var $infosNinieElement = $('#infosNinie');
var $infosNinieCombatDiv = $('#infosNinieCombat');
var ninieJoueContenu = 'A ninie de jouer';
var $infosCommandeElement =$('#commande');
var $boutonPlateauElement = $('#boutonPlateau');
var infosWawaCombat = '<img src="img/wawacolere.png" alt="wawa>"><p> wawa a : <span id="wawaSante"> 100 </span> PV.</p>';
var infosNinieCombat = '<img src="img/niniecolere.png" alt="nine>"><p> ninie a : <span id="ninieSante"> 100 </span> PV.</p>';
var armesDetenu = 'armes detenu : ';
var armesDegats = 'degats arme :  ';
var bouclierWawa = 'bouclier : <span id="bouclierWawa">0</span>';
var bouclierNinie = 'bouclier : <span id="bouclierNinie">0</span>';
var boutonRejouer = '<div id="boutonRejouer"><a href="index.html" id="rejouer" > Nouvelle partie</a></div>';
var $infoJoueur1 = $('#infoJoueur1');
var $infoJoueur2 = $('#infoJoueur2');

//fonction general
function appendP(element, contenu ) {
    var ajout = element.append('<p>' +  contenu  + '</p>');
    return ajout;
}

function prependH2(element, contenu) {
    var ajout = element.prepend('<h2>' +  contenu  + '</h2>');
    return ajout;
}

function appendA(element,id, contenu ) {
    var ajout = element.append('<a href="#" id=' + id +' >' +  contenu  + '</a>');
    return ajout;
}

function appendH2(element, contenu) {
    var ajout = element.append('<h2>' +  contenu  + '</h2>');
    return ajout;
}

function appendH3(element, contenu) {
    var ajout = element.append('<h3>' +  contenu  + '</h3>');
    return ajout;
}