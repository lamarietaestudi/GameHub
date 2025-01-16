import './counter.css';

if (!localStorage.getItem('points')) {
  localStorage.setItem('points', '0');
}
let points = parseInt(localStorage.getItem('points'), 10);

export const createCounter = () => {
  const counterContainer = document.createElement('div');
  counterContainer.className = 'counter-container';

  const pointsLabel = document.createElement('div');
  pointsLabel.className = 'points-label';
  pointsLabel.textContent = `Puntos: ${points} `;

  const pointsValue = document.createElement('div');
  pointsValue.className = 'points-value';
  pointsValue.textContent = points;

  counterContainer.appendChild(pointsLabel, pointsValue);
  return counterContainer;
};

export const updateCounter = (newPoints) => {
  points = newPoints;
  localStorage.setItem('points', points);
  const pointsLabel = document.querySelector('.points-label');
  if (pointsLabel) {
    pointsLabel.textContent = `Puntos: ${points}`;
    console.log('Updated localStorage:', localStorage.getItem('points'));
  }
};

export const clearCounter = () => {
  points = 0;
  localStorage.setItem('points', points);
  updateCounter(points);
};
