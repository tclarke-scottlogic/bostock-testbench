console.info("Downloaded started...");

let width = 500;
let bar_height = 20;

let x = d3.scale.linear()
        .range([0, width]);

let chart = d3.select(".chart")
    .attr("width", width)
    

d3.tsv("http://localhost:3100/data/valoos.tsv", type, function(error, duto){
    console.info("Downloaded!");

    console.info(duto);

    let val = d3.max(duto, function(d) { return d.value; });
    console.info(val);
    x.domain([0,val])
    chart.attr("height", bar_height * duto.length);

    let bar = chart.selectAll("g")
                    .data(duto)
                    .enter().append("g")
                    .attr("transform", function(d, i) { return "translate(0," + i * bar_height + ")"; });
    console.info(x);
    bar.append("rect")
        .attr("width", function(d) { 
            return x(d.value); } )
        .attr("height", bar_height - 1);
    
        
    bar.append("text")
        .attr("x", function(d) {
            console.info(d.value)
            return x(d.value) - 3; })
        .attr("y", bar_height / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });
});

console.info("Downloading...");

function type(d) {
    d.value = parseInt(d.value); // coerce to number
    return d;
}
