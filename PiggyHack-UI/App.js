import {
    createStackNavigator,
} from 'react-navigation';
import Map from "./Map";
import StarsPigs from "./StarsPigs";
import RideOptions from "./RideOption";


const App = createStackNavigator({
                                     Map: { screen: Map },
                                     StarsPigs: { screen: StarsPigs},
                                    RideOptions: {screen: RideOptions}
                                 });

export default App;