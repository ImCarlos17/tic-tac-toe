const moduleGame = (() => {
  const titleTurn = document.querySelector("#player-turn");
  const spots = document.querySelectorAll(".position");
  const btnRestart = document.querySelector(".btn-restart");
  const gameBoard = Array.from(spots).map((spot) => spot.textContent);
  let newGameBoard = [...gameBoard];

  btnRestart.addEventListener("click", resetGame);

  const gameOver = () => {
    let _isGameOver = false;
    const get = () => _isGameOver;
    const set = (value) => {
      _isGameOver = value;
    };

    return {
      get,
      set,
    };
  };

  const newGameOver = gameOver();

  const Player = (player, marker) => {
    return { player, marker };
  };

  const player1 = Player("player1", "O");
  const player2 = Player("player2", "X");

  let currentPlayer = player1;

  spots.forEach((spot) => {
    spot.addEventListener("click", startGame);
  });

  titleTurn.textContent = `Player ${currentPlayer.marker}'s turn`;

  function startGame(e) {
    let spot = e.target;
    let position = e.target.dataset.spot;

    if (!spot.textContent && !newGameOver.get()) {
      addMarkerToBoard(position, currentPlayer.marker);
      renderMarkerToBoard(spot, currentPlayer.marker);
      conditionsToWinPlayer(newGameBoard, currentPlayer.marker);
      controllerTurn();
      if (!newGameOver.get()) {
        renderPlayerTurn(currentPlayer.marker);
      }
    }
  }

  const renderPlayerTurn = (currentPlayer) => {
    titleTurn.textContent = `Player ${currentPlayer}'s turn`;
  };

  const addMarkerToBoard = (position, playerMarker) => {
    newGameBoard[position] = playerMarker;
  };

  const renderMarkerToBoard = (spot, marker) => (spot.textContent = marker);

  const controllerTurn = () => {
    currentPlayer == player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  };

  const renderPlayerWinner = (playerMarker) => {
    titleTurn.textContent = `Player ${playerMarker}'s Win`;
  };

  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const conditionsToWinPlayer = (board, playerMarker) => {
    const arePlaysAvailable = board.some((spot) => spot === "");

    if (arePlaysAvailable) {
      conditions.forEach((condition) => {
        if (condition.every((position) => board[position] === playerMarker)) {
          renderPlayerWinner(playerMarker);
          newGameOver.set(true);
        }
      });
    } else {
      renderPlayerWinner("draw");
      newGameOver.set(true);
    }
  };

  function resetGame() {
    newGameBoard = gameBoard;
    spots.forEach((spot) => (spot.textContent = ""));
    newGameOver.set(false);
  }
})();
