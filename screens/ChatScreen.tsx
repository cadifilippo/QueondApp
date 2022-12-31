import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { View } from '../components/Themed';
import { Dimension } from '../styles/Mixins';

import chatRooms from '../data/ChatRooms';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: Dimension.width,
  },
});
