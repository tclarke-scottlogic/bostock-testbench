let justice_league = addTeam("Justice League");
let bat_family = addTeam("Bat Family");
let teen_titans = addTeam("Teen Titans");

let batman = addHero("Batman");
let superman = addHero("Superman");
let ww = addHero("Wonder Woman");
let jonn = addHero("Martain Manhunter");
let gl = addHero("Green Lantern");
justice_league.add(superman);
justice_league.add(batman);
justice_league.add(ww);
justice_league.add(jonn);
justice_league.add(gl);

let robin = addHero("Robin (Tim Drake)");
let raven = addHero("Raven");
let cyborg = addHero("Cyborg");
let starfire = addHero("Starfire");
let beast_boy = addHero("Beast Boy");

teen_titans.add(robin);
teen_titans.add(raven);
teen_titans.add(cyborg);
teen_titans.add(starfire);
teen_titans.add(beast_boy);

let nightwing = addHero("Nightwing");
let damien = addHero("Robin (Damien Wayne)");

bat_family.add(batman);
bat_family.add(robin);
bat_family.add(nightwing);
bat_family.add(damien);

teen_titans.add(nightwing);

let oracle = addHero("Oracle");
let canary = addHero("Canary");
let huntress = addHero("Huntress");

bat_family.add(oracle);

let bop = addTeam("Birds of Prey");
bop.add(oracle);
bop.add(canary);
bop.add(huntress);
