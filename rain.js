// 캔버스 비, 빗소리, 애플 경고음
(function () {
  const rainCanvas = document.querySelector("#rainCanvas");
  const rainctx = rainCanvas.getContext("2d");

  const randomBetween = (min, max) => {
    return Math.random() * (max - min + 1) + min;
  };

  let total;
  let rains = [];
  let animationStarted = false;
  let rainSpeed = 9; // 비의 초기 속도
  let rainLineCount = 20; // 비의 초기 갯수

  class Rain {
    constructor(x, y, velocity) {
      this.x = x;
      this.y = y;
      this.velocity = velocity;
    }

    draw() {
      const { x, y, velocity } = this;
      rainctx.beginPath();
      rainctx.moveTo(x, y);
      rainctx.lineTo(x + velocity.x * 2.5, y + velocity.y * 2.5);
      rainctx.strokeStyle = "#ffffff";
      rainctx.lineWidth = 0.9;
      rainctx.stroke();
    }

    animate() {
      if (this.y > rainCanvas.height) {
        this.x = randomBetween(0, rainCanvas.width);
        this.y = -30;
      }
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      this.draw();
    }
  }

  function init() {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;

    total = Math.floor((rainCanvas.width * rainCanvas.height) / 15000);
    rains = [];

    for (let i = 0; i < total; i++) {
      const x = randomBetween(0, rainCanvas.width);
      const y = randomBetween(0, rainCanvas.height);
      const velocity = {
        x: randomBetween(-1, 1),
        y: rainSpeed, // 초기 속도
      };
      rains.push(new Rain(x, y, velocity));
    }
  }

  function render() {
    rainctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    rains.forEach((rain) => rain.animate());

    if (animationStarted) {
      window.requestAnimationFrame(render);
    }
  }

  window.addEventListener("resize", () => init());

  // 모든 이미지 적용
  const images = document.querySelectorAll("img");
  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      customAlert.style.display = "none";
      alert("비가 내리기 시작합니다.");
      animationStarted = true;
      rainSpeed += 1; // 비의 속도 증가
      rainLineCount += 1.5; // 비 수 증가
      init();
      render();

      // 음악 재생
      const rainAudio = document.querySelector("#rainAudio");
      rainAudio.playbackRate = 1.3 + (rainSpeed - 1) * 0.5; // 비 속도 음악 속도 비례
      rainAudio.volume = 0.7;
      rainAudio.play();

      const mp3Files = [
        "mu/error_1.mp3",
        "mu/error_2.mp3",
        "mu/error_3.mp3",
        "mu/error_4.mp3",
        "mu/error_5.mp3",
        "mu/error_6.mp3",
        "mu/error_7.mp3",
        "mu/error_8.mp3",
        "mu/error_9.mp3",
        "mu/error_10.mp3",
        "mu/error_11.mp3",
        "mu/error_12.mp3",
        "mu/error_13.mp3",
        "mu/error_14.mp3",
      ];

      function getRandomMP3() {
        const randomIndex = Math.floor(Math.random() * mp3Files.length);
        return mp3Files[randomIndex];
      }

      const errorAudio = new Audio(getRandomMP3());

      function playErrorAudio() {
        errorAudio.src = getRandomMP3(); // 새로운 랜덤 mp3 파일 선택
        errorAudio.play();
      }

      const interval = 50000 / rainSpeed; // rainSpeed에 따라 재생 간격 계산
      setInterval(playErrorAudio, interval);
    });
  });

  init();
})();
