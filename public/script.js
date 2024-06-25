const ws = new WebSocket('ws://localhost:3000');

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

ws.onmessage = event => {
  // Handle incoming messages, e.g., update canvas with the screen data
};

canvas.addEventListener('click', event => {
  const x = event.offsetX;
  const y = event.offsetY;
  ws.send(JSON.stringify({ type: 'click', x, y }));
});

canvas.addEventListener('mousemove', event => {
  if (event.buttons === 1) {
    const x = event.offsetX;
    const y = event.offsetY;
    ws.send(JSON.stringify({ type: 'swipe', x, y }));
  }
});
