function showMessage() {
  document.getElementById("message").classList.remove("hidden");
  launchConfetti();
}

// Confetti effect using canvas
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];

  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 50 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    });

    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d / 10) + 2;
      c.tiltAngle += 0.1;
      c.x += Math.sin(c.tiltAngle) * 2;

      if (c.y > canvas.height) {
        c.y = 0;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  draw();
}
