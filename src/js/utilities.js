export function randomBackground(data) {
  const backgrounds = [];
  for (const key in data) {
    backgrounds.push(data[key].image);
  }
  return getRandomElement(backgrounds);
}

export function replacePause(data, allButtons) {
  allButtons.forEach((button) => {
    const dataSet = button.getAttribute('data-info');
    const icon = button.querySelector('.icon');
    icon.style.backgroundImage = `url('${data[dataSet].icon}')`;
  });
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
