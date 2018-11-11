import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class IconDefault extends Component {

    render() {        
        return (
            <View style={{width:50, height:50, backgroundColor: 'white'}}>
              <Image source={require('./fly-pig.png')} style={{width:50, height:50}}/> 
              <Text>{this.props.title}</Text>
            </View>
        );
    }
}

class IconPool extends Component {

    render() {        
        return (
            <View style={{width:60, height:60, backgroundColor: 'white'}}>
              <Image source={require('./3-pig.png')} style={{width:50, height:50}}/> 
              <Text>{this.props.title}</Text>
            </View>
        );
    }
}


class IconFly extends Component {

    render() {        
        return (
            <View style={{width:50, height:50, backgroundColor: 'white'}}>
              <Image source={require('./pig.png')} style={{width:50, height:50}}/> 
              <Text>{this.props.title}</Text>
            </View>
        );
    }
}

class RideOption extends Component {

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column',}}>
              <Text>How would you like to be carried? Don't get carried away!</Text>
              <View style={{flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'}}>
                <IconFly title='PigPool'/>
                <IconPool title='No Pig Deal'/>
                <IconDefault title='Flying Pig'/>
              </View>
            </View>
        );
    }

}


export default class Icons extends Component {
    render() {
	return (
	    <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'column',}}>
              <RideOption/>
            </View>
        );
    }
}



// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
