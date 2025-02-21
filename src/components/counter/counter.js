import './counter.css';

export const createCounter = (gameName) => {
  const storedPoints = localStorage.getItem(`points_${gameName}`) || '0';
  let points = parseInt(storedPoints, 10);

  const counterContainer = document.createElement('div');
  counterContainer.className = 'counter-container';

  const pointsLabel = document.createElement('div');
  pointsLabel.className = 'points-label';
  pointsLabel.textContent = `Puntos:  ${points}`;

  counterContainer.append(pointsLabel);
  return counterContainer;
};

export const updateCounter = (gameName, newPoints) => {
  localStorage.setItem(`points_${gameName}`, newPoints);
  const pointsLabel = document.querySelector('.points-label');
  if (pointsLabel) {
    pointsLabel.textContent = `Puntos:  ${newPoints}`;
  }
};

export const resetCounter = (gameName) => {
  console.log(gameName);
  localStorage.setItem(`points_${gameName}`, 0);
  updateCounter(gameName, 0);
};
