import { StyleSheet } from 'react-native';
import { Dimension } from '../../styles/Mixins';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-evenly',
  },
  avatar: {
    borderRadius: 60,
    height: 60,
    marginRight: 12,
    width: 60,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    width: Dimension.width * 0.75,
  },
  date: {
    fontSize: 14,
    color: 'grey',
    position: 'absolute',
    top: 10,
    right: 5,
  },
});

export default styles;
