let qtree;

function setup() {
  createCanvas(400, 400);
  background(255);
  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuadTree(boundary, 4);

  console.log(qtree);
  
  for (let i = 0; i < 30; i++) {
    let x = randomGaussian(width / 2, width / 8);
    let y = randomGaussian(height / 2, height / 8);
    let p = new Point(x, y);
    qtree.insert(p);
  }

//   background(0);
//   qtree.show();
}

function draw(){
    background(0);
    qtree.show();

    stroke(0,255,0);
    rectMode(CENTER);
    let range = new Rectangle(mouseX,mouseY,50,50)
    rect(range.x,range.y,range.w*2,range.h*2);
    let points=[];
    qtree.query(range,points);

    for(let p of points){
        strokeWeight(4);
        point(p.x,p.y);
    }

    if (mouseIsPressed){
        for(let i=0; i<1;i++){
            let m=new Point(mouseX+random(-5,5), mouseY+random(-5,5));
            qtree.insert(m);
        }
    }
    // background(0);
    // qtree.show();
}

