import { PAUSE } from './data';
import { data } from './data';
import { randomBackground, replacePause } from './utilities';
import '../css/index.scss';

const body = document.getElementById('body');
const bg: HTMLInputElement = body.querySelector('.bg');
const volumeControl: HTMLInputElement = body.querySelector('.volume');
const catalog: HTMLElement = body.querySelector('.catalog');
const sound = new Audio();

bg.style.backgroundImage = `url('${randomBackground(data)}')`;
sound.volume = sound.volume = Number(volumeControl.value);

for (const item in data) {
  const dataItem = data[item];

  const catalogItem = document.createElement('li');
  const catalogButton = document.createElement('button');
  const iconButton = document.createElement('i');

  catalogButton.classList.add('btn');
  catalogButton.dataset.info = item;
  catalogButton.style.backgroundImage = `url('${dataItem.image}')`;

  iconButton.classList.add('icon');
  iconButton.style.backgroundImage = `url('${dataItem.icon}')`;

  catalog.append(catalogItem);
  catalogItem.append(catalogButton);
  catalogButton.append(iconButton);
}

const allButtons: NodeListOf<HTMLButtonElement> =
  catalog.querySelectorAll('.btn');

volumeControl.addEventListener('input', function () {
  sound.volume = Number(volumeControl.value);
});

document.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.closest('.btn')) {
    const button = target.closest('.btn');
    const icon: HTMLInputElement = button.querySelector('.icon');
    const dataSet = button.getAttribute('data-info');
    bg.style.backgroundImage = `url('${data[dataSet].image}')`;
    sound.src = `${data[dataSet].sound}`;

    if (data[dataSet].play === false) {
      sound.play();
      replacePause(data, allButtons);
      for (const item in data) {
        data[item].play = false;
      }
      data[dataSet].play = true;
      icon.style.backgroundImage = `url('${PAUSE}')`;
    } else {
      sound.pause();
      data[dataSet].play = false;
      icon.style.backgroundImage = `url('${data[dataSet].icon}')`;
    }
  }
});
