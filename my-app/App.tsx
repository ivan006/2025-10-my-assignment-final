import * as React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 16 }}>
        <Button mode="contained" onPress={() => {}}>
          Add 1 to Count
        </Button>
      </ScrollView>
    </PaperProvider>
  );
}
