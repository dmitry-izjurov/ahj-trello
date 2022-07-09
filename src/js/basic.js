import Inspector from './Inspector';
import { page, buttonResetPage } from './utils';

const trello = new Inspector(page);

if (localStorage.hasOwnProperty('dom')) {
    trello.render();
} else {
    trello.init();
}

buttonResetPage.addEventListener('click', () => {
  trello.clearStorage();
  trello.removePage();
  trello.init();
  trello.renderButtonRemove();
  trello.addCard();
});

trello.renderButtonRemove();
trello.addCard();