function drawBackground() {

    let canvas = document.querySelector('#background');
    let c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    class Circle {
        constructor(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.opacity = Math.random();
            this.time = 1;
        }

        draw() {
            c.beginPath();
            c.globalAlpha = this.opacity;
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = 'white';
            c.fill();
        }

        update() {
            if (this.x + this.radius > canvas.width || this.x + this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius > canvas.height || this.y + this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.time += 1;


            this.draw();
        }
    }

    let circleArray = []
    for (i = 0; i < 75; i++) {
        let radius = Math.random() * 7;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = 0.3 * (Math.random() - 0.5);
        let dy = 0.3 * (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {

        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height)

        for (i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }

    }

    animate()
}
drawBackground();