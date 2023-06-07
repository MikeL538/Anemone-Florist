(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open-contact]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close-contact]"),
    modal: document.querySelector("[data-modal-contact]"),
  };

  refs.openModalBtn.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
