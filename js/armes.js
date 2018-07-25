
var Arme = {
    init : function(nom,degats){
        this.nom = nom;
        this.degats = degats;
        this.position = parseInt($('.'+ nom).attr('id'));
        }
}



  