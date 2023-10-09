(function() {
    const canvas = document.querySelector('#snowCanvas');
    const ctx = canvas.getContext('2d');

    const randomBetween = (min, max) => {
        return Math.random() * (max - min + 1) + min;
    }

    let total;
    let snowflakes = [];
    

    class Snowflake {
        constructor(x, y, velocity) {
            this.x = x;
            this.y = y;
            this.velocity = velocity;
            this.radius = randomBetween(2, 4.5); // 랜덤한 반지름 설정
            this.opacity = randomBetween(0.2, 0.5);
        }

        draw() {
            const { x, y, radius, opacity } = this;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230, 244, 255, ${ opacity})`;
            ctx.fill();
        }
        animate() {
            if (this.y > innerHeight) {
                this.x = randomBetween(0, innerWidth)
                this.y = -100
            }
            this.x += this.velocity.x
            this.y += this.velocity.y
    
            this.draw()
        }
    }

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        total = Math.floor(canvas.width * canvas.height / 3500);
        snowflakes = [];

        for (let i = 0; i < total; i++) {
            const x = randomBetween(0, canvas.width);
            const y = randomBetween(0, canvas.height);
            const velocity = {
                x: randomBetween(0, 0),
                y: randomBetween(0.8, 1.5)
            };
            snowflakes.push(new Snowflake(x, y, velocity));
        }
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach(snowflake => snowflake.animate());

        window.requestAnimationFrame(render);
    }

    window.addEventListener('resize', () => init());

    init();
    render();
})();