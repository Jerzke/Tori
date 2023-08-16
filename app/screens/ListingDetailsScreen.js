import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
       <View>
        <Image style={styles.image} source={require('../assets/jacket.jpg')}/>

        <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Jacket For Sale</AppText>
        <AppText style={styles.price}>20€</AppText>
        <View style= {styles.userContainer}>
        <ListItem
        image={require("../assets/Placeholder.jpg")}
        title="Place holder person"
        subTitle="5 listings"
        />
        </View>
        
        </View>

        
       </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer:{
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
    },
    price:{
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 12,
    },
    userContainer:{
        marginVertical: 40,

    }
})

export default ListingDetailsScreen;