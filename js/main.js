var map = Object.create(Map);
map.init(10,10);

var tournevis = Object.create(Arme);
tournevis.init('tournevis',10);

var couteau = Object.create(Arme);
couteau.init('couteau',15);

var machette = Object.create(Arme);
machette.init('machette',20);

var hache = Object.create(Arme);
hache.init('hache',25);

var epee = Object.create(Arme);
epee.init('epee',30);

var wawa = Object.create(Personnage);
wawa.init('wawa');

var ninie = Object.create(Personnage);
ninie.init('ninie');

console.log(epee.position)