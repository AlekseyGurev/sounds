import { DataType } from './models';

export const PAUSE: string = '../assets/icons/pause.svg';

export const data: DataType = {
  rain: {
    icon: '../assets/icons/cloud-rain.svg',
    image: '../assets/img/rainy-bg.jpg',
    sound: '../assets/sounds/rain.mp3',
    play: false,
  },
  winter: {
    icon: '../assets/icons/cloud-snow.svg',
    image: '../assets/img/winter-bg.jpg',
    sound: '../assets/sounds/winter.mp3',
    play: false,
  },
  sun: {
    icon: '../assets/icons/sun.svg',
    image: '../assets/img/summer-bg.jpg',
    sound: '../assets/sounds/summer.mp3',
    play: false,
  },
};
