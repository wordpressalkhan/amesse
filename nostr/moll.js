import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text numberOfLines={2}>
        This is an example of a very long text that should be limited to a certain number of lines.
      </Text>
    </View>
  );
};

export default App;
