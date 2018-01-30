console.info("Downloaded started...");

let width = 960;
let height = 500;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

let y = d3.scale.linear()
        .range([height, 0]);

let chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height)
    

d3.tsv("http://localhost:3100/data/alphabet.tsv", type, function(error, duto){
    console.info("Downloaded!");
    console.info(duto);

    x.domain(duto.map(function(d) { return d.letter; }));
    let val = d3.max(duto, function(d) { return d.frequency; });
    console.info(val);
    y.domain([0,val])

    let bar = chart.selectAll("g")
                    .data(duto)
                    .enter().append("g")
                    .attr("transform", function(d, i) { 
                        return "translate("+ x(d.letter) + ",0)"; });

    bar.append("rect")
        .attr("y", function(d){ return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); } )
        .attr("width", x.rangeBand());
    
        
    bar.append("text")
        .attr("x", x.rangeBand() / 2 )
        .attr("y", function(d){ return y(d.frequency) + 3; })
        .attr("dy", ".75em")
        .text(function(d) { return d.letter; });
});

console.info("Downloading...");

function type(d) {
    d.frequency = +d.frequency; // coerce to number
    return d;
}
