import './footer.css';

export const createFooter = () => {
  const footerContainer = document.createElement('footer');
  const footerContent = document.createElement('div');
  const footerInfo = document.createElement('p');

  footerContainer.classList.add('footer-container');
  footerContent.classList.add('footer-content');
  footerInfo.classList.add('footer-info');

  footerInfo.textContent = '[ Game Hub ]';

  footerContent.append(footerInfo);
  footerContainer.append(footerContent);
  document.body.append(footerContainer);
};
