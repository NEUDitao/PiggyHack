import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Constants, MapView, Location, Permissions} from 'expo';
import AutoComplete from "./AutoComplete";
import MapPiece from "./MapPiece";

export default class Map extends Component {
    static navigationOptions = {title: 'Welcome', header: null};

    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
                <MapPiece style={styles.MapPortion}/>
                <TouchableOpacity style={styles.searchContainer}
                                  onPress={() => navigate('AutoComplete')}>
                    <Text style={styles.searchBar}>
                        Set your destination
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        searchContainer: {
            position: 'absolute',
            top: 40,
            height: 42,
            left: 10,
            right: 10,
            backgroundColor: "#FFFFFF",
            borderRadius:5,
            shadowColor: "#000000",
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 4,
        },
        searchBar: {
            position: 'relative',
            textAlign: "center",
            fontSize: 18,
            color: "#999999",
            flex: 1,
            lineHeight:42
        },
        MapPortion: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    });
