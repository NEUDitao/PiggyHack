import React, {Component} from 'react';
import {ActivityIndicator, View, Image, Text, StyleSheet} from 'react-native';

export default class WaitingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
        this.props.rideType = this.props.navigation.getParam('rideType', 'regular');
        //console.log(this.props.rideType);
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        fetch(
            'http://api.giphy.com/v1/gifs/random?api_key=a6bCD3e4s1e21cWBnCTi1gjsLd3wjXZs&tag=piggyback',
            {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                let images = responseJson.data.images;
                this.setState({
                    isLoading: false,
                    gif_url: images.fixed_width_downsampled.url
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
        let ride = this.props.navigation.getParam('rideType', 'regular');
        setTimeout(() => {
            console.log(ride);

            return fetch('http://c76e6b1f.ngrok.io/msg',{
                method: 'POST',
                body: ride
            }) .then(()=>{
                navigate("StarsPigs");
            }).catch((error) => {
                console.error(error)});
        }, 9000)
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <Text style={styles.headingText}>...</Text>
                </View>
            )
        }

        return (
            <View
                style={{flex: 1, paddingTop: 20, alignItems: "center", backgroundColor: '#8C8C8C'}}>
                <Image source={{uri: this.state.gif_url}} style={{height: "50%", width: "50%"}}/>
                <Text style={styles.headingText}>Your ride will arrive shortly!</Text>
                <Text style={styles.subText}>#Piggyback</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create(

    {
        headingText: {
            color: "#FFFFFF",
            fontSize: 36,
            textAlign: 'center',
            fontWeight: 'bold'
        },
        subText: {
            fontSize: 24,
            textAlign: "center",
            fontWeight: 'bold',
            color: "#FFFFFF",
            marginTop: 10
        }
    });

