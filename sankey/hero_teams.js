let nil = Object.freeze({});

let teams = {};

let makeTeam = function(){
    let ts = [];

    return {
        add: function(val){
            ts.push(val);
        },
        get: function(){
            return ts;
        }
    }
};

function addHero(hero_name){
    return { "name": hero_name };
}

function addVillain(hero_name){
    return addHero(hero_name);
}

function addTeam(team_name){
    let t = makeTeam();
    teams[team_name] = t;
    return t;
}

function addToTeam(hero, team){
    if(!teams[team]){
        addTeam(team);
    }
    teams[team][hero] = nil;
}

function nrg(){
    let output = {
        "nodes": [
        ],
        "links": [
        ]
    };

    let node_map = {

    };

    for(let t in teams){
        let members = teams[t].get();

        node_map[t] = output.nodes.length;
        output.nodes.push({"name": t});
        for(let m in members){
            let hero_name = members[m].name;
            if(node_map[hero_name] === undefined){
                node_map[hero_name] = output.nodes.length;
                output.nodes.push({"name": hero_name});
            }
            console.info(members[m]);
            let value = {source: node_map[hero_name], target: node_map[t], value: 1};
            output.links.push(value);
        }
    }
    console.info("output",output);
    return output;
}