import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const panelRef = document.querySelector('#panel');
const btnStartRef = document.querySelector('[data-action="start"]');
let intervalId = null;

panelRef.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor(e) {
    if (e.target.dataset.action === 'start') {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length-1)]
        }, 1000)
        e.target.disabled = true;
    }

    if (e.target.dataset.action === 'stop') {
        clearInterval(intervalId);
        btnStartRef.disabled = false;
    }

}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

