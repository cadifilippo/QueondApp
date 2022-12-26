import { StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { View } from '../components/Themed';

import chatRooms from '../data/ChatRooms';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem {...chatRooms[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
