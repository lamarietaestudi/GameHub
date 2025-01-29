export const gamesData = [
  {
    id: 1,
    name: 'Memory Card',
    instructions:
      'Encuentra todas las parejas de cartas idénticas. Voltea dos cartas por turno e intenta recordar sus posiciones.',
    prizes: 'Ganas 1 punto por cada pareja de cartas que encuentres.',
    image: '../public/assets/memory/memory-card.jpg',
    filename: 'memory' // This must be the folder name and js file name.
  },
  {
    id: 2,
    name: 'Tic Tac Toe',
    instructions:
      '2 JUGADORES. <br> El objetivo es ser el primer jugador en alinear tres símbolos iguales en una fila, columna o diagonal, en turnos alternos. <br> El primer jugador juega con "X", y el segundo jugador con "O".',
    prizes: 'No hay recompensa de puntos para este juego.',
    image: '../public/assets/tictactoe/tictactoe-card.png',
    filename: 'tictactoe' // This must be the folder name and js file name.
  },
  {
    id: 3,
    name: 'Hands War',
    instructions:
      'Elige piedra, papel o tijera. Piedra gana a tijera, tijera gana a papel, y papel gana a piedra.',
    prizes: 'Ganas 1 punto por cada mano vencedora.',
    image: '../public/assets/handswar/handswar-card.png',
    filename: 'handswar' // This must be the folder name and js file name.
  },
  {
    id: 4,
    name: 'Topo Crash',
    instructions:
      'Evita que el topo haga agujeros en tu jardín. Haz clic en él antes de que desaparezca.',
    prizes:
      'Ganas 1 punto cada vez que el topo vuelva a su madriguera. Puedes ganar un máximo de 20 puntos.',
    image: '../public/assets/topocrash/topo-crash.png',
    filename: 'topocrash' // This must be the folder name and js file name.
  }
];
