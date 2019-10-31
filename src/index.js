import shoppingList from './scripts/shopping-list';
import $ from 'jquery';
import '../styles/index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
