import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
    
      <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        ….
      </ScrollView>

    </PaperProvider>

  );
}

