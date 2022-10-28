let dog_stats;
let clickedX, clickedY, pos;

function preload() {
  dog_stats = loadTable("stats.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  pos = new Positioning(width, height);

  // create a sorted list of node ids
  // nodes_sorted = Object.keys(nodes).sort((a, b) => nodes[b].weight - nodes[a].weight);
}

function mouseWheel(event) {
  pos.zoom(event.delta, mouseX, mouseY);
  // loop();
}

function mousePressed() {
  clickedX = mouseX;
  clickedY = mouseY;
}

function mouseDragged() {
  pos.drag(mouseX - clickedX, mouseY - clickedY);
  clickedX = mouseX;
  clickedY = mouseY;
  // loop();
}

// function node_size(weight) {
//   let max_size = 50;
//   let rel_weight = weight / largest_node_weight;
//   let raw_size = rel_weight * (pos.scale * 2) ** scale_size_exponent * scale_size_factor;
//   return (max_size * Math.atan(raw_size)) / (Math.PI / 2);
// }


function draw() {
  background(0);
  // noLoop();

  // draw nodes
  // noStroke();
  // for (const [n1, n1_alpha] of nodes_to_draw) {
  //   let node = nodes[n1];
  //   let [x, y] = pos.plane_to_pix(node.pos);
  //   textSize(node_size(node.weight));
  //   fill(255, n1_alpha);
  //   text(node.name, x, y);
  // }
}
