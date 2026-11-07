// ===================== LOGIKA POPUP TEAM =====================
const teamModal = document.getElementById('teamModal');
const closeModalBtn = document.getElementById('closeModal');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');

const detailButtons = document.querySelectorAll('.btn-detail');

const openModal = (button) => {
  const name = button.getAttribute('data-name');
  const role = button.getAttribute('data-role');
  const desc = button.getAttribute('data-desc');
  const tagsString = button.getAttribute('data-tags');
  
  modalName.textContent = name;
  modalRole.textContent = role;
  modalDesc.textContent = desc;
  
  modalTags.innerHTML = '';
  const tagsArray = tagsString.split(',');
  tagsArray.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'contrib-tag';
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  teamModal.classList.add('active');
  document.body.style.overflow = 'hidden'; 
};

const closeModal = () => {
  teamModal.classList.remove('active');
  document.body.style.overflow = '';
};

detailButtons.forEach(button => {
  button.addEventListener('click', () => openModal(button));
});

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

if (teamModal) {
  teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && teamModal.classList.contains('active')) {
    closeModal();
  }
});