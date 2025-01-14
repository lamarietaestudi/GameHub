import './header.css';

export const createHeader = () => {
  const headerContainer = document.createElement('header');
  const headerContent = document.createElement('div');
  const headerInfo = document.createElement('h1');

  headerContainer.classList.add('header-container');
  headerContent.classList.add('header-content');
  headerInfo.classList.add('header-info');

  headerInfo.textContent = 'Game Hub';

  headerContent.append(headerInfo);
  headerContainer.append(headerContent);
  document.body.append(headerContainer);
};
