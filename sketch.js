

var ball= {
  x:20,
  y:30,
  r:30,
  x_speed:0,
  y_speed:0,
  color:["blue","red","green","purple"]
}
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  fill(ball.color[0])
  circle(ball.x,ball.y,ball.r)
}