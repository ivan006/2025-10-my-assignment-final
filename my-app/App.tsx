import * as React from 'react';
import { ScrollView } from 'react-native';
import { PaperProvider, Button, Portal, Dialog, Paragraph } from 'react-native-paper';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 16 }}>
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
              <Button onPress={hideDialog}>Yes</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </PaperProvider>
  );
}
