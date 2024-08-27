import { DataType } from './models';

export function randomBackground(data: DataType) {
  const backgrounds = [];
  for (const key in data) {
    backgrounds.push(data[key].image);
  }
  return getRandomElement(backgrounds);
}

export function replacePause(
  data: DataType,
  allButtons: NodeListOf<HTMLButtonElement>
) {
  allButtons.forEach((button) => {
    const dataSet = button.getAttribute('data-info');
    const icon: HTMLElement = button.querySelector('.icon');
    icon.style.backgroundImage = `url('${data[dataSet].icon}')`;
  });
}

function getRandomElement<T>(arr: Array<T>) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
