var n = 400;

function init(){
  return d3.range(2 * n).map(function(i) {
    return {
      index: i,
      color: i % 2 ? "brown" : "steelblue"
    };
  });
}

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;


let nodes;
var simulation;

function ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  nodes.forEach(drawNode);
  context.restore();
}

function tick() {
  simulation.on("tick", ticked);
}

function drawNode(d) {
  context.beginPath();
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
  context.fillStyle = d.color;
  context.fill();
}

function refresh(){
  const strength = 1/6;
  nodes = init();
  simulation = d3.forceSimulation(nodes)
    .force("y", d3.forceY())
    .force("brown", isolate(d3.forceX(-width * strength), function(d) { return d.color === "brown"; }))
    //.force("brown", isolate(d3.forceX(-(width * strength + 100)), function(d) { return d.color === "brown"; }))
    .force("steelblue", isolate(d3.forceX(width * strength), function(d) { return d.color === "steelblue"; }))
    .force("steelblue", isolate(d3.forceX(width * strength), function(d) { return d.color === "steelblue"; }))
    .force("charge", isolate(d3.forceManyBody().strength(-10), function(d) { return d.color === "steelblue"; }))
    .on("tick", ticked)
}

function isolate(force, filter) {
  var initialize = force.initialize;
  force.initialize = function() { initialize.call(force, nodes.filter(filter)); };
  return force;
}

refresh();