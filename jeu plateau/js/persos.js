var Personnage = {
    /**
     * creation globale du personnage
     */
    init : function(nom){
        this.nom = nom;
        this.position = parseInt($('.'+ nom).attr('id'));
        this.armeEnMain;
        this.ancienneArme;
        this.sante=100;
        this.bouclier = 0;
    },
    /**
     * Ajout de l'image du joueur lors du deplacement
     */
    ajoutImageJoueur : function (){
        if (this === wawa) {
            $('#'+ this.position).append('<img class="perso1" src ="img/wawa.png">');
        } else if (this === ninie) {
            $('#'+ this.position).append('<img class="perso2" src ="img/ninie.png">');
        }
    },
    /**
     *  depot sur la map de l'ancienne arme lors du deplacement lorsque que l'on rencontre une nouvelle arme sur la map
     */
    depotArme : function () {
    
        if ($('#'+ (this.position)).hasClass('armes')) {
            if (this.ancienneArme === epee) {
                $('#'+ this.position ).append('<img class="arme" src ="img/epee.png">');
                $('#'+ this.position).addClass('epee').addClass('armes');
                epee.position=this.position;
                this.ancienneArme = this.armeEnMain;
            } else if (this.ancienneArme === hache) {
                $('#'+ this.position).append('<img class="arme" src ="img/hache.png">');
                $('#'+ this.position).addClass('hache').addClass('armes');
                hache.position=this.position;
                this.ancienneArme = this.armeEnMain;
            } else if (this.ancienneArme === machette) {
                $('#'+ this.position).append('<img class="arme" src ="img/machette.png">');
                $('#'+ this.position).addClass('machette').addClass('armes');
                machette.position=this.position;
                this.ancienneArme = this.armeEnMain;
            } else if (this.ancienneArme === couteau) {
                $('#'+ this.position).append('<img class="arme" src ="img/couteau.png">');
                $('#'+ this.position).addClass('couteau').addClass('armes');
                couteau.position=this.position;
                this.ancienneArme = this.armeEnMain;
            } else if (this.ancienneArme === tournevisWawa) {
                $('#'+ this.position).append('<img class="arme" src ="img/tournevis.jpg">');
                $('#'+ this.position).addClass('tournevisWawa').addClass('armes');
                tournevisWawa.position=this.position;
                this.ancienneArme = this.armeEnMain;
            } else if (this.ancienneArme === tournevisNinie) {
                $('#'+ this.position).append('<img class="arme" src ="img/tournevis.jpg">');
                $('#'+ this.position).addClass('tournevisNinie').addClass('armes');
                tournevisNinie.position=this.position;
                this.ancienneArme = this.armeEnMain;
            }
        }
    },
    /**
     * Ajout de l'arme actuelle dans la main et mise a jour de l'arme dans les infos du joueur lors du deplacement
     */
    nouvelleArme : function() {

        if (this.armeEnMain === epee) {
            $('#'+ this.position).append('<img class="armePetite" src ="img/petite_epee.png">');
            $('#' +this.nom+ 'Arme').html('epee');
            $('#' +this.nom+ 'Degats').html(epee.degats);
        } else if (this.armeEnMain === hache) {
            $('#'+ this.position).append('<img class="armePetite" src ="img/petite_hache.png">');
            $('#' + this.nom+ 'Arme').html('hache');
            $('#' + this.nom+ 'Degats').html(hache.degats);
        } else if (this.armeEnMain === machette) {
            $('#'+ this.position).append('<img class="armePetite" src ="img/petite_machette.png">');
            $('#' +this.nom+ 'Arme').html('machette');
            $('#' +this.nom+ 'Degats').html(machette.degats);
        } else if (this.armeEnMain === couteau) {
            $('#'+ this.position).append('<img class="armePetite" src ="img/petit_couteau.png">');
            $('#' +this.nom+ 'Arme').html('couteau');
            $('#' +this.nom+ 'Degats').html(couteau.degats);
        } else if (this.armeEnMain === tournevisWawa) {
            $('#'+ this.position).append('<img class="armePetite" src ="img/petit_tournevis.jpg">');
            $('#' +this.nom+ 'Arme').html('tournevis');
            $('#' +this.nom+ 'Degats').html(tournevisWawa.degats);
        } else if (this.armeEnMain === tournevisNinie) {
            $('#'+ this.position).append('<img class="armePetite" src ="img/petit_tournevis.jpg">');
            $('#' +this.nom+ 'Arme').html('tournevis');
            $('#' +this.nom+ 'Degats').html(tournevisNinie.degats);
        }
    },
    /**
    * Gestion du changement d'arme lorsque l'on rencontre une arme sur la map lors du deplacement.
    */
    changementArme :function() {
        if (this.position === epee.position) {
            //indication de l'arme du joueur
            this.armeEnMain = epee;
            // On raz la position de l'epee
            epee.position='';
            // on efface le contenu de la case du joueur et on enleve la classe epee de cette case
            $('#'+ this.position).empty().removeClass('epee');
        }
        if (this.position === couteau.position){
            couteau.position=''
            this.armeEnMain = couteau;
            $('#'+ this.position).empty().removeClass('couteau');
        }
        if (this.position === hache.position) {
            hache.position = ''
            $('#'+ this.position).empty().removeClass('hache');
            this.armeEnMain = hache;
        }
        if (this.position === machette.position) {
            machette.position = ''
            this.armeEnMain = machette;
            $('#'+ this.position).empty().removeClass('machette');
        }
        if (this.position === tournevisWawa.position) {
            tournevisWawa.position = ''
            this.armeEnMain = tournevisWawa;
            $('#'+ this.position).empty().removeClass('tournevisWawa');
        } 
        if (this.position === tournevisNinie.position) {
            tournevisNinie.position = ''
            this.armeEnMain = tournevisNinie;
            $('#'+ this.position).empty().removeClass('tournevisNinie');
        }
    
    },
    /**
     * sert a gerer le deplacement des personnages selon l'appui sur le clavier
     * @param deplacement - nb de case que le joueur doit se deplacer.
     */
    mouvement : function (deplacement){
    
        positionVoulu = parseInt(this.position) + deplacement;
        if ($('#'+ positionVoulu).hasClass('interdit')) {
        } else{
            $('#'+ this.position).empty().removeClass('interdit'); // --> enleve les noeuds enfants de la position du joueur et la classe 'interdit'
            this.depotArme();
            this.position = this.position + deplacement;
            this.changementArme();
            this.ajoutImageJoueur();
            this.nouvelleArme();
            
        }
    }
}

