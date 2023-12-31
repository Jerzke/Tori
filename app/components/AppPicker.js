import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';


import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({icon, placeholder, items, onSelectItem, selectedItem}) {
   
   const [modalVisible, setModalVisible] = useState(false);
    return (
       

            <GestureHandlerRootView> 
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
        </GestureHandlerRootView>

       
        
       
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,

    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1
    }
})

export default AppPicker;