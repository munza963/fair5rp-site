
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let circles = Array.from({length: 20}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 80 + Math.random() * 40,
  dx: 0.5 - Math.random(),
  dy: 0.5 - Math.random()
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let c of circles) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 150, 255, 0.1)';
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;
    if (c.x < 0 || c.x > canvas.width) c.dx *= -1;
    if (c.y < 0 || c.y > canvas.height) c.dy *= -1;
  }
  requestAnimationFrame(draw);
}
draw();
