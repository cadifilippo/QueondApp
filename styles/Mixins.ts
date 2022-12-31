import { Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const Dimension = {
  width: WINDOW_WIDTH,
  height: WINDOW_HEIGHT,
};
