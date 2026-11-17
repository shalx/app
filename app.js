document.getElementById('year').textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
let timer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showToast(link.dataset.placeholder + ' will be connected next.');
  });
});

document.getElementById('githubLink').addEventListener('click', event => {
  event.preventDefault();
  showToast('GitHub link will be connected when we publish the site.');
});
