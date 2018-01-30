console.info("Downloaded started...");

var margin = { top: 20, bottom: 30, left: 40, right: 30 },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

let y = d3.scale.linear()
    .range([height, 0]);

let x_axis = d3.svg.axis()
    .scale(x)
    .orient("bottom");


var y_axis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

let chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("http://localhost:3100/data/alphabet.tsv", type, function (error, duto) {
    console.info("Downloaded!");
    console.info(duto);

    x.domain(duto.map(function (d) { return d.letter; }));
    let val = d3.max(duto, function (d) { return d.frequency; });
    console.info(val);
    y.domain([0, val])

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(x_axis);

    chart.append("g")
        .attr("class", "y axis")
        .call(y_axis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

    chart.selectAll(".bar")
        .data(duto)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.letter); })
        .attr("y", function (d) { return y(d.frequency); })
        .attr("height", function (d) { return height - y(d.frequency); })
        .attr("width", x.rangeBand());

});

console.info("Downloading...");

function type(d) {
    d.frequency = +d.frequency; // coerce to number
    return d;
}
