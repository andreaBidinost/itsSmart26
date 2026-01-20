(function() {
  const container = document.querySelector('.container');
  const macchinaInput = document.getElementById('macchinaInput');
  const temperaturaInput = document.getElementById('temperaturaInput');
  const aggiungiBtn = document.getElementById('aggiungiBtn');

  function formatTemperature(raw) {
    const s = String(raw).trim().replace(',', '.');
    const n = Number(s);
    if (!Number.isFinite(n)) return s; // fallback: text
    return n.toFixed(1);
  }

  function addRegister() {
    const macchina = macchinaInput.value.trim();
    const temperatura = temperaturaInput.value.trim();

    if (!macchina || !temperatura) {
      [macchinaInput, temperaturaInput].forEach(el => {
        if (!el.value.trim()) {
          el.classList.add('input-error');
          setTimeout(() => el.classList.remove('input-error'), 600);
        }
      });
      return;
    }

    const reg = document.createElement('div');
    reg.className = 'register';

    const m = document.createElement('div');
    m.className = 'macchina';
    m.textContent = macchina;

    const t = document.createElement('div');
    t.className = 'temperatura';
    t.textContent = formatTemperature(temperatura);

    reg.appendChild(m);
    reg.appendChild(t);
    container.appendChild(reg);

    macchinaInput.value = '';
    temperaturaInput.value = '';
    macchinaInput.focus();
  }

  aggiungiBtn.addEventListener('click', addRegister);
  [macchinaInput, temperaturaInput].forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addRegister();
    });
  });
})();
