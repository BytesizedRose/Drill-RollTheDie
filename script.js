const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
const d7 = document.getElementById('d7');
const d8 = document.getElementById('d8');
const d9 = document.getElementById('d9');

const rollBtn = document.getElementById('roll');

blankDice();

const patterns = {
  1: [d5],
  2: [d1, d9],
  3: [d1, d5, d9],
  4: [d1, d3, d7, d9],
  5: [d1, d3, d5, d7, d9],
  6: [d1, d3, d4, d6, d7, d9]
};


rollBtn.addEventListener('click', () => {
  blankDice();
  const n = Math.floor(Math.random() * 6) + 1;
  patterns[n].forEach(dot => dot.style.visibility = 'visible');
});

function blankDice() {
  const total = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
  total.forEach(dot => dot.style.visibility = 'hidden');
}