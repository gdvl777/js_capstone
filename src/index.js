import './styles.css';
import mylogo from './images/VegetarianRestauratLogo.png';
import getItems from './modules/getItems.js';

document.querySelector('#logo').src = mylogo;

window.addEventListener('load', () => {
  getItems();
});
