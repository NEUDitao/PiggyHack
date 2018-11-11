import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import AutoComplete from "./AutoComplete";

export default class Map extends Component {
    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                              locationResult: 'Permission to access location was denied',
                          });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        // Center the map on the location we just fetched.
        this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    };

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={{flex: 1}}>

                <MapView
                    style={{flex: 1}}
                    region={this.state.mapRegion}
                />
                <Button
                    title="Go to stars"
                    onPress={() =>
                        navigate('RideOptions', { })
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
                                     container: {
                                         flex: 1,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         paddingTop: Constants.statusBarHeight
                                     },
                                     paragraph: {
                                         margin: 24,
                                         fontSize: 18,
                                         fontWeight: 'bold',
                                         textAlign: 'center',
                                         color: '#34495e',
                                     },
                                 });
