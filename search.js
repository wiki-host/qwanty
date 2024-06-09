const f = document.getElementById('form');
const q = document.getElementById('query');
const qwant = 'https://www.qwant.com/search?q=';
function submitted(event) {
  event.preventDefault();
  const url = qwant + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
