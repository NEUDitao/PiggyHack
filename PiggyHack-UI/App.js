import {
    createStackNavigator,
} from 'react-navigation';
import Map from "./Map";
import StarsPigs from "./StarsPigs";
import RideOptions from "./RideOption";
import WaitingScreen from "./WaitingScreen";

const App = createStackNavigator({
                                     Map: { screen: Map },
                                     StarsPigs: { screen: StarsPigs},
                                    RideOptions: {screen: RideOptions},
                                    WaitingScreen:{screen: WaitingScreen}
                                 });

export default App;