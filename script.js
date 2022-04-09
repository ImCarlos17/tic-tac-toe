const moduleGame = (() => {
  const titleTurn = document.querySelector("#player-turn");
  const spots = document.querySelectorAll(".position");
  const gameBoard = Array.from(spots).map((spot) => spot.textContent);
  let newGameBoard = [...gameBoard];

  const Players = (player, marker) => {
    return { player, marker };
  };

  const player1 = Players("player1", "O");
  const player2 = Players("player2", "X");

  let currentPlayer = player1;

  spots.forEach((spot) => {
    spot.addEventListener("click", startGame);
  });

  function startGame(e) {
    let spot = e.target;
    let position = e.target.dataset.spot;

    renderPlayerTurn(currentPlayer.marker);
    controllerTurn();
    addMarkerToBoard(spot, position, currentPlayer.marker);
  }

  const renderPlayerTurn = (currentPlayer) => {
    titleTurn.textContent = `Player ${currentPlayer}'s turn`;
  };

  const controllerTurn = () => {
    currentPlayer == player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  };

  const addMarkerToBoard = (spot, position, playerMarker) => {
    newGameBoard[position] = playerMarker;
    console.log(newGameBoard);
  };
})();
