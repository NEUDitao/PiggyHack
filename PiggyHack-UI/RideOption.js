import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';

const ICON_SIZE = 100;

class IconDefault extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback
                style={styles.iconContainer}
                onPress={()=>{
                    navigate('WaitingScreen');
                }}>
                <View>
                    <Image source={require('./assets/pig.png')} style={styles.iconImage}/>
                    <Text style={styles.iconText}>{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

class IconPool extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (

            <TouchableWithoutFeedback
                style={styles.iconContainer}
                onPress={()=>{
                    navigate('WaitingScreen');
                }}>
                <View>
                    <Image source={require('./assets/3-pig.png')} style={styles.iconImage}/>
                    <Text style={styles.iconText}>{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


class IconFly extends Component{
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback
                style={styles.iconContainer}
                onPress={()=>{
                    navigate('WaitingScreen');
                }}>
                <View>
                    <Image source={require('./assets/fly-pig.png')} style={styles.iconImage}/>
                    <Text style={styles.iconText}>{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default class RideOption extends Component {

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={{flex:1, flexDirection: 'column', width: '100%', backgroundColor:'#8C8C8C', textColor: '#FFFFFF'}}>
                <Text style={styles.headingText}>How would you like to be carried?</Text>
                <Text style={styles.headingText}>Don't get carried away!</Text>
                <View style={{flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center', backgroundColor:'#8C8C8C', textColor: '#FFFFFF'}}>
                    <IconDefault title='NoPigDeal' navigation={navigation}/>
                    <IconPool title='PiggyPool' navigation={navigation}/>
                    <IconFly title='FlyingPig' navigation={navigation}/>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create(
    {
        iconContainer: {
            width: 200,
            height: 100,
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginTop: 15
        },
        iconImage: {
            width: 100,
            height: 100
        },

        iconText: {
            color: "#FFFFFF",
            fontSize: 20,
            textAlign: 'center'
        },

        headingText: {color: "#FFFFFF",
            fontSize: 23,
            textAlign: 'center',
            fontWeight: 'bold'}
    });
