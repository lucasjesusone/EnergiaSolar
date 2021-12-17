import React from 'react';
import { Text, View, Button} from 'react-native';



export default function ProjectScreen() {
    return (
    <>    
      <View style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Text><Button
          title="Novo Pre-Projeto"
          onPress={() => Alert.alert('Simple Button pressed')}
        /></Text>
      </View>
    </>
    );
  }