<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Bitcoin Gummy</title>
  <style>
    body { text-align:center; font-family:sans-serif; }
    .coin {
      width:50px;
      height:50px;
      display:inline-block;
      margin:5px;
      cursor:pointer;
      border-radius:50%;
    }
    #game { margin-top:20px; }
  </style>
</head>
<body>
  <h1>Bitcoin Gummy</h1>
  <p>Score: <span id="score">0</span></p>
  <div id="game"></div>

  <script>
    let score = 0;
    const scoreEl = document.getElementById('score');
    const game = document.getElementById('game');

    const colors = ['red', 'yellow', 'blue'];

    function startLevel(level = 0) {
      game.innerHTML = '';
      const color = colors[level % colors.length];
      const coinsCount = 5 + level * 2; // монеты увеличиваются с каждым уровнем
      for (let i = 0; i < coinsCount; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.backgroundColor = color;
        coin.onclick = () => {
          score++;
          scoreEl.textContent = score;
          coin.remove();
          if (game.children.length === 0) {
            startLevel(level + 1);
          }
        };
        game.appendChild(coin);
      }
    }

    startLevel(); // запуск игры
  </script>
</body>
</html>
