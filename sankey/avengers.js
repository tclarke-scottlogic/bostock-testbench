let avengers = addTeam("Avengers");
let invaders = addTeam("Invaders");
let masters = addTeam("Masters of Evil");
let ff = addTeam("Fantastic Four");
let new_mutants = addTeam("New Mutants");
let young_avengers = addTeam("Young Avengers");
let us_avengers = addTeam("US Avengers");
let thunderbolts = addTeam("Thunderbolts");

let steve = addHero("Steve Rodgers");
avengers.add(steve);
invaders.add(steve);

let namor = addHero("Namor");
let hammond = addHero("Human Torch (Hammond)");
invaders.add(namor);
invaders.add(hammond);

let reed = addHero("Reed Richards");
let sue = addHero("Invisible Woman");
let ben = addHero("Thing");
let johnny = addHero("Human Torch (Storm)");
let jen = addHero("She-Hulk");
ff.add(reed);
ff.add(sue);
ff.add(johnny);
ff.add(ben);
ff.add(jen);

let clint = addHero("Hawkeye (Clint Barton)");
let moonstone = addHero("Moonstone");
let songbird = addHero("Songbird");
let jolt = addHero("Jolt");
let mach_1 = addHero("Mach 1");
avengers.add(clint);
thunderbolts.add(clint);
thunderbolts.add(moonstone);
thunderbolts.add(songbird);
thunderbolts.add(jolt);
thunderbolts.add(mach_1);

masters.add(moonstone);
masters.add(songbird);
masters.add(jolt);
masters.add(mach_1);


let sunspot = addHero("Sunspot");
let cannonball = addHero("Cannonball");

new_mutants.add(sunspot);
new_mutants.add(cannonball);

let squirrel_girl = addHero("Squirrel Girl");
let toni = addHero("Rescue (Toni Ho)");
let pod = addHero("POD");
let rulk = addHero("Red Hulk (Maverick)");
let wiccan = addHero("Wiccan");
let hulkling = addHero("Hulkling");

us_avengers.add(sunspot);
us_avengers.add(cannonball);
us_avengers.add(squirrel_girl);
us_avengers.add(toni);
us_avengers.add(pod);
us_avengers.add(rulk);
us_avengers.add(wiccan);
us_avengers.add(hulkling);

let kang = addVillain("Kang")

let kate = addHero("Hawkeye (Kate Bishop)");
let iron_lad = kang;
let speed = addHero("Speed");
let patriot = addHero("Patriot");

young_avengers.add(wiccan);
young_avengers.add(hulkling);
young_avengers.add(kate);
young_avengers.add(iron_lad);
young_avengers.add(speed);
young_avengers.add(patriot);

let nohvarr = addHero("Marvel Boy");
let ms_america = addHero("America Chavez");
let prodigy = addHero("Prodigy");

young_avengers.add(nohvarr);
young_avengers.add(ms_america);
young_avengers.add(prodigy);