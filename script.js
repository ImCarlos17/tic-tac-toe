const moduleGame = (() => {
  const spots = document.querySelectorAll(".position");

  const gameBoard = [...Array.from(spots)];

  spots.forEach((spot, index) => {
    spot.addEventListener("click", function eventClick(e) {
      playerXturn(e.target, index);
    });
  });

  const playingTurn = () => {};

  const playerXturn = () => {
    target.textContent = "O";
  };

  const playerOturn = () => {
    target.textContent = "O";
  };

  return {};
})();
