var Personnage = {
    init : function(nom){
        this.nom = nom;
        this.position = $('.'+ nom).attr('id');
        this.armeEnMain = 'tournevis'
    }
}

