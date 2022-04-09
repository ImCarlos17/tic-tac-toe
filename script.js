const moduleGame = (() => {
  const titleTurn = document.querySelector("#player-turn");
  const spots = document.querySelectorAll(".position");
  const gameBoard = Array.from(spots).map((spot) => spot.textContent);
  let newGameBoard = [...gameBoard];

  const Player = (player, marker) => {
    return { player, marker };
  };

  const player1 = Player("player1", "O");
  const player2 = Player("player2", "X");

  let currentPlayer = player1;

  spots.forEach((spot) => {
    spot.addEventListener("click", startGame);
  });

  function startGame(e) {
    let spot = e.target;
    let position = e.target.dataset.spot;

    renderPlayerTurn(currentPlayer.marker);
    addMarkerToBoard(position, currentPlayer.marker);
    controllerTurn();
    renderMarkerToBoard(spot, currentPlayer.marker);
    chooseWinner(newGameBoard);
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

  const chooseWinner = (board) => {};
})();
