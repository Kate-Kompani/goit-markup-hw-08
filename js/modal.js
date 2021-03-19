// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// Для первого варианта
// В кнопку открытия - data-modal-open
// В кнопку закрытия - data - modal - clos
// Для всего модального - data-modal

// Для второго варианта
// В кнопу открытия и в кнопку закрытия data-toggle-backdrop-order
// Для всего модального окна data-backdrop-order


// Второй вариант(скрипт применим к нескольким модальным окнам)

const handleBackdrop = name => {
  const backdrop = document.querySelector(`[data-backdrop-${name}]`);
  const buttons = document.querySelectorAll(
    `[data-toggle-backdrop-${name}]`,
  );
  const toggleBackdrop = () =>
    backdrop.classList.toggle('is-hidden');
  buttons.forEach(button =>
    button.addEventListener('click', toggleBackdrop),
  );
};
//order
handleBackdrop('order')