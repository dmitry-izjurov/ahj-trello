import { body, buttonRemoveBlock, newBlockInit, newBlock } from './utils';

export default class Inspector {
  constructor(page) {
    this.page = page;
    this.buttonRemove = undefined;
    this.draggedElem = null;
    this.ghostElem = null;
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

  dragElem() {
    const elemsWrapperBlock = Array.from(document.querySelectorAll('.wrapper__block'));
    elemsWrapperBlock.forEach(a => {
      a.addEventListener('mousedown', (e) => {
        e.preventDefault();
        // if (!e.target.closest('.block__text').classList.contains('block__text')) return;
        // console.log(e.target.closest('.block__text'));
        this.draggedElem = e.target.closest('.block__text');
        this.ghostElem = this.draggedElem.cloneNode(true);
        this.ghostElem.classList.add('dragged');
        body.appendChild(this.ghostElem);
        this.ghostElem.style.left = `${e.pageX - this.ghostElem.offsetWidth / 2}px`;
        this.ghostElem.style.top = `${e.pageY - this.ghostElem.offsetHeight / 2}px`;
      });

      a.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!this.draggedElem) return;
        this.ghostElem.style.left = `${e.pageX - this.ghostElem.offsetWidth / 2}px`;
        this.ghostElem.style.top = `${e.pageY - this.ghostElem.offsetHeight / 2}px`;
      });

      a.addEventListener('mouseup', (e) => {
        if (!this.draggedElem) return;
        const closest = document.elementFromPoint(e.clientX, e.clientY);
        e.currentTarget.insertBefore(this.draggedElem, closest);
        body.removeChild(this.ghostElem);
        this.draggedElem = null;
        this.ghostElem = null;
      });
    });
  }
}
