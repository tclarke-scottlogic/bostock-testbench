console.info("Downloaded started...");

let width = 960;
let height = 500;
let bar_height = 20;

let y = d3.scale.linear()
        .range([height, 0]);

let chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", height)
    

d3.tsv("http://localhost:3100/data/valoos.tsv", type, function(error, duto){
    console.info("Downloaded!");
    console.info(duto);

    let val = d3.max(duto, function(d) { return d.value; });
    console.info(val);
    y.domain([0,val])

    let bar_width = width / duto.length;

    let bar = chart.selectAll("g")
                    .data(duto)
                    .enter().append("g")
                    .attr("transform", function(d, i) { 
                        console.info("output:", i*bar_width);
                        return "translate("+ (i * bar_width) + ",0)"; });

    bar.append("rect")
        .attr("y", function(d){ return y(d.value); })
        .attr("height", function(d) { 
            return height - y(d.value); } )
        .attr("width", bar_width - 1);
    
        
    bar.append("text")
        .attr("x", bar_width / 2 )
        .attr("y", function(d){ return y(d.value) + 3; })
        .attr("dy", ".75em")
        .text(function(d) { return d.name; });
});

console.info("Downloading...");

function type(d) {
    d.value = parseInt(d.value); // coerce to number
    return d;
}
