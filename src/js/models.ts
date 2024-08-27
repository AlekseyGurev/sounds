export interface Data {
  icon: string;
  image: string;
  sound: string;
  play: boolean;
}

export type DataType = { [key: string]: Data };
