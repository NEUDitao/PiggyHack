import React, {Component} from 'react';
import Stars from 'react-native-stars';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default class StarsPigs extends Component {
  render() {
    return (
      <View style={styles.container}>
            <RatePage title='Rate your ride!'/>
      </View>
    );
  }
}


class RatePage extends Component<Props>{
    render(){
	return(
	        <View>
		<Text style ={styles.titleRatingText}>
		<Text> {this.props.title} : </Text>
		</Text>

		<RateCategory title='Socialness' />
		<RateCategory title='Bumpiness' />
		<RateCategory title='Sweatiness'/>
		<RateCategory title='Smelliness'/>

		<TextInput
                  style={styles.piggyFeedback}
                  placeholder="enter your piggy feedback here"
                  onChangeText={(text) => this.setState({text})}
                />
		</View>
	);
    }
}


class RateCategory extends Component<Props>{
    render(){
	return(
		<View style={styles.ratingComponent}>
		
	        <Text style={styles.ratingCategoryText}>
		    <Text> {this.props.title} : </Text>
		</Text>
		
		<Stars
	          half={true}
	          default={2.5}
	          update={(val)=>{this.setState({stars: val})}}
	          spacing={4}
	          starSize={40}
	          count={5}
	          fullStar={require('./assets/starFilled.png')}
	          emptyStar={require('./assets/starEmpty.png')}
	          halfStar={require('./assets/starHalf.png')} />
	        </View>
	);
    }
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
      backgroundColor: '#8C8C8C',
    alignItems: 'center',
    justifyContent: 'center',
  },
    myStarStyle: {
    /*color: 'lightpink',
    backgroundColor: 'transparent', */
    backgroundColor: "#FFFFFF",
        color: '#FFFFFF',
    textShadowColor: 'lightpink',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
      backgroundColor: "#ffffff"
  },
  titleRatingText: {
      fontSize: 30,
      fontWeight: 'bold',
      //color: 'lightpink',
      color: '#ffffff',
      textAlign: 'center',
      paddingTop: 10,
  },
  ratingCategoryText: {
      //color: 'lightpink',
      color: "#ffffff",
      fontSize: 20,
      fontStyle: 'italic',
      textAlign: 'left',
  },
  piggyFeedback: {
      fontSize: 20,
      paddingBottom: 10,
  },

  ratingComponent: {
      //backgroundColor:'white',
      backgroundColor: '#8C8C8C',
      flex:1,
      padding: 3,
  },
});

