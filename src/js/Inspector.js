import {
  body, buttonRemoveBlock, newBlockInit, newBlock,
} from './utils';

export default class Inspector {
  constructor(page) {
    this.page = page;
    this.buttonRemove = undefined;
    this.draggedElem = null;
    this.ghostElem = null;
    this.draggedElemBlockText = null;
    this.elemRendered = false;
    this.previousElem = null;
    this.newElem = null;
  }

  init() {
    localStorage.setItem('dom', JSON.stringify(this.page));
    body.insertAdjacentHTML('afterbegin', this.page);
  }

  render() {
    console.log(this.draggedElem);
    body.insertAdjacentHTML('afterbegin', JSON.parse(localStorage.getItem('dom')));
  }

  clearStorage() {
    console.log(this.draggedElem);
    localStorage.clear();
  }

  removePage() {
    console.log(this.draggedElem);
    document.querySelector('.wrapper').remove();
  }

  renderButtonRemove() {
    body.addEventListener('mouseover', (e) => {
      if (e.target.closest('.block__text') && !e.target.closest('.block__text').querySelector('.wrapper__button-remove')) {
        if (this.buttonRemove) {
          this.buttonRemove.remove();
          this.buttonRemove = undefined;
        }
        e.target.closest('.block__text').insertAdjacentHTML('afterbegin', buttonRemoveBlock);
        this.buttonRemove = e.target.closest('.block__text').querySelector('.wrapper__button-remove');
      }

      if (Array.from(document.querySelectorAll('.wrapper__block')).find((a) => a === e.target)) {
        if (this.buttonRemove) {
          this.buttonRemove.remove();
          this.buttonRemove = undefined;
        }
      }
    });

    body.addEventListener('click', (e) => {
      if (e.target.closest('.wrapper__button-remove')) {
        e.target.closest('.wrapper__box-text').remove();
        const wrapper = document.querySelector('.wrapper');
        this.saveDOM(wrapper.outerHTML);
      }

      if (e.target.closest('.icon-pr')) {
        e.target.closest('.block__text_init').remove();
        const cardsAdd = Array.from(document.querySelectorAll('.card-add'));
        cardsAdd.forEach((a) => {
          if (a.classList.contains('hidden')) {
            a.classList.remove('hidden');
          }
        });
      }
    });
  }

  saveDOM(page) {
    console.log(this.draggedElem);
    localStorage.setItem('dom', JSON.stringify(page));
  }

  addCard() {
    const cardsAdd = Array.from(document.querySelectorAll('.card-add'));
    cardsAdd.forEach((a) => {
      a.addEventListener('click', () => {
        cardsAdd.forEach((arg) => {
          if (arg.classList.contains('hidden')) {
            arg.classList.remove('hidden');
            document.querySelector('.block__text_init').remove();
          }
        });
        a.classList.add('hidden');
        a.insertAdjacentHTML('afterend', newBlockInit);
      });
    });

    body.addEventListener('click', (e) => {
      const elemSpanHidden = cardsAdd.find((a) => a.classList.contains('hidden'));
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

  dragElem() {
    const elemsWrapperBlock = Array.from(document.querySelectorAll('.wrapper__block'));
    elemsWrapperBlock.forEach((a) => {
      a.addEventListener('mousedown', (e) => {
        if (e.target.closest('.wrapper__button-remove')) return;
        if (e.target.closest('.block__text')) {
          e.preventDefault();
          this.draggedElem = e.target.closest('.wrapper__box-text');
          e.target.closest('.wrapper__box-text').classList.add('drag');
          this.ghostElem = this.draggedElem.cloneNode(true);
          this.ghostElem.classList.add('dragged');
          body.appendChild(this.ghostElem);
          this.ghostElem.style.left = `${e.pageX - this.ghostElem.offsetWidth / 2}px`;
          this.ghostElem.style.top = `${e.pageY - this.ghostElem.offsetHeight / 2}px`;
          this.draggedElemBlockText = e.target.closest('.block__text');
          this.draggedElemBlockText.classList.add('ghost');
          this.previousElem = e.target.closest('.wrapper__box-text').previousElementSibling;
          if (this.previousElem) this.previousElem.classList.add('drag');
        }
      });

      a.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!this.draggedElem) return;
        this.ghostElem.style.left = `${e.pageX - this.ghostElem.offsetWidth / 2}px`;
        this.ghostElem.style.top = `${e.pageY - this.ghostElem.offsetHeight / 2}px`;

        if (e.target.closest('.wrapper__box-text') === null) return;
        if (this.elemRendered && this.draggedElem === e.target.closest('.wrapper__box-text')) {
          this.newElem.remove();
        }

        if (!this.elemRendered && !e.target.closest('.wrapper__box-text').classList.contains('drag')) {
          e.target.closest('.wrapper__box-text').insertAdjacentHTML('afterend', this.draggedElem.outerHTML);
          this.newElem = e.target.closest('.wrapper__box-text').nextElementSibling;
          this.elemRendered = true;
        }

        if (this.elemRendered && this.newElem !== e.target.closest('.wrapper__box-text')
          && !e.target.closest('.wrapper__box-text').classList.contains('drag')) {
          this.newElem.remove();
          e.target.closest('.wrapper__box-text').insertAdjacentHTML('afterend', this.draggedElem.outerHTML);
          this.newElem = e.target.closest('.wrapper__box-text').nextElementSibling;
        }
      });

      a.addEventListener('mouseup', (e) => {
        if (!this.draggedElem) return;
        if (this.draggedElem !== e.target.closest('.wrapper__box-text') && this.elemRendered) this.draggedElem.remove();
        if (this.newElem) this.newElem.classList.remove('ghost');
        body.removeChild(this.ghostElem);
        this.draggedElem = null;
        this.ghostElem = null;
        this.draggedElemBlockText = null;
        this.elemRendered = false;
        this.previousElem = null;
        this.newElem = null;
        Array.from(document.querySelectorAll('.wrapper__box-text')).forEach((arg) => {
          if (arg.classList.contains('drag')) arg.classList.remove('drag');
        });
        Array.from(document.querySelectorAll('.block__text')).forEach((arg) => {
          if (arg.classList.contains('ghost')) arg.classList.remove('ghost');
        });
        const wrapper = document.querySelector('.wrapper');
        this.saveDOM(wrapper.outerHTML);
      });
    });
  }
}
