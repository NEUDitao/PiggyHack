
import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

export default class App extends Component {

    getGif() {
        let url = 'http://api.giphy.com/v1/gifs/search?q=piggyback&api_key=a6bCD3e4s1e21cWBnCTi1gjsLd3wjXZs';
        fetch(url)
            .then(response => response.json());
    }

    render() { 
        return(
            <Image source={this.getGif} style={{width: 100, height:100}}/>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
