var sphereArr = [];
var spCount = 60;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    document.body.style.backgroundColor = '#00ddff';
    ambientLight(40);
    directionalLight(255, 255, 255, 255, -1, 1, -1);
    pointLight(255, 255, 255, 255, -200, -500, 200);
    noStroke();
    for (var i = 0; i < spCount; i++) {
        sphereArr[i] = new Spr();
    }
}

function draw() {
    background(185,200,213);
    orbitControl();
    sphereArr.forEach(allSp => { allSp.updateMe(); });
    sphereArr.sort(zOrder);
    sphereArr.forEach(allSp => { allSp.drawMe(); });
}

function zOrder(obj1, obj2) {
    return obj1.z - obj2.z;
}


class Spr {
    constructor() {
        this.x = random(-100, 100);
        this.y = random(-100, 100);
        this.z = random(-1000, 100);
        this.r = 50;
        this.xmov = random(-5, 5);
        this.ymov = random(-5, 5);
        this.zmov = random(-5, 5);
        this.trans = floor(random(0, 2));
    }
    updateMe() {
        this.x += this.xmov;
        this.y += this.ymov;
        this.z += this.zmov;
        if (this.x < -300 || this.x > 300) { this.xmov *= -1; }
        if (this.y < -300 || this.y > 300) { this.ymov *= -1; }
        if (this.z < -2000 || this.z > 300) { this.zmov *= -1; }
    }
    drawMe() {
        push();
        translate(this.x, this.y, this.z);
        if (this.trans == 0) {
            specularMaterial(mouseX, 170, mouseY, 157);
        } else {
            specularMaterial(20, 226, 220, 80);
        }
        sphere(this.r, 200, 200);
        pop();
    }
}