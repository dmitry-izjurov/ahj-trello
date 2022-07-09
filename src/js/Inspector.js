import { body, buttonRemoveBlock, newBlockInit, newBlock } from './utils';

export default class Inspector {
  constructor(page) {
    this.page = page;
    this.buttonRemove = undefined;
  }

  init() {
    localStorage.setItem('dom', JSON.stringify(this.page));
    body.insertAdjacentHTML('afterbegin', this.page);
  }

  render() {
    body.insertAdjacentHTML('afterbegin', JSON.parse(localStorage.getItem('dom')));
  }

  clearStorage() {
    localStorage.clear();
  }

  removePage() {
    document.querySelector('.wrapper').remove();
  }

  renderButtonRemove() {
        body.addEventListener('mouseover', (e) => {
          if (e.target.closest('.block__text')) {
            if (!e.target.closest('.block__text').querySelector('.wrapper__button-remove')) {
              if (this.buttonRemove) {
                this.buttonRemove.remove();
                this.buttonRemove = undefined;
              }
              e.target.closest('.block__text').insertAdjacentHTML('afterbegin', buttonRemoveBlock);
              this.buttonRemove = e.target.closest('.block__text').querySelector('.wrapper__button-remove');
            }
          }
        });

    body.addEventListener('mouseover', (e) => {
      if (Array.from(document.querySelectorAll('.wrapper__block')).find(a => a === e.target)) {
        if (this.buttonRemove) {
          this.buttonRemove.remove();
          this.buttonRemove = undefined;
        }
      }
    });

    body.addEventListener('click', (e) => {
      if (e.target.closest('.wrapper__button-remove')) {
        e.target.closest('.block__text').remove();
        const wrapper = document.querySelector('.wrapper');
        this.saveDOM(wrapper.outerHTML);
      }

      if (e.target.closest('.icon-pr')) {
        e.target.closest('.block__text_init').remove();
        const cardsAdd = Array.from(document.querySelectorAll('.card-add'));
        cardsAdd.forEach(a => {
          if (a.classList.contains('hidden')) {
            a.classList.remove('hidden');
          }
        });
      }
    });
  }

  saveDOM(page) {
    localStorage.setItem('dom', JSON.stringify(page));
  }

  addCard() {
    const cardsAdd = Array.from(document.querySelectorAll('.card-add'));
    cardsAdd.forEach(a => {
      a.addEventListener('click', () => {
        cardsAdd.forEach(a => {
          if (a.classList.contains('hidden')) {
            a.classList.remove('hidden');
            document.querySelector('.block__text_init').remove();
          }
        });
        a.classList.add('hidden');
        a.insertAdjacentHTML('afterend', newBlockInit);
      });
    });

    body.addEventListener('click', (e) => {
      const elemSpanHidden = cardsAdd.find(a => a.classList.contains('hidden'));
      if (e.target.closest('.button__text-add') && elemSpanHidden) {
        const newBlockText = newBlock(document.querySelector('textarea').value);
        elemSpanHidden.insertAdjacentHTML('beforebegin', newBlockText);
        document.querySelector('.block__text_init').remove();
        elemSpanHidden.classList.remove('hidden');
        const wrapper = document.querySelector('.wrapper');
        this.saveDOM(wrapper.outerHTML);
      }
    });
  }
}
