import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PaperProvider, Button, Portal, Dialog, Paragraph } from 'react-native-paper';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const addToCount = () => {
    setCount(count + 1);
    hideDialog();
  };

  return (
    <PaperProvider>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          padding: 24,
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Text style={{ fontSize: 18, color: '#555' }}>Current Count</Text>
          <Text
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#3f51b5',
              marginTop: 10,
            }}
          >
            {count}
          </Text>
        </View>

        <Button mode="contained" onPress={showDialog}>
          Add 1 to Count
        </Button>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Confirm</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Are you sure you want to add 1?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={addToCount}>Yes</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </PaperProvider>
  );
}
