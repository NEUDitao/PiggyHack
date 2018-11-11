import {
    createStackNavigator,
} from 'react-navigation';
import Map from "./Map";
import StarsPigs from "./StarsPigs";
import RideOption from "./RideOption";
import WaitingScreen from "./WaitingScreen";
import AutoComplete from "./AutoComplete";

const App = createStackNavigator({
                                     Map: { screen: Map },
                                     StarsPigs: { screen: StarsPigs},
                                    RideOption: {screen: RideOption},
                                    WaitingScreen: {screen: WaitingScreen},
                                    AutoComplete: {screen: AutoComplete},
                                 });

export default App;