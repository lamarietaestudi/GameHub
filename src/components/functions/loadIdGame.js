import { initGame } from './initGame';
import { gamesData } from '../../data/gamesData';

export async function loadIdGame(id) {
  try {
    const game = gamesData.find((game) => game.id === id);
    if (!game) {
      console.error('Juego no encontrado.');
      return;
    }
    localStorage.setItem('currentGameId', id);

    const gameModule = await import(
      `../../pages/${game.filename}/${game.filename}.js`
    );
    initGame(game);
    gameModule.initSpecificGame(game);
  } catch (error) {
    console.error('Error al cargar el juego.', error);
  }
}
